<template>
    <div>
        <video class="video" controls id="record-video" ></video>
    </div>
</template>

<script>

// import axios from 'axios'
import AWS from 'aws-sdk'

export default {
  name: 'RecodeVideo',
  data(){
    return{
        $video  :  null,
        stream : null,
        chunks : [],
        mediaRecorder  : null,
        blob : null, 
        options : {
          audioBitsPerSecond : 128000,
          videoBitsPerSecond : 2500000,
          mimeType : "video/webm" 
        }
    }
  },
  props: {
    state: String
  },
  mounted(){
    this.startup();
  },
  methods: {
    async startup(){
        this.chunks = [];
        this.blob = null
        this.$video = document.getElementById('record-video');
        this.$video.controls = false;
        await this.getMedia(this.$video);
     },
    async getMedia(){ 
      const constraints = { video: true, audio: {echoCancellation: true} };
      try {
        this.stream = await navigator.mediaDevices.getUserMedia(constraints);
        this.$video.srcObject = this.stream;
        this.$video.play();
      } catch(err) {
        console.log(err)
      }
    },
    start(){
      this.mediaRecorder = new MediaRecorder(this.stream,this.options);
      this.mediaRecorder.ondataavailable = (event) => {
        if(event.data && event.data.size > 0){
           this.chunks.push(event.data);
        }
      }
      this.mediaRecorder.onstop =  () => {
        this.blob = new Blob(this.chunks, { 'type' : "video/webm"});
        const objectURL = window.URL.createObjectURL(this.blob);
        this.$video.srcObject = null;
        this.$video.src = null;
        this.$video.src = objectURL;
      }
      this.mediaRecorder.start();
    },

    pause(){
      if(this.mediaRecorder){
        this.mediaRecorder.pause();
      }
    },

    resume(){
      this.mediaRecorder.resume();
    },
    
    stop(){
      if(this.mediaRecorder){
        this.mediaRecorder.stop();
        this.mediaRecorder = null;
        this.$video.controls = true;
      }
    },
     upload(){
      AWS.config.update({
        region: process.env.VUE_APP_BUCKET_REGION,
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID
        })
      });

      const s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {Bucket: process.env.VUE_APP_BUCKET_NAME}
      });

      const fileName = `${new Date().getTime()}.webm`
       s3.upload({
        Key: fileName,
        Body: this.blob,
        ACL: 'public-read'
        }, (err, data) => {
        if (err) {
          console.log(err)
          return alert('There was an error uploading your photo: ', err.message);
        }
        console.log(data)
        const id = data.Key.split('.')[0];
        //this.$router.go('./')
        //여기서 또 통신 lamda로
        this.$router.replace(`watch/${id}`)
        console.log('Successfully uploaded photo.');

      });
    },
  },
  watch: {
    state(nextState,prevState){
      if(nextState === 'ready'){
        this.startup();
      }if(nextState === 'play' && prevState === "pause"){
        this.resume();
      }else if(nextState === 'play'){
        this.start()
      }else if(nextState === 'pause'){
        this.pause()
      }else if(nextState === 'stop'){
        this.stop()
      }else if(nextState === 'upload'){
        this.upload()
      }
    }
  }
}
</script>
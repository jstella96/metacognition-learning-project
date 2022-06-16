<template>
    <div>
        <video class="video" controls  id="record-video" ></video>
    </div>
</template>

<script>

export default {
  name: 'RecodeVideo',
  data(){
    return{
        streaming : false, 
        $video  :  null,
        stream : null,
        chunks : [],
        mediaRecorder  : null,
        mimeType : "video/webm",
        options : {
        audioBitsPerSecond : 128000,
        videoBitsPerSecond : 2500000,
        mimeType : this.mimeType 
        }
    }
  },
  mounted(){
    this.startup();
  },
  methods: {
    async startup(){
        this.$video = document.getElementById('record-video');
        this.stream = await this.getMedia(this.$video);
     },
    async getMedia(){ 
      const constraints = { video: true, audio: {echoCancellation: true} };
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        this.$video.srcObject = stream;
        this.$video.play();
        return stream;
      } catch(err) {
        console.log(err)
      }
    },
    start(){
      this.mediaRecorder = new MediaRecorder(this.stream,this.options);
      this.mediaRecorder.ondataavailable = function(event){
        if(event.data && event.data.size > 0){
           this.chunks.push(event.data);
        }
      }
   
      this.mediaRecorder.onstop = function() {
        const blob = new Blob(this.chunks, { 'type' : "video/webm"});
        const objectURL = window.URL.createObjectURL(blob);
        this.$video.srcObject = null;
        this.$video.src = null;
        this.$video.src = objectURL;
      }
      this.mediaRecorder.start();
    },

    pause(){
      if(!this.mediaRecorder) return;
      console.log('recordPause')
      this.mediaRecorder.pause();
    },

    resume(){
      this.mediaRecorder.resume();
      console.log('recordResume')
    },
    
    stop(){
      if(!this.mediaRecorder) return;
        this.mediaRecorder.stop();
        this.mediaRecorder = null;
        console.log('recoredStop')
    }
  },
}
</script>
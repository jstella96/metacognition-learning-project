<template>
<div id="record">
  <el-row type="flex"   class="header">
    <el-col :span="4" class="logo">
     <router-link to="/" >
        <h2>LOGO</h2>
      </router-link>
     </el-col> 
  </el-row>
  <el-row  type="flex"  justify="center">
    <el-col :span="14" class="left-side">
        <record-video ref="recordVideo" :state="state" @putVideoInfo="putVideoInfo"></record-video>
        <control-bottom v-if="state !== 'stop' && state !== 'upload'" :state="state" @changeState="changeState"></control-bottom>
        <menu-bottom v-else :state="state" @changeState="changeState"  @capture="capture"></menu-bottom>
    </el-col>
    <el-col :span="8" class="right-side">
      <div class= "right-input">
        <input  placeholder="제목을 입력해주세요" v-model="title" />
      </div>
      <md-script :text="desc" @changeDesc="changeDesc"> </md-script> 
    </el-col>
  </el-row>
</div>
</template>
<script>
import ControlBottom from '../components/control-bottom.vue'
import MdScript from '../components/md-script.vue'
import RecordVideo from '../components/recode-video.vue'
import MenuBottom from '../components/menu-bottom.vue'
import AWS from 'aws-sdk'

import axios from 'axios'
export default {
  name: 'Watch',
  components: { 
    "control-bottom": ControlBottom,
    "md-script" : MdScript,
    "record-video":RecordVideo,
    "menu-bottom": MenuBottom
  },
  data(){
    return{
      isControlBottom:true,
      editor:null,
      chunks:[],
      state: 'ready',
      desc: '',
      title:'',
      videoKey: '',
      thumbnailKey: '',
      width: 120,
      height: 70
    }
  },
  mounted(){

  },
  created(){
   
  },
  methods: {
    changeState(nextState){
      this.state = nextState;
    },
    changeDesc(nextDesc){
      this.desc = nextDesc
    },
    async uploadS3(blob,fileName){
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
      const params = {
        Key: fileName,
        Body: blob,
        ACL: 'public-read'
        }
      const stored = await s3.upload(params).promise();
      return stored.key
      
    },
    async getThumbnailKey(){
      try{
        const $canvas = document.getElementById('canvas');
        const blob = await new Promise(resolve => $canvas.toBlob(resolve));
        const fileName = `${new Date().getTime()}.png`
        this.thumbnailKey = await this.uploadS3(blob,fileName);
      }catch(err){
        console.log(err)
      }
    },
    async putVideoInfo(videoKey){       
      await this.getThumbnailKey();
      const { thumbnailKey, desc ,title} = this;
      const createDate = new Date();
      let id = new Date().getTime(); 
      id = String(id)
      const body = {id, desc, videoKey, title,thumbnailKey,createDate};
      await axios.put(`/api/videos`,body);
      this.$router.replace(`watch/${id}`)
    },
    capture(){
      const $canvas = document.getElementById('canvas');
      const $video  = document.getElementById('record-video');
      const context = $canvas.getContext('2d');
      $canvas.width = this.width;
      $canvas.height = this.height;
      context.drawImage($video, 0, 0, this.width, this.height);
    }
  }
}

</script>
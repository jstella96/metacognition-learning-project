<template>
<div id="watch">
  <el-row type="flex"   class="header">
    <el-col :span="4" class="logo">
      <router-link to="/" >
        <h2 >LOGO</h2>
      </router-link>
    </el-col>
    <el-col :span="5" :offset="15" class="header__button">
      <router-link class="rigth" to="/record" ><button class="plus-button"><i class="el-icon-video-camera-solid"></i></button></router-link>
    </el-col>
  </el-row>
  <el-row type="flex"  justify="center">
    <el-col :span="14" class="left-side">
        <basic-video :videoKey="videoKey"></basic-video> 
    </el-col>
    <el-col :span="8"  class="right-side">
      <div class="right-side__header">
      <button @click="changeLeftSide" >{{ isList ? "NOTE" : "LIST" }}</button>
      </div>
      <video-list v-if="isList" :videoList="videoList" @getVideoList="getVideoList"> </video-list> 
      <md-read v-else :desc="desc"></md-read>
    </el-col>
  </el-row>
</div>
</template>
<script>
import { getVideo, getVideos } from '../api/index.js'
import VideoList from '../components/video-list.vue'
import BasicVideo from '../components/basic-video.vue'
import MdRead from '../components/md-read.vue'
export default {
  name: 'Watch',
  components: { 
    "video-list" : VideoList,
    "basic-video":BasicVideo,
    "md-read":MdRead
  },
  data(){
    return{
      isList: true,
      isControlBottom:false,
      videoList:[],
      editor:null,
      chunks:[],
      videoKey: '',
      desc: ``
    }
  },
  mounted(){


  },
  created(){
    this.startup()
    this.getVideoList()
  },
  methods: {
    async startup(){
      try{
        const videoId = this.$route.params.id
        if(videoId){
          const response = await  getVideo(videoId);
          this.videoKey = response.data.Item.videoKey
          this.desc = response.data.Item.desc
          this.isList = false;
        }else{
          this.isList = true;
        }
      }catch(err){
        console.log(err)
      }
    },
    async getVideoList(){
       try{
        const response = await getVideos();
        this.videoList = response.data.Items
      }catch(err){
        console.log(err)
      }
    },
    changeLeftSide(){
      this.isList = !this.isList
    }
  },
}
</script>
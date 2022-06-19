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
      <list v-if="isList"> </list> 
      <md-read v-else :desc="desc"></md-read>
    </el-col>
  </el-row>
</div>
</template>
<script>
import axios from 'axios'
import List from '../components/list.vue'
import BasicVideo from '../components/basic-video.vue'
import MdRead from '../components/md-read.vue'
export default {
  name: 'Watch',
  components: { 
    "list" : List,
    "basic-video":BasicVideo,
    "md-read":MdRead
  },
  data(){
    return{
      isList: false,
      isControlBottom:false,
      editor:null,
      chunks:[],
      videoKey: '1655458839773.webm',
      desc: `# 운영체제 `
    }
  },
  mounted(){


  },
  created(){
    this.startup()
  },
  methods: {
    async startup(){
      try{
        const id = this.$route.params.id
        if(id){
          const response = await axios.get(`/api/videos/${id}`);
          this.videoKey = response.data.Item.videoKey
          this.desc = response.data.Item.desc
        }
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
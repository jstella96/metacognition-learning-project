<template>
<div id="watch">
  <el-row type="flex"  justify="center">
    <el-col :span="3" class="logo">
      <router-link to="/" >
        <h2 >LOGO</h2>
      </router-link>
    </el-col>
    <el-col :span="2" :offset="17">
      <router-link class="rigth" to="/record" ><button class="plus-button"><i class="el-icon-video-camera-solid"></i>만들기</button></router-link>
    </el-col>
  </el-row>
  <el-row type="flex"  justify="center">
    <el-col :span="14" class="left-side">
        <basic-video :videoKey="videoKey"></basic-video>
    </el-col>
    <el-col :span="8">
      <list> </list> 
    </el-col>
  </el-row>
</div>
</template>
<script>
import axios from 'axios'
import List from '../components/list.vue'
import BasicVideo from '../components/basic-video.vue'
export default {
  name: 'Watch',
  components: { 
    "list" : List,
    "basic-video":BasicVideo,
  },
  data(){
    return{
      isControlBottom:false,
      editor:null,
      chunks:[],
      videoKey: '1655458839773.webm'
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

        }
      }catch(err){
        console.log(err)
      }
    }
  },
}
</script>
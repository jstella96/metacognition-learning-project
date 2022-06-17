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
        <basic-video></basic-video>
    </el-col>
    <el-col :span="8">
      <list> </list> 
    </el-col>
  </el-row>
</div>
</template>
<script>

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
      
    }
  },
  mounted(){
    this.startup()

  },
  created(){

  },
  methods: {
    startup(){

    }
  },
}
</script>
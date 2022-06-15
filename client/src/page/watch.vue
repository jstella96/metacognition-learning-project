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
        <record-video></record-video>
    </el-col>
    <el-col :span="8">
      <list> </list> 
    </el-col>
  </el-row>
</div>
</template>
<script>
import List from '../components/list.vue'
import RecordVideo from '../components/recode-video.vue'
export default {
  name: 'Watch',
  components: { 
    "list" : List,
    "record-video":RecordVideo,
  },
  data(){
    return{
      isControlBottom:false,
      editor:null,
      chunks:[],
      
    }
  },
  mounted(){


  },
  created(){
   
  },
  methods: {
    test() {}
  },
}
</script>
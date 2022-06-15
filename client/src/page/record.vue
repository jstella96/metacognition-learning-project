<template>
<div id="watch">
  <router-link to="/" ><i class="el-icon-back setting"></i></router-link>
  <el-row    type="flex"  justify="center">
    <el-col :span="14" class="left-side">
        <record-video></record-video>
        <control-bottom v-if="isControlBottom"></control-bottom>
        <menu-bottom v-else></menu-bottom>
    </el-col>
    <el-col :span="8">
      <md-script> </md-script> 
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16">

    </el-col>m
  </el-row>
</div>
</template>
<script>
import ControlBottom from '../components/control-bottom.vue'
import MdScript from '../components/md-script.vue'
import RecordVideo from '../components/recode-video.vue'
import MenuBottom from '../components/menu-bottom.vue'

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
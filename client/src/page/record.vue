<template>
<div id="record">
  <el-row type="flex"  justify="center">
    <el-col :span="22" class="logo">
     <router-link to="/" >
        <h2>LOGO</h2>
      </router-link>
    </el-col>
  </el-row>
  <el-row  type="flex"  justify="center">
    <el-col :span="14" class="left-side">
        <record-video :state="state" ></record-video>
        <control-bottom v-if="state !== 'stop'" :state="state" @changeState="changeState"></control-bottom>
        <menu-bottom v-else :state="state" @changeState="changeState" ></menu-bottom>
    </el-col>
    <el-col :span="8">
      <md-script> </md-script> 
    </el-col>
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
      isControlBottom:true,
      editor:null,
      chunks:[],
      state: 'ready'
    }
  },
  mounted(){

  },
  created(){
   
  },
  methods: {
    changeState(nextState){
      this.state = nextState;

    }
  },
}
</script>
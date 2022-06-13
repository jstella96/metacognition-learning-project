<template>
<div id="watch">
  <router-link to="/" ><i class="el-icon-back setting"></i></router-link>
  <el-row :gutter="20">
    <el-col :span="16">
        <video class="video" controls  id="video" ></video>
        <el-button class="watch__button" type="info" >녹화시작</el-button>
        <el-button type="info" >녹화종료</el-button>
        <el-button type="info" >저장</el-button>
    </el-col>
    <el-col :span="8">
        <div class="watch__text"></div>
    </el-col>

  </el-row>
  
</div>
</template>
<script>

export default {
  name: 'Watch',
  data(){
    return{
      chunks:[],
      
    }
  },
  mounted(){


  },
  created(){
   
  },
  methods: {

  },
}
</script>
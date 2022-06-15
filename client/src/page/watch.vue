<template>
<div id="watch">
  <router-link to="/" ><i class="el-icon-back setting"></i></router-link>
  <el-row    type="flex"  justify="center">
    <el-col :span="14" class="left-side">
        <video class="video" controls  id="video" ></video>
        <div class="watch__menu">
          <div class="watch__button">
            <div class="watch__play"></div>
          </div>
          <div class="watch__button">
            <div class="watch__pause"></div>
             <div class="watch__pause"></div>
          </div>
  
          <div class="watch__button">
            <div class="watch__stop watch_deactivate"></div>
          </div>
        </div>
    </el-col>
    <el-col :span="8">
        <div class="watch__text"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16">
      
    </el-col>
  </el-row>
</div>
</template>
<script>

export default {
  name: 'Watch',
  data(){
    return{
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
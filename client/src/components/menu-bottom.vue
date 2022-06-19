<template>
    <div class="menu-bottom">
        <el-col :span="16" >
          <div class="thumbnail">
            <el-col :span="8"  class="thumbnail__image" >
                <canvas id="canvas"></canvas>
            </el-col>
            <el-col :span="16" class="thumbnail__left">
                <button @click="captureThumbnail" class="thumbnail__button"><i class="el-icon-magic-stick"></i>썸네일 제작</button>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
        <div class="menu-bottom__button">
            <button @click="changeState('ready')">재촬영</button>
            <button @click="changeState('upload')">저장</button>
        </div>
        </el-col>
    </div>
</template>

<script>

export default {
  name: 'MenuBottom',

  props: {
    state: String
  },
  data(){
    return{
      
    }
  },
  mounted(){
    this.captureThumbnail()
  },
  created(){
   
  },
  methods: {
      captureThumbnail() {
        this.$emit('capture');
      },
      changeState(nextState){
        this.$emit('changeState',nextState);
    },
  },
}
</script>
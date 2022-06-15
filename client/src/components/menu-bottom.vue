<template>
    <div class="menu-bottom">
        <el-col :span="14" >
            <thumbnail></thumbnail>
        </el-col>
        <el-col :span="10">
        <div class="menu-bottom__button">
            <button>다시찍기</button>
            <button>저장</button>
        </div>
        </el-col>
    </div>
</template>

<script>
import Thumbnail from '../components/thumbnail.vue'

export default {
  name: 'MenuBottom',
  components: { 
    "thumbnail":Thumbnail,
  },
  data(){
    return{
      
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
<template>
    <div class="menu-bottom">
        <el-col :span="16" >
            <thumbnail></thumbnail>
        </el-col>
        <el-col :span="8">
        <div class="menu-bottom__button">
            <button>재촬영</button>
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
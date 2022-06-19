<template>
  <div>
    <div class="md-read" v-html="showMd" ></div>
    </div>
</template>

<script>
import { marked } from 'marked';
export default {
  computed:{
    showMd(){
      return marked.parse(this.desc)
    }
  },
  name: 'Mdread',
  props: {
    desc: String
  },
}
</script>
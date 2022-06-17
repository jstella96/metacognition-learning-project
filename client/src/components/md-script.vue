<template>
  <div class="md">
    <button class="md-button" @click="changeMode">
      <i v-if="isPreview"  class="el-icon-edit-outline"></i>
      <i v-else class="el-icon-view"></i>
    </button>
    <div v-if="isPreview" class="md-preview md-text" v-html="mdHtml" ></div>
    <textarea v-else spellcheck="false" placeholder="내용을 입력해주세요" class="md-write md-text" @input="markdown" :value="text"></textarea>
 </div>
</template>

<script>
import { marked } from 'marked';
export default {
  name: 'MdScript',
  data(){
    return{
      mdHtml : '',
      text: '',
      isPreview: false
    }
  },
  // props: {
  //   text: String
  // },
  computed: {
    // convertToMarkdown(){
    //   return marked.parse('# dd')
    // }
  },
  methods: {
    markdown(event){
      this.text = event.target.value;
      this.mdHtml = marked.parse(this.text)

    },
    changeMode(){
      this.isPreview = !this.isPreview;
    }
  },
}
</script>
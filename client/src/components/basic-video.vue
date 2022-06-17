<template>
    <div>
        <video class="video" controls  id="basic-video" ></video>
    </div>
</template>

<script>

export default {
  name: 'BasicVideo',
  data(){
    return{   
      
    }
  },
  mounted(){
    this.startup();
  },
  methods: {
    async startup(){
      this.$video = document.getElementById('basic-video')
      const id = this.$route.params.id
      console.log(id)
      if(id){
        this.$video.src = `https://interview-storage.s3.ap-northeast-2.amazonaws.com/${this.$route.params.id}.webm`
        this.$video.play();
        this.$vide2.load();
        }
     },
  },
}
</script>
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
     },
  },
}
</script>
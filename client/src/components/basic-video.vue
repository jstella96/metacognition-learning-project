<template>
    <div>
        <video class="video" controls :src="getSrc"  id="basic-video" ></video>
    </div>
</template>

<script>
export default {
  name: 'BasicVideo',
  props:{
    videoKey:String
  },
  computed: {
    getSrc(){
      return `${process.env.VUE_APP_BUCKET_POINT}/${this.videoKey}`
    }
  }
}
</script>
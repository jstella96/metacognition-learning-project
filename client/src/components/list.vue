<template>
    <div class="card-list">
        <div class="card" v-for="(video, index) in videoList" :key="index">
            <router-link to="/" >
                <el-col :span="8" >
                <div class="card__thumbnail"></div>
                    <img class="img" :src="getSrc(video.thumbnailKey)" />
                </el-col>
                <el-col :span="16" >
                   <div class="card__title">
                        <h3>{{video.title ?  video.title : '제목 없음'}}</h3>
                   </div>
                    <div class="card__info">
                        <span>{{video.createDate}}</span> | <span>1분28초</span>
                   </div>
                   <button class="delete-button" @click="deleteItem(video.id)"><i class="el-icon-delete"></i></button>
                </el-col>
            </router-link>
        </div>
    </div>
</template>

<script>
import { deleteVideo } from '../api/index.js'
export default {
  computed:{

  },
  name: 'videoList',
  props: {
    videoList: Array
  },
  methods:{
    getSrc(thumbnailKey){
      return `${process.env.VUE_APP_BUCKET_POINT}/${thumbnailKey}`
    },
    async deleteItem(videoId){
      try{
          await deleteVideo(videoId)
          this.$emit("getVideoList")
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
 // counter라는 state 속성을 추가
 state: {
    video: {},
    videoList: []
  },
  getters: {
    getVideoList: function (state) {
      return state.videoList;
    }
  },
  mutations: {
    setVideoList: function (state,videoList) {//, ,
     state.videoList = videoList;
    },
  },
  actions: {
     asyncGetVideoList: (context, payload) => {
        console.log(payload)
        const videoList = [];
        context.commit('setVideoList', videoList);
    }
  }

})
import Vue from 'vue'
import VueRouter from 'vue-router'

import watch from '@/page/watch.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
      {
          path: "/",
          name: "watch",
          component: watch
      }
    ]
  })
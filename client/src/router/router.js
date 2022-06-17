import Vue from 'vue'
import VueRouter from 'vue-router'

import watch from '@/page/watch.vue'
import record from '@/page/record.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
      {
          path: "/",
          name: "home",
          component: watch
      },
      {
        path: "/watch/:id",
        name: "watch",
        component: watch
       },
      {
        path: "/record",
        name: "record",
        component: record
    }
    ]
  })
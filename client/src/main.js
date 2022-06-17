import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss'
import { store } from "./store/index.js";

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')

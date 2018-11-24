import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Mint from 'mint-ui'
Vue.use(Mint)
import store from './assets/js/data.js'
import router from './assets/js/router.js'
import axios from 'axios'
Vue.prototype.$http=axios

import '../node_modules/mint-ui/lib/style.css'
import './assets/css/reset.css'


new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})

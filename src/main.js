import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from '@/router/router'
import VueRouter from 'vue-router'

import "./styles/base.scss"
import "./styles/normalize.scss"

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import "./styles/base.scss"
import "./styles/normalize.scss"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'


import './assets/css/normalize.css'
import './assets/css/common.css'

import './assets/js/flexible.js'

import http from './http'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

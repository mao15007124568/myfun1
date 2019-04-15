import Vue from 'vue'
import App from './App'
import '../static/css/weui.css'

import fly from './utils/request'
Vue.prototype.$fly = fly

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

// wx.cloud.init({
//     traceUser: true
// })
import Vue from 'vue'
import App from './App'

import fly from './utils/request'
Vue.prototype.$fly = fly

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

//调用微信小程序的数据库
wx.cloud.init({
    traceUser: true
})
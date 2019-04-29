import Vue from 'vue'
import App from './App'
import '../static/css/weui.css'
import '../static/weui.css'

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
Vue.prototype.$http = fly

Vue.config.productionTip = false
App.mpType = 'app'

// wx.cloud.init({
//     traceUser: true
// })

const app = new Vue(App)
app.$mount()


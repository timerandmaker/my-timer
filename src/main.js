import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'

//导入格式化时间的插件
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import app from './App.vue'

import router from './router/index.js'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

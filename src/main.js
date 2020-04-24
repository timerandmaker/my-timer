import Vue from 'vue';

import 'mint-ui/lib/style.css';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './assets/mui/css/mui.min.css';

import app from './App.vue'



var vm = new Vue({
  el: '#app',
  render: c => c(app)
})

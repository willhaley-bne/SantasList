// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import WebCam from 'vue-web-cam'
import VueConfetti from 'vue-confetti'
import VueLocalStorage from "vue-localstorage";
import App from './App'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(WebCam);
Vue.use(VueConfetti);
Vue.use(VueLocalStorage, {name: 'ls', bind: true})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

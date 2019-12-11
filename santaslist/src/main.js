// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import WebCam from 'vue-web-cam'
import VueConfetti from 'vue-confetti'
import VueResource from 'vue-resource'
import App from './App'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(WebCam);
Vue.use(VueConfetti);
Vue.use(VueResource);

//Vue.http.headers.common['access-control-allow-origin'] = 'http://localhost:8080'
Vue.http.headers.common['Origin'] = 'https://santaslist.mybne.com'
Vue.http.headers.common['content-type'] = 'application/json'
Vue.http.headers.common['x-apikey'] = '5deacf3f4658275ac9dc23e9'
Vue.http.headers.common['cache-control'] = 'no-cache'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

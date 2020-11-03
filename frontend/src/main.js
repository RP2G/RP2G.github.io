import Vue from 'vue'
import App from './App.vue'
import router from './router';
import "vue-gifplayer/src/gif.css"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// VueYandexMetrika
import VueYandexMetrika from 'vue-yandex-metrika'
Vue.use(VueYandexMetrika, {
  id: 68979829,
  router: router,
  env: process.env.NODE_ENV
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

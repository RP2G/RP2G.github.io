import Vue from 'vue'
import App from './App.vue'
import router from './router';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

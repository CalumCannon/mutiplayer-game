import Vue from 'vue'
import App from './App.vue'
import router from './router'; //NEW

Vue.config.productionTip = false

new Vue({
  router,   // NEW
  render: h => h(App),
}).$mount('#app')

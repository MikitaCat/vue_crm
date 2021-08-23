import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/dateFilter'
import 'materialize-css/dist/js/materialize'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vuelidate)

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

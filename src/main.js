import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import './registerServiceWorker'

Vue.config.productionTip = false

// Vue.use(VueRouter)


Vue.filter('changeToArDigits', (value) => {
  if (!value) return ''
  if (value !== '0') {
    value =  value.toString().replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
  } else {
    value = '0'
  }
  return value
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

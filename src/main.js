import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('changeToArDigits', (value) => {
  if (!value) return ''
  value =  value.toString().replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
  return value
})

new Vue({
  render: h => h(App)
}).$mount('#app')

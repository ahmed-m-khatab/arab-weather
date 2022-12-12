import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import './registerServiceWorker'
import titleMixin from './mixins/titleMixin'

Vue.config.productionTip = false

Vue.mixin(titleMixin)

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

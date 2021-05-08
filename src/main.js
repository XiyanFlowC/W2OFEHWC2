import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data() {
    return {
      appname: '简历投递系统',
      role: null,
    }
  }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import element from './elementui/index'
Vue.use(element)
import './assets/css/reset.css'

// 引入iconfont
import '@/assets/iconfont/iconfont.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
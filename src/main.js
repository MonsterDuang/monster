// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import { Swipe, SwipeItem, MessageBox } from 'mint-ui'
// import Circle from 'iview/src/components/circle/circle.vue'
// import Icon from 'iview/src/components/icon/icon.vue'
import iView from 'iview'
import 'mint-ui/lib/style.css'
import 'iview/dist/styles/iview.css'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.$msg = MessageBox
// Vue.component('i-circle', Circle)
// Vue.component(Icon.name, Icon)
Vue.use(iView)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

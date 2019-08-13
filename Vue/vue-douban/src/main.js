// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalComponents from './common/js/components'
import './common/styles/reset.styl'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(globalComponents)
Vue.use(VueLazyLoad, {
  loading: require('./common/images/loading.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
yarn add vuex axios
yarn add element-ui

main.js

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementuI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false


vue.use(ElementuI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


- vuex 大型化 module 来支持,
  this.$store.user
    - user
      state  info 登录 注册 退出
      actions
      mutation
      vuex先设计,搭好结构 围绕着我们的状态
      token 令牌环 this.$store.user.token
      跳转到登录页面
    - 登录鉴权
      1. 延迟加载路由
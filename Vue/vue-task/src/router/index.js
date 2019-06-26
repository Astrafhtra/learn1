import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Plan from '@/components/Plan'
import setPlan from '@/components/setPlan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/setplan',
      name: 'setPlan',
      component: setPlan
    }
  ]
})

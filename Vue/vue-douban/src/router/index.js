import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/views/Recommend'
import movie from '@/views/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend' 
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path:'/movie/:id',
      name:'movie',
      component: movie
    }
  ],
  mode: 'history'
})

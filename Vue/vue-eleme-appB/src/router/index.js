import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path:'/seller',
      name:'Seller',
      component:Seller
    }
  ]
})

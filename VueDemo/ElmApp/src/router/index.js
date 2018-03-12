import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import GoodView from '../components/goods/Goods.vue'
import SellerView from '../components/seller/Seller.vue'
import RatingsView from '../components/ratings/Ratings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/goods',   /** 通过重定向,可以默认选择模块内部子路由:相当于设置默认选择项*/
      /** 添加模块内部路由勇敢*/
      children:[
        {path: '/seller', component: SellerView},
        {path: '/goods', component: GoodView},
        {path: '/ratings', component: RatingsView}
        ]
    }
  ]
})

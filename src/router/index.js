import Vue from 'vue'
import Router from 'vue-router'  
import Index from '@/components/Index'
import Idle from "@/components/Idle"

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/index',
      name: 'Index2',
      component: Index
    },
    {
    	path:'/idle',
    	name:'Idle',
    	component:Idle
    }
  ]
})

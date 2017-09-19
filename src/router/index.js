import Vue from 'vue'
import Router from 'vue-router'  
import Index from '@/components/Index'
import Idle from "@/components/Idle"
import List from '@/components/List'
import Sig from '@/components/Sign'
import Channelsub from '@/components/Channelsub'
import Reg from '@/components/Reg'
import Car from '@/components/Car'

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
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/channelsub/:pid',
      name: 'Channelsub',
      component: Channelsub
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sig
    },
    {
      path: '/channelsub/:num/:pid/',
      name: 'Channelsub',
      component: Channelsub
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    }
  ]
})

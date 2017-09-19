import Vue from 'vue'
import Router from 'vue-router'  
import Index from '@/components/Index'
import Idle from "@/components/Idle"
import List from '@/components/List'
import Channelsub from '@/components/Channelsub'
import Item from '@/components/Item'

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
      path: '/channelsub/:num/:pid',
      name: 'Channelsub',
      component: Channelsub
    
    },
    {
      path: '/item/:pid',
      name: 'Item',
      component: Item
    }
  ]
})

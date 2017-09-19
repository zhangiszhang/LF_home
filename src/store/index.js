import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex) //需要vue.use

const store =new Vuex.Store({
  		 state :{
  		 	arr:[
		 	{
		 		id:1,
		 		name:"你好不好",
		 		pric:100,
		 		num:1
		 	},
		 	{
		 		id:2,
		 		name:"我好不好",
		 		pric:200,
		 		num:2
		 	},
		 	{
		 		id:3,
		 		name:"他好不好",
		 		pric:300,
		 		num:3
		 	}
  		 	]
  		 },
  		 mutations:{ 
  		 	//增加
  		 	zengpric(state,index){
  		 		state.arr.map((ele,i)=>{
  		 			if(ele.id == index){
  		 				ele.num += 1
  		 			}
  		 		})
  		 	},
  		 	//减少
  		 	jianpric(state,index){
  		 		state.arr.map((ele,i)=>{
  		 			if(ele.id == index){
  		 				if(ele.num >1){
  		 					ele.num -= 1		 					
  		 				}
  		 			}
  		 		})
  		 	},
  		 	//单独删除
  		 	rempric(state,index){
  		 		state.arr.map((ele,i)=>{
  		 			if(ele.id == index){
  		 				 state.arr.splice(i,1)
  		 			}
  		 		})
  		 	},
  		 	//全部删除
  		 	borempric(state){
  		 		state.arr = []
  		 	}
  		 },
  		 actions:{
  		 	
  		 }
})

export default store
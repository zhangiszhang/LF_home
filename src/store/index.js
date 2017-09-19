import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex) //需要vue.use

const store =new Vuex.Store({
  		 state :{
  		 	arr:[			   ]
  		 },
  		 mutations:{ 
			   getData(state,obj){
				   //console.log(obj)
				   if(state.arr.length == 0){
					   state.arr.push(obj)
				   }else{
					var isT = true
					//console.log(state)
					for(var i in state.arr){
						if(state.arr[i].id == obj.id){
							state.arr[i].num +=Number(obj.num)
							//console.log("相同")
							isT = false 
							break;
						}else{
							isT = true
						}
					}
					if(isT){
						state.arr.push(obj)
						//console.log("不同")
					}
	   
				   }
			   },
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
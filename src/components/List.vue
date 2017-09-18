<template>
<div>
       <v-header titel="全部分类"></v-header>
       <v-footer></v-footer>
       <v-content>
          <div>
             <div id="content-warp" >
                <div class="life-module">
                    <div class="life-goodsAll">
                       <div class="goodsBox" v-for="(ele,index) in listData" >
                            <div class="life-goodsTip">
                               <dl  class="life-goodsMark">{{ele.Name}}</dl>
                            </div>
                            <ul  class="life-goodsUl onlyStyle">
                               <li class=""  v-for="(ele,index) in listData[index].Children" :data-id="ele.ItemIndexId">
                                    <router-link :to="'/channelsub/'+ele.ItemIndexId">
                                    <img  :src="'http://i.lifevccdn.com'+ele.Icon" > 
                                    <dl >{{ele.Name}}</dl>
                                    </router-link>
                               </li>
                               
                                
                            </ul>
                            
                       </div>
                    </div>
                </div>
             
             </div>
          </div>
       </v-content>
</div>
</template>
<script>
    export default{
        name:"list",
        data(){
            return{
                listData:[]
            }
        },
        mounted(){
            this.$http.get("http://app.lifevc.com/1.0/v_h5_5.1.2_33/categories/allCategory?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true")
            .then(res=>{
               console.log(res.data)
                this.listData = res.data.InnerData
                console.log(this.listData)
            }).catch(err=>console.log(err))
        }
    }
</script>
<style scoped>
#Home-Header {
		background-image: none;
	}
#content-warp{
    position: absolute;
    width: 100%;
    top: 96px;
    overflow-y: scroll;
}
.life-module {
    overflow: hidden;
}
.goodsBox {
    margin-top: 0.5rem;
}
.life-goodsTip {
    width:100%;
    margin: auto;
    text-align: center;
}
.life-goodsTip dl {
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.3rem;
}
.life-goodsTip .life-goodsMark {
    font-size: 0.26rem;
    letter-spacing: 0.2rem;
    position: relative;
}
.life-goodsTip dl:last-child {
    line-height: 0.36rem;
}
.life-goodsUl {
    background: #fff;
    margin-top:0.1rem;
   overflow: hidden;
}
.life-goodsUl li { 
    float: left;
    width: 33.3333%;
    text-align: center;
    overflow: hidden;
}
.onlyStyle li {
    float: left;
    width: 33%;
    text-align: center;
    border: 2px solid #f1f1f1;
    margin: 0 0 -1px -1px;
}
.onlyStyle li img {
    width: 60%!important;
    margin: auto;
    padding-top: 0.1rem;
}
.onlyStyle li dl {
    height: 0.20rem;
    line-height: 0.20rem;
    padding-bottom: 0.15rem;
    font-size: 0.22rem;
}
</style>   
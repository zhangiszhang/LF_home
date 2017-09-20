<template>
<div>
    <v-header titel="家务"></v-header>
    <v-content id="content">
        <div class="wrap-shelf-navs">
        <ul  class="life-sort clearFix">
             <li ><a  class="" @click="newGoods">新品</a></li> 
             <li ><a  class="" @click="salesGoods">畅销</a></li> 
             <li ><a  class="" @click="priceGoods">
                <em >价格</em> 
                <i  class=""></i></a>
             </li>
        </ul>
        </div>
        <div class="wrap-shelf">
             <div  class="shelf-item" v-for="(ele,index) in channerl">
                <router-link :to="'/item/'+ele.ItemInfoId">
                <a  class="item-pic-bx">
                    <img  class="item-pic" :src="'http://i.lifevccdn.com'+ele.ImageUrl">
                    <div class="item-status-empty" style="display: none;">
                    热卖脱销
                    </div>
                </a> 
                <div  class="item-panel"><div class="title clearFix">
                    {{ele.Name}}
                </div> 
                <div  class="item-price">
                    <div class="price-cont" >
                        <span class="act-tag" style="display: none;"></span> 
                        <span>￥</span> <span >{{ele.SalePrice}}</span>&nbsp;
                        <span  class="original-price"></span> 
                        <span class="promo-lable">{{ele.PriceTag}}</span>
                    </div> 
                    <div class="item-comment">评论：{{ele.CommentCount}}</div>
                 </div>
              </div>
              </router-link> 
            <div>
        </div>
    </div>
        </div>
    </v-content>

</div>
 
</template>
<script>
    export default{
        name:"channelsub1",
        data(){
            return{
                channerl:[]
            }
        },
        mounted(){
            console.log(this.$route.params.num)
            var num = this.$route.params.num   
            var pid = this.$route.params.pid
            this.$http.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid='+num+'&filter='+pid+'&sort=0&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
            .then(res=>{
               console.log(res.data)
                this.channerl = res.data.InnerData.GoodsItems
                console.log(this.channerl)
            }).catch(err=>console.log(err))
        },
        methods:{
            newGoods(){
                var num = this.$route.params.num                   
                var pid = this.$route.params.pid
                this.$http.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid='+num+'&filter='+pid+'&sort=2&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
                .then(res=>{              
                this.channerl = res.data.InnerData.GoodsItems
                }).catch(err=>console.log(err))
            },
            salesGoods(){
                var num = this.$route.params.num                   
                var pid = this.$route.params.pid
                this.$http.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid='+num+'&filter='+pid+'&sort=1&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
                .then(res=>{              
                this.channerl = res.data.InnerData.GoodsItems
                }).catch(err=>console.log(err))
            },
            priceGoods(){
                var num = this.$route.params.num
                var pid = this.$route.params.pid
                this.$http.get('http://app.lifevc.com/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid='+num+'&filter='+pid+'&sort=4&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
                .then(res=>{              
                this.channerl = res.data.InnerData.GoodsItems
                }).catch(err=>console.log(err))
            }
        }
    }
</script>
<style lang=""scoped>
#Home-Header {
		background-image: none;
	}
#content{
    padding-top:0.8rem;
}
.wrap-shelf-navs {
    width: 100%;
    position: fixed;
    z-index: 10;
   
}
.life-sort {
    width:100%;
    padding: 2% 2%;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    
}
.life-sort li {
    float: left;
    width: 33.33333%;
   
}
.life-sort li a {
    display: block;
    position: relative;
    height: 0.4rem;
    line-height: 0.4rem;
    border-right: 2px solid #f2f2f2;
    text-align: center;
    margin-top: 0.08rem;
    font-size: 0.25rem;
    color: #666;
}
.wrap-shelf {
    width: 100%;
    margin: -0.7em auto 0.2em;
    padding: 0.7em 0  3rem 0;
}
.shelf-item {
    width: 96%;
    border: 1px solid #ddd;
    margin: 0.2rem auto 0;
    overflow: hidden;
    margin-top:0.9rem;
    background-color: #fff;
    
}

.shelf-item .item-pic-bx {
    width: 100%;
    overflow: hidden;
    display: block;
    position: relative;
}
.shelf-item .item-pic {
    width: 100%;
    display: block;
    vertical-align: top;
    margin: 0 auto;
    position: static;
}
.item-status-empty {
    width: 0.7rem;
    height: 0.7rem;
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    font-size: 0.15em;
    color: #fff;
    line-height: 0.7rem;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -0.4rem;
    margin-left: -0.35rem;
}
.shelf-item .item-panel, .shelf-item .profile {
    overflow: hidden;
    font-size: 0.25rem;
    line-height: 0.3rem;
}
.shelf-item .item-panel .title {
    text-align: left;
    font-size: 0.25rem;
    color: #333;
    line-height: 0.6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 0.05rem;
}
.shelf-item .item-panel .item-price, .shelf-item .item-panel .title {
    width: 94%;
    overflow: hidden;
    margin: 0 auto;
}
.shelf-item .item-panel .price-cont {
    overflow: hidden;
    float: left;
    line-height: 0.30rem;
    margin-top: 0.02rem;
    font-size:0.25rem;
}
.shelf-item .item-panel .act-tag, .shelf-item .item-panel .act-tag-red, .shelf-item .item-panel .pryomo-lable {
    display: inline-block;
    background-color: #c00;
    padding: 1px 3px;
}
.shelf-item .item-panel .act-tag {
    background-color: #fff000;
}
.shelf-item .item-panel .act-tag-red, .shelf-item .item-panel .promo-lable {
    background-color: #c00;
    color: #fff;
}
.shelf-item .item-panel .item-comment {
    float: right;
    text-align: right;
    color: #999;
}
.price-cont{
    padding-bottom:0.3rem;
}
</style>
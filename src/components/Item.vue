<template>
<div>
       <v-header titel="商品介绍"></v-header>
       <v-footer></v-footer>
       <v-content>
			<div class="item-body">
				<dl class="item-intro">
					<dd class="page-swipe">
						<div class="swiper-container swiper-container-horizontal swiper-container-android">
							<div class="detail-swipe">
								<mt-swipe :auto="4000">
									<mt-swipe-item v-for="(ele,index) in banner" :key="index">
										<div class="">
											<img :src="'http://i.lifevccdn.com'+ele.ImageUrl">
										</div>
									</mt-swipe-item>
								</mt-swipe>
							</div>
						</div>
					</dd>
					<dd class="item-price pd05">
						<div class="title">{{goods.InnerData.Name}}</div>
						<p class="des">{{goods.InnerData.Caption}}</p>
						<div class="price-cntr clearfix" style="text-align: center;">
							<em class="icon-money-larger activity-price-color">¥</em>
							<em class="price-money-larger activity-price-color">{{goods.InnerData.ActivityPrice}}</em>
							<span class="normalprice-wrap">
                            <em class="icon-money-smaller normal-price-color">¥</em> 
                            <em class="price-money-smaller normal-price-color">{{goods.InnerData.SalePrice}}</em> 
                            <span class="line"></span></span>
						</div>
						<div class="price">
							<div class="lable-wrap">
								<span class="promo-lable" style="color: rgb(0, 0, 0); background: rgb(254, 209, 9);">{{goods.InnerData.ActivityTag}}</span>
								<span class="promo-lable" style="color: rgb(253, 238, 238); background: rgb(205, 6, 15);">新</span>
							</div>
						</div>
					</dd>
					<dd id="promoWrap">
						<div class="promo-item">
							<div><span class="tag-promo bgred">优惠</span>
								<span class="m-txt red">登录查看你的积分和优惠券</span>
							</div>
						</div>
					</dd>
					<dd class="GroupAttrs font-medium  pd05">
						<div class="wrap-spec Warp-Props" v-for="(ele,index) in props">
							<table width="100%">
								<tr>
									<td>
										<div class="font-medium ">{{ele.pname}}：</div>
										<div class="font-small item selected" v-for="(ele2,index) in ele.vals">
											<span class="spec-txt">{{ele2.vname}}</span>
											<span class="state" style="display: none;"></span>
											<i></i>
										</div>
									</td>
								</tr>
							</table>
						</div>
						
					</dd>
                    <dd class="spec-amount pd05 pl-2px">
                        <div class="wrap-spec">
                            <span class="num-tt" style="color: rgb(107, 107, 107);">数量：</span>
                            <span class="wrap-num">
                                <button  class="des"></button> 
                                <span  class="ipt-num">1</span>
                                <button class="inc"></button>
                            </span>
                        </div>
                    </dd>
                    <dd  class="deliveryPanel pd05 pl-2px">
                        <div  class="wrap-spec"><span  class="delivery-tt" style="color: rgb(107, 107, 107); visibility: visible;">送至：</span>
                            <div  class="deliver-cont">
                                广西(满￥149免运费)
                                <p  class="deliver-promo" style="padding-top: 4px; color: rgb(204, 0, 0);"><span data-v-3520427c="">
                                    新会员首单，满69元免运费
                                    </span></p>
                                <p  class="serv-time" style="display: none;"></p>
                                <p  class="serv-time" style="display: none;"></p>
                            </div>
                        </div>
                    </dd>
                    <div  class="hesmartop"></div>
                    <div class="mattop">
                        <h3  class="tit"><i ></i>&nbsp;&nbsp;&nbsp;&nbsp;还有更多可选</h3>
                        <div  class="cntr-wrap">
                            <ul  class="list" style="width: 500px;">
                                <li v-for="(ele,index) in buyWith">
                                    <a  :href="'#/item/'+ele.ItemInfoId"><img  :src="'http://i.lifevccdn.com'+ele.ImageUrl">
                                        <p >{{ele.Name}}</p>
                                        <p ><b >￥{{ele.SalePrice}}</b></p> 
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div  class="hesmartop"></div>
                    <dd  class="general-info ser-promise">
                        <div  class="huodongcenter" v-for="(ele,index) in serviceIcon">
                            <img  :src="'http://i.lifevccdn.com'+ele.ImageUrl" >
                            
                        </div>
                        
                    </dd>
				</dl>
                <div  id="selmenu" class="warp-Menus">
                    <div  id="Menus" style="position: static; top: 34px; z-index: 1;">
                        <dl  style="padding-left: 2%;">
                            <dd ><span  class="focusTab">商品介绍</span></dd>
                            <dd ><span  class="">规格参数</span></dd>
                            <dd ><span  class="">评论({{goods.InnerData.CommentCount}})</span></dd>
                        </dl>
                    </div>
                </div>
                
                <div class="item-tab-cont" style="min-height:310px;">
                    <div id="detailsItem" class="Detailsdiv">
                        <div v-for="(ele,index) in details">
                            <img :src="'http://i.lifevccdn.com'+ele.ImageUrl">
                            <div></div>
                        </div>
                        <div class="detls-comt" style="clear: both;">
                            <div class="detls-comt-title">
                                <div class="wrap-spec">
                                    会员使用评论：({{goods.InnerData.CommentCount}}条)
                                    <span class="arr-rt"></span></div>
                            </div>
                            <div>
                                <div class="font-small CommentContent" v-for="(ele,index) in comment">{{ele.CustomerCity}}&nbsp;{{ele.CustomerName}}&nbsp;&nbsp;
                                    <span class="sup">{{ele.CustomerLevelName}}&nbsp;累计购物：&nbsp;{{ele.BuyCount}}</span> <br> <span>{{ele.Content}}</span> <br> <span class="sup">{{ele.CreateAt}}&nbsp; {{ele.Target}}   </span>
                                    
                                </div>
                                <div  style="text-align: center; line-height: 0.4rem; font-size: 15px; padding: 0.3rem 0px; border-top: 1px solid rgb(242, 242, 242); margin-top: 0.1rem;">
                                    查看更多
                                </div>
                            </div>

                        </div>
                        <div class="detls-comt"></div>
                    </div>
                    <div title="规格参数" class="Detailsdiv" style="border-top: 0.2rem solid rgb(242, 242, 242); display: none;">
                        <div class="font-medium Specifications">
                            品名：不锈钢懒人拖把
                        </div>
                        <div class="font-medium Specifications">
                            拖把材质：奥氏体不锈钢、ABS、PE
                        </div>
                        <div class="font-medium Specifications">
                            拖巾材质：无纺布
                        </div>
                        <div class="font-medium Specifications">
                            拖把尺寸：80-120CM
                        </div>
                        <div class="font-medium Specifications">
                            湿巾尺寸：25*30cm
                        </div>
                        <div class="font-medium Specifications">
                            干巾尺寸：23.5*30cm
                        </div>
                        <div class="font-medium Specifications">
                            拖把包装方式：纸盒包装
                        </div>
                        <div class="font-medium Specifications">
                            拖巾包装方式：防尘袋包装
                        </div>
                        <div class="font-medium Specifications app-red" style="border-top: 0.2rem solid rgb(242, 242, 242);">
                            <div style="line-height: 0.5rem;">客户经理提醒:</div>
                            <div style="line-height: 0.5rem;">1、清水冲洗，请勿接触带有腐蚀性液体或化学性液体。</div>
                            <div style="line-height: 0.5rem;">2、避免高温、阳光暴晒。</div>
                            <div style="line-height: 0.5rem;">3、勿接近火源、热源。</div>
                            <div style="line-height: 0.5rem;">4、远离婴幼儿。</div>
                            <div style="line-height: 0.5rem;">5、拖巾请置于阴凉干燥处，远离火源与热源； </div>
                            <div style="line-height: 0.5rem;">6、拖巾请勿丢入马桶； </div>
                            <div style="line-height: 0.5rem;">7、拖巾请勿放置于婴幼儿可以触及的地方。</div>
                        </div>
                    </div>
                    <div title="评论" class="Detailsdiv" style="display: none;">
                        <dl>
                            <dd class="font-small CommentContent" style="line-height: 2.2rem;" v-for="(ele,index) in comment">
                                {{ele.CustomerCity}}&nbsp;139*****032&nbsp;
                                <span style="color: silver;">玛瑙会员&nbsp;累计购物：108</span> <br> <span>使用方便，就是不经用，一间房肯定是不够的。啥时候再到货啊。</span> <br> <span style="color: silver;">2017-09-19&nbsp;  商品:去污湿巾（40片）    </span>
                                <!---->
                            </dd>
                        </dl>
                        <div style="text-align: center; line-height: 0.4rem; font-size: 15px; padding: 0.3rem 0px; border-top: 1px solid rgb(242, 242, 242); margin-top: 0.1rem;">点击加载更多

                        </div>
                        <!---->
                    </div>
                </div>
			</div>
            <button @click="car" style="height:500px; width:100px;">点我</button>
		</v-content>
</div>
</template>
<script>
    export default{
        name:"item",
        data(){
            return{
                goods:{
                    InnerData:{
                        Name:"",
                        Caption:"",
                        ActivityPrice:"",
                        SalePrice:"",
                        ActivityTag:"",
                        CommentCount:"",
                        Id:""
                    }
                },
                banner:[],
                buyWith:[],
                serviceIcon:[],
                details:[],
                comment:[],
                props:{}
            }
        },
        mounted(){
            var pid = this.$route.params.pid
            this.$http.get("http://app.lifevc.com/1.0/v_h5_5.1.2_33/items/itemview?Iteminfoid="+pid+"&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true")
            .then(res=>{
                this.banner = res.data.InnerData.Headers
                this.goods = res.data
                this.buyWith = res.data.InnerData.BuyWith
                this.serviceIcon = res.data.InnerData.ServiceIcon
                this.details = res.data.InnerData.Details
                this.comment = res.data.InnerData.CommentTop5
                this.props = res.data.InnerData.GroupAttrs.props
                // console.log(this.groupAttrs)
                // console.log(res.data)             
            }).catch(err=>console.log(err))
        },
        methods:{
            car(){
                 var obj = {
                id:this.$route.params.pid,
                name:this.goods.InnerData.Name,
                pric:this.goods.InnerData.ActivityPrice,
                num:1,
                image:'http://i.lifevccdn.com'+this.banner[0].ImageUrl
            }
            	
             this.$store.commit("getData",obj)
             console.log(this.$store.state.arr)
            }
        }
    }
</script>
<style >
.clearfix {
    overflow: hidden;
}
#Home-Header {
		background-image: none;
	}
body{
    background-color:#fff;
 
}
.detail-swipe { height:322px}
img { width:100% !important}
.item-intro{
    margin-top:0.8rem;
}
.item-body{
    padding-bottom:0.8rem;
}
.item-body dd {
    background-color: #fff;
    margin: 0;
}
.item-body .item-price {
    border: 0;
    font-size: 0.25em;
    line-height: 2em;
    padding-bottom: .5rem;
    padding-top: .2rem;
}
.item-body dd.pd05 {
    padding: .5rem 0 .5rem 0rem;
}
.item-body .item-price{
    line-height: 0.4rem;
}
.item-body .item-price .title{
    padding: 0;
    text-align: center;
    font-size: 0.34rem;
    color: #000;
    height: .4rem;
    line-height: .4rem;
}
.item-body .item-price .des{
    text-align: center;
    font-size: .26rem;
    color: #999;
    height: .3rem;
    line-height: .3rem;
    margin-top: .14rem;
}
.price-cntr{
    font-family: PingFangSC-Regular,Microsoft YaHei,Arial,Verdana,Tahoma,Helvetica,"sans-serif";
    font-size: 0;
    text-align: center;
    line-height: normal;
    height: 0.44rem;
    line-height: 0.44rem;
    margin-top: .2rem;
}
.icon-money-larger {
    font-size: 0.34rem;
}
.activity-price-color{
    color: #c00;
}
.price-money-larger {
    font-family:SimHei;
    font-size: 0.35rem;
    margin-left: 2px;
}
.normalprice-wrap{
    position: relative;
    display: inline-block;
    height: 100%;
    margin-left: .1rem;
    padding: 0 .06rem;
}
.icon-money-smaller{
    font-size: 0.3rem;
}
.normal-price-color{
    color: #000;
}
.price-money-smaller {
    font-size: 0.35rem;
    margin-left: 2px;
}
.normalprice-wrap .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #000;
}
.item-body .item-price .price {
    padding: 0;
    font-size: 0.24rem;
    line-height: .24rem;
}
.item-body .item-price .lable-wrap {
    text-align: center;
    margin: .02rem auto 0;
}

.item-body .item-price .price .promo-lable {
    font-size: 26px;
    padding: 1px 6px;
    line-height: normal;
    margin-right: .12rem;
    zoom: 0.5;
}
.item-body .GroupAttrs div.Warp-Props .item {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}

#promoWrap{
    border-top: 1px solid #ddd;
    padding: .1rem 0;
    margin-left: .14rem;
}
.promo-item {
    padding: .1rem 0;
    font-size: 14px;
    position: relative;
    width: 7.32rem;
    width: 100%;
}
.tag-promo.bgred{
    display: inline-block;
    background: #cd060f;
    color: #fff;
    zoom: .5;
    border: 0;
}
.m-txt {
    font-size: 12px;
    height: .3rem;
    line-height: .3rem;
    padding-left: .14rem;
}
.red {
    color: #cd060f;
}
.item-body .wrap-spec {
    position: relative;
}
.item-body .GroupAttrs .wrap-spec {
    padding: 0;
}
.item-body .GroupAttrs .wrap-spec {
    margin-top: .3rem;
}
table {
    width: 100%;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.attrtitle {
    color: #666;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
}
.font-medium {
    font-size: 13px;
    line-height: .2rem;
}
.item-body .GroupAttrs div.Warp-Props .item {
    min-width: 15px;
    height: 33px;
    overflow: hidden;
    float: left;
    background-color: #fff;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 1.35rem;
    color: #333;
    line-height: 33px;
    margin: .8rem .8rem .8rem 0;
    padding: 0 .7rem;
    position: relative;
    -webkit-tap-highlight-color: transparent;
}
.item-body .GroupAttrs div.Warp-Props .item.selected {
    border-color: #83b842;
    color: #83b842;
}
.item-body .GroupAttrs div.Warp-Props .item {
    margin: .14rem 0 0;
    box-sizing: border-box;
    padding: 0 .16rem;
}
.item-body .GroupAttrs div.Warp-Props .item {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.item-body .GroupAttrs div.Warp-Props .item:not(:last-child) {
    margin: .14rem .14rem 0 0;
}
.item-body .spec-amount .ipt-num, .item-body .spec-amount button {
    display: inline-block;
    float: left;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 28px;
}
.item-body .GroupAttrs div.Warp-Props .item i {
    height: 0;
    border-style: solid;
    border-width: 15px 15px 0;
    border-color: transparent #83b842 #83b842 transparent;
    font-size: 0;
    line-height: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: none;
}
.item-body dd.pd05 {
    padding: 0;
    margin-top: 10px;
}
.item-body .spec-amount .wrap-spec {
    font-size: 12px;
    overflow: hidden;
    padding: 0;
    height: .54rem;
    margin-top: .3rem;
}
.item-body .spec-amount .num-tt {
    font-size: 13px;
    width: auto;
    float:left;
    height: .54rem;
    line-height: .54rem;
    padding-right: .1rem;
}
.item-body .spec-amount .wrap-num {
    display: inline-block;
    overflow: hidden;
}
.item-body .spec-amount button {
    box-sizing: border-box;
    width: .54rem;
    height: .54rem;
    line-height: .54rem;
}
.item-body .spec-amount button.des{
    background: #eee url(../assets/fonts/1.png) no-repeat 50%;
    background-size: .28rem .28rem;
}
.item-body .spec-amount button.inc{
    background: #eee url(../assets/fonts/1.png) no-repeat 50%;
    background-size: .28rem .28rem;
}
.item-body .spec-amount .ipt-num {
    width: .76rem;
    height: .54rem;
    line-height: .54rem;
    font-size: 12px;
    box-sizing: border-box;
}

.item-body .deliveryPanel .wrap-spec{
    font-size: 12px;
    line-height: .56rem;
    overflow: hidden;
    padding: 0;
}
.item-body .deliveryPanel .delivery-tt {
    font-size: 13px;
    width: auto;
    line-height: normal;
    padding-right: .1rem;
    float: left;
}
.item-body .deliveryPanel .deliver-cont {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-body .deliveryPanel .deliver-cont {
    line-height: normal;
    font-size: 13px;
}
.hesmartop {
    height: .4em;
    background: #f2f2f2;
}
.tit {
    width: 7.5rem;
    font-size: .28rem;
    line-height: .6rem;
    text-indent: .1rem;
    background: #fff;
    position: relative;
}
.tit i {
    display: inline-block;
    width: 2px;
    height: .3rem;
    background: #89be48;
    position: absolute;
    top: .14rem;
    left: .2rem;
}
.cntr-wrap {
    width: 7.5rem;
    height: auto;
    overflow: hidden;
    overflow-x: scroll;
    background: #fff;
    margin-bottom: .2rem;
    padding-bottom: .1rem;
    -webkit-overflow-scrolling: touch;
}
.list {
    height: auto;
    font-size: .24rem;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    position: relative;
    padding-right: .1rem;
    -webkit-scrollbar {
			display: none;
		}

}
.list li {
    width: 2.37rem;
    margin-left: .1rem;
}
.list li a {
    float: left;
    width: 2.37rem;
}
.list li a img {
    width: 2.37rem;
    height: 2.37rem;
}
.list li a p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .4rem;
    color: #333;
    text-align: center;
    font-family: PingFangSC-Regular,Microsoft YaHei,Arial,Verdana,Tahoma,Helvetica,"sans-serif";
}
.list li a p b {
    font-weight: 400;
    color: #000;
}
.mattop{
    overflow:hidden;
}
.warp-Menus {
    width: 100%;
    height: 4.1rem;
    top: 4rem;
    z-index: 999;
    left: 0;
}
.warp-Menus {
    height: .8rem;
    top: .9rem;
}
#selmenu {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}
#Menus {
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    border-bottom: .04rem solid #f2f2f2;
}
#Menus dl {
    text-align: center;
    padding: .8rem;
    border: 0;
}
#Menus dl {
    padding: .16rem;
    font-size: 12px;
}
#Menus dl dd {
    display: inline-block;
    min-width: 19%;
    height: 2.4rem;
    text-align: center;
    line-height: 2rem;
    font-family: Microsoft YaHei;
    border-radius: 1.3rem;
    cursor: pointer;
    margin: 0 6% 0 0;
    padding-left: 0;
}
#Menus dl dd:first-child {
    float: left;
}
#Menus dl dd {
    height: .48rem;
    line-height: .48rem;
}
#Menus dl dd span {
    display: inline-block;
    border-radius: 2rem;
    padding: .2rem 1rem;
    font-size: 1.4rem;
    line-height: 2.1rem;
}
#Menus dl dd span {
    font-size: 14px;
    padding: .04rem .2rem;
    line-height: .44rem;
}
.focusTab {
    background-color: #89be48;
    color: #fff;
    padding: .2rem 1rem;
    border-radius: .5rem;
}
.item-body .Detailsdiv {
    border-top: 1px solid #ccc;
}
.Detailsdiv {
    font-size: 12px;
}
div.Detailsdiv img {
    width: 100%;
    display: block;
    margin-top: -1px;
}
.item-body .detls-comt {
    background-color: #fff;
}
.item-body .detls-comt-title {
    font-size: 15px;
    line-height: .52rem;
    margin: .1rem auto 0;
}
.item-body .wrap-spec {
    position: relative;
}
.item-body .wrap-spec .arr-rt {
    width: 1.2rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: .5rem;
}
.item-body .wrap-spec .arr-rt {
    width: .24rem;
    right: .05rem;
}
.item-body .wrap-spec .arr-rt:after {
    content: "";
    width: 8px;
    height: 8px;
    display: block;
    border-style: solid;
    border-width: 2px 2px 0 0;
    border-color: #ccc;
    position: absolute;
    left: -4px;
    top: 50%;
    margin-top: -5px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
}
.CommentContent {
    word-wrap: break-word;
}
.CommentContent {
    font-size: 12px;
    line-height: .4rem!important;
    padding: .2rem 0 .2rem .1rem!important;
}
.sup {
    color: silver;
}
</style>   
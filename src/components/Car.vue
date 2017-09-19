<template>
		<div class="cart">
			<v-header titel="购物车">
				<a href="javascript:window.history.go(-1);" class="car_l_btn iconfont icon-fanhui" slot="left" ></a>
				<a href="javascript:;" v-if="xian" slot="right" class="car_r_btn" v-text="cont" @click="top_btn"> </a>
			</v-header>
			<div class="car_cont">
				<div class="car_cont_one" v-if="xianone">
					<section class="iconfont icon-gouwuche car_icon"></section>
					<p>您的购物车还是空荡荡</p>
					<a href="#/index">赶紧去逛一逛</a>
				</div>
				<div class="car_cont_two" v-if="xiantwo">
					<h3>
						<span>1元1件</span>
						<p>全程任意消费,1元可领取1件 > </p>
					</h3>
					<ul>
						<li v-for="(ele,index) in goodsarr " :key="index" :data-goodid="ele.id">
							<section class="se1">√</section>
							<section class="se2">
								<img src="" />
							</section>
							<section class="se3">
								<p>{{ele.name}}</p>
								<div class="xiugai" v-if="xiannum">
									<p>¥{{ele.pric}}</p>
									<p>X{{ele.num}}</p>
								</div>
								<div class="wancheng" v-if="xiantu">
									<p class="iconfont icon-shanchu btn_shan" @click="rembtn(ele.id)"></p>
									<a href="javascript:;" class="jian" @click="jianbtn(ele.id)">-</a>
									<span>{{ele.num}}</span>
									<a href="javascript:;" class="zeng" @click="zengbtn(ele.id)">+</a>
								</div>
							</section> 
						</li>
					   
					</ul> 
				</div>
				<div class="car_cont_three" v-if="xianthree">
					<h3>Rico.S为你精心推荐</h3>
					<section>
						<ul ref="car_ul_long" class="car_ul_long">
							<li v-for="(ele,index) in tuiarr" :key="index" :data-goodsid="ele.ItemInfoId">
								<a :href="'#/item/'+ele.ItemInfoId">
									<img  :src="'http://i.lifevccdn.com'+ele.ImageUrl"/>
									<p>{{ele.Name}}</p>
									<span>¥{{ele.SalePrice}}</span>
								</a>
							</li> 
						</ul>
					</section>
				</div>
				<div class="car_cont_four" v-if="xianzong">
					<section class="zong_l_1">
						<span>√</span>
						<p>全选</p>
					</section>
					<section class="zong_l_2">
						合计 :
						<span>¥{{zongpric}}</span>
					</section>
					<section class="zong_l_3" v-if="jie1"> 
							去结算({{zongnum}}) 
					</section>
					<section class="zong_l_4" v-if="jie2" @click="borem"> 
							全删 
					</section>
				</div>
			</div>
			<v-footer></v-footer>
		</div>
		
</template>

<script>
	
export default {
	name: "car",
	data() {
		return {
			xian: false,
			cont: "修改",
			iscont:false,
			xianone: true,
			tuiarr: [],
			xianthree: true,
			xiantwo: true,
			xiannum: true,
			xiantu:false,
			xianzong:false,
			jie1:true,
			jie2:false,
			goodsarr:[],
			zongnum:0,
			zongpric:0,
			//封装的计算数量,总价,修正数量,总价的属性方法
			afn(obj){ 
				obj.zongnum = 0
				obj.zongpric = 0
				obj.goodsarr = this.$store.state.arr
				obj.goodsarr.map((ele,index)=>{
					obj.zongnum += ele.num
					obj.zongpric += (ele.num * ele.pric)
				})
				$("#footer_num").html(this.$store.state.arr.length)
				if(this.$store.state.arr.length==0){
					$("#footer_num").css({display:"none"})
					this.xian = false;
					this.xianone = true;
					this.xiantwo = false;
					this.xianzong = false
					this.xianthree= true
				}
				
			}
		}
	},
	beforeMount(){
		//加载后判断购物车数量的多少
		if(this.$store.state.arr.length == 0){
			//当购物车为空时
			this.xian = false;
			this.xianone = true;
			this.xiantwo = false;
			this.xianzong = false
			this.xianthree= true
		} else {
			this.xian = true;
			this.xianone = false;
			this.xiantwo = true;
			this.xianzong = true
			this.xianthree= false
			
		}
	},
	mounted() {
		//调用封装的计算总和方法,由于this的指向问题和store的应用几个问题,不能放外面,也不能放里面.
			this.afn(this)
		//请求推荐的数据
		this.$http.get("http://marketing.lifevc.com/v1/getCart?si=kLwsUpafUbzjlHiiWImtYq4PQo55Z53lb9y0k7EAUC%2FJv9x2CCd82dz%2BKbp09pfjFu4lnS1Z0sY%3D&ck=2309fff2_159937880&regionId=17119&pm=8&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true")
			.then(res => {
				this.tuiarr = res.data.AssemItems
				//确定ul的宽度 
				$(".car_ul_long").width(this.tuiarr.length * 1.9 + "rem")
			})

	},
	methods:{
		//修改按钮,改变初始属性,改变样式
		top_btn(){
			this.iscont = !this.iscont
			if(this.iscont == true){
				this.cont = "完成"
				this.xiannum= false;
				this.xiantu=true
				this.jie1 = false
				this.jie2 = true
			}else{
				this.cont = "修改"
				this.xiannum= true;
				this.xiantu=false
				this.jie2 = false
				this.jie1 = true
			}
		},
		//增加
		zengbtn(index){
			this.$store.commit("zengpric",index)
			this.afn(this)
		},
		//减少
		jianbtn(index){ 
			this.$store.commit("jianpric",index)
			this.afn(this)			
		},
		//单独删除
		rembtn(index){
			this.$store.commit("rempric",index)
			this.afn(this)
			
		},
		//全部删除
		borem(){
			this.$store.commit("borempric")
			this.afn(this)
			 
		}
	}

}</script>

<style lang="less">
	#Home-Header {
	background-image: none;
}
	.index_btn_stop{
		display: none;
	}
#app,
body,
.cart,
.car_cont {
	box-sizing: border-box;
}
.car_cont { 
	
}
.car_l_btn {
	font-size: 0.4rem;
	color: white;
	line-height: 0.8rem;
}

.car_r_btn {
	font-size: 0.32rem;
	line-height: 0.8rem;
	color: white;
}

.car_cont {
	width: 100%;
	padding: 0.8rem 0 0 0;
	position: relative;
	background: #EEEEEE; 
	.car_cont_one {
		width: 100%;
		.car_icon {
			width: 100%;
			line-height: 4rem;
			font-size: 3rem;
			text-align: center;
			margin-top: 0.2rem;
			color: #CCc;
		}
		p {
			text-align: center;
			line-height: 0.4rem;
			font-size: 0.3rem;
			color: #aaa;
		}
		a {
			display: block;
			width: 2rem;
			height: 0.5rem;
			text-align: center;
			line-height: 0.5rem;
			font-size: 0.26rem;
			margin: 0.2rem auto;
			color: green;
			border: 1px solid green;
			border-radius: 0.1rem;
		}
	}
}

.car_cont_three {
	width: 100%;
	height: 3.63rem;  
	background: white;
	margin-top: 0.8rem;
	h3 {
		font-size: 0.3rem;
		box-sizing: border-box;
		padding-left: 0.2rem;
		line-height: 0.7rem;
		height: 0.7rem;
		border-bottom: 0.02rem solid #ccc;
		font-weight: 100;
	}
	section {
		width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		//隐藏滚动条
		&::-webkit-scrollbar {
			display: none;
		}
		ul {
			height: 2.7rem;
			width: 19rem;
			li {
				width: 1.9rem;
				height: 100%;
				box-sizing: border-box;
				padding: 0.1rem 0.1rem;
				float: left;
				img {
					width: 100%;
					height: 1.63rem;
				}
				p {
					width: 100%;
					height: 0.24rem;
					line-height: 0.24rem;
					font-size: 0.24rem;
					overflow: hidden;
				}
				span {
					font-size: 0.2rem;
					display: block;
					line-height: 0.5rem;
				}
			}
		}
	}
}

.car_cont_two { 
	width: 100%;
	box-sizing: border-box;
	padding: 0 0.2rem; 
	background: white;
	margin-bottom: 2.7rem;
	h3 {
		width: 100%;
		padding: 0 0.2rem;
		box-sizing: border-box;
		height: 0.7rem;
		font-size: 0.26rem;
		line-height: 0.7rem;
		border-bottom: 0.02rem #ccc solid;
		font-weight: 200;
		span {
			display: block;
			width: 1.3rem;
			height: 0.4rem;
			text-align: center;
			line-height: 0.4rem;
			background: red;
			float: left;
			margin-top: 0.15rem;
			margin-right: 0.15rem;
		}
		p {
			float: left;
			font-size: 0.22rem;
		}
	}
	ul {
		width: 100%;
		li {
			width: 100%;
			height: 1.8rem;
			padding: 0.15rem 0;
			box-sizing: border-box;
			border-bottom: 0.02rem solid #ccc;
			section {
				float: left;
				&.se1 {
					display: block;
					width: 0.4rem;
					height: 0.4rem;
					font-size: 0.3rem;
					line-height: 0.3rem;
					text-align: center;
					background: green;
					color: white;
					border-radius: 50%;
					margin-top: 0.55rem;
				}
				&.se2 {
					img {
						width: 1.3rem;
						height: 1.3rem;
						margin-left: 0.3rem;
					}
				}
				&.se3 {
					width: 4rem;
					height: 1.5rem;
					position: relative;
					p {
						width: 2.8rem;
						height: 0.8rem;
						font-size: 0.26rem;
						line-height: 0.4rem;
						overflow: hidden;
						margin-left: 0.2rem;
					}
					.xiugai {
						position: absolute;
						right: 0;
						top: 0;
						width: 2rem;
						height: 1.5rem;
						z-index: 5;
						p {
							text-align: center;
						}
					}
					.wancheng {
						position: absolute;
						right: 0;
						top: 0;
						width: 2rem;
						height: 1.5rem;
						z-index: 5;
						.btn_shan {
							font-size: 0.4rem;
							text-align: center;
						}
						a {
							display: block;
							float: left;
							width: 0.5rem;
							height: 0.4rem;
							border: 1px solid pink;
							text-align: center;
							line-height: 0.35rem;
							font-size: 0.4rem;
						}
						span {
							float: left;
							width: 0.5rem;
							height: 0.4rem;
							border: 1px solid pink;
							text-align: center;
							line-height: 0.35rem;
							font-size: 0.3rem;
						}
						.jian {
							border-bottom-left-radius: 0.1rem;
							border-top-left-radius: 0.1rem;
							margin-left: 0.2rem;
						}
						.zeng {
							border-bottom-right-radius: 0.1rem;
							border-top-right-radius: 0.1rem;
						}
					}
				}
			}
		}
	}
}
	.car_cont_four{
		position: fixed;
		left: 0;
		bottom: 0.8rem;
		width: 100%;
		height: 0.84rem; 
		z-index: 10;
		background: #f5f5f5;
		section{
			float: left;
			&.zong_l_1{
				span{
					display: block;
					width: 0.4rem;
					height: 0.4rem;
					font-size: 0.3rem;
					line-height: 0.3rem;
					text-align: center;
					background: green;
					color: white;
					border-radius: 50%; 
					margin-left: 0.2rem;
					margin-top: 0.14rem;
					float: left;
				}
				p{
					font-size: 0.3rem;
					float: left;
					line-height: 0.7rem;
					margin-left: 0.2rem;
				}
			}
			&.zong_l_2{
				font-size: 0.3rem;
				line-height: 0.8rem;
				margin-left: 1.2rem;
				span{
					color: red;
					margin-left: 0.2rem;
				}
			}
			&.zong_l_3{
				width: 1.6rem;
				height: 100%;
				background: #8ec351;
				float: right;
				font-size: 0.2rem;
				text-align: center;
				line-height: 0.84rem;
			}
			&.zong_l_4{
				width: 1.6rem;
				height: 100%;
				background: #de4141;
				float: right;
				font-size: 0.3rem;
				text-align: center;
				line-height: 0.84rem;
			}
		}
	}
</style>
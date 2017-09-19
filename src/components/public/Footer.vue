<template>
	<div class="footer_bom">
		<ul>
			<li v-for="(ele,index) in cont" :key="index">
				<router-link  :to="ele.path" :class="'index_b_btn iconfont '+ele.ic" active-class="rout_link"></router-link>
				<p>{{ele.name}}</p>
			</li>
		</ul>
		<div class="index_btn_stop" @click="sc_top">
			^
		</div>
		<span class="num_footer"id="footer_num" ref="num"></span>
	</div>
</template>

<script>
	export default {
		name :"footer",
		data(){
			return {
				cont:[
					{
						ic:"icon-shouye",
						name:"首页",
						path:"/index"
					},
					{
						ic:"icon-fenlei",
						name:"全部产品",
						path:"/list"
					},
					{
						ic:"icon-zhinanzhen",
						name:"闲逛",
						path:"/idle"
					},
					{
						ic:"icon-gouwuche",
						name:"购物车",
						path:"/car"
					},
					{
						ic:"icon-geren",
						name:"用户中心",
						path:"/reg"
					}
				],
				timer:null
			}
		},
		methods:{
			sc_top(){
				document.body.scrollTop=0; 
			}
		},
		mounted(){
			if(this.$store.state.arr.length>0){
				this.$refs.num.innerHTML=this.$store.state.arr.length
				this.$refs.num.style.display = "block"
			}else{
				this.$refs.num.style.display = "none"
			}
		}
	}
</script>

<style lang="less">
	.footer_bom{
		width: 100%;
		height: 0.8rem;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		background: white;
		ul{
			width: 100%;
			height: 100%;
			li{
				width: 20%;
				height: 100%;
				float: left;	
				.index_b_btn{
					display: block;
					line-height: 0.5rem;
					font-size: 0.3rem;
					text-align: center;
				}	
				p{
					font-size: 0.2rem;
					text-align: center;
				}
			}
		}
	}
	.rout_link{
		color: #89be48;
	}
	.rout_link~p{
		color: #89be48;
	}
	.index_btn_stop{
		position: fixed;
		bottom: 1rem;
		right: 0.15rem;
		width: 0.5rem;
		height: 0.5rem;
		background: rgba(0,0,0,0.6);
		z-index: 10;
		color: white;
		border-radius: 50%;
		text-align: center;
		line-height: 0.6rem;
		font-size: 0.4rem;
	}
	.num_footer{
		position: absolute;
		bottom: 60%;
		right: 22%;
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		border: 1px solid goldenrod;
		text-align: center;
		line-height: 0.3rem;
		font-size: 0.2rem;
		border-radius: 50%;
		background: goldenrod;
		color: white;
	}
</style>
<template>
        <div>
            <v-header titel="" style={}>
                <a hreaf="javascript:;" slot="left" ></a>
                <a hreaf="javascript:;" slot="right" class="iconfont icon-sousuo-liebiao"></a>
            </v-header>
            <v-nav>
            </v-nav>
            <div class="div-swiper">
				<mt-swipe :auto="6000" class="index-swiper">
					<mt-swipe-item v-for="(ele,index) in bannerarr">
                            <img  style="width:100%" :src="'http://i.lifevccdn.com/'+ele.ImageUrl"/>
                    </mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="index-nav_bom">
				<h3>陪你生活一辈子</h3>
				<span></span>
				<ul>
					<li v-for="(ele,index) in navbom">
						<a href="javascript:;">{{ele.name}}</a>
						<i :style="ele.style"></i>
						<p>{{ele.cont}}</p>
					</li>
				</ul>
			</div>
			<div class="index_actve">
				<img  src="../assets/fonts/oneisoen.jpg"/>
			</div>
        	<div class="index_te"> 
        		<ul>
        			<img v-for="(ele,index) in imgarr" :key="index" :src="'http://i.lifevccdn.com'+ele" />
        		</ul>
        	</div>
        	<div class="no_more">
        		~ 没有更多了 ~
        	</div>
        	<v-footer></v-footer>
        </div>
</template>


<script>export default {
	name: "index",
	data() {
		return {
			bannerarr: [],
			navbom: [{
					name: "秋",
					style: {
						background: "#d6ad51"
					},
					cont: "家务"
				},
				{
					name: "冬",
					style: {
						background: "#6a9ac0"
					},
					cont: "床品"
				},
				{
					name: "新",
					style: {
						background: "#dc6c67"
					},
					cont: "下厨"
				},
				{
					name: "品",
					style: {
						background: "#55a48f"
					},
					cont: "家具服"
				},
				{
					name: "全",
					style: {
						background: "#93bd62"
					},
					cont: "洗漱沐浴"
				},
				{
					name: "新",
					style: {
						background: "#f7758a"
					},
					cont: "49元12件"
				},
				{
					name: "上",
					style: {
						background: "#6fbcce"
					},
					cont: "送购物卡"
				},
				{
					name: "架",
					style: {
						background: "#d57c56"
					},
					cont: "积分到期"
				}
			],
			imgarr:[]
		}
	},
	mounted() {
		this.imgarr =[]
		this.$http.get("http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true")
			.then(res => {
				this.bannerarr = res.data.InnerData[0].InnerData
				res.data.InnerData.map((index,value)=>{
					if(value>=3&&value<=28){
						this.imgarr.push(index.InnerData.ImageUrl)
					}
				})
			})
	}
}</script>

<style lang="less"  >body {
	background: #f2f2f2;
	box-sizing: border-box;
}

.icon-sousuo-liebiao {
	font-size: 0.4rem;
	color: white;
	line-height: 0.8rem;
}

.div-swiper {
	height: 4.25rem;
	padding-top: 1.6rem;
	width: 100%;
}

.index-nav_bom {
	width: 100%;
	height: 4rem;
	margin: 0.2rem 0;
	background: #FFFFFF;
	position: relative;
	h3 {
		line-height: 0.9rem;
		text-align: center;
		font-size: 0.28rem;
		font-weight: 300;
		width: 2.4rem;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		z-index: 2;
		position: absolute;
	}
	span {
		width: 3.6rem;
		border-bottom: 1px solid #000;
		position: absolute;
		top: 0.45rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}
	ul {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 0.7rem;
		padding-bottom: 0.2rem;
		li {
			width: 25%;
			height: 1.2rem;
			float: left;
			margin-top: 0.3rem;
			position: relative;
			a {
				display: block;
				width: 100%;
				text-align: center;
				height: 0.86rem;
				line-height: 0.86rem;
				font-size: 0.5rem;
				font-weight: 600;
				color: white;
				z-index: 2;
				position: absolute;
				top: 0;
				left: 0;
			}
			p {
				text-align: center;
				font-size: 0.2rem;
				margin-top: 0.9rem;
			}
			i {
				display: block;
				position: absolute;
				width: 0.76rem;
				height: 0.76rem;
				top: 0.04rem;
				left: 50%;
				transform-origin: center;
				transform: translateX(-50%) rotate(45deg);
				border-radius: 30%;
			}
		}
	}
}
.index_actve {
	width: 100%;
	height: 2.5rem;
	img{
		width: 100%;
		height: 100%;
	}
}
.index_te{
	width: 100%;
	overflow: hidden;
	margin-top: 0.2rem; 
	ul{
		width: 100%;
		img{
			width: 100%;
		}
	}
}
.no_more{
	width: 100%;
	padding-bottom: 1rem;
	font-size: 0.2rem;
	line-height: 0.4rem;
	text-align: center;
}
</style>
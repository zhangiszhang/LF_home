<template>
	<div class="idle">
		<v-header titel="闲逛"></v-header>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="allLoaded" :autoFill="false" id="fonts" :topPullText="txt">
			<div class="idle_list">
				<ul class="idle_ul2">
					<li v-for="(ele,index) in arr1">
						<router-link :to="'item/'+ele.ItemInfoID" :data-goodid="ele.ItemInfoID" :key="ele.ItemInfoID">
							<img v-lazy="'http://i.lifevccdn.com/'+ele.ImageUrl" alt="你好">
							<h3>{{ele.Name}}</h3>
							<p>
								<span>¥{{ele.SalePrice}}</span>
								<b>月销:{{ele.SaleQty}}</b>
							</p>
						</router-link>
					</li>
				</ul>
				<ul class="idle_ul1">
					<section>
						<div v-for="(ele,index) in arr2.ConfigerList">
							{{ele.Title}}
						</div>
					</section>
					<li v-for="(ele,index) in arr3">
						<router-link :to="'item/'+ele.ItemInfoID" :data-goodid="ele.ItemInfoID" :key="ele.ItemInfoID">
							<img v-lazy="'http://i.lifevccdn.com/'+ele.ImageUrl" />
							<h3>{{ele.Name}}</h3>
							<p>
								<span>¥{{ele.SalePrice}}</span>
								<b>月销:{{ele.SaleQty}}</b>
							</p>
						</router-link>
					</li>
				</ul>
			</div>
		</mt-loadmore>
		<v-footer></v-footer>
	</div>
</template>

<script>
	export default {
		name: "idle",
		data() {
			return {
				allLoaded: false,
				arr1: [],
				arr2: {},
				arr3: [],
				pageNo: 1,
				txt: "刷新"
			}
		},
		mounted() {
			this.$http.get("/newapi/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=" + this.pageNo + "&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true")
				.then(res => {
					var lsl = []
					//console.log(res.data.InnerData.StrollList[0])
					res.data.InnerData.StrollList.map((ele, index) => {
						if(ele.Type == 3) {
							this.arr2 = ele
						} else {
							lsl.push(ele)
						}
					})
					lsl.map((ele, index) => {
						if(index % 2 == 0) {
							this.arr1.push(ele)
						} else {
							this.arr3.push(ele)
						}
					})
				})
		},
		methods: {
			loadTop() {
				this.pageNo = 1
				this.allLoaded = false
				this.arr1 = []
				this.arr2 = []
				this.arr3 = []
				this.$http.get("/newapi/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=" + this.pageNo + "&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true")
					.then(res => {
						var lsl = []
						//console.log(res.data.InnerData.StrollList[0])
						res.data.InnerData.StrollList.map((ele, index) => {
							if(ele.Type == 3) {
								this.arr2 = ele
							} else {
								lsl.push(ele)
							}
						})
						lsl.map((ele, index) => {
							if(index % 2 == 0) {
								this.arr1.push(ele)
							} else {
								this.arr3.push(ele)
							}
						})
						this.$refs.loadmore.onTopLoaded()
					})

			},
			loadBottom() {
				this.pageNo++
					if(this.pageNo <= 5) {
						this.$http.get("/newapi/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=" + this.pageNo + "&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true")
							.then(res => {
								//console.log(res.data.InnerData.StrollList)
								res.data.InnerData.StrollList.map((ele, index) => {
									if(index % 2 == 0) {
										this.arr1.push(ele)
									} else {
										this.arr3.push(ele)
									}
								})
								this.$refs.loadmore.onBottomLoaded()
							})
					} else {
						//超过5页不加载
						this.allLoaded = true
						this.$refs.loadmore.onBottomLoaded()
					}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	#Home-Header {
		background-image: none;
	}
	
	.idle_list {
		width: 100%;
		overflow: hidden;
		padding: 0.8rem 0;
		ul {
			width: 50%;
			float: left;
			li {
				width: 94%;
				padding: 3%;
				clear: both;
				a {
					display: block;
					width: 100%;
					height: 4.26rem;
					img {
						width: 100%;
						height: 3.5rem;
						border-radius: 6%;
					}
					img[lazy=loading] {
						width: 100%;
						height: 3.5rem;
						border-radius: 6%;
						background: #CCCCCC; 
					}
					h3 {
						font-size: 0.22rem;
						height: 0.26rem;
						overflow: hidden;
						line-height: 0.26rem;
					}
					p {
						font-size: 0.24rem;
						span {
							float: left;
							color: red;
						}
						b {
							float: right;
							font-weight: 100;
							color: #CCCCCC;
						}
					}
				}
			}
			section {
				width: 100%;
				height: 2rem;
				div {
					width: 46%;
					height: 46%;
					float: left;
					margin: 1% 2%;
					box-sizing: border-box;
					border-radius: 7%;
					background: #CCCCCC;
					line-height: 0.9rem;
					text-align: center;
					font-size: 0.16rem;
				}
			}
		}
	}
	
	#fonts {
		font-size: 0.3rem;
	}
</style>
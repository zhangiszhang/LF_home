<template>
	<div class="sig">
		<header>
			<a href="javascript:window.history.go(-1);" class="sig_shang iconfont icon-fanhui"></a>
			<router-link to="/index">
				<img src="../assets/fonts/下载.png" />
			</router-link>
		</header>
		<div class="sig_bom">
			<div class="sig_bom_one" ref="qie">
				<h3>新用户注册</h3>
				<mt-field placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field placeholder="请输入登录密码" type="tel" v-model="word">
					<mt-button type="primary" class="yanma">忘记密码</mt-button>
			</mt-field>
				<p  @click="qiesig">手机号快速登录</p>
				<button class="btn_reg" @click="fn">登录</button>
				<button class="btn_gin" @click="btnreg">注册</button>
			</div>
			<div class="sig_bom_two" ref="qietwo">
				<h3>新用户注册</h3>
				<mt-field placeholder="请输入手机号" type="tel" >
					<mt-button type="primary" class="yanma">获取验证码</mt-button>
				</mt-field>
			<mt-field placeholder="请输入手机验证码" type="tel"   >
			</mt-field>
				<p  @click="qiesigtwo">
					<span>遇到问题 ? 请 <a>联系客服</a></span>
					账号密码登录</p>
				<button class="btn_reg">登录</button>
				<button class="btn_gin" @click="btnreg">注册</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	export default {
		name :"sig",
		data(){
			return{
				phone:"",
				word:""
			}
		},
		methods:{
			btnreg(){
				this.$router.push("/reg")
			},
			qiesig(){
				this.$refs.qie.style.display ="none"
				this.$refs.qietwo.style.display ="block"
			},
			qiesigtwo(){
				this.$refs.qie.style.display ="block"
				this.$refs.qietwo.style.display ="none"
			},
			fn(){ 
				var ls = localStorage.getItem("user")
				ls = JSON.parse(ls) 
				var cont =""
				var arr =[false,false]
				if(this.phone != ls.cont.name){
					cont ="账号不正确"
					arr[0]=false
				}else{
					arr[0]=true
				}
				if(this.word != ls.cont.word){
					cont ="密码不正确"
					arr[1]=false
				}else{
					arr[1]=true
				}
				if(arr[0] == true && arr[1] ==true){
					cont = "登录成功正在跳转"
					setTimeout(()=>{
				 		this.$router.push("/index")
				 	},3000)
					var obj = {
				 		type:"true",
				 }
					
				 	localStorage.setItem("zt",JSON.stringify(obj))
				}
				Toast(cont)
			}
		}
	}
</script>

<style lang="less">
		body{
		height: 100%; 
	}
	#app{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.sig{
		width: 100%;
		height: 100%;
		header{
			width: 100%;
			height: 20%;
			background: white;
			position: relative; 
			 img{
			 	margin: 0 auto;
			 	display: block;
			 	width: 2.1rem;
			 	height: 1.1rem;  
			 	transform: translateY(50%);
			 }
			 .sig_shang{
			 	display: block;
			 	width: 0.5rem;
			 	height: 0.5rem;
			 	border: 2px solid #159963;
			 	border-radius: 50%;
			 	color: #159963;
			 	text-align: center;
			 	line-height: 0.5rem;
			 	font-size: 0.36rem;
			 	position: absolute;
			 	top: 50%;
			 	left: 0.3rem;
			 	transform: translateY(-50%);
			 }
		}
		.sig_bom{
			width: 100%; 
			height: 80%;  
			background-image: url(../assets/fonts/login-big.jpg);
			background-repeat: no-repeat;
	        background-position:bottom;
	        background-size: 100% 100%;
	        box-sizing: border-box;
	        padding: 0 0.15rem;
	        position: relative;
	        	.sig_bom_one,.sig_bom_two{
	        		position: absolute;
	        		top: 0;
	        		left: 0;
	        		width:100%;
	        		h3{
		        		width: 100%;
		        		line-height: 1rem;
		        		text-align: center;
		        		font-size: 0.36rem;
		        		color:#159963 ;
		        	}
		        	.btn_reg{ 
	        		border-radius: 0.12rem; 
	        		width: 70%;
	        		height: 0.7rem;
	        		line-height: 0.6rem;
	        		font-size: 0.3rem;
	        		color: white;
	        		margin: 0 auto;
	        		clear: both;
	        		display: block;
	        		margin-top: 0.15rem;
	        		background: #3aad36;
	        	}
	        	.btn_gin{ 
	        		border-radius: 0.12rem; 
	        		width: 70%;
	        		height: 0.7rem;
	        		line-height: 0.6rem;
	        		font-size: 0.3rem;
	        		color: white;
	        		margin: 0 auto;
	        		display: block;
	        		margin-top: 0.2rem;
	        		background: #b6b6b6;
	        		opacity: 0.6;
	        	}
	        	.mint-cell-wrapper{
	        		background:  -webkit-linear-gradient(left , #ededed , #e2e2e2);	        		
	        	}
	        	.mint-cell-value{
	        		background:  -webkit-linear-gradient(left , #ededed , #e2e2e2);
					height: 0.66rem;
	        	}
	        	input{
	        		 background:  -webkit-linear-gradient(left , #ededed , #e2e2e2);
	        		 border-bottom: 1px solid #CCc;
	        		 height: 100%;
	        		 line-height: 0.66rem;        		  	        		       		
	        	}
	        	.yanma{
	        		border: 1px solid #3aad36;
	        		height: 0.56rem;
	        		background: transparent;
	        		color: #3aad36;
	        	}
	        	p{
	        		width: 100%;
	        		text-align: right;
	        		font-size: 0.24rem;
	        		color: #3aad36;
	        		box-sizing: border-box;
	        		padding: 0 0.2rem;
	        		line-height: 0.4rem;
	        		span{
	        			float: left;
	        			color: #000000;
	        			a{
	        				color: #3aad36;
	        			}
	        		}
	        	}	
	        	}
	        	.sig_bom_two{
	        		display: none;
	        	}
	        }
	        }
</style>
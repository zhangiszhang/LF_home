<template>
	<div class="reg">
		<header>
			<a href="javascript:window.history.go(-1);" class="reg_shang iconfont icon-fanhui"></a>
			<router-link to="/index">
				<img src="../assets/fonts/下载.png" />
			</router-link>
		</header>
		<div class="reg_bom">
			<h3>新用户注册</h3>
			<mt-field placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field placeholder="请设置6-20位密码,包含字母,数字或符号" type="tel" v-model="spsword" ></mt-field>
			<mt-field  placeholder="请输入图形验证码">
					<img :src="imgsrc" class="erwei" >
					<img src="../assets/fonts/sx.png" class="sx" @click="newimg"/>	
			</mt-field>
			<mt-field  placeholder="请输入短信验证码"  >
					<mt-button type="primary" class="yanma">获取验证码</mt-button>
			</mt-field>
			<p>
				<input type="checkbox" class="radio" checked="checked"/>
				<span>阅读并同意 《丽芙家居用户协议》 《隐私声明》
              </span>
			</p>
			<button class="btn_reg" @click="btnreg">注册</button>
			<button class="btn_gin">登录</button>
			<h4>
				如有问题请
				<a>联系客服</a>
			</h4>
		</div>
	</div>
</template>

<script>
	
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	export default {
		name : "reg",
		data(){
			return{
				imgsrc:"http://account.lifevc.com/Account/NewVerifyCode?t=1505728034354",
				phone:"",
				spsword:""
			}
		},
		mounted(){
			this.$http.get("http://account.lifevc.com/Account/NewVerifyCode?t=1505728034354")
			.then(res=>{ 
			})
		},
		methods:{
			//获取新的二维码
			newimg(){
				this.imgsrc = "http://account.lifevc.com/Account/NewVerifyCode?t="+new Date().getTime()
			},
			//注册
			
			btnreg(){
				var ls = ""
				var arr = [false,false]
				 if(!this.phone){
				 	ls='手机号码不能为空'
				 	arr[0] = false
				 }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))){ 
				 	ls='手机号码格式不正确'
				 	arr[0] = false			 	
				 }else{
				 	arr[0] = true
				 }
				 if(!this.spsword){
				 	ls='密码不能为空'
				 	arr[1] = false 
				 }else if(!(/^\w{6,16}$/).test(this.spsword)){
				 	ls="密码格式不正确"
				 	arr[1] = false
				 }else{
				 	arr[1] = true 
				 }
				 
				 if(arr[0]==true && arr[1] == true){
				 	ls = "注册成功即将跳转"
				 	setTimeout(()=>{
				 		this.$router.push("/index")
				 	},3000)
				 	var obj = {
				 		type:"user",
				 		cont:{
				 			name:this.phone,
				 			word:this.spsword
				 		}
				 	}
				 	
				 	localStorage.setItem("user",JSON.stringify(obj))
				 }
				 Toast(ls)
			}
		}
	}
</script>

<style lang="less" >	
	body{
		height: 100%; 
	}
	#app{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.reg{
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
			 .reg_shang{
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
		.reg_bom{
			width: 100%; 
			height: 80%;  
			background-image: url(../assets/fonts/login-big.jpg);
			background-repeat: no-repeat;
	        background-position:bottom;
	        background-size: 100% 100%;
	        box-sizing: border-box;
	        padding: 0 0.15rem;
	        	h3{
	        		width: 100%;
	        		line-height: 1rem;
	        		text-align: center;
	        		font-size: 0.36rem;
	        		color:#159963 ;
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
	        	.erwei{
	        		width: 1.2rem;
	        		height: 0.46rem;
	        		margin-top: -0.12rem;
	        	}
	        	.sx{
	        		width: 0.3rem;
	        		height: 0.3rem;
	        	}
	        	.yanma{
	        		border: 1px solid #3aad36;
	        		height: 0.56rem;
	        		background: transparent;
	        		color: #3aad36;
	        	}
	        	p{
	        		width: 100%;
	        		height: 0.6rem;
	        		box-sizing: border-box;
	        		padding: 0 0.2rem;
	        		.radio{ 
	        			background: -webkit-linear-gradient(left, #ededed, #e2e2e2);
					    border-bottom: none; 
					    line-height: 0.3rem;
					    width: 0.3rem;
					    height: 0.3rem;
					    display: block;
					    margin: 0.2rem;
					    float: left; 
	        		}
	        		span{
	        			float: left;
	        			line-height: 0.7rem;
	        			font-size: 0.14rem;
	        		}
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
	        	h4{
	        		font-size: 0.30rem;
	        		text-align: center;
	        		margin-top: 0.2rem;
	        		a{
	        			color: blue;
	        		}
	        	}
		}
	}

</style>
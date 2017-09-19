<template>
        <div class="Home-Header" id="Home-Header">
            <slot name="left"></slot>
            <p >{{titel}}</p>
            <slot name="right"></slot>
        </div>
</template>

<script>
    export default {
        name : "header",
        props:{
            titel:{
                type : String,
                default : "首页"
            }
        }
    }
</script>
<style lang="less">
    #Home-Header{
    	position: fixed;
    	top: 0;
    	left: 0;
        height :0.8rem;
        background:#89be48 ;
    	background-image: url(../../assets/fonts/header-bg.png );
    	background-repeat: no-repeat;
        background-position:50%;
    	background-size:50% ;
        width:100%;
        box-sizing: border-box;
        padding: 0 0.2rem; 
        z-index:10;
        p{
            font-size : 0.3rem;
            text-align: center;
            line-height: 0.8rem;
            color: white;
        }
        a{
        	display: block;
            &:first-child{
            position: absolute;
            left: 0.2rem;
            top: 0rem;
          	 
            }
            &:last-child{
                position: absolute;
                right: 0.2rem;
                top: 0rem;
            }
        }
    } 

</style>
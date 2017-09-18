<template>
    <div class="index-nav">
        <section  ref="name">
             <router-link   active-class="u-link--Active" v-for="(ele,index) in arr" :key="index" :to="ele.path" ><a>{{ele.name}}</a></router-link>            
        </section>
    </div>
</template>

<script> 
        export default {
            name : "nav",
            data(){
                return {
                arr:[
                    {
                        name:"首页",
                        path:"/index"
                    },
                    {
                        name:"新品",
                        path:"/idle"
                    },
                    {
                        name:"家务",
                        path:"/idle"
                    },
                    {
                        name:"下厨",
                        path:"/idle"
                    },
                    {
                        name:"生活",
                        path:"/idle"
                    },
                    {
                        name:"家居服",
                        path:"/idle"
                    },
                    {
                        name:"床品",
                        path:"/idle"
                    },
                    {
                        name:"洗漱沐浴",
                        path:"/idle"
                    },
                    {
                        name:"了解LifeVC",
                        path:"/idle"
                    }
                ]
            }
                }
            
        }
</script>

<style lang="less">
    .index-nav{
        z-index:10;
        height: 0.8rem;
        width: 100%;
        position: fixed;
        top: 0.8rem;
        background:#fff;
        left: 0;
        overflow-x: scroll;
        overflow-y: hidden; 
        //隐藏滚动条
        &::-webkit-scrollbar{
            	display: none;
            }
        section{
            
            width : 11.7rem;
                a{
                display: block;
                height: 0.78rem;
                line-height: 0.78rem;
                font-size: 0.26rem;
                float: left;
                padding:0 0.15rem;
                text-align: center; 
                //路由激活active
                &.u-link--Active{
                    border-bottom:0.03rem solid #89be48;
                    color: #89be48;
                }
            }
        }
        
    }
    
</style>
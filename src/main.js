// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import $ from 'jquery'
import "less-loader"
import Header from "./components/public/Header"
import Nav from "./components/public/Nav"
import Footer from "./components/public/Footer"
import Content from "./components/public/Content"
import { Loadmore } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';





import { Swipe, SwipeItem } from 'mint-ui';
import axios from "axios"
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.use(Lazyload);
Vue.component(Loadmore.name, Loadmore);
Vue.prototype.$http = axios
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



//头部,底部公共组件注册
Vue.component("v-header",Header)
Vue.component("v-nav",Nav)
Vue.component("v-footer",Footer)
Vue.component("v-content",Content)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

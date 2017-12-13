import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'

// Mint-UI
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

import VueRouter from 'vue-router'
// import store from './vuex/store'
// import Vuex from 'vuex'
// axios
import axios from 'axios'

Vue.prototype.$axios = axios;     // Vue2.0+官方推荐

// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.prototype.$NProgress = NProgress;

import routes from './routes'

import { setLocalStorage, getLocalStorage } from './api/api';
// import api_port from './api/api_address';

// Vue.use(api_port)
Vue.use(VueRouter)
// Vue.use(Vuex)

const router = new VueRouter({
	mode: 'history',       // 需要后台配置支持
	routes
})

// 全局 axiosBaseURL
Vue.prototype.$BASE_URL = process.env.API_ROOT;
// 路由前置守卫
router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
})
// 路由后置守卫
router.afterEach((to, from) => {
	NProgress.done();
})


new Vue({
	router,
	// store,
	render: h => h(App)
}).$mount('#app')


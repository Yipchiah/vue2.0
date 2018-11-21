import axios from 'axios';
import store from '../store/store.js'
import router from '../router'
import Vue from 'vue'
let res = {};
res.SESSION = process.env.NODE_ENV == 'development' ? (localStorage.getItem('sessionId') ? localStorage.getItem('sessionId') : null) : (localStorage.getItem('sessionId') ? localStorage.getItem('sessionId') : null)
res.appType = {
	type: function() {
		var u = navigator.userAgent;
		return { //移动终端浏览器版本信息
			mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			androidToJs: u.indexOf('androidToJs') > -1 || u.indexOf('Linux') > -1, //androidToJs终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mapi/ads/StarRankingac') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1,
			wechat: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
			//是否web应该程序，没有头部与底部
		};
	}()

}




const key = '';
let devUrl = "/api/";
//Vue.prototype.$imgUrl = 'https://java1.d.aiitec.org';
//Vue.prototype.$imgUrl = 'https://java1.t.aiitec.org';
if(window.location.host == "h5.crocodilesecret.d.aiitec.org") {
	//	let url = 'http://' + window.location.host;
	Vue.prototype.$shareUrl = 'https://h5.gitlab.aiitec.org';
	devUrl = "http://gitlab.aiitec.org/java/GaitQianhe/";
	//Vue.prototype.$imgUrl = url;
} else if(window.location.host == "h5.crocodilesecret.t.aiitec.org") {
	devUrl = "http://gitlab.aiitec.org/java/GaitQianhe/";
	Vue.prototype.$shareUrl = 'https://gitlab.aiitec.org';
} else if(window.location.host == "meililingba-h5.b.aiitec.net") {
	Vue.prototype.$shareUrl = "https://meililingba-h5.b.aiitec.net"
	devUrl = "https://api.meililingba.com/CrocodileSecret/api/"
} else if(window.location.host == "api.meililingba.com") {
	Vue.prototype.$shareUrl = "https://api.meililingba.com"
	devUrl = "https://api.meililingba.com/CrocodileSecret/api/"
} else if(window.location.host == "d.aiitec.org") {
	devUrl = "http://java1.d.aiitec.org/GaitQianhe/api/";

}else if(window.location.host == "t.aiitec.org") {
	devUrl = "http://java1.d.aiitec.org/GaitQianhe/api/";

}
res.devUrl = devUrl

res.getSession = function() {

	let result = localStorage.getItem('sessionId');


	if(result) {
		res.SESSION = result;

		return result;
	}
}

axios.defaults.timeout = 10000;
axios.defaults.retry = 4;
axios.defaults.retryDelay = 10000;

axios.interceptors.request.use(config => {
	// Do something before request is sent
	//let token =  = store.getters.token;

	//config.headers['X-Token'] = "sassssssssssssssssssss";

	return config;
}, error => {


	// Do something with request error
	return Promise.reject(error);
});

//axios响应拦截
axios.interceptors.response.use(response => {

	return response;
}, err => {
	let config = err.config;
	const pattern = /timeout of 10000ms exceeded/g;
  const isChunkLoadFailed = err.message.match(pattern);
  if(isChunkLoadFailed){
	// If config does not exist or the retry option is not set, reject
	if(!config || !config.retry) return Promise.reject(err);

	// Set the variable for keeping track of the retry count
	config.__retryCount = config.__retryCount || 0;

	// Check if we've maxed out the total number of retries
	if(config.__retryCount >= config.retry) {
		// Reject with the error
		return Promise.reject(err);
	}

	// Increase the retry count
	config.__retryCount += 1;
	config.retry += 1 //去掉则不会无限循环
	// Create new promise to handle exponential backoff
	var backoff = new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, config.retryDelay || 1);
	});

	// Return the promise in which recalls axios to retry the request
	return backoff.then(function() {
		return axios(config);
	});

  }


});

res.axiosApi = function(url, option, method = 'post', stopLogin = false) {
	let promise;

	promise = new Promise((resolve, reject) => {
		if(method == 'post') {
			option.headers = {
				'Content-Type': 'multipart/form-data'
			}
			if(option.data) {

			} else {
        // console.log(option.params)

				option.params.m = '123' //m值
				//   var key="cssH5-8149537095"
				//
				//      			console.log(JSON.stringify(option.params));
				//
				//
				//      			option.params.m = md5(key+md5(JSON.stringify(option.params)));
				//
				let formdata = new FormData();
				formdata.append('json', JSON.stringify(option.params));
				option.data = formdata;
				option.params = null;
			}

		}

		axios(Object.assign({
			method,
			url
		}, option)).then((response) => {
      if(response.data.q.s==1106){
				store.commit("changeDisaber",false)
				router.replace({
           name:"Home"
				})

			}else{
				store.commit("changeDisaber",true)
				resolve(response.data)
			}


		}).catch((err) => {

			reject(err)
		})
	})
	return promise;
}

export default res;

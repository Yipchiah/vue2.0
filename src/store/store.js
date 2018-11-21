import Vue from 'vue'
import Vuex from 'vuex'
import Home from './Home/Home.js'
import Shop from './Shop/Shop.js'
Vue.use(Vuex)


const store = new Vuex.Store({
	modules:{
		Home:Home,
		Shop:Shop
	},
	state: {
avatar:""
	},
	getters: {
		getAvatar:state=>{
			return state.avatar
		},
	},
	mutations: {

	},
	actions: {


	}


})
export default store

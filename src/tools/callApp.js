let app = {

	type: (function () {
		let u = navigator.userAgent
		return { // 移动终端浏览器版本信息
			mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
			androidToJs: u.indexOf('androidToJs') > -1 || u.indexOf('Linux') > -1, // androidToJs终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, // 是否iPad
			webApp: u.indexOf('Safari') === -1,
			wechat: u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
			// 是否web应该程序，没有头部与底部
		}
	})()
}


class SendMessage {
	constructor(options, name) {
		this.options = options || {}
		this.name = name || ''
	}
	send() {
		if (app.type.ios) {
			// eslint-disable-next-line no-undef
			window.webkit.messageHandlers[this.name].postMessage(param)
		} else {
			window.androidToJs[this.name]()
		}
		window[this.name] = this.send()
	}

}

let getMessage = {
	// eslint-disable-next-line no-empty-function
	getSession(session) {

	}

}

window.getSession = getMessage.getSession


export { SendMessage, getMessage }
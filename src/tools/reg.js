class Reg { // 正则
    constructor(options) {
        this.str = options || ''

    }
    tel() { // 电话号码
        let newReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        return newReg.test(this.str)
    }
    num() { // 是否为纯数字
        let newReg = /^[0-9]*$/
        return newReg.test(this.str)
    }

    specialChar() { // 是否含有特殊字符

        
        let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im
        let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im
        let newBol = null
        if (regEn.test(this.str) || regCn.test(this.str)) {
            newBol = true
        } else {
            newBol = false
        }
        return newBol
    }

    alipay() { // 支付宝
        let newReg = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d{9,11}$/
        return newReg.test(this.str)
    }

    cash() { // 金额
        let newReg = /^\d+(\.\d+)?$/
        return newReg.test(this.str)

    }

    email() { // 邮箱
        
        let newReg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
        return newReg.test(this.str)
    }

    identityCard() { // 身份证
        let newReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        return newReg.test(this.str)
    }

    isChinese() { // 中文
        let newReg = /^[\\u4e00-\\u9fa5]{0,}$/
        return newReg.test(this.str)
    }

}

export { Reg }
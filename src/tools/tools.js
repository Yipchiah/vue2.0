class RemoveDuplication{    //去重
    constructor(options,key){
        this.options=options?options:[];
        this.key=key?key:null;
          return this.init()?this.init():[];
      }
      init(){
        let res = [];
        let json = {};
        if(this.options.length==0){
            return [];
        }
		for(let i = 0; i < this.options.length; i++) {
		       if(this.key){
                if(!json[this.options[i][this.key]]) {
					res.push(this.options[i]);
					json[this.options[i][this.key]] = 1;
						}
               }else{
                if(!json[this.options[i]]) {
					res.push(this.options[i]);
					json[this.options[i]] = 1;
						}
               }
			}
					return res;

      }

};

class NumAcc{  //数字精度
     constructor(num1,num2){
    this.num1=num1?num1:0
    this.num2=num2?num2:0

     }
    
     add() {//相加
        let r1,r2,m;  
        try{r1=this.num1.toString().split(".")[1].length}catch(e){r1=0}  
        try{r2=this.num2.toString().split(".")[1].length}catch(e){r2=0}  
        m=Math.pow(10,Math.max(r1,r2))  
        return (this.num1*m+this.num2*m)/m  
        }
     
      sub(){ //相减
        let r1,r2,m;  
        try{r1=this.num1.toString().split(".")[1].length}catch(e){r1=0}  
        try{r2=this.num2.toString().split(".")[1].length}catch(e){r2=0}  
        m=Math.pow(10,Math.max(r1,r2))  
        return (this.num1*m-this.num2*m)/m  
      }
  
      mul(){ //相乘
        let m=0,s1=this.num1.toString(),s2=this.num2.toString();   
        try{m+=s1.split(".")[1].length}catch(e){}   
        try{m+=s2.split(".")[1].length}catch(e){}   
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)   

      }

      div(){  //相除
        let t1=0,t2=0,r1,r2;   
        try{t1=this.num1.toString().split(".")[1].length}catch(e){}   
        try{t2=this.num2.toString().split(".")[1].length}catch(e){}   
            r1=Number(this.num1.toString().replace(".",""))   
            r2=Number(this.num2.toString().replace(".",""))   
            return (r1/r2)*pow(10,t2-t1);   
        


      }



}


class WxMedia{ //多媒体
       constructor(cb,dom){
          this.dom=dom?dom:null;
          this.cb=cb?cb:""
          return this.init()
          
       }

       init(){
          let media=document.getElementById(this.dom);
          if(window.WeixinJSBridge) {
						WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
              media[this.cb]()
						}, false);
					} else {
						document.addEventListener("WeixinJSBridgeReady", function() {
							WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
                media[this.cb]()
							});
						}, false);
					}
          media[this.cb]()
          
       }



}


class ChangeDate{  //时间格式化
       constructor(date,fmt){
        this.date=date?date:0;
        this.fmt=fmt?fmt:"";
          this.o = {
          "M+": new Date(this.date).getMonth() + 1, //月份 
          "d+": new Date(this.date).getDate(), //日 
          "h+": new Date(this.date).getHours(), //小时 
          "m+": new Date(this.date).getMinutes(), //分 
          "s+": new Date(this.date).getSeconds(), //秒 
          "q+": Math.floor((new Date(this.date).getMonth() + 3) / 3), //季度 
          "S": new Date(this.date).getMilliseconds() //毫秒 
      };
       }
       
       init(){
        if (/(y+)/.test(this.fmt)) this.fmt = this.fmt.replace(RegExp.$1, (new Date(this.date).getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in this.o)
        if (new RegExp("(" + k + ")").test(this.fmt)) this.fmt = this.fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (this.o[k]) : (("00" + this.o[k]).substr(("" + this.o[k]).length)));
        return this.fmt;

       }

 

}









export  { RemoveDuplication,NumAcc,WxMedia,ChangeDate }
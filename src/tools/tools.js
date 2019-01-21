class RemoveDuplication{    //去重
    constructor(options,key){
        this.options=options?options:[];
        this.key=key?key:null;
          return this.init()?this.init():[];
      }
      init(){
        let json = {};
        if(this.options.length==0){
            return [];
        }
    let res= this.options.reduce((arr,item)=>{
      if(this.key){
        json[item[this.key]]?null:json[item[this.key]]=true && arr.push(item);
      return arr;
      }else{
        json[item]?null:json[item]=true && arr.push(item);
      return arr;
      }
    },[])
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





class timestamp{  //时间格式化
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


 class  Curry{   //柯里化函数
    
    curry(fn,args){
     
     let that=this;
     let arg=args?args:[];
     let newfn=function(){
       let newArgs=arg.concat([].slice.call(arguments));
       return that.curry.call(that,fn,newArgs)
     }
     
     newfn.toString=function(){
       return fn(...arg)
     }
     return newfn
      // return function(){
      //   let _args=[...arg];
      //   for(let i=0;i<arguments.length;i++){
      //     let newArg=arguments[i] ;
      //     _args.push(newArg)
      //   }
      //   if(_args.length<len){
      //      return that.curry.call(that,fn,_args)
      //   }else{     
      //     return fn.apply(this,_args)
      //   }
      // }

    }
 }





class deepClone{          //深度克隆
     constructor(obj){
       this.obj=obj?obj:{};
      if (!this.isObject(this.obj)) {
        throw new Error('非对象')
      }

      let isArray = Array.isArray(this.obj)
      let newObj = isArray ? [...this.obj] : { ...this.obj }
      let that=this
      Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = that.isObject(that.obj[key]) ? new deepClone(that.obj[key]) : that.obj[key]
      })
      return newObj
     }
     
     isObject(o) {
      return (typeof o === 'object' || typeof o === 'function') && o !== null
    }


}


class filterObj{
       constructor({obj,arr,key,value}){
            this.arr=new deepClone(arr)?new deepClone(arr):[]

       }


}

function throttle(fn, gapTime) { //节流
  if (gapTime === null || gapTime === undefined) {
      gapTime = 1500
  }

  let _lastTime = null
  return function () {
      let _nowTime = + new Date()
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
          
          fn.apply(this, arguments)   //将this和参数传给原函数
          _lastTime = _nowTime
      }
  }
}


function delay(fn,gapTime){  //收集请求 只请求最后一次
  if(gapTime===null||gapTime===undefined){
     gapTime = 1500
  } 
  let  _lastTime = null   
  return  function(){ 
     let _nowTime = + new Date()
     
     _lastTime = _nowTime
     setTimeout(()=>{
        let now=+new Date()
        if(now-_lastTime>=gapTime){
           fn.apply(this, arguments)
        }
     },gapTime)
  }
}





export  { RemoveDuplication,NumAcc,timestamp,Curry,deepClone,throttle,delay};


 class  UploadImg{ //微信浏览器上传图片
    constructor(arr,length,cb){
      this.arr=arr?arr:[];
     this.length=length?length:0;
     this.cb=cb?cb:null;
     this.newArr=[];
   
     return   this.upload(this.arr,this.length)
    }
    upload(arr,length){
        let localId=arr.shift()
        let that=this;
        wx.uploadImage({
            localId: localId,
            isShowProgressTips: 0,
            success(res){
            that.newArr.push(res.serverId);
            if(length==that.newArr.length){
               that.cb(that.newArr)
            }
            
            if (arr.length > 0) {
              that.upload(arr, length);
            }


            }
        })

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

export {UploadImg,WxMedia}
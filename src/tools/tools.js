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



}

class  Reg{      //正则

constructor(str,type){
      this.str=str?str:""
      this[type]()
}
tel(){
   let reg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/
   
}

}


export  { RemoveDuplication,Reg }
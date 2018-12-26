<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Link</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <video id="video" style="max-width:100%;background:red" src="https://gaitqianhe-1257295601.file.myqcloud.com/img/201811/14/174342_8018.mp4" @click="change"></video>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import  {RemoveDuplication,NumAcc,WxMedia} from '../tools/tools'
import {Reg} from '../tools/reg'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[1,2,3,4,4],
      arr1:[ {
        name:1
      },
      {
        name:1
      },{
        name:2
      }
      ],
      flag:false
    }
  },
  computed:{
    ...mapGetters({
       avatar: 'getAvatar'
    })
  },
  created(){
  
  },
  methods:{
      change(){
        if(this.flag){
          new WxMedia("pause","video")
        }else{
          new WxMedia("play","video")
        }
          this.flag=!this.flag
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  display: flex;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

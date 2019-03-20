
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Link</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>

    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    <video
      id="video"
      style="max-width:100%;background:red"
      src="https://gaitqianhe-1257295601.file.myqcloud.com/img/201811/14/174342_8018.mp4"
      @click="change"
    ></video>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { RemoveDuplication, Timestamp, Curry, DeepClone } from "../tools/tools";
import { WxMedia } from "../tools/wx";
// import { Reg } from '../tools/reg'
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arr: [1, 2, 3, 4, 4],
      arr1: [
        {
          name: 1
        },
        {
          name: 1
        },
        {
          name: 2
        }
      ],
      arr2: [
        {
          newArr: ["1", "2"]
        },
        {
          newArr: ["3", "4"]
        }
      ],
      flag: false
    };
  },
  computed: {
    ...mapGetters({
      avatar: "getAvatar"
    })
  },
  created() {
    // eslint-disable-next-line no-unused-vars
    let delArr = new RemoveDuplication(this.arr);
    // eslint-disable-next-line no-unused-vars
    let time = new Timestamp(new Date(), "yyyy-MM-dd").init();
    let newFun = new Curry().curry(this.getName);
    // eslint-disable-next-line no-unused-vars
    let num = newFun(2)(3);
    let newArr = new DeepClone(this.arr2);
    newArr[0].newArr[2] = "22";
    const programmerOutput = [
      {
        name: "Uncle Bobby",
        linesOfCode: 500
      },
      {
        name: "Suzie Q",
        linesOfCode: 1500
      },
      {
        name: "Jimmy Gosling",
        linesOfCode: 150
      },
      {
        name: "Gracie Hopper",
        linesOfCode: 1000
      }
    ];
    // eslint-disable-next-line no-unused-vars
    let totaOutput = programmerOutput
      .map(output => output.linesOfCode)
      .reduce((totalLines, lines) => totalLines + lines, 0);
  },
  methods: {
    change() {
      if (this.flag) {
        new WxMedia("pause", "video");
      } else {
        new WxMedia("play", "video");
      }
      this.flag = !this.flag;
    },
    getName(a = 0, b = 0, c = 0, d = 0) {
      return a + b + c + d;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

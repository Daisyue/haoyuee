<template>
  <div class="all">
    <head>
      <meta name="keywords" content="养老，护工管理">
      <meta name="description" content="养老">
      <title>昊钺科技</title>
    </head>
    <body>

      <div class="page">
          <div class="nav">
            <div id="nav-nav">
            <img src="../static/images/haoyue-logo.jpg" id="navigation-logo">
            <h1 id="navigation-font">昊钺科技</h1>
          </div>
          <div  v-for="(item,index) in navList" :key="index" :class="index == active?'active':''" @mousemove="active = index" @mouseout="active = null"
               @click="toPage(index)">{{ item.name }}
          </div>
        </div>
    </div>
    <div class="body">

    </div>

    </body>
    <div class="navbar">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: null,
      navList: [
        { name: '网站首页'},
        { name: '护工管理'},
        { name: '客户案例'},
        { name: '新闻资讯'},
        { name: '联系我们'},
      ],
    currentIndex :0,//当前所在图片下标
        timer:null,//定时轮询
        imgArr:[
      {	id:0,
        url:"",
      },{
        id:1,
        url:"./img/banner02.jpg",
      },{
        id:2,
        url:"./img/banner03.jpg",
      },{
        id:3,
        url:"./img/banner04.jpg",
      },
    ]
  }
  },
  props: {
    msg: String
  },
  methods: {
    toPage(e) {
      console.log(e, 'e')
      switch (e) {
        case 0:
          this.$router.push({path: '/index', query: {active: this.active}})
          break
        case 1:
          this.$router.push({path: '/index', query: {active: this.active}})
          break
        case 2:
          this.$router.push({path: '/food', query: {active: this.active}})
          break
        case 3:
          this.$router.push({path: '/me', query: {active: this.active}})
          break
        case 4:
          this.$router.push({path: '/joinUs'})
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../../src/static/style.css";

.page {
  .nav {
    text-indent: 10px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    height: 90px;
    font-size: 20px;
    cursor: pointer;
    div{
      width: 200px;
      text-align: center;
      line-height: 90px;
    }
  }

  .active {
    opacity: 0.65;
    background: #4390ab;
    color: #ffffff;
    padding: 0 5px;
    min-width: 120px;
  }
}
.all {

}
</style>

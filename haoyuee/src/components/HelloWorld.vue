<template>
  <div class="all">
    <head>
      <meta name="keywords" content="养老，护工管理">
      <meta name="description" content="养老">
      <title>昊钺科技</title>
    </head>
    <body>
    <div class="navv" :class="{'fixNav':navBarFixed}">
    <div class="page-head">
          <div class="nav">
            <div id="nav-nav">
            <img src="../static/images/haoyue-logo.jpg" id="navigation-logo" alt="/">
            <h1 id="navigation-font">昊钺科技</h1>
          </div>
          <div  v-for="(item,index) in navList" :key="index" :class="index == active?'active':''" @mousemove="active = index" @mouseout="active = null"
               @click="toPage(index)">{{ item.name }}
          </div>
        </div>
    </div>
    </div>
    <div class="page-1">

    </div>

    <div class="page-2">

    </div>

    <div class="page-3">

    </div>

    <div class="footer">

    </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      navBarFixed: false,
      navBarTop: 0,
      active: null,
      timer:null,
      navList: [
        { name: '网站首页'},
        { name: '护工管理'},
        { name: '客户案例'},
        { name: '新闻资讯'},
        { name: '联系我们'},
      ],
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
    },
    watchScroll() {
      // 滚动条：滚动的距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //  滚动的距离>元素到顶部的距离时，实现吸顶效果
      this.navBarFixed = scrollTop > this.navBarTop ? true : false;
    },
  },
  mounted(){
    window.addEventListener("scroll", this.watchScroll);
    this.timer = setInterval(()=>{
      let navDom = document.getElementsByClassName("nav")[0];
      //页面数据渲染完毕，获取导航栏到顶部的距离
      if (document.readyState === 'complete' && navDom) {
        this.navBarTop = navDom.offsetTop;
        window.clearInterval(this.timer);//清除定时器
      }
    },500)
  },
// 移除事件监听
//   destroyed() {
//     window.removeEventListener("scroll", this.watchScroll);
//   },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../../src/static/style.css";

.page-head {
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
.fixNav {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 999;
}
</style>

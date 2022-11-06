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
      <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,i) in img" :key="i">
              <img :src="item.pic" alt="">
            </div>
          </div>
<!--          换页器-->
          <div class="swiper-pagination">
          </div>
<!--          前进后退-->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
<!--          滚动条-->
        </div>
      </div>

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
import Swiper from 'swiper'


export default {
  name: 'HelloWorld',
  data () {
    return {
      img :[
        {pic:require('../static/images/elder-couple.jpeg')},
        {pic:require('../static/images/elder-couple.jpeg')},
        {pic:require('../static/images/elder-couple.jpeg')}
      ],
      // 导航吸顶
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
  methods: {
    stoplunbo () {
      clearInterval(this.timer)
      this.timer = null
    },
    changemark (index) {
      this.stoplunbo()
      this.lunboIndex = index
      this.btnNum = index
      this.runlunbo()
    },
    lunboJian () { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex--
          this.btnNum--
          if (this.lunboIndex === -1) {
            this.lunboIndex = 3
            this.btnNum = 3
          }
          this.jieliu = null
          this.runlunbo()
        }, 200)
      }
    },
    lunboAdd () { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex++
          this.btnNum++
          if (this.lunboIndex === 4) {
            this.lunboIndex = 0
            this.btnNum = 0
          }
          this.jieliu = null
          this.runlunbo()
        }, 200)
      }
    },
    runlunbo () {
      this.timer = setInterval(() => {
        this.lunboIndex++
        this.btnNum++
        if (this.lunboIndex === 4) {
          this.lunboIndex = 0
          this.btnNum = 0
        }
      }, 3000)
    },
    watchScroll() {
      // 滚动条：滚动的距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //  滚动的距离>元素到顶部的距离时，实现吸顶效果
      this.navBarFixed = scrollTop > this.navBarTop;
    }
  },
  components: {
  },

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


  mounted(){
    // eslint-disable-next-line no-unused-vars
    var mySwiper=new Swiper('#swiperIndex',{

      //

      loop: true,// 循环模式选择
      pagination:{
        el:".swiper-pagination",// 如果需要后退按钮
        clickable:true//
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
//     var mySwiper = 0;
//
//     if (mySwiper !== 0) {
//       mySwiper.destroy();
//     }
//
// // 动态加载数据后
//     mySwiper = new Swiper('.swiper-container', {
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       // loop: true,
//       observer: true,//修改swiper自己或子元素时，自动初始化swiper
//       observeParents: true,//修改swiper的父元素时，自动初始化swiper
//       // observeSlideChildren: true,
//       autoplay: {
//         delay: 3000,
//         // disableOnInteraction: false  // 手动滑动后仍会进行轮播
//       },
//     })
    // 吸顶
    window.addEventListener("scroll", this.watchScroll);
    this.timer = setInterval(()=>{
      let navDom = document.getElementsByClassName("nav")[0];
      //页面数据渲染完毕，获取导航栏到顶部的距离
      if (document.readyState === 'complete' && navDom) {
        this.navBarTop = navDom.offsetTop;
        window.clearInterval(this.timer);//清除定时器
      }
    },500)
  }
// 移除事件监听
//   destroyed() {
//     window.removeEventListener("scroll", this.watchScroll);
//   },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../../src/static/style.css";
.navv{
  z-index: 10;
}

.page-head {
  z-index: 9;
  .nav {
    text-indent: 10px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: center;
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

#swipercom{
  z-index: 1;
  width: 760px;
  #swiperIndex.swiper-container{
    width: 1516px;
    height: 760px;
    border-radius: 0.1rem;
    .swiper-slide img{
      width: 100%;
    }
    .swiper-pagination-bullet-active{
      background-color: orangered;
    }

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

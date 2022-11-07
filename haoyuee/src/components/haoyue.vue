<template>
  <div class="all">
    <html xmlns="http://www.w3.org/1999/xhtml">
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
<!--          <div class="swiper-button-next"></div>-->
<!--          <div class="swiper-button-prev"></div>-->
<!--          滚动条-->
        </div>
      </div>
    </div>
    <div class="page-2">
      <div class="main">
        <h2>大标题</h2>
        <div class="text-1">小标题</div>
        <div class="index-product-content">
          <div class="span1 fadeInDown"> <a class="index-title" title="业务一">
            <div class="list-backimg1">
              <div class="list-img">
                <img src="../static/images/045.png" alt="这是图标">
              </div>
              <div class="list-txt">
                <div class="list-title">标题</div>
                <div class="list-text">文字</div>
              </div>
            </div>
          </a> </div>
          <div class="span1 flipInx"> <a class="index-title" title="业务二">
            <div class="list-backimg1">
              <div class="list-img">
                <img src="../static/images/045.png" alt="这是图标">
              </div>
              <div class="list-txt">
                <div class="list-title">标题</div>
                <div class="list-text">文字</div>
              </div>
            </div>
          </a> </div>
          <div class="span1 fadeInRight"> <a class="index-title" title="业务三">
            <div class="list-backimg1">
              <div class="list-img">
                <img src="../static/images/045.png" alt="这是图标">
              </div>
              <div class="list-txt">
                <div class="list-title">标题</div>
                <div class="list-text">文字</div>
              </div>
            </div>
          </a> </div>
          <div class="span1 flipInx"> <a class="index-title" title="业务四">
            <div class="list-backimg1">
              <div class="list-img">
                <img src="../static/images/045.png" alt="这是图标">
              </div>
              <div class="list-txt">
                <div class="list-title">标题</div>
                <div class="list-text">文字</div>
              </div>
            </div>
          </a> </div>
          <div class="span1 fadeInRight"> <a class="index-title" title="业务五">
            <div class="list-backimg1">
              <div class="list-img">
                <img src="../static/images/045.png" alt="这是图标">
              </div>
              <div class="list-txt">
                <div class="list-title">标题</div>
                <div class="list-text">文字</div>
              </div>
            </div>
          </a> </div>
        </div>
      </div>
    </div>
    <div class="page-3">
      <div class="main-page-3">
        <h2 class="page-3-title">新闻咨询</h2>
        <div class="text-1">即时发布我们最新的产品及服务动态</div>
        <div class="news-box-main">
<!--          <div class="new-title"><a href="https://www.bilibili.com/" class="new-title-txt" title="平台动态">平台动态</a> </div>-->
<!--          <div class="new-title"><a href="https://www.bilibili.com/" class="new-title-txt" title="行业新闻">行业新闻</a> </div>-->
<!--          <div class="new-title"><a href="https://www.bilibili.com/" class="new-title-txt" title="帮助中心">帮助中心</a> </div>-->
          <div class="new-box">
            <div class="photo-box">
            <img src="../static/images/036.jpg" alt="">
            </div>
          </div>
          <div class="new-box">
              <div class="photo-box">
                <img src="../static/images/036.jpg" alt="">
            </div>
          </div>
          <div class="new-box">
              <div class="photo-box">
                <img src="../static/images/036.jpg" alt="">
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="scroll"></span>
      <el-divider></el-divider>
      <span>法律声明</span>
      <el-divider direction="vertical"></el-divider>
      <span>友情链接</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="drawer = true">联系我</span>
      <br/>
      <br/>
      <span class="copyright">版权所有 JEmbrace</span>
      <el-drawer
          title="联系我"
          v-model="drawer"
          :direction="direction"
          :before-close="handleClose">
        <p class='info'>
          <i class="el-icon-phone"></i>电话：18822299999<br/>
          <i class="el-icon-message"></i>邮箱：18822299999@163.com<br/>
        </p>
      </el-drawer>
    </div>
    </body>
    </html>
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
      drawer: false,
      direction: 'btt',
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
    },
    handleClose (done) {
      done()
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
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
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
@import "../../src/static/pagestyle";

.footer{
  height: 150px;
  text-align: center;
  font-size: 16px;
  padding: 0px 100px;
  position: relative;
}
.footer{
  cursor: pointer;
}
.copyright{
  font-size: 12px;
}
.info{
  font-size: 14px;
  color: #72767b;
  line-height: 25px;
}
.footer .scroll{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border:1px solid #448aff;
  background-color: rgba(68,138,255,0.2);
  position: absolute;
  left: 5%;
  top: -25px;
  z-index: 10;
  animation: scrollA infinite 20s linear alternate;
}
@keyframes scrollA {
  0% {left: 5%;transform: rotate(180deg);};
10% {left: 5%;transform: rotate(270deg);}
20% {left: 5%;transform: rotate(450deg);}
25% {left: 10%;transform: rotate(540deg);}
30% {left: 20%;transform: rotate(720deg);}
35% {left: 30%;transform: rotate(900deg);}
40% {left: 40%;transform: rotate(1080deg);}
45% {left: 50%;transform: rotate(1260deg);}
50% {left: 60%;transform: rotate(1440deg);}
55% {left: 70%;transform: rotate(1620deg);}
60% {left: 80%;transform: rotate(1800deg);}
80% {left: 90%;transform: rotate(2610deg);}
90% {left: 90%;transform: rotate(2340deg);}
100% {left: 90%;transform: rotate(2520deg);}
}
</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"

  .mainscroll
    position fixed
    top 0
    bottom 0
    right 0
    //left 60px
    left 0px
    background $white
    .main
      position relative
      top 0
      bottom 0
      right 0
      left 0  
      background $palaispa-lightgray
      // 顶部宣传语框
      .top-banner
        height 40px
        line-height 40px
        text-align center
        background $white
        border-radius 2%
        margin 5px
      // 轮播图组件
      .slider-wrapper
        position relative
        width 100%
        // height 0
        padding-top 26%
        overflow hidden
        .slider-content 
          position absolute
          top 0
          left 0
          width 100%
          // height 100%
</style>

<template>
  <scroll class="mainscroll" ref="mainscroll">
    <article @touchmove="mainPageScroll()" ref="mainpage" class="main">
      <!-- 顶部的宣传语框开始 -->
      <section class="top-banner">
        <h4>{{ bannerSlogan }}</h4>
      </section>
   
      <section >
        <maintab></maintab>
      </section>
    
     <keep-alive>
        <router-view></router-view>
      </keep-alive>
    
    </article>
  </scroll>
</template>

<script type="text/ecmascript-6">
import Loading from '../../base/loading/loading'
import Scroll from '../../base/scroll/scroll'

import maintab from '../maintab/maintab'
import {getMainSlider} from '../../api/mainData.js'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'main',
  created() {
    this._getSliderPic(); 
  },
  computed: {
    // vuex的getters就放到计算属性里
    ...mapGetters([
      'shouldMainScrollRefresh'
    ])
  },
  activated() {
    setTimeout(() => {
      this.$refs.slider && this.$refs.slider.refresh();
      this.refreshMainScroll();
    }, 20);
  },
  updated() {},
  mounted() {  
    setTimeout(() => {
      this.refreshMainScroll();
    }, 100)
  },
  watch: {
    'shouldMainScrollRefresh'(oldShouldMainScrollRefresh, newShouldMainScrollRefresh) {
      if(newShouldMainScrollRefresh) {
        setTimeout(() => {
          this.refreshMainScroll();
        }, 100)
      } 
    }
  },
  data() {	
    return {
      // 滚动高度
      scrollHeight: 0,
      bannerSlogan: "撲克場面記錄系統",
      sliderImages: [],
      generizeImages: [],
      notCruise: true
    }
  },
  methods: {
    // 获取首页轮播图数据(内部方法)
    _getSliderPic() {
      getMainSlider().then((res) => {
        // console.log(res);
        this.sliderImages = res.mainBanner;
        this.generizeImages = res.mainBannerGenerize;
      })
    },
    // 根据路由切换,刷新main的大滚动条组件
    refreshMainScroll() {
      this.$refs.mainscroll && this.$refs.mainscroll.refresh();     
    },
    // 横向轮播图的图片读取事件
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        setTimeout(() => {
          this.refreshMainScroll()
        }, 20)
      }
    },
    // 点击轮播图推广事件
    clickMainBanner(item, index) {
      let imagesToPopularize = this.generizeImages[index];
      this.setShowPopularize(true);
      this.setMainBannerGenerize(imagesToPopularize);
    },
    // 页面上下滚动的事件
    mainPageScroll() {
      // 获得子路由切换maintab，距离屏幕上方的距离
      let maintabTop = this.$refs.maintab.offsetTop;
      // 获取y方向滚动的距离
      let scrollY = Math.abs(this.$refs.mainscroll.scroll.y);
      if (scrollY >= maintabTop) {
        console.log('滚动距离大于导航栏');
      } else {
        console.log('滚动距离小于导航栏');
      }
    },
    // 引入vuex方法
    ...mapMutations({
      setShowPopularize: "SET_SHOW_POPULARIZE",
      setShouldMainScrollRefresh: 'SET_SHOULD_MAIN_SCROLL_REFRESH',
      setMainBannerGenerize: 'SET_MAIN_BANNER_GENERIZE'
    })
  },
  components: {
    maintab,
    Scroll,
    Loading
  }
}
</script>


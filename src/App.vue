<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/mixin.styl"
    @import "./common/stylus/variable.styl"

    #app 
      width 100%;
      height 100%;

    // 渐变效果
    .fade-enter-active, .fade-leave-active {
      transition opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
      opacity 0
    }

    // 滑动效果
    .slide-enter-active, .slide-leave-active
      transition all 0.3s

    .slide-enter, .slide-leave-to
      transform translate3d(100%, 0, 0)
</style>

<template>
  <article id="app" @touchmove.prevent>
    <!-- <tab-nav></tab-nav> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 视频播放组件开始 -->
    <transition name="fade">
    <!--  <promo-video ref="videoplayer" v-show="this.exhibitVideo"
        :currentVideoProp="this.video"
        :currentVideoPosterProp="this.videoposter">
      </promo-video> -->
    </transition>
  
  </article>
</template>

<script type="text/ecmascript-6">
//import tabNav from './components/tabNav/tabNav' 


// 取得store数据
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  updated() {},
  mounted() {},
  computed: {
    // vuex的getters就放到计算属性里
    ...mapGetters([
      'video',
      'videoposter',
      'exhibitVideo',
      'selectedTreatment',
      'showTreatmentDetail',
      'treatDetailAside',
      'showPopularize',
      "mainBannerGenerize",
      "showStoreDetail",
      "storeDetail"
    ])
  },
  data() {
    return {}
  },
  methods: {},
  components: {
   
  }
}
</script>

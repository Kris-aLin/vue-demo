<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/variable.styl"

  
</style>

<template>
  <article class="login" ref="login">
    <section class="login">
      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </section>
    <loading v-show="!timeline.length"></loading>
  </article>
</template>

<script type="text/ecmascript-6">
import Loading from '../../base/loading/loading'
import { getHistory } from '../../api/mainData.js';
import { mapMutations } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
   
    }
  },
  created() {
    
 
  },
  mounted() {
    setTimeout(() => {
      this.setShouldMainScrollRefresh(true);
    }, 200)
  },
  activated() {
    // keep-alive组件激活时调用，这个要写到子路由里面我勒个去
    setTimeout(() => {
      this.setShouldMainScrollRefresh(true);
    }, 100)
  },
  deactivated() {
    // keep-alive组件离开时调用，这个要写到自路由里面我勒个去
    this.setShouldMainScrollRefresh(false);
  },
  mounted() {},
  computed: {},
  methods: {

    // vuex方法引入
    ...mapMutations({
      setShouldMainScrollRefresh: 'SET_SHOULD_MAIN_SCROLL_REFRESH'
    })
  },
  components: {
    Loading
  }
}
</script>

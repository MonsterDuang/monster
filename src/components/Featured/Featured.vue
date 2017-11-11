<template>
  <div class="Featured">
    <div class="tab-bar">
      <span class="link-a" @click="Index=0">
      <img src="../../assets/images/star_history.png" v-show="Index!=0" alt="">
      <img src="../../assets/images/star_history2.png" v-show="Index==0" alt="">
      </span>
      <span class="link-a" @click="Index=1">
        <img src="../../assets/images/star_home.png" v-show="Index==1" alt="">
        <img src="../../assets/images/star_home2.png" v-show="Index!=1" alt="">
        </span>
      <span class="link-a" @click="Index=2">
        <img src="../../assets/images/star_gift.png" v-show="Index!=2" alt="">
        <img src="../../assets/images/star_gift2.png" v-show="Index==2" alt="">
        </span>
    </div>
    <div class="view">
       <mt-swipe :auto='0' :continuous='false' :defaultIndex='Index' :showIndicators='false' @change="handleChange">
        <mt-swipe-item><Songlist></Songlist></mt-swipe-item>
        <mt-swipe-item><articl></articl></mt-swipe-item>
        <mt-swipe-item><gift></gift></mt-swipe-item>
      </mt-swipe> 
    </div>
  </div>
</template>
<script>
import Articl from '@/components/Featured/FeaturedII/Article'
import Songlist from '@/components/Featured/FeaturedII/Songlist'
import Gift from '@/components/Featured/FeaturedII/Gift'
export default {
  created () {
    this.$store.dispatch('getArticleData')
    this.$store.dispatch('getSonglistData')
    this.$store.dispatch('getGiftData')
  },
  components: {
    Articl,
    Songlist,
    Gift
  },
  data () {
    return {
      Index: 1
    }
  },
  methods: {
    handleChange (index) {
      this.Index = index
    }
  }
}
</script>

<style scoped>
.Featured{
  width: 100%;
  height: 100%;
  position: relative;
}
.tab-bar{
  width: 100%;
  height: 7%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}
.link-a{
  width: 6%;
  height: 50%;
}
.link-a img{
  height: 100%;
}
.view{
  width: 100%;
  height: 100%;
}
.mint-swipe{
  width: 100%;
  height: 100%;
}

</style>

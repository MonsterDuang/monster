<template>
  <div class="Home">
    <div class="defaultBg" v-show="nowBackgroundUrl==''">
      <img src="../../assets/images/logo_txt.png" alt="">
    </div>
    <img :src="nowBackgroundUrl" v-show="nowBackgroundUrl!=''" alt="">
    <div class="right-btn">
      <router-link to="/songplayI" class="right-btn-link"><img src="../../assets/images/11.png" alt="" :class="{'animated fadeOut infinite':this.nowPlayList===1}"></router-link>
      <router-link to="/songplayII" class="right-btn-link"><img src="../../assets/images/21.png" alt="" :class="{'animated fadeOut infinite':this.nowPlayList===2}"></router-link>
      <router-link to="/songplayIII" class="right-btn-link"><img src="../../assets/images/31.png" alt="" :class="{'animated fadeOut infinite':this.nowPlayList===3}"></router-link>
      <router-link to="/songplayIV" class="right-btn-link"><img src="../../assets/images/41.png" alt="" :class="{'animated fadeOut infinite':this.nowPlayList===4}"></router-link>
      <router-link to="/songplayV" class="right-btn-link"><img src="../../assets/images/51.png" alt="" :class="{'animated fadeOut infinite':this.nowPlayList===5}"></router-link>
      <router-link to="/featured" class="right-btn-link"><img src="../../assets/images/61.png" alt=""></router-link>
    </div>
    <div class="bottom-btn">
      <router-link to="/user" class="bottom-btn-link">
        <img src="../../assets/images/head.png" alt="" v-show="this.userInfo.id===undefined">
        <img src="../../assets/images/head_logined.jpg" alt="" style="border-radius: 2em;border:1px solid #151b16" v-show="this.userInfo.id!==undefined">
      </router-link>
      <span class="bottom-btn-link" @click="changeNowPlayList"><img src="../../assets/images/heart_tiny.png" alt="" :class="{'animated fadeOut infinite':this.nowPlayList===6}"></span>
    </div>
    <div class="masked"></div>
    <div class="changeBg" ref="changebg">
      <span class="btn-bg"><img src="../../assets/images/tab_1.png" alt=""></span>
      <span class="btn-bg"><img src="../../assets/images/tab_2.png" alt=""></span>
      <span class="btn-bg"><img src="../../assets/images/tab_3.png" alt=""></span>
      <span class="btn-bg"><img src="../../assets/images/tab_4.png" alt=""></span>
      <span class="btn-bg"><img src="../../assets/images/tab_5.png" alt=""></span>
    </div>
    <div class="masked2"></div>
    <div class="bgList" ref="bglist">
      <p><span>powered by</span> MockJs</p>
      <ul class="img-container">
        <router-link :to="{'path':'/bgimage',query:{'img':item.img}}" tag="li" v-for="(item,index) in backgroundImg" :key="item.id"><img :src="item.img" alt=""></router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.dispatch('getAllBgImg')
  },
  computed: {
    backgroundImg () {
      return this.$store.state.backgroundImg
    },
    nowBackgroundUrl () {
      return this.$store.state.nowBackgroundUrl
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    nowPlayList () {
      return this.$store.state.nowPlayList
    }
  },
  methods: {
    changeNowPlayList () {
      if (this.$store.state.userInfo.id === undefined) {
        return this.$msg('提示', '请先登录')
      } else {
        this.$store.commit('CHANGE_NOW_PLAY_LIST')
        this.$router.push('/like')
      }
    }
  }
}
</script>
<style scoped>
.Home{
  width: 100%;
  height: 100%;
  position: relative;
}
.Home > img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.defaultBg{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9e2e8;
  z-index: -1
}
.defaultBg img{
  width: 50%;
}
.right-btn{
  width: 9%;
  height: 45%;
  position: absolute;
  right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.right-btn-link {
  display: block;
  width: 90%;
  height: 12%;
}
.right-btn-link img{
  height: 100%;
}
.bottom-btn{
  width: 100%;
  height: 9%;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0.5%
}
.bottom-btn-link{
  display: block;
  width: 8%;
  height: 50%;
}
.bottom-btn-link img{
  height: 100%;
}
.masked{
  width: 100%;
  height: 100%;
  background: rgba(147,147,147,.6);
  position: absolute;
  top: 0;
  display: none
}
.changeBg{
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: -10%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px #ccc;
}
.changeBg .btn-bg{
  display: block;
  width: 7%;
  height: 40%;
}
.btn-bg img{
  width: 100%;
}
.masked2{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  display: none;
}
.bgList{
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: -15%;
  background: #fff;
  border-top: solid 1px #ccc;
  padding: 1%;
}
.bgList p{
  font-size: .6rem
}
.bgList p span{
  color: #999
}
.img-container{
  width: 100%;
  height: 88%;
  margin-top: 1%;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  overflow-y: hidden
}
.img-container li{
  float: left;
  height: 100%;
  margin-right: 1%
}
.img-container li img{
  height: 100%;
}
</style>

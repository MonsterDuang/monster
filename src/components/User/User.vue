<template>
  <div class="User">
    <img :src="nowBackgroundUrl" v-show="nowBackgroundUrl!=''" alt="">
      <div class="user-btn" :class="{'animated slideInUp':this.$route.path==='/user'}">
        <div class="II-btn">
          <router-link to="/login" class="II-btn-link"><img src="../../assets/images/head.png" alt=""></router-link>
          <router-link to="/setting" class="II-btn-link"><img src="../../assets/images/setting.png" alt=""></router-link>
          <router-link to="/readme" class="II-btn-link"><img src="../../assets/images/wenhao.png" alt=""></router-link>
          <router-link to="/info" class="II-btn-link"><img src="../../assets/images/info.png" alt=""></router-link>
        </div>
        <div class="cancel">
          <router-link to="/home" class="bottom-btn-link"><img src="../../assets/images/x.png" alt=""></router-link>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    nowBackgroundUrl () {
      return this.$store.state.nowBackgroundUrl
    }
  }
}
</script>
<style scoped>
.User{
  width: 100%;
  height: 100%;
  position: relative;
}
.User > img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.user-btn{
  width: 100%;
  height: 100%;
  background: rgba(147,147,147,.6);
  position: absolute;
  top: 0;
}
.II-btn{
  width: 100%;
  height: 50%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.II-btn-link {
  display: block;
  width: 9%;
  height: 12%;
}
.II-btn-link img{
  height: 100%;
}
.cancel{
  width: 100%;
  height: 5%;
  text-align: center;
  position: absolute;
  bottom: 2%
}
.bottom-btn-link{
  display: inline-block;
  width: 9%;
  height: 100%;
}
.bottom-btn-link img{
  height: 50%;
}
</style>

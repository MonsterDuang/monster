<template>
  <div class="Setting">
    <p class="content">
      <span v-show="this.userInfo.id!==undefined">账号管理</span>
      <span>定时关闭</span>
      <span @click="changeNeight">切换{{Neight}}模式</span>
      <span>自动下载 (已关闭)</span>
      <span>本地文件已清空</span>
      <span v-show="this.userInfo.id!==undefined" @click="logout">退出登录</span>
    </p>
    <div class="cancel">
      <router-link to="/home" class="bottom-btn-link"><img src="../../assets/images/x.png" alt=""></router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    Neight () {
      return this.$store.state.Neight
    }
  },
  methods: {
    logout () {
      this.$router.push('/home')
      this.$store.commit('LOGOUT')
    },
    changeNeight () {
      this.$store.commit('CHANGE_NEIGHT')
    }
  }
}
</script>

<style scoped>
.Setting{
  width: 100%;
  height: 100%;
  position: relative;
  background: #151b16
}
.content{
  position: absolute;
  top: 15%;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  font-size: .8rem
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

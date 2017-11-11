<template>
  <div class="bg">
    <img :src="img" alt="">
    <div class="bottom-btn">
      <router-link to="/home" class="bottom-btn-link"><img src="../../assets/images/cancel.png" alt=""></router-link>
      <span class="bottom-btn-link" @click="changeBg(img)"><img src="../../assets/images/affirm.png" alt=""></span>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    this.img = this.$route.query.img
  },
  methods: {
    changeBg (img) {
      this.$store.dispatch('changeBg', img)
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
.bg{
  width: 100%;
  height: 100%;
}
.bg > img{
  width: 100%;
  height: 100%;
  z-index: -10;
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
</style>

<template>
  <div class="Info">
    <div class="top">
      <img src="../../assets/images/logo_.png" alt="">
      <span>2.3.2</span>
    </div>
    <div class="findme">
      <span>微博: @MOZIK音乐</span>
      <span>MOZIK 官网</span>
      <span>联系我们: bg@mozik.cc</span>
    </div>
    <div class="cancel">
      <router-link to="/home" class="bottom-btn-link"><img src="../../assets/images/x.png" alt=""></router-link>
    </div>
  </div>
</template>
<style scoped>
.Info{
  width: 100%;
  height: 100%;
  position: relative;
  background: #151b16
}
.top, .findme{
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10%;
  color: #fff;
  font-size: .8rem
}
.top img{
  width: 20%;
}
.findme{
  justify-content: space-around;
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

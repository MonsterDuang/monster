<template>
  <div class="Readme">
    <img src="../../assets/images/readme.jpg" alt="">
    <div class="cancel">
      <router-link to="/home" class="bottom-btn-link"><img src="../../assets/images/x.png" alt=""></router-link>
    </div>
  </div>
</template>
<style scoped>
.Readme{
  width: 100%;
  height: 100%;
  position: relative;
  background: #151b16;
  padding: 10% 5% 0 5%
}
.Readme > img{
  width: 100%
}
.cancel{
  width: 90%;
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

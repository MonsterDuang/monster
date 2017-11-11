<template>
  <div class="Login">
    <div class="login" v-show="this.userInfo.id===undefined">
      <img src="../../assets/images/logo_.png" alt="">
      <div class="input-phone">
        <input type="tel" placeholder="Tellphone Number" v-model="phone" autofocus class="name">
        <button class="btn" @click="login">确认</button>
      </div>
    </div>
    <div class="logined" v-show="this.userInfo.id!==undefined">
      <div class="userInfo">
        <span class="img">
          <img src="../../assets/images/head_logined.jpg" alt="">
        </span>
        <p class="msg">
          <p>{{userInfo.phone}}</p>
          <p>简介: 无...</p>
        </p>
      </div>
      <div class="recommend">
        <p>我的推荐</p>
      </div>
    </div>
    <div class="cancel" v-show="this.userInfo.id===undefined">
      <router-link to="/home" class="bottom-btn-link"><img src="../../assets/images/x.png" alt=""></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone: ''
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    login () {
      let phone = this.phone
      if (!(/^1[3578]\d{9}$/.test(phone))) {
        this.$msg('提示', '手机号码不正确')
      } else {
        this.$store.dispatch('login', this.phone)
          .then(res => {
            this.$router.push('/home')
            return this.$msg('提示', res)
          })
      }
    }
  }
}
</script>
<style scoped>
.Login{
  width: 100%;
  height: 100%;
  position: relative;
  background: #151b16
}
.login{
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%
}
.login img{
  width: 20%;
}
.input-phone{
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.name {
  width: 80%;
  height: 30%;
  outline: none;
  background: #151b16;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: .8rem;
  text-align: center;
}
.btn{
  width: 25%;
  height: 30%;
  position: relative;
  top: 30%;
  outline: none;
  background: #151b16;
  color: #fff;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 2em;
}
.cancel{
  width: 100%;
  height: 50px;
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

.logined{
  width: 100%;
  height: 100%;
}
.userInfo{
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding-top: 5%;
  font-size: .7rem
}
.img {
  width: 15%;
  height: 40%;
  display: inline-block;
  border-radius: 50%;
}
.img img{
  width: 100%;
  border-radius: 50%
}
.recommend{
  width: 100%;
  height: 75%;
  background: #fff;
  position: relative;
}
.recommend p{
  width: 70%;
  height: 8%;
  position: absolute;
  left: 15%;
  border-bottom: 1px solid #333; 
  font-size: 1rem;
  line-height: 3.5rem;
  text-align: center
}
</style>

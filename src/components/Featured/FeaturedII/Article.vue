<template>
  <v-touch @pan="onPan" class="article" ref="hhh">
    <div class="content" v-for="(item,index) in article" :key="item.id">
      <div class="img">
        <img :src="item.img" alt="">
        <p class="time">
          <span class="day">{{item.day}}</span>
          <span style="color:#fff">Oct.2017</span>
        </p>
      </div>
      <div class="title">
        <p>{{item.title}}</p>
        <span style="color:#999;font-size:1rem">{{item.describe}}{{item.describe}}</span>
      </div>
      <div class="bottom">
        <p><img :src="item.samllimg" alt=""></p>
        <span style="color:#999;font-size:.6rem">{{item.topic}}</span>
      </div>
    </div>
  </v-touch>
</template>
<script>
export default {
  data () {
    return {
      direction: 1,
      allowPan: true
    }
  },
  computed: {
    article () {
      return this.$store.state.article
    }
  },
  methods: {
    onPan (value) {
      let h = document.documentElement.clientHeight
      let hhh = this.$refs.hhh.$el
      if (value.additionalEvent === 'panup' && value.isFinal === true) {
        this.direction = -1
        if (hhh.offsetTop <= -19 * h) {
          this.allowPan = false
        } else {
          this.allowPan = true
        }
        if (this.allowPan) {
          hhh.style.top = hhh.offsetTop + h * this.direction + 'px'
        }
      } else if (value.additionalEvent === 'pandown' && value.isFinal === true) {
        this.direction = 1
        if (hhh.offsetTop >= 0) {
          this.allowPan = false
        } else {
          this.allowPan = true
        }
        if (this.allowPan) {
          hhh.style.top = hhh.offsetTop + h * this.direction + 'px'
        }
      }
    }
  }
}
</script>
<style scoped>
.article{
  width: 100%;
  height: 2000%;
  position: absolute;
}
.content{
  width: 100%;
  height: 5%;
}
.img{
  width: 100%;
  height: 50%;
  position: relative;
}
.img img{
  width: 100%;
  height: 100%;
}
.time{
  width: 100%;
  height: 100%;
  background: rgba(147,147,147,.6);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.day{
  color: #fff;
  font-size: 8rem;
  font-family:cursive
}
.title{
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  font-size: 1.2rem
}
.bottom{
  width: 100%;
  height: 8%;
  margin-top: 48%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.bottom img{
  padding: 10%;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #666
}
</style>

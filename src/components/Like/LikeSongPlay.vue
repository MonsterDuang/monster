<template>
  <v-touch @pan="onPan" class="LikeSong">
    <div class="play">
      <span class="btn-img">
        <i-circle :percent="percent" :stroke-width='2' :trail-width='2' stroke-color='#301f33' stroke-linecap="round" style="width:100%;height:110%">
          <span class="demo-Circle-inner"></span>
        </i-circle>
        <img src="../../assets/images/play.png" alt="" @click="stop" v-show="isPlaying">
        <img src="../../assets/images/stop.png" alt="" @click="play" v-show="!isPlaying">
      </span>
      <p class="song-name">{{nowPlay.songinfo.title}}</p>
      <span class="singer">{{nowPlay.songinfo.author}}</span>
    </div>
    <div class="bottom-btn">
      <span @click="getToLike">
        <i class="iconfont icon-heart" v-show="nowPlay.songinfo.charge==0"></i>
        <i class="iconfont icon-heart1" v-show="nowPlay.songinfo.charge!=0"></i>
      </span>
    </div>
  </v-touch>
</template>
<script>
export default {
  computed: {
    nowPlay () {
      let nowPlay = this.$store.state.nowPlay
      if (nowPlay.songinfo !== undefined || nowPlay.bitrate !== undefined) {
        return nowPlay
      } else {
        return {
          songinfo: {},
          bitrate: {}
        }
      }
    },
    isPlaying () {
      return this.$store.state.isPlaying
    },
    percent () {
      return this.$store.state.percent
    }
  },
  methods: {
    play () {
      if (!this.isPlaying) {
        this.$store.commit('CHANGE_IS_PLAYING_TRUE')
      }
    },
    stop () {
      if (this.isPlaying) {
        this.$store.commit('CHANGE_IS_PLAYING_FALSE')
      }
    },
    getToLike () {
      this.nowPlay.songinfo.charge = this.nowPlay.songinfo.charge === 0 ? 1 : 0
      if (this.nowPlay.songinfo.charge === 1) {
        this.$store.dispatch('getToLike', this.nowPlay)
      } else {
        this.$store.dispatch('removeFromLike', this.nowPlay)
      }
    },
    onPan (value) {
      if (value.additionalEvent === 'panleft' && value.isFinal === true) {
        this.$store.dispatch('changeNextSong')
      } else if (value.additionalEvent === 'panright' && value.isFinal === true) {
        this.$store.dispatch('changeBeforeSong')
      }
    }
  }
}
</script>

<style scoped>
.LikeSong{
  width: 100%;
  height: 100%;
  padding-top: 10%;
  background: rgba(63, 10, 42, 0.1);
  color: rgba(63, 10, 42, 0.5);
}
.play{
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.btn-img {
  width: 35%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.btn-img img{
  width: 100%;
}
.ivu-chart-circle{
  position: absolute;
  z-index: -1;
}
.song-name{
  font-size: 1.5rem;
  line-height: 3rem
}
.singer{
font-size: .9rem
}
.bottom-btn{
  width: 100%;
  height: 5%;
  text-align: center;
  position: absolute;
  bottom: 2%
}
.bottom-btn span{
  height: 80%;
  display: inline-block
}
.bottom-btn i{
  height: 100%;
  font-size: 2rem
}
</style>


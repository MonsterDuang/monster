<template>
  <v-touch class="Song" @pan="onPan" :style='{color: textColor, background: bgColor}'>
    <div class="play">
      <span class="btn-img">
        <i-circle :percent="percent" :stroke-width='2' :trail-width='2' :stroke-color='strokeColor' stroke-linecap="round" style="width:100%;height:110%">
          <span class="demo-Circle-inner"></span>
        </i-circle>
        <img src="../../assets/images/play.png" alt="" @click="stop" v-show="isPlaying">
        <img src="../../assets/images/stop.png" alt="" @click="play" v-show="!isPlaying">
      </span>
      <div style="text-align:center">
        <p class="song-name">{{nowPlay.songinfo.title}}</p>
        <span class="singer">{{nowPlay.songinfo.author}}</span>
      </div>
    </div>
    <div class="lrc">
      <div class="lrc_scroll" id="lrc_scroll" :class="{'nolrc_scroll': noLrc || nowPlayLrc.length == 1, 'lrc_scroll': !noLrc}">
        <div v-if='!noLrc' v-for="(item, index) in nowPlayLrc" :key="index" :style="item[3]" :id="item[1]" class="lrc_item">{{item[2]}}</div>
        <div v-if='noLrc'>emmmmm，歌词走丢了~</div>
      </div>
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
import api from '@/api'
export default {
  data () {
    return {
      strokeColor: '',
      textColor: '',
      bgColor: ''
    }
  },
  created () {
    let playList = this.$route.query.play_list
    let Url = ''
    switch (playList) {
      case 1:
        this.strokeColor = '#a86a27'
        this.textColor = 'rgba(213, 132, 42, 0.5)'
        this.bgColor = 'rgba(213, 132, 42, 0.1)'
        Url = api.new_song
        break
      case 2:
        this.strokeColor = '#188a3f'
        this.textColor = 'rgba(23, 173, 75, 0.5)'
        this.bgColor = 'rgba(23, 173, 75, 0.1)'
        Url = api.hot_song
        break
      case 3:
        this.strokeColor = '#281f72'
        this.textColor = 'rgba(45, 32, 142, 0.5)'
        this.bgColor = 'rgba(45, 32, 142, 0.1)'
        Url = api.eus_song
        break
      case 4:
        this.strokeColor = '#9d0fbc'
        this.textColor = 'rgba(200, 10, 242, 0.5)'
        this.bgColor = 'rgba(200, 10, 242, 0.1)'
        Url = api.old_song
        break
      case 5:
        this.strokeColor = '#9d1027'
        this.textColor = 'rgba(200, 12, 42, 0.5)'
        this.bgColor = 'rgba(200, 12, 42, 0.1)'
        Url = api.rock_song
        break
    }
    if (this.nowPlayList !== playList) {
      let data = {url: Url, play_list: playList}
      this.$store.dispatch('getSong', data)
      .then(res => {
        this.$store.dispatch('getSongUrl')
      })
    }
  },
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
    },
    nowPlayList () {
      return this.$store.state.nowPlayList
    },
    nowPlayLrc () {
      return this.$store.state.nowPlayLrc
    },
    noLrc () {
      return this.$store.state.noLrc
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
      if (this.$store.state.userInfo.id === undefined) {
        return this.$msg('提示', '请先登录')
      } else {
        this.nowPlay.songinfo.charge = this.nowPlay.songinfo.charge === 0 ? 1 : 0
        if (this.nowPlay.songinfo.charge === 1) {
          this.nowPlay.userId = this.$store.state.userInfo.id
          this.$store.dispatch('getToLike', this.nowPlay)
        } else {
          this.$store.dispatch('removeFromLike', this.nowPlay)
        }
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
.Song{
  width: 100%;
  height: 100%;
}
.play{
  width: 100%;
  height: 40%;
  padding-top: 10%;
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
}
.singer{
  font-size: .9rem
}
.lrc{
  width: 100%;;
  height: 50%;
  margin-top: 10px;
}
.lrc_scroll{
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column
}
.nolrc_scroll{
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
}
.lrc_item{
  text-align: center
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

<template>
  <div id="app">
    <transition name="animated">
      <router-view/>
    </transition>
    <audio :src="nowPlay.bitrate.show_link" ref="audio" @ended="audioEnd" @timeupdate='update' autoplay></audio>
  </div>
</template>
<script>
export default {
  name: 'app',
  computed: {
    nowPlay () {
      let nowPlay = this.$store.state.nowPlay
      if (nowPlay.bitrate !== undefined) {
        return nowPlay
      } else {
        return {
          bitrate: {}
        }
      }
    },
    isPlaying () {
      return this.$store.state.isPlaying
    }
  },
  methods: {
    audioEnd () {
      this.$store.dispatch('changeNextSong')
    },
    update (data) {
      let percent = (data.target.currentTime / data.target.duration) * 100
      this.$store.commit('CHANGE_PERCENT', percent)
    }
  },
  watch: {
    isPlaying (newValue) {
      let audio = this.$refs.audio
      if (newValue) {
        audio.play()
      } else {
        audio.pause()
      }
    }
  }
}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.animated-enter-active {
  animation: slideInUp .5s
}
.animated-leave-active {
  animation: fadeOut .5s
}
</style>

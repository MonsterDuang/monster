<template>
  <div class="Like">
    <div class="top">
      <img src="../../assets/images/logo_.png" alt="">
    </div>
    <div class="SongList">
      <div class="song-list" v-for="(item,index) in collection" :class="{'ispiaying':nowPlayId==index}" :key="item.id" @click="likeSong(index)">
        <p class="count">
          <span class="list-icon" v-if="nowPlayId==index"><img src="../../assets/images/play.gif" alt=""></span>
          <span class="list-icon" v-else>{{index+1}}</span>
          </p>
        <div class="song-msg">
          <p class="song-name">{{item.songinfo.title}}</p>
          <span class="singer">{{item.songinfo.author}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    collection () {
      return this.$store.state.collection
    },
    nowPlayId () {
      return this.$store.state.nowPlayId
    }
  },
  methods: {
    likeSong (index) {
      this.$store.dispatch('likeSong', index)
      this.$router.push('/likesongplay')
    }
  }
}
</script>
<style scoped>
.Like{
  width: 100%;
  height: 100%;
}
.top{
  width: 100%;
  height: 10%;
  text-align: center;
  background: #e9e9e9
}
.top > img{
 height: 100%;
}
.SongList{
  width: 100%;
  height: 90%;
  overflow-y: auto;
}
.song-list{
  width: 100%;
  height: 7%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.count{
  width: 5%;
  height: 100%;
  text-align: center;
  line-height: 2.6rem;
  color: #999;
  font-size: .8rem;
  position: relative;
}
.list-icon{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0
}
.list-icon:first-of-type img{
  width: 70%;
}
.song-msg{
  width: 93%;
  height: 100%;
}
.song-name{
  color: #777;
  font-size: .8rem
}
.singer{
  color: #999;
  font-size: .6rem;
}
</style>

<template>
  <div class="songlist">
    <div class="content" v-for='(item,index) in songlist' :key="item.id">
      <img :src="item.img" alt="">
      <p>{{item.title}}</p>
      <span>2017-10-{{item.day}}</span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    songlist () {
      return this.$store.state.songlist
    }
  }
}
</script>
<style scoped>
.songlist{
  width: 100%;
  height: 100%;
  overflow-y: auto
}
.content{
  width: 100%;
  height: 30%;
  text-align: center;
  line-height: 2rem;
  box-shadow: 0 -15px 0 0 #e9e9e9
}
img{
  width: 100%;
  height: 70%;
}
p{
  font-size: 1.1rem;
}
span{
  font-size: .6rem
}
</style>

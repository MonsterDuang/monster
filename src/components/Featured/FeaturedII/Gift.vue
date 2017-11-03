<template>
  <div class="gift">
    <div class="content" v-for='(item,index) in gift' :key="item.id">
      <img :src="item.img" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    gift () {
      return this.$store.state.gift
    }
  }
}
</script>
<style scoped>
.gift{
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
  height: 80%;
}
</style>
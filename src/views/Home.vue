<template>
  <div class="home">
    <div class="m-nav">
      <div class="row-container">
        <span class="one"></span><span class="two"></span><span class="three"></span>
      </div>
      <ul class="nav-container">
        <li><a href="/html/index.html">首页</a></li>
        <router-link tag="li" to="/job">颂职志</router-link>
        <router-link tag="li" to="/dream">编梦志</router-link>
        <li><a href="/html/art.html">寻艺志</a></li>
        <router-link tag="li" to="/discuss">讨论区</router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
}
</script>

<style scoped lang="less">
  @import "../assets/css/home.less";
</style>

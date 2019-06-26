<template>
  <div id="app">
      <div class="nav">
        <div class="nav-brand">
          计划板
        </div>
        <div class="navbar-nav">
            <router-link to="/home">首页</router-link>
            <router-link to="/plan">计划列表</router-link>
        </div>
      </div>
    <!-- 首页 -->
    <v-home></v-home>
    <!-- 创建计划 -->
    <v-setplan></v-setplan>
  </div>
</template>

<script>
import home from "@/components/Home";
import setPlan from "@/components/setPlan";
export default {
  name: "nav",
  data() {
    return {};
  },
  components: {
    "v-home": home,
    "v-setplan": setPlan
  }
};
</script>

<style lang="stylus" scoped>
  .nav
    width 100%
    height 30px
    // position relative
    display inline-block
    .nav-brand
      position absolute
      display block
      width 30%
      float left
    .navbar-nav
      position absolute
      width 30%
      float right 
      margin-left 105px  
         
</style>

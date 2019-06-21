<template>
  <div id="app">
    <!-- 头部Header -->
    <v-header>
      <i slot="left-icon" class="icon">&#xe692;</i>
      <span slot="content">Magic Music</span>
      <router-link to="/user" slot="right-icon">
        <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <!-- tab -->
    <tab></tab>
    <keep-alive>
      <!-- 保存上一个路由状态 记住另外浏览位置 -->
      <router-view></router-view>
    </keep-alive>
    <!-- play -->
    <play></play>
    <!-- sidebar -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
import Header from '@/components/Header'
import Tab from '@/components/tab'
import Play from '@/components/play'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components:{
    "v-header":Header,
    "tab":Tab,
    "v-sidebar":sidebar,
    "play":Play
  },
  
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")

.icon
  font-family "icon" !important 
  font-size 18px
  font-style normal
  color: #fff
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8,5,58,0.9)
  color #fff
  
</style>



<template>
  <div id="app">
    <!-- 头部header -->
    <v-header>
      <i slot="left-icon" class="icon">&#xe692;</i>
      <span slot="content">Magic Music</span>
      <router-link to="/user" slot="right-icon">
        <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <!-- tab -->
    <tab></tab>
    <!-- keep-alive 保存状态的标签 记录上次访问对应路由的浏览的位置 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 播放组件 play -->
    <play></play> 
    <!-- sidebar -->
    <sidebar></sidebar>
  </div>
</template>

<script>
import header from '@/components/header'
import tab from '@/components/tab'
import sidebar from '@/components/sidebar'
import play from '@/components/play'
export default {
  name: 'App',
  components: {
    'v-header': header,
    tab,
    sidebar,
    play
  }
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face 
  font-family "icon"
  /* project id 277165 */
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")

.icon
  font-family "icon" !important 
  font-size 18px
  font-style normal
  color #ffffff
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8,5,58,0.9)
  color #ffffff
* { touch-action: pan-y; } 
</style>

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-header></v-header>
    <div class="container">
      <!-- <keep-alive> -->
        <router-view/>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components:{
    "v-header":Header
  }
}
</script>

<style lang="stylus">
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.container
  position absolute
  top 56px
  bottom 0
  width 100%
</style>

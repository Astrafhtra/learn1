<template>
  <div class="menu">
    {{msg}} {{app.user}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  inject:['app'],
  data() {
    return {
      msg:''
    }
  },
  created() {
    let self = this
    bus.$on('todo',(val)=>{
      console.log(val)
      self.msg = val
    })
  },
}
</script>

<style>

</style>

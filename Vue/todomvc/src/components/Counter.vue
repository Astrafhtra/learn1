<template>
  <div>
    Clicked:{{$store.state.count}} times, count is
    <button @click="increament">+</button>
  </div>
</template>

<script>
// 让store改变方法状态的方法 mapActions
import {mapActions} from 'vuex'
export default {
  //自身的状态
  data(){
    return{

    }
  },
  props:['count'],
  methods: mapActions([
    'increament'
  ])
}
</script>

<style>

</style>

<template>
  <div id="app">
    clicked {{$store.state.count}} times，count is {{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
//借
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: 
    // 如果有多处要用到奇偶判断怎么办
    mapGetters([
      'evenOrOdd'
    ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style>

</style>

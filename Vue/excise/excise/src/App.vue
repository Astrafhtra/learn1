<template>
  <div id="app">
    <h1>vue实例 v-for</h1>
    <hr> 
    <ul>
      <li v-for="(item,index) in items" :key="index" >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[1,33,4,56,2].sort(sortNums)
    }
  },
  computed: {
    sortItem:function(){
      return this.items.sort(sortNums)
    }
  },
}
function sortNums(a,b){
  return a-b;
}
</script>

<style>

</style>

<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">值：{{ value1 }}</div>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
    </div>
    <div class="hour">
      <input type="text" class="hour" value="">
      <i class="el-icon-circle-plus" @click="add"></i>
      <i class="el-icon-remove" @click="declare"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: ""
    }
  },
  methods: {
    add(){

    }
  },
}
</script>

<style>
</style>

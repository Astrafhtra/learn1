<template>
  <button class="el-button" :class="[type?'el-button--'+type:'',size?'el-button--'+size:'',{'is-disabled':buttonDisabled}]" @click="handleClick" :disabled="buttonDisabled">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props:{
    type:{
      string:String,
      default:'default'
    },
    size:String,
    disabled:Boolean
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleClick(evt){
      this.$emit('click',evt);
    }
  },
  computed: {
    buttonDisabled(){
      return this.disabled
    }
  },
}
</script>
<style>
  .el-button--large{
    font-size: 10px;
  }
  .el-button--small{
    font-size: 3px;
  }
  .el-button--normal{
    font-size: 6px;
  }
</style>
<template>
  <button :class="'i-button-size' + size" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import bus from '@/bus/bus'
function oneOf(value,validator) {
  for (let i = 0; i < validator.length; i++) {
    if (value === validator[i]) {
      return true
    }
  }
  return false
}
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value,['small','large','default'])
      },
      default: 'default'
    },
    disabled:{
      type: Boolean,
      default: false
    }
    
  },
  data () {
    return {
      msg:'我是button组件的数据'
    }
  },
  methods: {
    handleClick(event){
      // console.log(event)
      // console.log(123)
      // this.$emit('on-click',this.msg)
      bus.$emit('todo',this.msg)
    }
  },
}
</script>

<style scoped>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}
</style>

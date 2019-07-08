<template>
  <div>
    <h3>动态渲染.vue文件的组件--display</h3>
    <v-display :code="code"></v-display>
  </div>
</template>

<script>
import display from '@/components/com/display'
import defaultCode from './default-code'
export default {
  data() {
    return {
      code:defaultCode
    }
  },
  components:{
    "v-display":display
  },
}
</script>

<style>

</style>

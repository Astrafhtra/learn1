<template>
  <div class="container">
    <button @click="sendMsg"></button>
  </div>
</template>
<script>
export default {
  name:'demoChildren',
  data(){
    return{
      message:'我依然很帅' 
    }
  },
  methods:{
    sendMsg(){
      this.$emit('wn',this.message)
    }
  }
}
</script>
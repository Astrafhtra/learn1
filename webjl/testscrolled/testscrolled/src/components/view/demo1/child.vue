<template>
  <div class="container">
    {{sendMsg}}{{sendAgeg}}{{sendDate}}
    <!-- {{test}} -->
  </div>
</template>
<script>
export default {
  name:'demo1',
  props:{
    sendMsg:{
      type:String,
      require:true
    },
    sendAgeg:{
      type:String,
      require:true
    },
    sendDate:{
      type:String,
      require:true
    }
  },
  data(){
    return{
      
    }
  }
}
</script>
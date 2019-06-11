<template>
  <div class="container">
    {{msg}}
    <child @wn='getWn'></child>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  name:'demochild2',
  msg:'dare',
  data(){
    return{
      
    }
  },
  components:{
    child
  },
  methods: {
    getWn(data){
      console.log(data);
      this.msg = data;
    }
  },
}
</script>

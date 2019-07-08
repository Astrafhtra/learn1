const code = 
  `<template>
    <div>
      <input v-model="msg" />
      {{msg}}
    </div>
  </template>
  <script>
    export default{
      data(){
        return{
          msg:''
        }
      }
    }
  </script>`

  export default code;
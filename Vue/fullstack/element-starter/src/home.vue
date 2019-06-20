<template>
  
</template>

<script>
export default {
  mounted() {
    fetch('http://localhost:3000/api/user/login')
      .then(data=>data.json())
      .then(data=>{
        console.log(data)
      })
  },
}
</script>

<style>

</style>

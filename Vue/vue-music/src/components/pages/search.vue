<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <v-search-Box></v-search-Box>
    </div>
  </div>
</template>

<script>
import searchbox from '@/components/searchBox'
export default {
  data() {
    return {   
    }
  },
  components:{
    'v-search-Box':searchbox
  }
}
</script>

<style>

</style>

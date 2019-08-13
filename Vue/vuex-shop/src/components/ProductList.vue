<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}}
        <br/>
        <button @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: mapState({
    products:state=>state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: mapActions('cart',[
    'addProductToCart'
  ]),
}
</script>

<style>

</style>

<template>
<ProductDetails :product="product"/>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';


export default {
  name: 'App',
  components: {
    ProductDetails
},
data() {
  return {
    product: 
    {
      name: 'Product1',
      price: 99.99,
      available: true
    }
  }
},
}
</script>

<style lang="scss">
</style>

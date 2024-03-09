<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ formattedPrice }}</p>
    <p>{{ product.available ? 'Available' : 'Out of stock' }}</p>
  </div>
</template>

<script>
 export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedPrice() {
      const price = Number(this.product.price).toFixed(2);
      return `$${price}`;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="container mt-5 pt-5">
    <div class="row">
      
          <div v-for="product in products" :key="product.id" class="col-4">
        
        <img :src="product.image"  alt="" style="width: 200px">
        <h5>{{product.nume}}</h5>
        <p>Proce: $ {{product.price}} </p>
        <button>Add to cart</button>
        </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.getters['cart/cacti']
    }
  },
}
</script>

<style>

</style>
<template>
  <div class="container mt-5 pt-5 mb-5">
    <h3 class="text-center text-primary mb-3">Succulent Collection</h3>
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-12 col-md-4 px-55 text-center text-primary mb-5"
      >
        <div class="image-wrap">
          <img :src="product.image" alt="" class="w-100" />
        </div>
        <h5 class="mt-2">{{ product.nume }}</h5>
        <p>Price: {{ $formatPrice(product.price) }}</p>
        <div @click="addCartItem(product)">
          <HomeButton label="Add to Cart" class="w-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCartItem(product) {
      this.$store.commit("cart/addToCart", {
        ...product,
        quantity: 1,
      });
      this.$bvModal.show("cart-aside");
    },
    
  },
  computed: {
    products() {
      return this.$store.getters["cart/succulent"];
    },
  },
};
</script>

<style lang="scss">
.image-wrap {
  position: relative;
}
</style>
<template>
  <div class="mx-5 p-0">
    <section class="hero-shop text-light container-fluid p-0 mx-0 mb-5">
      <div
        class="hero-shop-overlay d-flex flex-column justify-content-center pb-5"
      >
        <div class="container px-5">
          <h1 class="text-center mb-4 mx-5 px-4">
            EVERYTHING THAT GROWS IN OUR GARDEN
          </h1>
          <p class="text-center mb-5 mx-5 px-5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <a href="#shop"
            ><img
              src="../static\images\svg\down-arrow.gif"
              alt=""
              class="mx-auto d-block"
              style="width: 43px"
          /></a>
        </div>
      </div>
    </section>
    <div class="container-fluid">
      <div id="shop" class="row row-cols-3 gx-5 m-0 justify-content-start p-0">
      
          <Product
            v-for="product in products"
            :key="product.id"
            :product="product"
            
          />
      
        <QuickView />
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton.vue";

export default {
  computed: {
    products() {
      return this.$store.state.cart.products;
    },
  },
  methods: {
    showModal(product) {
      this.$bvModal.show("modal-center");
      console.log("apasat", product);
    },
    //   addCartItem(product) {
    //     this.$store.commit("cart/addToCart", {
    //       ...product,
    //       quantity: 1,
    //     });
    //     this.$bvModal.show("cart-aside");
    //   },
  },
  components: {
    HomeButton,
  },
};
</script>

<style lang="scss" scoped>
.hero-shop {
  background: url(static/images/images/greenhouse2.webp);
  background-size: cover;
  background-attachment: fixed;
  height: 792px;
  width: 100%;
}
.hero-shop-overlay {
  background-color: rgba(34, 71, 68, 0.404);
  height: 792px;
}

.hero-shop-overlay h1 {
  font-size: 70px;
}
</style>

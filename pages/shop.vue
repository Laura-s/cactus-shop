<template>
  <div class="mx-5 p-0">
    <section class="hero-shop text-light  container-fluid p-0 mx-0 mb-5 ">
      <div class="hero-shop-overlay d-flex flex-column justify-content-center pb-5 ">
       <div class="container px-5">
         <h1 class="text-center mb-4 mx-5 px-4">EVERYTHING THAT GROWS IN OUR GARDEN</h1>
        <p class="text-center mb-5 mx-5 px-5">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <a href="#shop" ><img src="../static\images\svg\down-arrow.gif" alt="" class="mx-auto d-block" style="width: 43px"></a>
       </div>
        
      </div>
    </section>
    <div class="container-fluid ">
      <div id="shop" class="row row-cols-3 gx-5 m-0 justify-content-start p-0">
      <div v-for="product in products" :key="product.id" class="col px-55 text-center text-primary mb-5">
        <img :src="product.image" alt="" class="w-100" />
        <h5>{{ product.nume }}</h5>
        <p>Price: {{ $formatPrice(product.price) }}</p>
        <div @click="addCartItem(product)">
          <HomeButton  label="Add to Cart" class="w-100"/>
        </div>
        
        <!-- <button @click="addCartItem(product)">Add to cart</button> -->
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton.vue"
export default {
  computed: {
    products() {
      return this.$store.state.cart.products;
    },
  },
  methods: {
    addCartItem(product) {
      this.$store.commit("cart/addToCart", {
        ...product,
        quantity: 1,
      });
      this.$bvModal.show('cart-aside')
    },
  },
  components:{
    HomeButton,
  }
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

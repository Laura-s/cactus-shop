<template>
  <div class="col px-55 text-center text-primary mb-5">
    <div>
      <div class="image-wrap">
        <img :src="product.image" alt="" class="w-100" />
        <p @click="showModal(product)" class="modal-link  p-0">Quick view</p>
      </div>
      
      <!-- <b-button id="show-btn" class="" @click="showModal(product)">Open Modal</b-button> -->
      
    </div>
    
    <h5>{{ product.nume }}</h5>
    <p>Price: {{ $formatPrice(product.price) }}</p>
    <div @click="addCartItem(product)">
      <HomeButton label="Add to Cart" class="w-100" />
    </div>
  
  
  </div>
</template>

<script>
export default {

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {

    addCartItem(product) {
      this.$store.commit("cart/addToCart", {
        ...product,
        quantity: 1,
      });
      this.$bvModal.show("cart-aside");
    },
    showModal(product){
      this.$store.commit("cart/setSelectedProduct", product)
			this.$bvModal.show("modal-center");
      
    }
  },
};
</script>

<style lang="scss">
.image-wrap{
  position: relative;
  
  .modal-link{
    position: absolute;
    bottom: 0px;
    left: 41%;
    visibility: hidden;
    cursor: pointer;
  }

  &:hover{
    .modal-link{
      visibility: visible;
    }
  }
}

</style>
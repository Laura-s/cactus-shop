<template>
  <div class="container mt-5 px-5 py-5 d-flex justify-content-center">
    <div class="row w-100 mx-3">
      <div class="col-8 cart-wrap overflow-auto px-3 pt-3 text-primary">
        <h5 class="cart-item py-3">My Cart</h5>

        <div
          v-for="product in cartItems"
          :key="product.id + '1'"
          class="cart-item mb-4 pb-4 d-flex"
        >
          <img :src="product.image" alt="" style="width: 100px" />
          <div class="cart-details pl-3 d-flex justify-content-between w-100">
            <div class="details-main">
              <h5>{{ product.nume }}</h5>
              <p>${{ product.price }}</p>

              <QuantityInput
                :quantity="product.quantity"
                @plus="incrementQuantity(product)"
                @minus="decrementQuantity(product)"
              />
            </div>
            <div class="detail-remove">
              <p>${{ product.price * product.quantity }}</p>
              <a @click.prevent="remove(product)" href="">Remove</a>
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter a promo code"
          class="text-primary note"
        /><br />
        <input type="text" placeholder="Add a note" class="text-primary note" />
      </div>
      <div class="col-4 text-primary pt-3">
        <h5 class="cart-item py-3">Order Summary</h5>
        <div class="cart-item py-4">
          <div class="row d-flex justify-content-between w-100 m-0">
            <p>Subtotal</p>
            <p>${{ total }}</p>
          </div>
          <div class="row d-flex justify-content-between w-100 m-0">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
        </div>
        <div class="row d-flex justify-content-between w-100 m-0 py-3">
          <h5>Total</h5>
          <p>${{ total }}</p>
        </div>
        <HomeButton v-b-modal.modal-1 label="Checkout" class="w-100" />
        

        <b-modal id="modal-1"  size="sm">
          <h1>End of demo</h1>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton.vue";
export default {
  methods: {
    incrementQuantity(product) {
      this.$store.commit("cart/increment", product);
    },
    decrementQuantity(product) {
      this.$store.commit("cart/decrement", product);
    },
    remove(product) {
      this.$store.commit("cart/remove", product);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
    total() {
      return this.$store.getters["cart/total"];
    },
  },
  components: {
    HomeButton,
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  border-bottom: solid 1px $primary;
}
.qantity-btn {
  height: 28px;
  width: 64px;
  border: black 1px solid;
  background-color: white;
}
.note {
  background-color: $info;
  border: none;
}
</style>
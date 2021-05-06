<template>
  <div>
    <b-modal
      id="cart-aside"
      :modal-class="['modal-dialog-aside', 'fixed-right']"
      hide-footer
    >
      <template #modal-header>
        <div class="text-primary d-flex justify-content-between w-100">
          <a @click.prevent="$bvModal.hide('cart-aside')">
            <font-awesome-icon :icon="['fas', 'angle-right']" size="2x"
          /></a>
          <p class="m-0" style="font-size: 25px">CART</p>
          <div></div>
        </div>
      </template>

      <div class="d-flex flex-column h-100 justify-content-between">
        <div class="cart-wrap overflow-auto px-3 pt-3 text-primary">
          <div
            v-for="product in cartItems"
            :key="product.id + '1'"
            class="cart-item mb-4 pb-4 d-flex"
          >
            <img :src="product.image" alt="" style="width: 100px" />
            <div class="cart-details d-flex justify-content-between w-100">
              <div>
                <h5>{{ product.nume }}</h5>
                <p class="font-weight-bold">
                  {{ $formatPrice(product.price) }}
                </p>

                <QuantityInput
                  :quantity="product.quantity"
                  @plus="incrementQuantity(product)"
                  @minus="decrementQuantity(product)"
                />
              </div>

              <a @click.prevent="remove(product)" href="" class="">X</a>
            </div>
          </div>
        </div>

        <div>
          <p class="text-primary m-3 pb-4 subtotal">
            Subtotal <br />
            {{ $formatPrice(total) }}
          </p>
          <hr />

          <NuxtLink to="/cart">
            <div
              class="home-button text-light d-flex justify-content-center align-items-center"
              @click="$bvModal.hide('cart-aside')"
            >
              <a>View Cart</a>
            </div></NuxtLink
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
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
}
.cart-details {
  a {
    display: none;
  }
  &:hover {
    a {
      display: block;
    }
  }
}

.subtotal {
  font-size: 26px;
}
.home-button {
  height: 41px;
  width: 100%;
  border: none;
  background-color: $primary;
  a {
    font-size: 15px;
    color: white;
  }
  &:hover {
    background-color: rgba(197, 169, 160, 0.89);
    a {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
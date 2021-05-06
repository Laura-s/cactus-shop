<template>
  <div>
    <!-- <b-button id="show-btn" @click="$bvModal.show('modal-center')">Open Modal</b-button> -->

    <b-modal id="modal-center" hide-footer>
      <div
        v-if="selectedProduct"
        class="d-block text-center d-flex container p-0"
      >
        <div class="row w-100 p-0">
          <div class="col-7">
            <img :src="selectedProduct.image" alt="" class="w-100" />
          </div>

          <div class="details col-5 text-left">
            <h5 class="text-primary title">{{ selectedProduct.nume }}</h5>
            <p class="text-primary price">
              {{ $formatPrice(selectedProduct.price) }}
            </p>
            <p>Id: {{ selectedProduct.id.substring(0, 4) }}</p>
            <p class="mb-2">Quantity</p>
            <div class="input-wrap mb-5">
              <input v-model="quantityInputValue" type="text" />
              <div class="sageti">
                <font-awesome-icon @click="plus" :icon="['fas', 'angle-up']" />
                <font-awesome-icon
                  @click="minus"
                  :icon="['fas', 'angle-down']"
                />
              </div>
            </div>

            <div @click="addCartItem(selectedProduct)">
              <HomeButton label="Add to Cart" class="w-100" />
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    quantityInputValue: 0,
  }),
  computed: {
    selectedProduct() {
      return this.$store.state.cart.selectedProduct;
    },
  },
  methods: {
    plus() {
      this.quantityInputValue = this.quantityInputValue + 1;
    },
    minus() {
      if (this.quantityInputValue > 1) {
        this.quantityInputValue = this.quantityInputValue - 1;
      }
    },
    addCartItem(product) {
      this.$store.commit("cart/addToCart", {
        ...product,
        quantity: parseInt(this.quantityInputValue),
      });
      this.$bvModal.hide("modal-center");
      this.$bvModal.show("cart-aside");
    },
  },
};
</script>

<style lang="scss" scoped>
.details{
  .title{
    font-size: 18px;
    font-weight: normal;
  }
  .price{
    font-size: 20px;
  }
}
.input-wrap {
  display: flex;

  width: 80px;
  border: 1px solid grey;
  input {
    border: none;
    width: 50px;
    height: 40px;
    margin-left: 10px;
  }
  .sageti {
    visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &:hover {
    .sageti {
      visibility: visible;
    }
  }
}
</style>
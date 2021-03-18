<template>
  <div class="qantity-btn d-flex justify-content-around">
    <a @click.prevent="$emit('minus')" href="">-</a>
    <span>{{ quantity }}</span>
    <a @click.prevent="$emit('plus')" href="">+</a>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.quantity-btn span {
  min-width: 18px;
  text-align: center;
}
</style>


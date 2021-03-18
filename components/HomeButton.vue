<template>
  <button>
    <a class="label "> {{ label }} </a>
  </button>
</template>

<script>
export default {
  props:{
    label: {
      type: String,
      default: "Shop Now"
    },

  }
}
</script>

<style lang="scss" scoped>
button {
  height: 41px;
  width: 181px;
  border: none;
  background-color: $primary;
  a{
    font-size: 15px;
    color: white;
  }
  &:hover{
    background-color:rgba(197, 169, 160, 0.89);
    a{
      color: black;
      text-decoration: none;
    }
  }
}




</style>


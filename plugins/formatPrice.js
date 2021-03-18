export default ({ app }, inject) => {
    inject('formatPrice', price => new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price))
  }

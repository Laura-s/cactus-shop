<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="light">
    <b-navbar-brand href="#">Logo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>
            <NuxtLink to="/shop">Shop</NuxtLink>
        </b-nav-text>
        <b-nav-text>
            <NuxtLink to="/about">About</NuxtLink>
        </b-nav-text>
        <b-nav-text>
            <NuxtLink to="/faq">FAQ</NuxtLink>
        </b-nav-text>
        <b-nav-text>
            <NuxtLink to="/#contact">Contact</NuxtLink>
        </b-nav-text>
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <p>
            Call Us Now! 123-456-7890</p>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
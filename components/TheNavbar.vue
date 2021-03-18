<template>
  <div>
  <b-navbar toggleable="lg"  variant="info" class= "text-primary px-5 m-0 fixed-top">
    <b-navbar-brand class="logo">
         <NuxtLink to="/">PRICKLES & CO.</NuxtLink></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="text-primary page-links">
        <b-nav-item-dropdown text="Shop1" right>
        <!-- <b-dropdown-item > <NuxtLink to="/shop">All</NuxtLink></b-dropdown-item> -->
        <b-dropdown-item href="/categories/cacti">Cacti</b-dropdown-item>
        <b-dropdown-item href="/categories/plant">Plants</b-dropdown-item>
        <b-dropdown-item href="#">Succulents</b-dropdown-item>
        
      </b-nav-item-dropdown>
        <b-nav-text class="">
            <NuxtLink to="/shop">Shop2</NuxtLink>
        </b-nav-text>
        <b-nav-text>
            <NuxtLink to="/#about">About</NuxtLink>
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
          <b-nav-text class="m-0">
           <p class="m-0">Call Us Now! 123-456-7890</p></b-nav-text>
            <b-nav-item @click="$bvModal.show('cart-aside')" ><BagIcon class="ml-3"/> </b-nav-item>
            
            
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import BagIcon from '../components/BagIcon'

export default {
  components:{
    BagIcon,
  }
}
</script>

<style lang="scss">
// @import 'assets/scss/_variables.scss';
.logo{
  font-size: 22px;
}
.pages{
  font-size: 14px;
}

</style>
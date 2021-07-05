<template>
  <div class="mx-5 p-0">
    <section class="hero text-light pb-5">
      <div class="hero-overlay d-flex flex-column justify-content-center pb-5">
        <div class="container hero-logo text-center mx-auto">
          <span class="mr-3">ESTB</span>
          <Logo />
          <span class="ml-3"> 2023</span>
        </div>
        <h1 class="text-center mb-4">PRICKLES & CO</h1>
        <p class="text-center mb-5">BRING NATURE INDOORS</p>
        <HomeButton class="mx-auto" />
      </div>
    </section>
    <section class="collection container-fluid my-5 p-0">
      <div class="row m-0 justify-content-start">
        <div class="col cacti-collection mr-2 mr-md-5 pt-4 mb-2 text-center">
          <h5>CACTI</h5>
          <div class="collection-line mx-auto mt-4 mb-3"></div>
          <HomeButton label="Shop Collection" />
        </div>
        <div class="col plants-collection mr-2 mr-md-5 pt-4 mb-2 text-center">
          <h5>PLANTS</h5>
          <div class="collection-line mx-auto mt-4 mb-3"></div>
          <HomeButton label="Shop Collection" />
        </div>
        <div class="col succulents-collection mr-2  pt-4 mb-2 text-center">
          <h5>SUCCULENTS</h5>
          <div class="collection-line mx-auto mt-4 mb-3"></div>
          <HomeButton label="Shop Collection" />
        </div>
      </div>
    </section>
    
    <section id="about" class="container-fluid m-0 p-0">
      <div class="row m-0 p-0">
        <div class="col-6 m-0 p-5 bg-light text-primary text-center">
          <h5>ABOUT US</h5>
          <div class="collection-line mx-auto my-4"></div>
          <p class="mx-5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p class="mx-5 pt-2">
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide.
          </p>
        </div>
        <div class="col-6 m-0 p-0 about-right d-flex">
          <div class="col-6 m-0 p-0 about-one">
            <!-- <img src="../static/images/images/about1.webp" alt="" /> -->
          </div>
          <div class="col-6 m-0 p-0 about-two">
            <!-- <img src="../static/images/images/about2.webp" alt="" /> -->
          </div>
        </div>
      </div>
      <div class="row m-0 p-0">
        <div class="col-6 m-0 p-0 about-girl">
          <!-- <img src="../static/images/images/about3.webp" alt="" /> -->
        </div>
        <div
          class="col-6 m-0 px-5 bg-secondary text-light text-center d-flex flex-column justify-content-center align-items-center"
        >
          <h4>BUY ONLINE NOW & GET 10% OFF !</h4>
          <button class="white-shop-btn mt-5"><a href="">Shop Now</a></button>
        </div>
      </div>
    </section>
    <section
      id="contact"
      class="container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="form-wrap container">
        <h5 class="text-center my-4">FOR SPECIAL REQUESTS & ORDERS</h5>
        <div class="collection-line mx-auto mb-4"></div>
        <form>
          <div class="container d-flex flex-column pt-3">
            <div class="row m-0 p-0">
              <div class="col-6 d-flex flex-column p-0">
                <label for="fname">First Name *</label>
                <input type="text" id="fname" />
              </div>
              <div class="col-6 d-flex flex-column p-0">
                <label for="lname">Last Name *</label>
                <input type="text" id="lname" />
              </div>
            </div>
            <label for="email">Email *</label>
            <input type="email" id="email" />
            <label for="phone">Phone</label>
            <input type="text" id="phone" />
            <label for="message">Message</label>
            <textarea id="message" cols="30" rows="6"></textarea>
            <button class="form-button mt-3"><a href="">Send</a> </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
// import HomeButton from "../components/HomeButton.vue";
// import { mapMutations } from 'vuex'

export default {
  
  components: {
    Logo,
    // HomeButton,
  },
};
</script>

<style lang="scss">
.hero {
  background: url(static/images/images/succulents.webp);
  background-size: cover;
  background-attachment: fixed;
  height: 792px;
  margin-top: 61px;
}
.hero-overlay {
  background-color: rgba(34, 71, 68, 0.404);
  height: 792px;
}


.hero-overlay p {
  letter-spacing: 0.45em;
}
.collection h5 {
  color: $primary;
}
.collection-line {
  border-bottom: 5px solid $primary;
  width: 20px;
}
.cacti-collection {
  background-image: url(../static/images/images/colection-cacti.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 567px;
  width: 100%;
}
.plants-collection {
  background-image: url(../static/images/images/collection-plants.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 567px;
  width: 100%;
}
.succulents-collection {
  background-image: url(../static/images/images/colection-succulents.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 567px;
  width: 100%;
}
.white-shop-btn {
  height: 41px;
  width: 181px;
  border: none;
  background-color: white;
  a {
    font-size: 15px;
    color: black;
  }
  &:hover {
    background-color: rgba(160, 197, 180, 0.336);
    a {
      color: white;
      text-decoration: none;
    }
  }
}
#about {
  h5 {
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 0.35em;
  }
  p {
    font-size: 16px;
    font-weight: lighter;
  }
  h4 {
    font-size: 80px;
    font-weight: bold;
  }
}

.about-right {
  // overflow: hidden;
  height: 456px;
}
.about-one{
  background-image: url(../static/images/images/about1.webp);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
}
.about-two{
  background-image: url(../static/images/images/about2.webp);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
}
.about-girl {
  background-image: url(../static/images/images/about3.webp);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 100%;
  height: 701px;
}
#contact {
  background: url(../static/images/images/plant.webp);
  background-size: cover;
  background-attachment: fixed;
  height: 792px;
  h5{
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 0.35em;
    color: $primary;
  }
}
.form-wrap {
  height: 611px;
  width: 770px;
  background-color: rgba(255, 255, 255, 0.658);
  input{
    height: 35px;
  }
}
#fname {
  margin-right: 10px;
}
.form-button {
  height: 41px;
  max-width: 100%;
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

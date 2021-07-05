<template>
  <footer class="mx-2 mx-md-5 p-0">
    <div class="container-fluid mx-0 px-5 pt-5 bg-secondary text-light">
      <div class="container mt-5">
        <div class="row text-center mb-5">
          <div class="col-12 col-md-4">
            <h5 class="mb-4">OUR STORE</h5>
            <p class="m-0 p-0">Address: 500 Terry Francois</p>
            <p class="m-0 p-0">Street San Francisco, CA 94158</p>
            <p class="m-0 p-0">Phone: 123-456-7890</p>
            <p class="m-0 p-0">Email: info@mysite.com</p>
          </div>
          <div class="col-12 col-md-4">
            <h5 class="mb-4">OPENING HOURS</h5>
            <p class="m-0 p-0">Mon - Fri: 7am - 10pm</p>
            <p class="m-0 p-0">Saturday: 8am - 10pm</p>
            <p class="m-0 p-0">Sunday: 8am - 11pm</p>
          </div>
          <div class="col-12 col-md-4 d-flex flex-column">
            <h5 class="mb-4">HELP</h5>
            <span> <a href="" class="text-light">Shipping & Returns</a></span>
            <span> <a href="" class="text-light">Privacy Policy</a></span>
            <span> <a href="" class="text-light">FAQ</a></span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-5">
            <h5 class="text-center mb-3">SUBSCRIBE</h5>
            <label for="footer-email">Enter your email here *</label><br />
            <input type="email" id="footer-email" />
            <button class="footer-btn ml-2">
              <a href="">Subscribe Now</a>
            </button>
            <br />
            <div class="d-flex justify-content-center my-5 socials">
              <img src="../static/images/images/fb.webp" alt="" />
              <img
                src="../static/images/images/ptrst.webp"
                alt=""
                class="mx-4"
              />
              <img src="../static/images/images/insta.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="mapouter mx-auto"><div class="gmap_canvas"><iframe width="1258" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:1258px;}</style><a href="https://google-map-generator.com">map generator</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1258px;}</style></div></div>

      <!-- <Map /> -->

    </div>
    
    <div class="credit">
        <p class="text-primary my-4 text-center">© 2023 by Prickles & Co.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer{
    overflow: hidden;
}
h5 {
  font-weight: lighter;
  letter-spacing: 0.35em;
  font-size: 19px;
}
input {
  width: 243px;
  height: 41px;
  background-color: $secondary;
  border: 2px solid white;
  color: white;
}
.footer-btn {
  height: 41px;
  width: 150px;
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
.socials img {
  height: 25px;
}
</style>
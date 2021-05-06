<template>
  <div id="map" style="height: 500px; width: 100%"></div>
</template>

<script>
const apiKey = 'AIzaSyCMYUgqk8R6NVVAf63JTDg04iOMrjh0y44'
const mapId ='8e1e0836bee466fd'
export default {
    head() {
    return {
      script: [
        {src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&map_ids=${mapId}`}
      ]
    };
  },
  mounted(){
    function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 8,
    mapId: mapId
    })
    
  }

      if(!navigator.geolocation) {
    
  } else {
    
    navigator.geolocation.getCurrentPosition(success);
  }

    
  }
}
</script>

<style>
</style>
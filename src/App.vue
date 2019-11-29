<template>
  <div>
    <div id="app page">
      <nav class="navbar">
        <router-link to="/"><img class="img" src="./assets/rvsct-logo.png" alt="rvsct-logo"></router-link>
        <p class="title">RVCE SOLAR CAR TEAM</p>
        <span>
          <a href="#" class="svg" v-on:click="openSlideMenu">
            <div class="container">
              <div class="stick stick-1"></div>
              <div class="stick stick-2"></div>
              <div class="stick stick-3"></div>
            </div>
          </a>
        </span>
        <div id="side-menu" class="side-nav" v-on:click='closeSlideMenu'>
          <hr style="margin-top:50px; width:700px; margin-left:50%"/>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/about">About</router-link>
          <router-link class="link" to="/gallery">Gallery</router-link>
          <router-link class="link" to="/sponsors">Sponsors</router-link>
          <router-link class="link" to="/cars">Cars</router-link>
          <router-link class="link" to="/events">Events</router-link>
          <router-link class="link" to="/contact">Contact Us</router-link>
        </div>
      </nav>
      <router-view/>
    </div>
    <footer class="footer" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <div>
          <ul class="footer-ul" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
            <li class="footer-li"><a class="footer-a" target="#" href="https://twitter.com/solarcar_rvce?lang=en">Twitter</a></li>
            <li class="footer-li"><a class="footer-a" target="#" href="https://www.facebook.com/solarcar.rvce/">Facebook</a></li>
            <li class="footer-li"><a class="footer-a" target="#" href="https://www.instagram.com/rvcesolarcarteam/">Instagram</a></li>
            <li class="footer-li"><a class="footer-a" target="#" href="https://www.youtube.com/channel/UCMHROnqYdjiCgHR3YkGoXZQ">YouTube</a></li>
          </ul>
        </div>
        <div class="footer-div2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
          <p class="footer-p1">RVCE Solar Car Team</p>
          <p class="footer-p2">Racing Towards Infinity...</p>
          <img src="./assets/rvce-logo1.png" alt="rvce-logo" height="120px" width="120px">
        </div>
      </footer>
    </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      open: true
    };
  },
  methods: {
    openSlideMenu: function() {
      if (this.open) {
        document.getElementById("side-menu").style.width = "100%";
        document.getElementsByClassName("stick")[0].classList =
          "stick stick-1 open";
        document.getElementsByClassName("stick")[1].classList =
          "stick stick-2 open";
        document.getElementsByClassName("stick")[2].classList =
          "stick stick-3 open";
        this.open = false;
      } else {
        document.getElementById("side-menu").style.width = "0";
        document.getElementsByClassName("stick")[0].classList =
          "stick stick-1 close";
        document.getElementsByClassName("stick")[1].classList =
          "stick stick-2 close";
        document.getElementsByClassName("stick")[2].classList =
          "stick stick-3 close";
        this.open = true;
      }
    },
    closeSlideMenu: function() {
      document.getElementById("side-menu").style.width = "0px";
      document.getElementsByClassName("stick")[0].classList =
        "stick stick-1 close";
      document.getElementsByClassName("stick")[1].classList =
        "stick stick-2 close";
      document.getElementsByClassName("stick")[2].classList =
        "stick stick-3 close";
      this.open = true;
    }
  }
};
</script>

<style lang="css">

@import './css/style.css';
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

</style>

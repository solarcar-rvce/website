<template>
  <div class="page">
    <div class="home-div">
      <div class="home-quote-div">
        <h1 class="quote">"SOLAR ENERGY IS NOT ABOUT FASHION, IT'S ABOUT SURVIVAL."</h1>
        <p class="quote-name" >-NORMAN FOSTER</p>
      </div>
      <div class="home-video-div">
        <video width="100%" height="500px" controls>
          <source src="../assets/main_video.mp4" type="video/mp4" >
        </video>
      </div>
    </div>
    <div class="parah-div"  data-aos="fade-in" data-aos-easing="linear">
      <img class="logo-img" src="../assets/logo.gif" alt="logo-gif">
      <img class="parah-div-img" src="http://i.imgur.com/YmevkNo.gif" alt="RVSCT-White">
      <h2 class="parah-div-h2" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">RACING TOWARDS INFINITY...</h2>
      <p class="parah-div-parah">Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics and artificial photosynthesis. Due to the growing energy crisis faced by the world, the team has come together with a motive to gain advancement in the solar domain and spread awareness regarding its plausible benefits to our society. The World Solar Challenge provides us a platform to showcase our product at a global stage, competing against teams from across the world.</p>
    </div>
    <div class="parah-div1">
      <h1 class="parah-div1-h" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">Preface</h1>
      <p class="parah-div1-p" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">The RVCE Solar Car Team – RVSCT, is a completely student-run organization that designs and builds Solar Electric Vehicles. It consists of 30 highly dedicated students, committed to tackle the rising global energy crisis, envisioning a world with sustainable transportation<br><br>We take pride in the fact that we were the only team from India to take part in the World Solar Challenge 2015 and 2017. We have received support from various companies including Infosys, Wipro, Schneider Electric, TCS and SunEdison to name a few. The project was mentored by Narayana Murthy, co-founder of Infosys and Chetan Maini, founder of Mahindra Reva.</p>
      <img class="parah-div1-img" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" src="../assets/arka-race.png" alt="arka-race">
    </div>
    <div class="img-div" data-aos="fade-in" data-aos-delay="500" data-aos-easing="ease-in-sine" data-aos-duration="1100" >
      <img class="img-div-img" src="../assets/06.jpg" alt="video-img">
      <div class="img-div-color"></div>
      <h1 class="img-div-h" data-aos="flip-up" data-aos-delay="700" data-aos-easing="ease-in-sine" data-aos-duration="1100">30<br><hr><span class="img-div-span">Students</span></h1>
      <h1 class="img-div-h1" data-aos="flip-up" data-aos-delay="700" data-aos-easing="ease-in-sine" data-aos-duration="1100">3<br><hr><span class="img-div-span">Cars</span></h1>
      <h1 class="img-div-h2" data-aos="flip-up" data-aos-delay="700" data-aos-easing="ease-in-sine" data-aos-duration="700">20<br><hr><span class="img-div-span">Sponsors</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../css/home-style.css';

</style>

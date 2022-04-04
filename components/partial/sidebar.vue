<template>
  <div>
    <!-- sidebar -->
    <div class="sb-overlay"></div>
    <div class="hiiden-sidebar-wrap outsb louis-sidebar">
      <!-- sb-widget-wrap-->
<!--      <div class="sb-widget-wrap fl-wrap">-->
<!--        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>-->
<!--        <div class="sb-widget  fl-wrap">-->
<!--          <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, </p>-->
<!--          <div class="subcribe-form fl-wrap">-->
<!--            <form id="subscribe">-->
<!--              <input class="enteremail" name="email" id="subscribe-email" placeholder="Your Email"-->
<!--                     spellcheck="false" type="text">-->
<!--              <button type="submit" id="subscribe-button" class="subscribe-button">Submit</button>-->
<!--              <label for="subscribe-email" class="subscribe-message"></label>-->
<!--            </form>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <!-- sb-widget-wrap end-->
      <!-- sb-widget-wrap-->
      <div class="sb-widget-wrap fl-wrap">
        <h3>We're Are Social</h3>
        <div class="sb-widget    fl-wrap">
          <div class="sidebar-social fl-wrap">
            <ul>
              <li><a href="https://facebook.com/ngtnloc" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="https://instagram.com/tnloc" target="_blank"><i class="fab fa-instagram"></i></a></li>
              <li><a href="https://twitter.com/cul0x" target="_blank"><i class="fab fa-twitter"></i></a></li>
              <li><a href="https://tnloc.work" target="_blank"><i class="fas fa-user"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- sb-widget-wrap end-->
      <!-- sb-widget-wrap-->
      <div class="sb-widget-wrap fl-wrap">
        <h3>Our Last Twitts</h3>
        <div class="sb-widget  fl-wrap">
          <div id="footer-twiit"></div>
          <a href="https://twitter.com/cul0x" target="_blank" class="twitt_btn fl-wrap">Follow Us</a>
        </div>
      </div>
      <!-- sb-widget-wrap end-->
    </div>
    <!-- sidebar end -->
  </div>
</template>

<script>
export default {
  name: "sidebar"
}
</script>

<style scoped>
.louis-sidebar {
  overflow: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.louis-sidebar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.louis-sidebar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

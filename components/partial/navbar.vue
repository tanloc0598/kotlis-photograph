<template>
  <!-- header start  -->
  <header class="main-header">
    <!-- logo   -->
    <NuxtLink to="/" class="logo-holder louis-nav-tittle">Louis Portfolio</NuxtLink>
    <!-- logo end  -->
    <!-- search -->
    <div class="search-button"><i class="far fa-search"></i></div>
    <div class="search-input"><input name="se" id="se" type="text" class="search" placeholder="Search.."/></div>
    <!-- search end  -->
    <div class="sb-button"></div>
    <!--    <div class="share-btn showshare"><i class="fal fa-megaphone"></i><span>Share</span></div>-->
    <!-- mobile nav -->
    <div class="nav-button-wrap">
      <div class="nav-button"><span></span><span></span><span></span></div>
    </div>
    <!-- mobile nav end-->
    <!--  navigation -->
    <div class="nav-holder main-menu">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" v-bind:class="{ 'act-link' : this.$nuxt.$route.path=='/'}">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio" v-bind:class="{ 'act-link' : this.$nuxt.$route.path=='/portfolio'}" >Portfolio</NuxtLink>
          <li>
            <NuxtLink to="/about" v-bind:class="{ 'act-link' : this.$nuxt.$route.path=='/about'}">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacts" v-bind:class="{ 'act-link' : this.$nuxt.$route.path=='/contacts'}">Contacts</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <!-- navigation  end -->
  </header>
  <!-- header end -->
</template>

<script>
export default {
  name: "navbar",

}
</script>

<style scoped>
  .louis-nav-tittle {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
    font-family: 'Ek Mukta', sans-serif;
  }
</style>

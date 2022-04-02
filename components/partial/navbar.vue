<template>
  <!-- header start  -->
  <header class="main-header">
    <!-- logo   -->
    <a href="index.html" class="logo-holder"><img src="images/logo.png" alt=""></a>
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
            <NuxtLink to="/" class="act-link">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio">Portfolio</NuxtLink>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacts">Contacts</NuxtLink>
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
  name: "navbar"
}
</script>

<style scoped>

</style>

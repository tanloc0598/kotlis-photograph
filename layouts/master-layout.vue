<template>
  <div>
    <spinner/>
    <div>
      <!-- main start  -->
      <div id="main">
        <partial-navbar/>
        <Nuxt/>
        <lazy-partial-sidebar/>

        <!-- cursor-->
        <div v-if="!$device.isMobileOrTablet" class="element">
          <div class="element-item"></div>
        </div>
        <!-- cursor end-->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "master-layout",
  mounted() {
  }
}
</script>

<style scoped>

</style>

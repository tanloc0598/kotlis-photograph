<template>
  <!-- column-image  -->
  <div class="column-image">
    <div class="bg" :style="{ backgroundImage: `url(/images/bg/22.jpg)` }"></div>
    <div class="overlay"></div>
    <div class="column-title">
      <h2>My Stories</h2>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
        lobortis pulvinar.</h3>
    </div>
    <div class="column-notifer">
      <div class="scroll-down-wrap transparent_sdw">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
        <span>Scroll down  to Discover</span>
      </div>
    </div>
    <div class="fixed-column-dec"></div>
  </div>
  <!-- column-image end  -->
</template>

<script>
export default {
  name: "left-columns"
}
</script>

<style scoped>

</style>

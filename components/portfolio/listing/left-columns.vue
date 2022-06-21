<template>
  <!-- column-image  -->
  <div class="column-image">
    <div v-if="img" class="bg" :style="{ backgroundImage: 'url(' + img + ')'  }"></div>
    <div v-else-if="vid" class="bg" >
      <video autoplay loop>
        <source :src="vid" type="video/mp4" codecs="avc1.4d002a, mp4a.40.2">
      </video>
    </div>
    <div v-else-if="img ===''" class="bg" :style="{}"></div>
    <div v-else class="bg" :style="{ backgroundImage: `url(/images/cover/IMG_1642778514959.jpeg)` }"></div>
    <div class="overlay"></div>
    <div class="column-title">
      <h2 v-if="title">{{ title}}</h2>
      <h2 v-else>{{"Our's Stories"}}</h2>
      <h3 v-if="description">{{ description }}</h3>
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
  name: "left-columns",
  props: [
    'title',
    'description',
    'img',
    'vid',
  ]
}
</script>

<style scoped>

</style>

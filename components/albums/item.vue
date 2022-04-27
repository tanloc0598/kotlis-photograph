<template>
  <!-- gallery-item-->
  <div class="gallery-item nature">
    <div class="grid-item-holder hov_zoom">
      <img :src="img" alt="">
      <a :href="img" class="box-media-zoom   popup-image"><i class="fal fa-search"></i></a>
        <div class="thumb-info">
          <h3><NuxtLink :to="'/portfolio/'+slug"> {{title}}</NuxtLink></h3>
          <p>{{description}}</p>
        </div>

    </div>
  </div>
  <!-- gallery-item end-->
</template>

<script>
export default {
  name: "item",
  props: [
    'title',
    'description',
    'slug',
    'createdAt',
    'img'
  ]
}
</script>

<style scoped>

</style>

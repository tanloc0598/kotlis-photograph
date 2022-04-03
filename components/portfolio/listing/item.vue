<template>
  <!-- post -->
  <div class="post fl-wrap fw-post">
    <h2><span>{{title}}</span></h2>
    <ul class="blog-title-opt">
      <li><a href="#">{{createdAt}}</a></li>
<!--      <li> -</li>-->
<!--      <li><a href="#">Interviews </a></li>-->
<!--      <li><a href="#">Design</a></li>-->
    </ul>
    <!-- blog media -->
    <div class="blog-media fl-wrap">
      <img :src="img" class="respimg" alt="">
    </div>
    <!-- blog media end -->
    <div class="blog-text fl-wrap">
<!--      <div class="pr-tags fl-wrap">-->
<!--        <span>Tags : </span>-->
<!--        <ul>-->
<!--          <li><a href="#">Photography</a></li>-->
<!--        </ul>-->
<!--      </div>-->
      <p>
       {{description}}
      </p>
      <NuxtLink :to="'/portfolio/'+slug" class="btn float-btn flat-btn">Read more </NuxtLink>
    </div>
  </div>
  <!-- post end-->
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

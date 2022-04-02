<template>
  <!-- post -->
  <div class="post fl-wrap fw-post">
    <h2><span>Blog post title</span></h2>
    <ul class="blog-title-opt">
      <li><a href="#">12 may 2017</a></li>
      <li> -</li>
      <li><a href="#">Interviews </a></li>
      <li><a href="#">Design</a></li>
    </ul>
    <!-- blog media -->
    <div class="blog-media fl-wrap">
      <img src="/images/folio/4.jpg" class="respimg" alt="">
    </div>
    <!-- blog media end -->
    <div class="blog-text fl-wrap">
      <div class="pr-tags fl-wrap">
        <span>Tags : </span>
        <ul>
          <li><a href="#">Design</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Fasion</a></li>
        </ul>
      </div>
      <p>
        Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit,
        vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta.
        Praesent eu massa vel diam laoreet elementum ac sed
        felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. Sed
        viverra dolor sed dolor placerat ornare ut . Integer iaculis tellus nulla, quis imperdiet magna
        venenatis vitae..
      </p>
      <NuxtLink to="/portfolio/_slug" class="btn float-btn flat-btn">Read more </NuxtLink>
    </div>
  </div>
  <!-- post end-->
</template>

<script>
export default {
  name: "item"
}
</script>

<style scoped>

</style>

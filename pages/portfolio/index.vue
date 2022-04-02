<template>
  <!-- wrapper  -->
  <div id="wrapper">
    <!-- content -->
    <div class="content">
      <portfolio-listing-left-columns/>
      <!-- column-wrapper -->
      <div class="column-wrapper  single-content-section">
        <portfolio-listing-pagination/>
        <!--section  -->
        <section class="single-content-section">
          <div class="container small-container">
            <portfolio-listing-item/>
            <portfolio-listing-item/>
            <portfolio-listing-item/>
            <portfolio-listing-item/>
            <portfolio-listing-item/>
          </div>
        </section>
        <!--section end  -->
        <portfolio-footer/>
      </div>
      <!-- column-wrapper -->
    </div>
    <!--content end-->
    <!--share-wrapper-->
<!--    <div class="share-wrapper">-->
<!--      <div class="share-container fl-wrap isShare"></div>-->
<!--    </div>-->
    <!--share-wrapper end-->
  </div>
  <!-- wrapper end -->

</template>

<script>
export default {
  name: "portfolio",
  layout: 'master-layout',
}
</script>

<style scoped>

</style>

<template>
  <!-- wrapper  -->
  <div id="wrapper">
    <!-- content -->
    <div class="content">
      <portfolio-listing-left-columns
        :description="portfolio.description" :title="portfolio.title"
        :img="portfolio.banner_img" :vid="portfolio.banner_vid" />
      <!-- column-wrapper -->
      <div class="column-wrapper single-content-section">
<!--        <div class="fixed-bottom-content content-animvisible">-->
<!--          &lt;!&ndash; pagination   &ndash;&gt;-->
<!--          <div class="content-nav-fixed">-->
<!--            <ul>-->
<!--              <li>-->
<!--                <a href="blog-single.html" class="ln"><i class="fal fa-long-arrow-left"></i><span>Prev <strong>- Project Title</strong></span></a>-->
<!--                <div class="content-nav_mediatooltip cnmd_leftside"></div>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="blog-single.html" class="rn"><span>Next <strong>- Project Title</strong></span> <i-->
<!--                  class="fal fa-long-arrow-right"></i></a>-->
<!--                <div class="content-nav_mediatooltip cnmd_rightside"></div>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
        <section>
          <div class="container small-container">
            <!-- post -->
            <div class="post fl-wrap fw-post single-post ">
              <div class="section-title fl-wrap content-animvisible">
                <h3>{{ portfolio.title }}</h3>
                <h4>{{ portfolio.description }}</h4>
                <div class="section-number">01.</div>
              </div>
              <div class="pr-det-container  ">
                <div class="fl-wrap">
                  <!-- blog media -->
                  <div class="blog-media fl-wrap">
                    <div class="single-image-wrap fl-wrap lightgallery">
                      <nuxt-content :document="portfolio"/>
                    </div>
                  </div>
                  <!-- blog media end -->
                  <div class="section-title fl-wrap content-animvisible">
                    <h3>Project Details</h3>
                    <h4>{{portfolio.detail_description}}</h4>
                    <div class="section-number">02.</div>
                  </div>
                  <span class="separator sep-b"></span>
                  <div class="clearfix"></div>
                  {{portfolio.detail}}
                </div>
                <div class="caption-wrap fl-wrap  ">
                  <ul>
                    <li>
                      <span>Location</span>
                      <a href="#">{{portfolio.location}}</a>
                    </li>
                    <li>
                      <span>Category</span>
                      <a href="#">{{portfolio.category}}</a>
                    </li>
                    <li>
                      <span>Model</span>
                      <a href="#">{{portfolio.model}}</a>
                    </li>
                    <li>
                      <span>Camera</span>
                      <a href="#">{{portfolio.camera}}</a>
                    </li>
                  </ul>
                </div>
<!--                <a href="#" class="btn fl-btn  " target="_blank">View Project</a>-->
              </div>
            </div>
            <!-- post end-->
          </div>
        </section>
        <lazy-portfolio-footer/>
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
  layout: 'master-layout',
  async asyncData({$content, params, app, error}) {
    console.log('data')

    const portfolio = await $content('portfolio', params.slug)
      .fetch(data => {
        console.log(data)
      })
      .catch((err) => {
        error({statusCode: 404, message: 'Page not found'})
      })
    console.log(portfolio)
    return {portfolio}
  },
}
</script>

<style scoped>

</style>

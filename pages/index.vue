<template>
  <!-- wrapper  -->
  <div id="wrapper">
    <!--content -->
    <div class="content full-height  hidden-item no-mob-hidden">
      <!-- fw-carousel-wrap -->
      <div class="fw-carousel-wrap fsc-holder">
        <!-- fw-carousel  -->
        <div class="fw-carousel  fs-gallery-wrap fl-wrap full-height lightgallery" data-mousecontrol="true">
          <div class="swiper-container">
            <div class="swiper-wrapper">

              <!-- swiper-slide-->
              <div class="swiper-slide hov_zoom" v-for="portfolio in portfolios"
                   :key="portfolio.slug">
                <img :src="portfolio.img" alt="">
                <a :href="portfolio.img" class="box-media-zoom   popup-image"><i class="fal fa-search"></i></a>
                <div class="thumb-info">
                  <h3>
                    <NuxtLink :to="'/portfolio/'+portfolio.slug">{{ portfolio.title }}</NuxtLink>
                  </h3>
                  <p>{{ portfolio.description }}</p>
                </div>
              </div>
              <!-- swiper-slide end-->
            </div>
          </div>
        </div>
        <!-- fw-carousel end -->
      </div>
      <!--slider-counter-->
      <div class="slider-counter_wrap">
        <div class="fw-carousel-counter"></div>
      </div>
      <!--slider-counter end-->
      <!--bottom-panel-->
      <div class="bottom-panel">
        <div class="bottom-panel-column bottom-panel-column_left">
          <div class="scroll-down-wrap">
            <div class="mousey">
              <div class="scroller"></div>
            </div>
            <span>Scroll down or  Swipe</span>
          </div>
          <div class="fs-controls_wrap">
            <div class="fw_cb fw-carousel-button-prev"><i class="fal fa-angle-left"></i></div>
            <div class="fw_cb fw-carousel-button-next"><i class="fal fa-angle-right"></i></div>
          </div>
        </div>
        <div class="bottom-panel-column bottom-panel-column_right">
          <div class="half-scrollbar">
            <div class="hs_init"></div>
          </div>
        </div>
      </div>
      <!--bottom-panel end-->
    </div>
    <!--content end-->
    <!--share-wrapper-->
    <div class="share-wrapper">
      <div class="share-container fl-wrap  isShare"></div>
    </div>
    <!--share-wrapper end-->
  </div>
  <!-- wrapper end -->

</template>

<script>
export default {
  name: 'TimelinePage',
  layout: 'master-layout',

  async asyncData({$content, params, app, error}) {
    const portfolios = await $content('portfolio', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({statusCode: 404, message: 'Page not found'})
      })
    return {
      portfolios,
    }
  },
  methods: {
    formatDate(date) {
      console.log(date)
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

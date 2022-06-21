<template>
<!--  &lt;!&ndash; wrapper  &ndash;&gt;-->
<!--  <div id="wrapper">-->
<!--    &lt;!&ndash;content &ndash;&gt;-->
<!--    <div class="content full-height  hidden-item no-mob-hidden">-->
<!--      &lt;!&ndash; fw-carousel-wrap &ndash;&gt;-->
<!--      <div class="fw-carousel-wrap fsc-holder">-->
<!--        &lt;!&ndash; fw-carousel  &ndash;&gt;-->
<!--        <div class="fw-carousel  fs-gallery-wrap fl-wrap full-height lightgallery" data-mousecontrol="true">-->
<!--          <div class="swiper-container">-->
<!--            <div class="swiper-wrapper">-->

<!--              &lt;!&ndash; swiper-slide&ndash;&gt;-->
<!--              <div class="swiper-slide hov_zoom" v-for="portfolio in portfolios"-->
<!--                   :key="portfolio.slug">-->
<!--                <img :src="portfolio.img" alt="">-->
<!--                <a :href="portfolio.img" class="box-media-zoom   popup-image"><i class="fal fa-search"></i></a>-->
<!--                <div class="thumb-info">-->
<!--                  <h3>-->
<!--                    <NuxtLink :to="'/portfolio/'+portfolio.slug">{{ portfolio.title }}</NuxtLink>-->
<!--                  </h3>-->
<!--                  <p>{{ portfolio.description }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              &lt;!&ndash; swiper-slide end&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; fw-carousel end &ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash;slider-counter&ndash;&gt;-->
<!--      <div class="slider-counter_wrap">-->
<!--        <div class="fw-carousel-counter"></div>-->
<!--      </div>-->
<!--      &lt;!&ndash;slider-counter end&ndash;&gt;-->
<!--      &lt;!&ndash;bottom-panel&ndash;&gt;-->
<!--      <div class="bottom-panel">-->
<!--        <div class="bottom-panel-column bottom-panel-column_left">-->
<!--          <div class="scroll-down-wrap">-->
<!--            <div class="mousey">-->
<!--              <div class="scroller"></div>-->
<!--            </div>-->
<!--            <span>Scroll down or  Swipe</span>-->
<!--          </div>-->
<!--          <div class="fs-controls_wrap">-->
<!--            <div class="fw_cb fw-carousel-button-prev"><i class="fal fa-angle-left"></i></div>-->
<!--            <div class="fw_cb fw-carousel-button-next"><i class="fal fa-angle-right"></i></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="bottom-panel-column bottom-panel-column_right">-->
<!--          <div class="half-scrollbar">-->
<!--            <div class="hs_init"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;bottom-panel end&ndash;&gt;-->
<!--    </div>-->
<!--    &lt;!&ndash;content end&ndash;&gt;-->
<!--    &lt;!&ndash;share-wrapper&ndash;&gt;-->
<!--    <div class="share-wrapper">-->
<!--      <div class="share-container fl-wrap  isShare"></div>-->
<!--    </div>-->
<!--    &lt;!&ndash;share-wrapper end&ndash;&gt;-->
<!--  </div>-->
<!--  &lt;!&ndash; wrapper end &ndash;&gt;-->
  <!-- wrapper  -->
  <div id="wrapper">
    <!-- content -->
    <div class="content">
      <!-- bottom-filter-wrap -->
      <div class="bottom-filter-wrap hor-filter-wrap">
        <div class="scroll-down-wrap">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
          <span>Scroll down to discover</span>
        </div>
        <div class="filter-title">Filters <i class="fal fa-long-arrow-right"></i></div>
        <div class="gallery-filters">
          <a href="#" class="gallery-filter  gallery-filter-active" data-filter="*">All</a>
          <a href="#" class="gallery-filter" data-filter=".nature">Nature</a>
          <a href="#" class="gallery-filter" data-filter=".models">Models</a>
          <a href="#" class="gallery-filter" data-filter=".couples">Couples</a>
          <a href="#" class="gallery-filter" data-filter=".outdoor">Outdoor</a>
        </div>
        <div class="count-folio round-counter">
          <div class="num-album"></div>
          <div class="all-album"></div>
        </div>
      </div>
      <!-- bottom-filter-wrap end -->
      <div class="ff_panel-conainer fl-wrap">
        <!-- portfolio start -->
        <div class="gallery-items big-padding   four-column fl-wrap vis-thumb-info lightgallery">
          <!-- gallery-item-->
          <div v-for="portfolio in portfolios" class="gallery-item nature" :key="portfolio.slug">
            <div class="grid-item-holder hov_zoom">
              <div>
                <img :src="portfolio.img" alt="" style="width: 100%; height: 337px; object-fit: cover; object-position: 50% 50%;"
                >

              </div>
              <a :href="portfolio.img" class="box-media-zoom   popup-image"><i class="fal fa-search"></i></a>
              <div class="thumb-info">
                <h3><NuxtLink :to="'/portfolio/'+portfolio.slug">{{ portfolio.title }}</NuxtLink></h3>
                <p>{{ portfolio.description }} </p>
              </div>
            </div>
          </div>
          <!-- gallery-item end-->
        </div>
        <!-- portfolio end -->
      </div>
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

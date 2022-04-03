<template>
  <!-- wrapper  -->
  <div id="wrapper">
    <!-- content -->
    <div class="content">
      <portfolio-listing-left-columns/>
      <!-- column-wrapper -->
      <div class="column-wrapper  single-content-section">
        <portfolio-listing-pagination />
        <!--section  -->
        <section class="single-content-section">
          <div class="container small-container">
            <div v-for="portfolio in portfolios"
                 :key="portfolio.slug">
              <portfolio-listing-item :title="portfolio.title" :slug="portfolio.slug" :date="portfolio.createdAt"
                                      :img="portfolio.img"
                                      :createdAt="formatDate(portfolio.createdAt)"
              />
            </div>
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
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>

</style>

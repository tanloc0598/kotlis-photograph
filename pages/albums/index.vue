<template>
  <!-- wrapper  -->
  <div id="wrapper">
    <!-- content -->
    <div class="content">
      <portfolio-listing-left-columns/>
<!--      &lt;!&ndash; column-wrapper &ndash;&gt;-->
<!--      <div class="column-wrapper  single-content-section">-->
<!--        <portfolio-listing-pagination :lastPage="lastPage" :currentPage="currentPage" :query="query"/>-->
<!--        &lt;!&ndash;section  &ndash;&gt;-->
<!--        <section class="single-content-section">-->
<!--          <div class="container small-container">-->
<!--            <div v-for="portfolio in portfolios"-->
<!--                 :key="portfolio.slug">-->
<!--              <portfolio-listing-item :title="portfolio.title" :slug="portfolio.slug" :date="portfolio.createdAt"-->
<!--                                      :img="portfolio.img"-->
<!--                                      :createdAt="formatDate(portfolio.createdAt)"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->
<!--        &lt;!&ndash;section end  &ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash; column-wrapper &ndash;&gt;-->

      <!--    -------------------------------- -->


      <!-- column-wrapper -->
      <div class="column-wrapper column-wrapper_smallpadding">
        <!--fixed-bottom-content -->
        <div class="fixed-bottom-content fbc_white">
          <div class="gallery-filters">
            <a href="#" class="gallery-filter  gallery-filter-active" data-filter="*">All</a>
            <a href="#" class="gallery-filter" data-filter=".nature">Nature</a>
            <a href="#" class="gallery-filter" data-filter=".models">Models</a>
            <a href="#" class="gallery-filter" data-filter=".couples">Couples</a>
            <a href="#" class="gallery-filter" data-filter=".outdoor">Outdoor</a>
          </div>
        </div>
        <!-- fixed-bottom-content end -->
        <!-- portfolio start -->
        <div class="gallery-items min-pad   three-column fl-wrap lightgallery">
          <div v-for="portfolio in portfolios"
               :key="portfolio.slug">
            <AlbumItem :title="portfolio.title" :slug="portfolio.slug"
                       :date="portfolio.createdAt"
                       :img="portfolio.img"
                       :createdAt="formatDate(portfolio.createdAt)"/>
          </div>

        </div>
        <!-- portfolio end -->

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
  async asyncData({$content, query , params, app, error}) {
    const perPage = 10;
    const currentPage = parseInt(query.page ?? 1);

    const allPortfolios = await $content("portfolio").fetch();

    const totalPortfolios = allPortfolios.length;

    // use Math.ceil to round up to the nearest whole number
    const lastPage = Math.ceil(totalPortfolios / perPage);

    // use the % (modulus) operator to get a whole remainder
    const lastPageCount = totalPortfolios % perPage === 0 ? perPage : totalPortfolios % perPage;

    const skipNumber = () => {
      if (currentPage === 1) {
        return 0;
      }
      if (currentPage === lastPage) {
        return totalPortfolios - lastPageCount;
      }
      return (currentPage - 1) * perPage;
    };
  console.log(currentPage, lastPage)
    const portfolios = await $content('portfolio', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(perPage)
      .skip(skipNumber())
      .fetch()
      .catch(() => {
        error({statusCode: 404, message: 'Page not found'})
      })
    return {
      portfolios, lastPage, currentPage, query
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

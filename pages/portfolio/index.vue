<template>
  <!-- wrapper  -->
  <div id="wrapper">
    <!-- content -->
    <div class="content">
      <portfolio-listing-left-columns/>
      <!-- column-wrapper -->
      <div class="column-wrapper  single-content-section">
        <portfolio-listing-pagination :lastPage="lastPage" :currentPage="currentPage" :query="query"/>
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
  async asyncData({$content, query , params, app, error}) {
    const perPage = 5;
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

<template>
  <!-- fixed-bottom-content-->
  <div v-if="lastPage" class="fixed-bottom-content">
    <!-- pagination   -->
    <div class="pagination-container fl-wrap">
      <a href="#" class="prevposts-link"><i class="fal fa-chevron-left"></i></a>
      <NuxtLink v-for="page in lastPage" :key="page" v-bind:class="{ 'current-page': page === currentPage }"
                :to="{name: 'portfolio', query: { ... query ,page:page } }">{{ page }}
      </NuxtLink>
      <a href="#" class="nextposts-link"><i class="fal fa-chevron-right"></i></a>
    </div>
    <!-- pagination  end -->
  </div>
  <!-- fixed-bottom-content end -->
</template>

<script>
export default {
  name: "pagination",
  props: [
    'currentPage',
    'lastPage',
    'query'
  ]
}
</script>

<style scoped>

</style>

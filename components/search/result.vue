<template>
  <section class="searchProduct">
    <ProductsList :products="products" title="" />
  </section>
</template>

<script>
export default {
  name: 'SearchResult',

  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    const res = await this.$axios(
      this.$apiContext(
        'product/search',
        'get',
        {},
        { key: '' }
      )
    )
    this.products = res.data
  },

  methods: {
    async fetchSomething() {
      const res = await this.$axios(
        this.$apiContext(
          'product/search',
          'get',
          {},
          { key: '' }
        )
      )
      this.products = res.data
    },
  },
}
</script>

<style></style>

<template>
  <div>
    <home-banner />
    <HomeCategories />
    <ProductsList :products="products" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ params, $axios, $apiContext }) {
    const slug = await params.slug // When calling /abc the slug will be "abc"
    const res = await $axios($apiContext(`product/new/6`))

    return { slug, products: res.data }
  },
}
</script>

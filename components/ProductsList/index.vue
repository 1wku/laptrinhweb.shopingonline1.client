<template>
  <div class="container">
    <h2 :v-if="title !== ''">{{ title }}</h2>
    <div class="products">
      <product-card
        v-for="product in products.slice(0, 8)"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeBestProduct',
  props: {
    title: { type: String, default: 'Sản phẩm mới nhất' },
    limit: { type: Number, default: 6 },
    column: { type: Number, default: 4 },
    products: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
  },
  data() {
    return {
      productLimited:
        this.limit === -1
          ? this.products
          : this.products.slice(0, this.limit),
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px 80px;
  & > h2 {
    margin-bottom: 2rem;
  }
}
.products {
  width: fill;

  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: repeat(
    auto-fill,
    minmax(0, 280px)
  );
  grid-template-rows: auto auto;
  grid-gap: 2rem;
}
</style>

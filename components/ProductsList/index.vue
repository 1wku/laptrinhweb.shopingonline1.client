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
      default: [
        {
          id: '001',
          name: 'Urbas SC - Mule',
          cate_id: '001',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: true,
        },
        {
          id: '002',
          name: 'Urbas SC - Mule',
          cate_id: '002',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: false,
        },
        {
          id: '003',
          name: 'Urbas SC - Mule',
          cate_id: '003',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: false,
        },
        {
          id: '004',
          name: 'Urbas SC - Mule',
          cate_id: '004',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: true,
        },
        {
          id: '005',
          name: 'Urbas SC - Mule',
          cate_id: '005',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: true,
        },
        {
          id: '006',
          name: 'Urbas SC - Mule',
          cate_id: '006',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: true,
        },
        {
          id: '007',
          name: 'Urbas SC - Mule',
          cate_id: '005',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: true,
        },
        {
          id: '008',
          name: 'Urbas SC - Mule',
          cate_id: '006',
          price: 10000000,
          image:
            'https://ananas.vn/wp-content/uploads/Pro_AV00198_1-500x500.jpg',
          status: true,
        },
      ],
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
  width: inherit;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(
    auto-fill,
    minmax(0, 280px)
  );
  grid-template-rows: auto auto;
  align-items: center;
  width: fill;
  grid-gap: 2rem;
}
</style>

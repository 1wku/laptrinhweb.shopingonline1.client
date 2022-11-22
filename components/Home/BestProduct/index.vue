<template>
  <div class="container">
    <h2>Sản phẩm nổi bật</h2>
    <div class="products">
      <product-card
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from '../../ProductCard.vue'
export default {
  name: 'HomeBestProduct',
  components: { ProductCard },
  data() {
    return {
      products: [
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
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;

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
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  width: fill;
  grid-gap: 2rem;
}
</style>

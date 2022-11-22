<!-- eslint-disable require-await -->
<template>
  <div class="container">
    <div class="product-main">
      <div class="product__image">
        <img :src="product.image" alt="" />
      </div>
      <div class="product__info">
        <h2>{{ product.name }}</h2>
        <div class="product__sub">
          <p class="caption">
            Mã sản phẩm: {{ product.id }}
          </p>
          <p class="caption">
            Tình trạng hàng:
            <span
              :class="{ isEmpty: !product.status }"
              class="product__status"
              >{{
                product.status ? 'Còn hàng' : 'Hết hàng'
              }}</span
            >
          </p>
        </div>
        <p class="subtitle product__price">
          {{ formatPric(product.price) }} VNĐ
        </p>
        <divider />
        <button
          class="button dark"
          @click="addIntoCart(product)"
        >
          THÊM VÀO GIỎ HÀNG
        </button>
        <button class="button">MUA NGAY</button>
        <divider />
        <common-profile-mini
          img="https://kenh14cdn.com/203336854389633024/2020/12/31/photo-1-16094117624341764656274.jpg"
          name="Tung nui"
        />
        <divider />
        <h3>Mô Tả</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <products-list
      title="Sản phẩm liên quan"
      :products="relateProducts"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Divider from '../../components/common/Divider.vue'

export default {
  components: { Divider },
  async asyncData({ params, $axios, $apiContext }) {
    const slug = await params.slug // When calling /abc the slug will be "abc"
    const res = await $axios($apiContext(`product/${slug}`))

    return { slug, product: res.data }
  },
  data() {
    return {
      relateProducts: [
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
  methods: {
    formatPric(num) {
      const numStr = `${num}`
      return numStr
        .split('')
        .reverse()
        .reduce((prev, curr, index) => {
          if (
            index % 3 === 2 &&
            index !== numStr.length - 1
          )
            return prev + curr + '.'
          return prev + curr
        })
        .split('')
        .reverse()
        .join('')
    },
    ...mapMutations({
      addIntoCart: 'cart/addProductIntoCart',
    }),
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.product {
  &-main {
    width: 100%;
    padding: 80px;

    display: flex;
    flex-direction: row;
  }

  &__image {
    width: 50%;
    & > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  &__info {
    width: 50%;
    padding: 0 4rem;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    & > h2 {
      margin-bottom: 2rem;
    }

    & > h3 {
      margin-bottom: 1rem;
    }
  }

  &__sub {
    width: fill;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  &__price {
    color: #ff5f17;
    font-weight: bolder;
    font-size: 40px;
  }

  &__status {
    font-weight: 700;
    color: #75a14f;
  }
}
.isEmpty {
  color: #a14f4f;
}

.button {
  width: fill;
  margin: 0.5rem 0;
  padding: 1.2rem;

  background: #ff5f17;
  color: #fff;

  font-style: 32px;
  font-weight: bold;

  outline: none;
  border: none;
}

.dark {
  background: #000;
}
</style>

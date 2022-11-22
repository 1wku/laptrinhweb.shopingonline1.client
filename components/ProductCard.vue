<template>
  <nuxt-link :to="`/product/${id}`">
    <div class="card">
      <div v-if="!status" class="label-empty">Hết hàng</div>
      <div class="card__img">
        <img :src="image" alt="" />
      </div>
      <div class="card__info">
        <h4 class="card__name">{{ name }}</h4>
        <div class="card__info-sub">
          <p class="card__info-price">{{ price }} vnđ</p>
          <p class="body-3">Mã SP: {{ id }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    name: { type: String, default: 'Tên sản phẩm' },
    image: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    },
    id: {
      type: Number,
      default: -1,
    },
    price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  min-width: 300px;
  width: fill;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  position: relative;

  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  padding-bottom: 1rem;

  &:hover {
    border-bottom: 1px solid #ff5f17;
    border-top: 1px solid #ff5f17;
  }
  &__img {
    width: 100%;
    height: 0;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;

    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: fill;

    border-top: 1px dashed #555;
    padding-top: 1rem;

    &-price {
      color: #ff5f17;
    }
  }

  &__name {
    margin-bottom: 1rem;
  }
  &__price {
  }
  .label-empty {
    position: absolute;
    top: 1rem;
    right: 0;
    z-index: 1;
    padding: 0.5rem 1rem;
    background: #ff5f17;
    color: white;
  }
  &__info-sub {
    width: fill;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

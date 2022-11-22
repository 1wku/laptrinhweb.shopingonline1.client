<template>
  <div class="item">
    <div class="item__img">
      <img :src="image" alt="" />
    </div>
    <div class="item__info">
      <p class="item__name body-2">
        <span
          class="item__removebtn material-symbols-outlined"
          @click="removeProductFromCart({ id })"
        >
          delete
        </span>
        {{ name }}
      </p>
      <p class="item__sub caption">
        Mã sp: {{ id }} - <strong>{{ price }}</strong> vnđ
      </p>
      <div class="item__amount">
        <span
          class="material-symbols-outlined"
          @click="decreaseProductById(id)"
        >
          chevron_left
        </span>
        <input v-model="amountCpt" type="" name="" id="" />
        <span
          class="material-symbols-outlined"
          @click="increaseProductById(id)"
        >
          chevron_right
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CartProductItem',
  props: {
    image: { type: String, default: '' },
    name: { type: String, default: '' },
    id: { type: String, default: '' },
    price: { type: Number, default: 0 },
    amount: { type: Number, default: 0 },
  },
  computed: {
    amountCpt() {
      return this.amount
    },
  },
  methods: {
    ...mapMutations({
      decreaseProductById: 'cart/decreaseProductById',
      increaseProductById: 'cart/increaseProductById',
      removeProductFromCart: 'cart/removeProductFromCart',
    }),
  },
}
</script>

<style lang="scss" scoped>
.item {
  height: 80px;
  width: fill;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__img {
    height: 80px;
    width: 80px;
    overflow: hidden;
    position: relative;
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
    width: fit-content;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: start;
    position: relative;
    & > * > strong {
      color: rgb(47, 118, 45);
      font-weight: 700;
    }
  }

  &__amount {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    & > input {
      width: 2rem;
      text-align: center;
    }
    & > span {
      cursor: pointer;
    }
  }

  &__name {
    display: flex;
  }

  &__removebtn {
    font-size: 18px;
    cursor: pointer;
    margin-right: 0.5rem;
  }
}
</style>

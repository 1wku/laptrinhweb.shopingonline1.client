<template>
  <div
    v-click-outside="toggle_popup_constraint"
    class="cart"
  >
    <div class="cart__popup-point">
      <div :class="{ show_popup }" class="cart__popup">
        <h4>Giỏ Hàng</h4>
        <divider />
        <CartItem
          v-for="{ product, amount } in productsInCart"
          :key="product.id"
          v-bind="product"
          :amount="amount"
        />
        <divider />
        <div class="cart__item"></div>
        <div class="cart__sum subtitle">
          <span>Tổng tiền</span>
          <span class="cart__sum-right"
            >{{ sumPrice }} vnđ
          </span>
        </div>
        <button class="button">Thanh Toán</button>
      </div>
    </div>
    <div class="cart__label" @click="toggle_popup">
      <span class="label">{{ amountProductInCart }}</span>
      <span class="material-symbols-outlined">
        shopping_bag
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Divider from '../../../common/Divider.vue'
import CartItem from './item.vue'

export default {
  name: 'CartComponent',
  components: { Divider, CartItem },
  data() {
    return {
      show_popup: false,
    }
  },
  methods: {
    toggle_popup() {
      this.show_popup = !this.show_popup
    },
    toggle_popup_constraint() {
      if (this.show_popup) this.show_popup = false
    },
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    productsInCart() {
      return this.$store.state.cart.cart
    },
    ...mapGetters({
      amountProductInCart: 'cart/getAmountProductInCart',
      sumPrice: 'cart/getSumPrice',
    }),
  },
}
</script>

<style lang="scss" scoped>
.cart {
  &__label {
    background: #ff5f17;
    color: #fff;
    padding: 1rem 0.8rem;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    & > * + * {
      margin-top: 0.5rem;
    }
  }

  &__popup {
    position: absolute;
    width: 360px;
    padding: 1rem;

    transform: translateX(120%);
    opacity: 0;
    transition: all 0.2s ease-out;

    background: #eee;
    color: #000;

    right: 1.6rem;
    top: 0rem;

    z-index: -1;

    &-point {
      position: relative;
      width: 100%;
      height: 0;
      margin-top: 0 !important;
    }

    & > h4 {
      margin-bottom: 1rem;
    }
  }
  &__sum {
    width: fill;
    display: flex;

    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    &-right {
      font-weight: 600;
    }
  }
}

.show_popup {
  transform: translateX(-2rem);
  opacity: 1;
}

.button {
  width: fill;
  margin: 0.5rem 0;
  padding: 1rem;

  background: #ff5f17;
  color: #fff;

  font-style: 28px;
  font-weight: bold;

  outline: none;
  border: none;
}
</style>

export const state = () => ({
  cart: [],
})

export const getters = {
  getAmountProductInCart(state) {
    return state.cart.length
  },
  getSumPrice(state) {
    return state.cart.reduce(
      (prev, { product: { price }, amount }) => {
        return prev + price * amount
      },
      0
    )
  },
}

export const mutations = {
  addProductIntoCart(state, payload) {
    const addIndex = state.cart.findIndex(
      (item) => item.product.id === payload.id
    )
    if (addIndex === -1)
      state.cart.push({ product: payload, amount: 1 })
    else {
      const prevProductVersion = state.cart[addIndex]
      state.cart.splice(addIndex, 1, {
        ...prevProductVersion,
        amount: prevProductVersion.amount + 1,
      })
    }
  },

  removeProductFromCart(state, { id }) {
    const removeIndex = state.cart.findIndex(
      (item) => item.product.id === id
    )
    state.cart.splice(removeIndex, 1)
  },

  cleanTheCart(state) {
    state.cart = []
  },

  increaseProductById(state, id) {
    const addIndex = state.cart.findIndex(
      (item) => item.product.id === id
    )
    const prevProductVersion = state.cart[addIndex]
    state.cart.splice(addIndex, 1, {
      ...prevProductVersion,
      amount: prevProductVersion.amount + 1,
    })
  },
  decreaseProductById(state, id) {
    const addIndex = state.cart.findIndex(
      (item) => item.product.id === id
    )
    const prevProductVersion = state.cart[addIndex]
    if (prevProductVersion.amount === 1)
      state.cart.splice(addIndex, 1)
    else
      state.cart.splice(addIndex, 1, {
        ...prevProductVersion,
        amount: prevProductVersion.amount - 1,
      })
  },
}

export const actions = {
  // eslint-disable-next-line require-await
  async buyAllProductInCart(state) {
    state.cart = []
    return true
  },
}

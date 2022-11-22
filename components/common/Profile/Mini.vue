<template>
  <NuxtLink class="profile" to="/">
    <div class="profile__img">
      <img :src="img" alt="" />
    </div>
    <div class="profile__info">
      <p class="profile__name subtitle">{{ name }}</p>
      <p class="profile__amount caption">
        Shop hiện có
        <strong>{{ amountOfproduct }}</strong> sản phẩm
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ProfileMini',
  props: {
    name: { type: String, default: 'Ten nguoi ban' },
    img: { type: String, default: '' },
    amountOfproduct: { type: Number, default: 12 },
  },
}
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  width: fill;
  height: 80px;
  background: #eee;

  display: flex;
  cursor: pointer;
  &__img {
    background: #000;
    height: 100%;
    width: 80px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    padding: 0.8rem;
  }
  &__amount {
    & > strong {
      font-weight: 700;
    }
  }
}
</style>

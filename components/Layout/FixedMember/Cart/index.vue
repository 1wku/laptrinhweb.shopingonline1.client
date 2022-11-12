<template>
  <div class="castIcon">
    <span class="label">1</span>
    <span class="material-symbols-outlined"> shopping_bag </span>
  </div>
</template>

<script>
export default {
  name: 'CartIcon',
}
</script>

<style lang="scss" scoped>
.castIcon {
  background: #ff5f17;
  color: #fff;
  padding: 1rem 0.8rem;
  font-size: 16px;
  width: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  & > * + * {
    margin-top: 0.5rem;
  }
}
</style>

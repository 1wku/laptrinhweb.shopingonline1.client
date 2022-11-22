<template>
  <div class="searchbar">
    <span class="material-symbols-outlined"> search </span>
    <input class="searchbar__input" type="text" placeholder="Tên sản phẩm..." />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style lang="scss" scoped>
.searchbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.75rem;
  width: 17.5rem;
  border: 0.0625rem solid #ccc;
  color: #555;
  padding: 0.5rem;
  & > span {
    margin-right: 0.5rem;
  }
  & > input {
    background: transparent;
  }
}
</style>

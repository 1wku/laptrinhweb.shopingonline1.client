<template>
  <div class="search">
    <aside class="searchFilter">
      <select id="categories" name="categories">
        <option value=""></option>
      </select>
    </aside>
    <search-result class="searchProduct" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search {
  display: grid;
  grid-template-columns: 1fr 3fr;

  &Filter {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    & > * + * {
      margin-bottom: 1rem;
    }
  }

  &Product {
    width: fill;
  }
}
</style>

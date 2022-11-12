<template>
  <header class="header">
    <span class="logo"> SO </span>
    <LayoutHeaderNavBar />
    <div class="right-group">
      <LayoutHeaderSearchBar />
    </div>
  </header>
</template>
<script>
export default {
  name: 'LayoutHeader',
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 5rem;
}
.right-group {
  display: flex;
  flex-direction: row;
}
</style>

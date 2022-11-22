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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.79);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.right-group {
  display: flex;
  flex-direction: row;
}
</style>

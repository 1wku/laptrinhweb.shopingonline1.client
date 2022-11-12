<template>
  <div class="nav">
    <LayoutHeaderNavBarItem
      v-for="item in navigations"
      :key="item.text"
      :text="item.text"
    />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navigations: [
        {
          text: 'Trang chủ',
        },
        {
          text: 'Sản phẩm',
        },
        {
          text: 'Sale-off',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <div class="wrap">
    <LayoutFixedMemberCart />
    <LayoutFixedMemberContactMe />
  </div>
</template>

<script>
export default {
  name: 'FixedMember',
}
</script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  right: 0;
  top: 30%;
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;

  & > * + * {
    margin-top: 2rem;
  }
}
</style>

<template>
  <span class="navitem">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    text: { type: String, default: 'Home' },
  },
}
</script>

<style lang="scss" scoped>
.navitem {
  position: relative;
  padding: 16px;
  cursor: pointer;
  &:hover::after {
    background: #555;
  }
  &::after {
    transition: all 0.2s ease-in;
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
    right: 0;
    top: 50%;
    width: 2px;
    height: 50%;
    background: #ccc;
  }
}
</style>

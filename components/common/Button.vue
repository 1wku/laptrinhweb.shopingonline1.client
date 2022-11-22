<template>
  <button
    class="button"
    :class="{ fill: fill, [color]: true }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: { type: String, default: 'Button' },
    color: { type: String, default: 'primary' },
    fill: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.button {
  padding: 20px 30px;
}
</style>

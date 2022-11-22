<template>
  <div class="banner">
    <div class="banner__slider">
      <img
        id="slider_1"
        src="https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt=""
        class="banner__slider-item"
      />
      <img
        id="slider_2"
        src="https://images.unsplash.com/photo-1667373818961-888a2d8ceb88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
        class="banner__slider-item"
      />
      <img
        id="slider_3"
        src="https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt=""
        class="banner__slider-item"
      />
    </div>
    <div class="banner__nav">
      <a href="#slider_1"></a>
      <a href="#slider_2"></a>
      <a href="#slider_3"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  methods: {},
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100vw;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;

  &__nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    & > a {
      width: 20px;
      height: 6px;
      border-radius: 50px;

      margin: 0.5rem;

      background: rgba(255, 255, 255, 0.63);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.8px);
      -webkit-backdrop-filter: blur(5.8px);
      border: 1px solid rgba(255, 255, 255, 0.71);
    }
  }

  &__slider {
    position: relative;

    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    &-item {
      scroll-snap-align: start;
      flex-shrink: 0;
      width: 100vw;
      height: 80vh;
      object-fit: cover;
      position: relative;

      transition: transform 0.5s;
      transform: scale(1);
      transform-origin: center center;
    }
  }
}
html {
  scroll-behavior: smooth;
}
</style>

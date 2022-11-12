<template>
  <div class="contact">
    <a class="contact__item">
      <img
        src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook_2.svg"
        alt=""
      />
    </a>
    <a class="contact__item">
      <img
        src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram_2.svg"
      />
    </a>
    <a class="contact__item" href="https://www.youtube.com/discoveryou">
      <img
        src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube_2.svg"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
}
</script>

<style lang="scss" scoped>
.contact {
  background: #666;
  color: #fff;
  padding: 1rem 0.8rem;
  font-size: 16px;
  width: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__item {
  }

  & > * + * {
    margin-top: 0.5rem;
  }
}
</style>

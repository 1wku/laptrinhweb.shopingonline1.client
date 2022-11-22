<template>
  <div class="container">
    <h2>Danh mục sản phẩm</h2>
    <div class="cate">
      <div
        v-for="item in categories"
        :key="item.name"
        class="cate__card"
      >
        <img :src="item.image" alt="" class="cate__img" />
        <h4 class="cate__name">{{ item.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCategories',
  data() {
    return {
      categories: [
        {
          name: 'Quần xì',
          image:
            'https://images.unsplash.com/photo-1643201523264-b368be40aa7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        },
        {
          name: 'Áo dú',
          image:
            'https://images.unsplash.com/photo-1494698852314-652666555934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        },
        {
          name: 'Giày',
          image:
            'https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 80px;

  width: 100%;
  & > h2 {
    margin-bottom: 2rem;
  }
}

.cate {
  width: fill;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__card {
    position: relative;
    width: 400px;
    height: 300px;
    border-radius: 6px;

    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      width: 150%;
      height: 150%;

      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      z-index: -1;
      background: #833ab4; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #fcb045,
        #fd1d1d,
        #833ab4
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #fcb045,
        #fd1d1d,
        #833ab4
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      opacity: 0.2;
      transition: all 0.3s ease-out;
    }

    &:hover::after {
      transform: translate(-50%, -50%) rotate(120deg)
        scale(1.3);

      opacity: 0.8;
    }

    &:hover {
      .cate__img {
        transform: scale(1.1);
      }
      .cate__name {
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%) scale(1.4);
        color: #fff;
      }
    }
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    transition: transform 0.3s ease-out;
  }

  &__name {
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    transform: translate(0%, 50%);

    color: #eee;

    transition: all 0.3s ease-out;
  }
}
</style>

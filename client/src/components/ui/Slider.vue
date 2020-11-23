<template>
  <carousel
    :per-page="1"
    v-model="index"
    :mouse-drag="true"
    :touchDrag="true"
    :paginationEnabled="false"
    class="carousel"
  >
    <slide
      class="carousel__item backdrop"
      v-for="(image, idx) in images"
      :key="idx"
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/showcase/slider/' + image.url + '.jpg') +
          ')',
      }"
    >
      <div class="carousel__item__content">
        <h1>{{ image.title }}</h1>
        <p>{{ image.text }}</p>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "Slider",
  props: {
    images: Array,
  },
  setup() {
    const index = ref(0);
    return { index };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100vh;

  &__item {
    height: 100vh;
    display: flex;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &__content {
      z-index: 1;
      margin: auto;
      color: #fff;
      transition: 0.3s;
      padding: 0 1rem;
      max-width: 1200px;
      text-shadow: 0 0 5px rgba(#000, 0.3);
      h1 {
        margin: 0 0 1rem;
      }

      p {
        font-size: 16px;
      }
    }

    &:active {
      cursor: grabbing;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .carousel {
    &__item {
      &__content {
        h1 {
          font-size: 50px;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .carousel {
    &__item {
      &__content {
        h1 {
          font-size: 85px;
        }
      }
    }
  }
}
</style>

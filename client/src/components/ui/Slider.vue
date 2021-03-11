<template>
  <carousel
    :per-page="1"
    v-model="index"
    :mouse-drag="true"
    :paginationEnabled="true"
    paginationPosition="bottom-overlay"
    :navigationEnabled="true"
    :resistanceCoef="0"
    navigationNextLabel="<span class='lnr lnr-chevron-right'></span>"
    navigationPrevLabel="<span class='lnr lnr-chevron-left'></span>"
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
      <div
        class="carousel__item__content"
        :class="[
          {
            'animate__animated animate__fadeInLeft animate__fast': idx == index,
          },
          'hidden',
        ]"
      >
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

<style lang="scss">
.carousel {
  width: 100%;
  height: 100vh;
  position: relative;

  .VueCarousel-navigation {
    display: none;
  }

  @include xl() {
    .VueCarousel-navigation {
      top: 50%;
      left: 50%;
      display: block;
      position: absolute;
      transform: translate(-50%, -50%);

      &-button {
        font-size: 60px;
        outline: none !important;
        color: #ccc !important;
      }

      &-prev {
        left: -690px !important;
      }
      &-next {
        right: -690px !important;
      }
    }
  }

  .VueCarousel-dot {
    outline: none !important;
    padding: 2px !important;
    background: rgba(#fff, 0.2) !important;
    margin: 0 10px 50px !important;
    box-shadow: 0 0 10px rgba(#000, 0.3) !important;

    &--active {
      background: rgba(#fff, 0.8) !important;
    }
  }

  &__item {
    height: 100vh;
    display: flex;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &__content {
      width: 100%;
      z-index: 1;
      margin: auto;
      color: #fff;
      padding: 0 1rem;
      transition: 0.3s;
      max-width: 1200px;
      animation-delay: 0.3s;
      text-shadow: 0 0 5px rgba(#000, 0.3);
      &.hidden {
        display: none;
      }
      &.animate__fadeInLeft {
        display: block;
      }
      h1 {
        margin: 0 0 1rem;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      p {
        width: 100%;
        font-size: 23px;
        max-width: 650px;
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
          font-size: 60px;
        }
      }
    }
  }
}
</style>

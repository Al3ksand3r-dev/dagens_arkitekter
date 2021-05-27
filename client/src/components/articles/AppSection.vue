<template>
  <article class="article article--grid" data-aos="fade-up" data-aos-delay="60">
    <div class="article__item">
      <section class="article__text" :id="scrollTo">
        <h1>{{ titleSmall }}</h1>
        <h2>
          {{ title }}
        </h2>
      </section>
      <div
        class="article__image"
        :style="{
          backgroundImage: `url(${require('@/assets/article/' +
            imgUrl.first +
            '.jpg')})`,
        }"
      ></div>
    </div>

    <div class="article__item">
      <section class="article__text"></section>
      <div
        class="article__image"
        :style="{
          backgroundImage: `url(${require('@/assets/article/' +
            imgUrl.second +
            '.jpg')})`,
        }"
      ></div>
    </div>
  </article>
</template>

<script>
export default {
  name: "AppSection",
  props: {
    title: {
      type: String,
      default: null,
    },
    titleSmall: {
      type: String,
      default: null,
    },
    imgUrl: {
      type: Object,
      default: null,

      first: {
        type: String,
        default: null,
      },

      second: {
        type: String,
        default: null,
      },
    },
    scrollTo: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  &--grid {
    display: grid;
    gap: 2rem;
    padding: 8rem 1rem;

    @include md() {
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
    }
  }

  &__text {
    margin: 0 0 22px;
    h1 {
      display: flex;
      font-size: 18px;
      font-weight: 400;
      margin: 0 0 22px;
      align-items: center;
      text-transform: uppercase;

      &::before {
        content: "";
        height: 1px;
        width: 60px;
        display: block;
        margin-right: 10px;
        background: #000;
      }
    }

    h2 {
      margin: 0 0 35px;
      font-weight: 400;

      @include md() {
        margin: 0 0 50px;
      }
    }

    p {
      font-size: 16px;
    }
  }

  &__image {
    width: 100%;
    background: no-repeat center center/cover;
    height: 580px;
    box-shadow: 0px 4px 7px 0px rgba(#000, 0.3);
  }
}
</style>

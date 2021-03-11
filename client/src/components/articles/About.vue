<template>
  <article class="article grid">
    <div class="article__item">
      <section class="article__text" id="about">
        <h1 data-aos="fade-up" data-aos-delay="60">Om oss</h1>
        <h2 data-aos="fade-up" data-aos-delay="80">
          Vi erbjuder våra kunder helhetslösningar från idé till verklighet.
        </h2>
      </section>
      <div class="article__image-first"></div>
    </div>

    <div class="article__item">
      <section class="article__text" id="about"></section>
      <div class="article__image-second"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.article {
  &__text {
    margin: 0 0 22px;
    h1 {
      display: flex;
      font-size: 14px;
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
    }

    p {
      font-size: 16px;
    }
  }

  &__image {
    &-first {
      @include setImageStyles(
        "../../assets/article/interior-natural-sun.jpg",
        600px
      );
    }
    &-second {
      @include setImageStyles(
        "../../assets/article/interior-living-room.jpg",
        600px
      );
    }
  }
}
</style>

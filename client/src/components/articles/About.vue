<template>
  <article class="article grid">
    <section class="article__text">
      <h1>Om oss</h1>
      <h2>
        Vi erbjuder våra kunder helhetslösningar från idé till verklighet.
      </h2>
      <p>
        Vi är duktiga arkitekter och ingenjörer. Idag kan vi erbjuda våra kunder
        hög och bred kompetens inom arkitektur och projektering.
      </p>
    </section>
    <div class="article__image"></div>
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
    @include setImageStyles(
      "../../assets/article/interior-natural-sun.jpg",
      600px
    );
  }
}
</style>

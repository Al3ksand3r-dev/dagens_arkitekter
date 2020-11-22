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
    <img
      class="article__image"
      :src="require('@/assets/article/interior-natural-sun.jpg')"
      alt="interior design"
    />
  </article>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  margin: auto;
  max-width: 1024px;
  padding: 70px 1rem 0;

  &__text {
    margin: 0 0 35px;
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
      font-size: 27px;
      margin: 0 0 50px;
      font-weight: 900;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
    }
  }

  &__image {
    display: block;
    max-width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .article {
    padding: 200px 1rem 0;

    &__text {
      margin: 2rem 0 0;
      h2 {
        font-size: 31px;
      }
    }
  }
  .grid {
    gap: 0 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .article {
    &__text {
      h2 {
        font-size: 41px;
      }
    }
  }
}
</style>

<template>
  <div class="article">
    <div class="article__image backdrop">
      <div class="article__image__content">
        <section class="article__image__text" id="services">
          <h1>Våra tjänster</h1>
          <h2>
            Med stort intresse och engagemang erbjuder vi våra kunder
            projektering & rådgivning med 2D & 3D ritningar inom...
          </h2>
        </section>
      </div>
    </div>
    <div class="grid">
      <Card
        data-aos="fade-up"
        data-aos-delay="90"
        vectorIcon="lnr lnr-apartment"
        title="Boende"
      />
      <Card
        data-aos="fade-up"
        data-aos-delay="70"
        vectorIcon="lnr lnr-heart-pulse"
        title="Vård & Sjukhus"
      />
      <Card
        data-aos="fade-up"
        data-aos-delay="50"
        vectorIcon="lnr lnr-graduation-hat"
        title="Lärandemiljöer"
      />
      <Card
        data-aos="fade-up"
        data-aos-delay="110"
        vectorIcon="lnr lnr-users"
        title="Handel, Kultur & Fritid"
      />
      <Card
        data-aos="fade-up"
        data-aos-delay="130"
        vectorIcon="lnr lnr-apartment"
        title="Kontor & Industri"
      />
      <Card
        data-aos="fade-up"
        data-aos-delay="150"
        vectorIcon="lnr lnr-dinner"
        title="Hotell & Restaurang"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/ui/Card.vue";
export default {
  name: "Services",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;

  &__image {
    padding: 8rem 1rem 4rem;
    height: 580px;
    @include setImageStyles("../../assets/article/interior-wood.jpg", 580px);
    // background-color: rgb(26, 26, 26);

    &__content {
      margin: auto;
      max-width: 1200px;
    }

    &__text {
      z-index: 1;
      color: #fff;
      position: relative;

      h1 {
        &::before {
          background: #fff;
        }
      }
    }
  }

  .grid {
    gap: 2rem;
    padding: 0 1rem;
    max-width: 1200px;
    margin: -6rem auto 0;

    @include mediaQ(1200px) {
      padding: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .article {
    &__image {
      &__text {
        text-align: center;

        h1 {
          margin-right: 5rem;
          display: inline-flex;
          &::before {
            margin: auto;
            margin-right: 1rem;
          }
        }
      }
    }
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

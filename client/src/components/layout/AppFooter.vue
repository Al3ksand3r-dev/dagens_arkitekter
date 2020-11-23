<template>
  <footer class="footer">
    <main class="footer__content">
      <section class="footer__content__header">
        <img :src="require('@/assets/logo/DA-logo.png')" alt="footer logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          fugit.
        </p>
      </section>
      <section class="footer__content__links">
        <h1>Snabblänkar</h1>
        <ul class="footer__content__links__list">
          <li
            class="footer__content__list__item"
            v-for="link in links"
            :key="link.label"
          >
            <router-link :to="{ name: link.url }">{{ link.label }}</router-link>
          </li>
        </ul>
      </section>
    </main>
    <div class="footer__copy"></div>
  </footer>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "AppFooter",
  setup() {
    const links = ref([
      {
        url: "about",
        label: "Om oss",
      },
      {
        url: "services",
        label: "Våra tjänster",
      },
      {
        url: "permit",
        label: "Bygglov",
      },
      {
        url: "contact",
        label: "Kontakta oss",
      },
    ]);
    return { links };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #999;
  padding: 6rem 1rem;
  margin: 8rem 0 0;

  &__content {
    gap: 0 4rem;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;

    &__header {
      img {
        width: 100px;
        display: block;
        margin: -10px 0 20px -20px;
      }

      p {
        width: 200px;
        color: #fff;
        font-size: 14px;
      }
    }

    &__links {
      color: #fff;
      h1 {
        font-size: 20px;
        margin: 0 0 29px;
      }
      &__list {
        list-style: none;

        a {
          color: #fff;
          display: block;
          font-size: 14px;
          margin: 0 0 15px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

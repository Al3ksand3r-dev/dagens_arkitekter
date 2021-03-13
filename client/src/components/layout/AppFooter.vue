<template>
  <footer class="footer backdrop">
    <main class="footer__content">
      <section class="footer__content__header">
        <img :src="require('@/assets/logo/DA-logo.png')" alt="footer logo" />
      </section>
      <section class="footer__content__links">
        <h1>Snabblänkar</h1>
        <ul class="footer__content__links__list">
          <li
            class="footer__content__list__item"
            v-for="link in links"
            :key="link.label"
          >
            <a
              href="#"
              v-scroll-to="link.hash"
              v-if="link.elName"
              @click="$store.state.isOpen && $store.commit('TOGGLE_SIDEBAR')"
              >{{ link.elName }}</a
            >
            <router-link
              v-else
              :to="{ name: link.url }"
              @click.native="
                $store.state.isOpen && $store.commit('TOGGLE_SIDEBAR')
              "
              >{{ link.label }}</router-link
            >
          </li>
        </ul>
      </section>
    </main>
    <div class="footer__copy">
      <p class="footer__copy__text">
        Copyright {{ new Date().getFullYear() }} All rights reserved | Made By
        Aleksander Dimitrijevic
      </p>
      <ul class="footer__copy__social-links">
        <li
          class="footer__copy__social-links__link-item"
          v-for="socialLink in socialLinks"
          :key="socialLink.icon"
        >
          <i :class="socialLink.icon"></i>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "AppFooter",
  setup() {
    const links = ref([
      {
        elName: "Om oss",
        hash: "#about",
      },
      {
        elName: "Våra tjänster",
        hash: "#services",
      },
      {
        url: "Permits",
        label: "Bygglov",
      },
      {
        url: "Contact",
        label: "Kontakta oss",
      },
    ]);
    const socialLinks = ref([
      {
        url: "/",
        icon: "fab fa-facebook",
      },
      {
        url: "/",
        icon: "fab fa-youtube",
      },
      {
        url: "/",
        icon: "fab fa-twitter",
      },
      {
        url: "/",
        icon: "fab fa-instagram",
      },
    ]);
    return { links, socialLinks };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  margin: 8rem 0 0;
  flex-flow: column;
  background: #999;
  padding: 6rem 1rem 0;
  justify-content: space-between;
  @include setImageStyles("../../assets/showcase/footer-showcase.jpg", 600px);
  background-attachment: fixed;
  &::before {
    background: rgba(#000, 0.85);
  }

  &__content {
    z-index: 1;
    gap: 0 4rem;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
    max-width: 1200px;
    position: relative;

    @include lg() {
      display: flex;
    }

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
        margin: 0 0 25px;
        @include mediaQ(768px) {
          margin: 0;
        }
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

        li {
          display: block;
          margin: 0 0 15px;
        }

        a {
          color: #fff;
          font-size: 14px;
          transition: all 0.2s ease;
          text-decoration: none;

          @include lg() {
            &:hover {
              padding-left: 0.25rem;
            }
          }
        }
      }
    }
  }

  &__copy {
    z-index: 1;
    width: 100%;
    margin: auto;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    position: relative;
    align-items: center;
    justify-content: space-between;

    &__text {
      font-size: 14px;
      margin: 0 0 20px;

      @include mediaQ(768px) {
        margin: 0;
      }
    }

    &__social-links {
      width: 100%;
      display: flex;
      list-style: none;
      padding: 0 0 20px;
      &__link-item {
        padding: 0 25px 0 0;
        i {
          font-size: 14px;
          cursor: pointer;

          @include mediaQ(1024px) {
            transition: 0.3s;
            &:hover {
              transform: rotateY(180deg);
            }
          }
        }
      }

      @include mediaQ(768px) {
        padding: 0;
        width: auto;
      }
    }
  }
}
</style>

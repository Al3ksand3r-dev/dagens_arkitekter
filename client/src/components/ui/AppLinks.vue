<template>
  <ul
    class="navigation-list navigation-list--flex navigation-list--col navigation-list--vCenter"
  >
    <li v-for="link in links" :key="link.label">
      <a
        href="#"
        v-scroll-to="link.hash"
        v-show="link.scrollTo"
        class="navigation-list__link"
        @click="$store.state.isOpen && $store.commit('TOGGLE_SIDEBAR')"
        >{{ link.elName }}</a
      >
      <router-link
        class="navigation-list__link"
        :to="{ name: link.url }"
        v-show="!link.elName"
        @click.native="$store.state.isOpen && $store.commit('TOGGLE_SIDEBAR')"
        >{{ link.label }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "AppLinks",
  setup() {
    const links = ref([
      {
        scrollTo: true,
        elName: "Om oss",
        hash: "#about",
      },
      {
        elName: "Våra tjänster",
        scrollTo: true,
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
    return { links };
  },
};
</script>

<style lang="scss" scoped></style>

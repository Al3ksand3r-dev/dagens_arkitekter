<template>
  <ul
    class="navigation-list navigation-list--flex navigation-list--col navigation-list--vCenter"
  >
    <li
      v-for="link in links"
      :key="link.label"
      :class="{ 'navigation-list__sub-link': link.label === 'Mer' }"
    >
      <a
        href="#"
        v-scroll-to="link.hash"
        v-if="link.elName"
        class="navigation-list__link"
        @click="$store.state.isOpen && $store.commit('TOGGLE_SIDEBAR')"
        >{{ link.elName }}</a
      >
      <router-link
        v-else
        class="navigation-list__link"
        :to="{ name: link.url }"
        @click.native="$store.state.isOpen && $store.commit('TOGGLE_SIDEBAR')"
        >{{ link.label }}
      </router-link>
      <ul
        v-if="link.subLinks"
        class="navigation-list navigation-list__sub-menu"
      >
        <li v-for="subLink in link.subLinks" :key="subLink.elName">
          <a
            href="#"
            class="navigation-list__link"
            v-scroll-to="subLink.hash"
            @click="$store.state.isOpen && $store.commit('TOGGLE_SIDEBAR')"
            >{{ subLink.elName }}</a
          >
        </li>
      </ul>
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
        elName: "Om oss",
        hash: "#about",
      },
      {
        elName: "Våra tjänster",
        hash: "#services",
      },
      {
        label: "Mer",
        subLinks: [
          {
            elName: "Försäljningsmaterial",
            hash: "#material",
          },
          {
            elName: "Brf hemsida",
            hash: "#brf",
          },
          {
            elName: "Projektering & Rådgivning",
            hash: "#project",
          },
        ],
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

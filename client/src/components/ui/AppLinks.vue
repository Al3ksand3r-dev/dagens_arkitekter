<template>
  <ul
    class="navigation-list navigation-list--flex navigation-list--col navigation-list--vCenter"
  >
    <li
      v-for="link in links"
      :key="link.label"
      :class="{ 'navigation-list__sub-link': link.label === 'Mer' }"
      v-on="link.label === 'Mer' && width < 992 && { click: toggleSubMenu }"
      @click="
        link.label !== 'Mer' &&
          $store.state.isOpen &&
          $store.commit('TOGGLE_SIDEBAR')
      "
    >
      <a
        href="#"
        v-scroll-to="link.hash"
        v-if="link.elName"
        class="navigation-list__link"
        >{{ link.elName }}</a
      >
      <router-link v-else class="navigation-list__link" :to="{ name: link.url }"
        >{{ link.label }}
        <span
          v-if="link.label === 'Mer'"
          class="lnr lnr-chevron-down arrow"
          :class="{ rotate: subMenu }"
        ></span>
      </router-link>
      <ul
        v-if="link.subLinks"
        class="navigation-list navigation-list__sub-menu"
        :class="{ open: subMenu }"
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
import { useWindowSize } from "vue-window-size";

export default {
  name: "AppLinks",
  setup() {
    const { width } = useWindowSize();
    const subMenu = ref(false);
    const links = ref([
      {
        elName: "Våra tjänster",
        hash: "#services",
      },
      {
        elName: "Om oss",
        hash: "#about",
      },
      {
        url: "Contact",
        label: "Kontakta oss",
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
    ]);

    const toggleSubMenu = () => {
      subMenu.value = !subMenu.value;
    };

    return { links, toggleSubMenu, subMenu, width };
  },
};
</script>

<template>
  <ul
    class="navigation-list navigation-list-flex navigation-list-col navigation-list-vCenter"
  >
    <router-link
      class="navigation-list__link"
      v-for="link in links"
      :key="link.label"
      :to="{ name: link.url }"
      >{{ link.label }}</router-link
    >
  </ul>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "AppLinks",
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

<style lang="scss" scoped></style>

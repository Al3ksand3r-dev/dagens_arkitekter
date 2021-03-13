<template>
  <aside class="sidebar" :class="{ change: $store.state.isOpen }">
    <app-links />
  </aside>
</template>

<script>
import AppLinks from "../ui/AppLinks.vue";
export default {
  components: { AppLinks },
  name: "AppSidebar",
};
</script>

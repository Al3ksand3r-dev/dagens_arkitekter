<template>
  <aside class="sidebar">
    <div class="sidebar__close-btn">&times;</div>
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

<style lang="scss" scoped></style>

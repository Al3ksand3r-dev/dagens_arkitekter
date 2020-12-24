<template>
  <aside class="sidebar" :class="{ change: $store.state.isOpen }">
    <div class="sidebar__close-btn" @click="$store.commit('TOGGLE_SIDEBAR')">
      &times;
    </div>
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

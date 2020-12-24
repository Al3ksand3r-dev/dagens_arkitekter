<template>
  <div id="app">
    <app-bar />
    <app-sidebar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AppSidebar from "./components/layout/AppSidebar.vue";
export default {
  name: "App",
  components: {
    AppBar,
    AppFooter,
    AppSidebar,
  },
};
AppSidebar;
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>

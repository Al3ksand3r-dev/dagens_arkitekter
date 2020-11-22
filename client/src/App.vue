<template>
  <div id="app">
    <app-bar />
    <router-view />
  </div>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>

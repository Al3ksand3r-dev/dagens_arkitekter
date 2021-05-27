<template>
  <nav class="navbar" :class="{ 'navbar--change': $store.state.isOpen }">
    <router-link to="/" class="navbar__site-link">
      <img :src="require('@/assets/logo/DA-logo.png')" alt="site logo" />
    </router-link>
    <div
      class="navbar__hamburger-icon"
      @click="$store.commit('TOGGLE_SIDEBAR')"
    >
      <div />
      <div />
      <div />
    </div>
    <app-links class="navigation-list--desktop" />
  </nav>
</template>

<script>
import AppLinks from "../ui/AppLinks.vue";
export default {
  components: { AppLinks },
  name: "AppBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  margin: auto;
  display: flex;
  padding: 1rem 0;
  max-width: 1440px;
  position: absolute;
  justify-content: space-between;

  &__site-link {
    padding: 0 0 0 5px;
    text-decoration: none;
    img {
      width: 100px;
      display: inline-block;
      margin: -10px 0 0 -10px;
    }
  }

  &__hamburger-icon {
    padding: 5px 1rem 5px;
    cursor: pointer;

    div {
      width: 25px;
      height: 2px;
      margin: 6px 0;
      background: #fff;
    }
  }
}

@media screen and (min-width: 768px) {
  .navbar {
    padding: 2rem 0;
  }
}
</style>

<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__link">
      <img :src="require('@/assets/logo/DA-logo.png')" alt="site logo" />
    </router-link>
  </nav>
</template>

<script>
export default {
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
  max-width: 1200px;
  padding: 1rem 0;
  position: absolute;

  &__link {
    padding: 10px;
    text-decoration: none;
    img {
      width: 80px;
      display: inline-block;
      margin: -10px 0 0 -10px;
    }
  }
}

@media screen and (min-width: 768px) {
  .navbar {
    padding: 2rem 0;
  }
}
</style>

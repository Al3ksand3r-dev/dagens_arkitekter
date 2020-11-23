<template>
  <div class="card">
    <span :class="vectorIcon"></span>
    <h1 class="card__title">{{ title }}</h1>
    <p class="card__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    vectorIcon: String,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  z-index: 1;
  width: 100%;
  margin: auto;
  display: flex;
  height: 400px;
  flex-flow: column;
  border-radius: 7px;
  padding: 4rem 2rem;
  text-align: center;
  align-items: center;
  background: $creamWhite;
  justify-content: space-around;

  span {
    font-size: 3rem;
    margin: 0 0 20px;
  }

  &__title {
    font-size: 20px;
    text-transform: uppercase;
    &::before {
      display: none;
    }
  }

  &__description {
    font-size: 15px;
    color: #717081;
  }
}
</style>

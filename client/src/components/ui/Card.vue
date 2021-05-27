<template>
  <div class="card">
    <span :class="vectorIcon"></span>
    <h1 class="card__title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    vectorIcon: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  z-index: 1;
  width: 100%;
  margin: auto;
  display: flex;
  height: 350px;
  flex-flow: column;
  border-radius: 7px;
  text-align: center;
  align-items: center;
  background: #e8eae6;
  justify-content: space-around;

  span {
    font-size: 3rem;
    margin: 0 0 20px;
    margin-top: auto;
  }

  &__title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: auto;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    &::before {
      display: none;
    }
  }

  // &__description {
  //   font-size: 15px;
  //   color: #717081;
  // }
}
</style>

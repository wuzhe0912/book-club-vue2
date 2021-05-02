<template lang="pug">
  .home-wrapper
    h2 Vue 2.x
    h3 API
    .card-wrapper
      article.card(v-for="card in list" :key="card.id")
        router-link.link(:to="card.id")
          h4 {{ card.name }}
    h3 Features
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      list: [
        { id: 'props', name: 'Props' },
        { id: 'shoppingCart', name: 'Shopping Cart ( Vuex )' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.home-wrapper {
  display: grid;
  max-width: 1170px;
  width: 95vw;
  margin: 0 auto 2rem;
  margin-top: 2rem;

  h3 {
    color: $clr-grey-5;
    margin: 1.5rem 0;
  }
}

.card-wrapper {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 3rem 1.5rem;
  gap: 3rem 1.5rem;
}

.card {
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.3s linear;
  height: 100px;
  background-color: $clr-primary-10;

  &:hover {
    box-shadow: 0 5px 15px rgb(0 0 0 / 30%);
    transform: scale(1.02);
  }
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: $clr-black;

  h4 {
    color: $clr-grey-1;
  }
}
</style>

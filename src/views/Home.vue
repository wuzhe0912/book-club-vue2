<template lang="pug">
  .home-wrapper
    h2 讀書會 Demo
    .card-wrapper
      article.card(v-for="card in list" :key="card.id")
        router-link.link(:to="card.id") {{ card.name }}
</template>

<script>
import Characters from '@/components/Characters';

export default {
  name: 'Home',
  components: {
    Characters,
  },

  data() {
    return {
      list: [
        { id: 'props', name: 'Props' },
        { id: 'shopping', name: 'Vuex - Shopping Cart' },
        { id: 'shopping', name: 'Vuex - Shopping Cart' },
        { id: 'shopping', name: 'Vuex - Shopping Cart' },
        { id: 'shopping', name: 'Vuex - Shopping Cart' },
      ],
    };
  },

  methods() {},
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

  h2 {
    color: $clr-grey-5;
    margin-bottom: 2rem;
    text-align: center;
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
}
</style>

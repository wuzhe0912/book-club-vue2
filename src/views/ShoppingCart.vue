<template lang="pug">
  .component-wrapper
    Title(title="Vuex")
    .box.cart-box
      h3 計數器：{{ count }}
      button.btn(@click="addCount") Add Count
    .box.cart-box
      h3 使用 Vuex 提供的 api {{ count2 }}
      button.btn(@click="addCount2(2)") Add Count 2
    .box.getters-box
      button.btn 已完成：{{ filterDone }}
      button.btn.right-btn 未完成：{{ filterDo }}
    .box
      img(:src="dogImage")
    BackBtn
</template>

<script>
import Title from '@/components/Title';
import BackBtn from '@/components/BackBtn';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShoppingCart',

  components: {
    Title,
    BackBtn,
  },

  data() {
    return {
      title: this.$route.name,
    };
  },

  mounted() {
    this.fetchDogs();
  },

  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState(['count2', 'dogImage']),
    ...mapGetters(['filterDone', 'filterDo']),
  },

  methods: {
    ...mapMutations(['addCount2']),
    ...mapActions(['fetchDogs']),
    addCount() {
      this.$store.commit('addCount', 1);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';

.cart-box {
  display: flex;
  flex-direction: column;

  button {
    margin-top: 1rem;
  }
}

.getters-box {
  display: flex;
  justify-content: center;
}

.right-btn {
  margin-left: 10px;
}
</style>

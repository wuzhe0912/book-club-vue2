<template lang="pug">
  button.btn(@click="goHome") Back Home
</template>

<script>
export default {
  name: 'BackBtn',

  data() {
    return {};
  },

  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';

.btn {
  text-transform: uppercase;
  background: $clr-primary-5;
  color: $clr-primary-9;
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.2rem;
  display: inline-block;
  font-weight: 700;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  &:hover {
    color: $clr-primary-1;
    background: $clr-primary-8;
  }
}
</style>

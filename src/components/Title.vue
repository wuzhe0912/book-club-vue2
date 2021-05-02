<template lang="pug">
  h2.title {{title}}
</template>

<script>
export default {
  name: 'Title',

  props: {
    title: {
      type: String,
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.title {
  margin-bottom: 2rem;
}
</style>

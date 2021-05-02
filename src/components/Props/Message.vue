<template lang="pug">
  .container
    .box
      h4.title-text 子層接收 String
      span {{ text }}
    .box
      h4.title-text 子層接收 Boolean
      span(v-if="hasItem") 若看到我則為 True
    .box
      h4.title-text 子層接收 Array
      span(v-for="num in list" :key="num") {{ num }}
    .box(@click="clickProps")
      h4.title-text 子層觸發 @emit
</template>

<script>
export default {
  name: 'Message',

  props: {
    text: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
    hasItem: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  methods: {
    clickProps() {
      this.$emit('count');
    },
  },
};
</script>

<style lang="scss">
@import '../../styles/colors';

.title-text {
  color: $clr-primary-4;
}
</style>

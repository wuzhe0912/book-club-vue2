<template lang="pug">
  .component-wrapper
    Title(:title="title")
    Message(:text="text" :hasItem="hasItem" :list="list" @count="countNumber")
    h3.emit-text 父層接收觸發：{{initNum}}
    BackBtn
</template>

<script>
import Title from '@/components/Title';
import Message from '@/components/Props/Message';
import BackBtn from '@/components/BackBtn';

export default {
  name: 'Props',

  components: {
    Title,
    Message,
    BackBtn,
  },

  data() {
    return {
      initNum: 0,
      title: this.$route.name,
      text: 'Hello Props',
      hasItem: true,
      list: [1, 2, 3],
    };
  },

  methods: {
    countNumber() {
      this.initNum += 1;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';

.emit-text {
  margin-bottom: 1rem;
  color: $clr-grey-5;
}
</style>

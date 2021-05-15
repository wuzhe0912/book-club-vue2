<template lang="pug">
  .component-wrapper
    Title(:title="title")
    .box {{ text }}
    BackBtn
</template>

<script>
import Title from '@/components/Title';
import Message from '@/components/Props/Message';
import BackBtn from '@/components/BackBtn';

export default {
  name: 'RouterDemo',

  components: {
    Title,
    Message,
    BackBtn,
  },

  data() {
    return {
      title: 'Vue Router',
      text: '這是 Vue Router 內容',
    };
  },
};
</script>

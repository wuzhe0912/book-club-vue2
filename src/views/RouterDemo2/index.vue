<template lang="pug">
  .component-wrapper
    Title(:title="title")
    BackBtn
</template>

<script>
import Title from '@/components/Title';
import BackBtn from '@/components/BackBtn';

export default {
  name: 'RouterDemo',

  components: {
    Title,
    BackBtn,
  },

  data() {
    return {
      title: '具名路由',
    };
  },
};
</script>
<template lang="pug">
  .component-wrapper
    Title(:title="title")
    router-link.box(:to="{name: 'first'}") 顯示 First
    router-link.box(:to="{name: 'second'}") 顯示 Second
    .box(@click="goSecond()") 點擊顯示 Third
    .box(v-if="$route.name !== 'RouterDemo2'")
      router-view
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

  methods: {
    goSecond() {
      this.$router.push({ name: 'third' });
    },
  }
};
</script>
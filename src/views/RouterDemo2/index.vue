<template lang="pug">
  .component-wrapper
    Title(:title="title")
    router-link.box(:to="{name: 'first'}") 顯示 First
    router-link.box(:to="{name: 'second'}") 顯示 Second
    .box(@click="goSecond()") 點擊顯示 Third
    router-link.box(:to="{name: 'all'}") 顯示全部
    .box(v-if="$route.name !== 'RouterDemo2'")
      router-view(name="x")
    .box(v-if="$route.name !== 'RouterDemo2'")
      router-view(name="y")
    .box(v-if="$route.name !== 'RouterDemo2'")
      router-view(name="z")
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
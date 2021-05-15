<template lang="pug">
  .component-wrapper
    Title(:title="title")
    .box {{ text }}
    router-link.box(
      v-for="node in list"
      :to="node.id"
      :key="node.id"
    ) {{ node.name }}
    .box
      router-view
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
      list: [
        { id: '/routerDemo/id', name: '點擊顯示 id' },
        { id: '/routerDemo/content', name: '點擊顯示 content' },
      ],
    };
  },
};
</script>

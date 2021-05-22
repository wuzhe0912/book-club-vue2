<template lang="pug">
  .component-wrapper
    .box params(1): {{ $route.params.sn }}
    .box params(2): {{ sn }}
    .box query: {{ id }}
    BackBtn
</template>

<script>
import BackBtn from '@/components/BackBtn';

export default {
  name: 'Dynamic',

  components: {
    BackBtn,
  },

  computed: {
    sn() {
      return this.products[this.$route.params.sn];
    },
    id() {
      return this.products[this.$route.query.id];  // 取路徑中 ?id
    },
  },

  data() {
    return {
      products: {
        10: 'Skirts',
        20: 'Shoes',
        30: 'Notebook'
      }
    }
  }
}
</script>
<template lang="html">
  <currencies />
</template>

<script>
import currencies from '~/components/currencies';

export default {
  name: 'CurrenciesPage',
  components: {
    currencies,
  },
  async fetch({ store }) {
    await store.dispatch('currencies/fetch');
  },
};
</script>

<style lang="scss" scoped>
</style>

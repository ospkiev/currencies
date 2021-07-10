<template>
  <div>
    <headerApp />
    <nuxt />
    <notifications group="foo" />
  </div>
</template>

<script>
import headerApp from '~/common-components/header/header';

export default {
  name: 'DefaultLayout',
  components: {
    headerApp,
  },
};
</script>

<style>

</style>

<template lang="html">
  <b-container
    fluid
  >
    <b-row>
      <ul>
        <li
          v-for="currency in currencies"
          :key="currency.rate"
        >
          {{ currency.txt }}
          {{ currency.cc }}
        </li>
      </ul>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Currencies',
  data: () => ({
  }),
  computed: {
    ...mapState({
      currencies: state => state.currencies.currencies,
    }),
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>

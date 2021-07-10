import Vue from 'vue';
import urls from '~/constants/urls';

export const state = () => ({
  currencies: [],
});

export const mutations = {
  SET_CURRENCIES(state, data) {
    state.currencies = data;
  },
};

export const actions = {
  async fetch({ commit }) {
    try {
      const { data } = await this.$axios.get(urls.getCurrencies);
      commit('SET_CURRENCIES', data);
    } catch (error) {
      Vue.notify({
        group: 'foo',
        type: 'error',
        title: '',
        text: error,
      });
    }
  },
};

<template lang="html">
  <b-container
    fluid
  >
    <b-row>
      <b-col>
        <h4 class="title">
          Current currencies
        </h4>
        <div class="sum-inputs">
          <div>
            <label for="sum">Отдаю</label>
            <b-form-input
              id="sum"
              v-model.number="sum"
              type="number"
              class="sum"
            />
            <b-form-text>
              1 {{ selectedCurrency.cc.toLowerCase() }} =
              {{ selectedCurrency.rate.toFixed(2) }}
              грн
            </b-form-text>
          </div>
          <div>
            <i
              class="fa fa-arrows-h fa-2x"
              aria-hidden="true"
            />
          </div>
          <div>
            <label for="output">Получаю</label>
            <b-form-input
              id="output"
              v-model.number="output"
              type="number"
              class="output"
            />
            <b-form-text>usd</b-form-text>
          </div>
        </div>
      </b-col>
      <b-col class="currencies-list">
        <ul>
          <li
            v-for="currency in currencies"
            :key="currency.rate"
            @click="selectedCurrency = currency"
          >
            {{ currency.txt }}
            {{ currency.cc }}
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Currencies',
  data: () => ({
    sum: 1,
    output: 0,
    selectedCurrency: null,
  }),
  computed: {
    ...mapState({
      currencies: state => state.currencies.currencies,
    }),
  },
  watch: {
    sum() {
      this.output = (this.sum * this.selectedCurrency.rate).toFixed(2);
    },
  },
  created() {
    this.initialValues();
  },
  methods: {
    initialValues() {
      this.selectedCurrency = this.currencies.find(el => el.cc.toLowerCase() === 'usd') || 0;
    },
  },
};
</script>

<style lang="scss" scoped>

.row {
  .title {
    padding-top: 20px;
  }
  .sum-inputs {
    display: flex;
    align-items: center;
    padding-top: 20px;
    div:nth-child(2) {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  ul {
    height: 70%;
    overflow-y: scroll;
    li {
      padding: 5px 0;
      cursor: pointer;
    }
  }
  .currencies-list {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

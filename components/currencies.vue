<template lang="html">
  <b-container>
    <b-row>
      <b-col
        cols="12"
        md="6"
      >
        <h4 class="title">
          Текущий курс
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
              1 {{ toggle ? 'грн' : selectedCurrency.cc.toLowerCase() }} =
              {{ toggle
                ? `${1 / selectedCurrency.rate} ${selectedCurrency.cc.toLowerCase()}`
                : `${selectedCurrency.rate} грн`
              }}
            </b-form-text>
          </div>
          <div @click="() => toggle = !toggle">
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
            <b-form-text>{{ toggle ? selectedCurrency.cc.toLowerCase() : 'грн' }}</b-form-text>
          </div>
        </div>
        <div class="save">
          <b-button @click="saveCurrency">
            Сохранить курс
          </b-button>
        </div>
        <ul class="saved">
          <li
            v-for="(savedCurrency, index) in savedCurrencyList"
            :key="index"
          >
            {{ savedCurrency.cc }}
            курс-
            {{ savedCurrency.rate }} /
            {{ savedCurrency.date }}
          </li>
        </ul>
      </b-col>
      <b-col
        class="currencies-list"
        cols="12"
        md="6"
      >
        <ul>
          <li
            v-for="currency in currencies"
            :key="currency.rate"
            :class="{'active' : currency.cc === selectedCurrency.cc}"
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
    toggle: false,
    savedCurrencyList: [],
  }),
  computed: {
    ...mapState({
      currencies: state => state.currencies.currencies,
    }),
  },
  watch: {
    sum() {
      this.convertation();
    },
    selectedCurrency() {
      this.convertation();
    },
    toggle() {
      this.convertation();
    },
  },
  created() {
    this.initialValue();
  },
  mounted() {
    this.savedCurrencyList = JSON.parse(localStorage.getItem('savedCurrencyList')) || [];
  },
  methods: {
    initialValue() {
      this.selectedCurrency = this.currencies.find(el => el.cc.toLowerCase() === 'usd');
    },
    convertation() {
      if (this.toggle) {
        this.output = this.sum / this.selectedCurrency.rate;
        return;
      }
      this.output = this.sum * this.selectedCurrency.rate;
    },
    saveCurrency() {
      const date = new Date().toString().substring(4, 25);
      this.savedCurrencyList.push({ ...this.selectedCurrency, date });
      localStorage.setItem('savedCurrencyList', JSON.stringify(this.savedCurrencyList));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/style/vars.scss';

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
    overflow-y: scroll;
    height: calc(85vh - 20px);
    margin-top: 20px;
    li {
      padding: 5px 0;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;
      &:hover {
        background-color: #edf1f5;
      }
    }
  }
  .currencies-list {
    display: flex;
    justify-content: flex-end;
  }
}

.save {
  display: flex;
  justify-content: flex-end;
}

ul.saved {
  height: 30%;
}

.active {
  color: $red;
}
</style>

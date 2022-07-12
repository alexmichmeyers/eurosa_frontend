<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currencies: [],
    };
  },
  created: function () {
    this.indexCurrencies();
  },
  methods: {
    indexCurrencies: function () {
      axios.get("/currencies").then((response) => {
        console.log("currencies index", response);
        this.currencies = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="currencies-index">
    <h1>All currencies</h1>
    <div v-for="currency in currencies" v-bind:key="currency.id">
      <h2>{{ currency.name }}</h2>
      <router-link v-bind:to="`/currencies/${currency.id}`">More details</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: {
        currency: {},
        coinmarketcapdata: { "price": 1090.923761329033, "volume_24h": 11897511154.283781, "volume_change_24h": 7.013, "percent_change_1h": -0.00379086, "percent_change_24h": -5.19407021, "percent_change_7d": -4.60483123, "percent_change_30d": -25.30290497, "percent_change_60d": -46.96726842, "percent_change_90d": -64.1614429, "market_cap": 132558326308.60321, "market_cap_dominance": 14.9014, "fully_diluted_market_cap": 132558326308.6, "tvl": null, "last_updated": "2022-07-12T02:59:00.000Z"},
        newsdata: []
      },
    };
  },
  created: function () {
    this.showCurrency();
  },
  methods: {
    showCurrency: function() {
    axios.get("/currencies/" + this.$route.params.id).then((response) => {
      console.log("currencies show", response);
      this.data = response.data;
    });
    },
  },
}
</script>

<template>
  <div class="currencies-show">
    <h1>Show Crypto coins</h1>
    <h2> {{ data.currency.name }}</h2>
    <p>price: {{data.coinmarketcapdata.price}}</p>
    <p> Price Change (1H): {{data.coinmarketcapdata.percent_change_1h}}</p>
    <p> Price Change (24H): {{data.coinmarketcapdata.percent_change_24h}}</p>
    <p> Price Change (7D): {{data.coinmarketcapdata.percent_change_7d}}</p>
    <p> Price Change (30D): {{data.coinmarketcapdata.percent_change_30d}}</p>
    <p> Price Change (60D): {{data.coinmarketcapdata.percent_change_60d}}</p>
    <p> Price Change (90D): {{data.coinmarketcapdata.percent_change_90d}}</p>
   
    <div v-for="article in data.newsdata" v-bind:key="article.url">
    <h4><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
    <img v-bind:src="article.urlToImage" width="200"/>

    </div>
    
  </div>
</template>
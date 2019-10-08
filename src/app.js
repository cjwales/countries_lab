import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      styleFlag: {
        width: '200px',
        height: 'auto'
      },
      countries: [],
      selectedCountry: null
    },
    mounted() {
      this.fetchCountries();
    },
    computed: {
      totalPopulation: function(){
        return this.countries.reduce((runningTotal, country) => {
          return runningTotal + country.population
        }, 0)
      }
    },
    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      }
    }
  })
})

const rest = require('restler');
const productModel = require('../models/product');

let self = {};

self.getInfo = function (query) {
  const searchQuery = new Promise (function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/sites/MLA/search?q=​' + query).on('success',
    function (result) {
      resolve(result)
    }).on('fail', function (err) {
      reject(err)
    })
  })
  return searchQuery
}

self.items = [];

self.getResults = function (result.results) {
  for (var i = 0; i < result.results.length; i++) {
    new Product()
  }
      items: [{
      id: result.results.id,
      title: result.results.title,
      price: {
        currency: result.results.currency_id,
        amount: priceSplit[0],
        decimals: priceSplit[1]
      },
      picture: result.results.thumbnail,
      condition: result.results.condition,
      free_shipping: result.results.free_shipping
    },{
      id: result.results.id,
      title: result.results.title,
      price: {
        currency: result.results.currency_id,
        amount: priceSplit[0],
        decimals: priceSplit[1]
      },
      picture: result.results.thumbnail,
      condition: result.results.condition,
      free_shipping: result.results.free_shipping
    },{
      id: result.results.id,
      title: result.results.title,
      price: {
        currency: result.results.currency_id,
        amount: priceSplit[0],
        decimals: priceSplit[1]
      },
      picture: result.results.thumbnail,
      condition: result.results.condition,
      free_shipping: result.results.free_shipping
    },{
      id: result.results.id,
      title: result.results.title,
      price: {
        currency: result.results.currency_id,
        amount: priceSplit[0],
        decimals: priceSplit[1]
      },
      picture: result.results.thumbnail,
      condition: result.results.condition,
      free_shipping: result.results.free_shipping
    }]
  }
}

module.exports = self;

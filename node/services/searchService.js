const rest = require('restler');
const productModel = require('../models/product');

let self = {};

self.getInfo = function (query) {
  const searchQuery = new Promise (function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=4').on('success',
    function (result) {
      resolve(result)
    }).on('fail', function (err) {
      reject(err)
    })
  })
  return searchQuery
}

self.getResults = function (results) {
  let items = [];

  for (var i = 0; i < results.length; i++) {
    items.push(new productModel(results[i]).getProduct());
  }
  return items
}

module.exports = self;

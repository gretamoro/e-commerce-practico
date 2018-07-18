const rest = require('restler');
const productModel = require('../models/product');

let self = {};

self.getInfo = function (query) {
  const searchQuery = new Promise (function (resolve, reject) {
    console.log('promise', query);
    rest.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=4').on('success',
    function (result) {
      console.log(result);
      console.log('success');
      resolve(result)
    }).on('fail', function (err) {
      console.log('fail');
      reject(err)
    })
  })
  return searchQuery
}

let items = [];

self.getResults = function (results) {
  console.log(results.length);
  for (var i = 0; i < results.length; i++) {
    console.log('for');
    items.push(new productModel(results[i]).getProduct());
  }
  return items
}

module.exports = self;

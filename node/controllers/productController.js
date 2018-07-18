const productService = require('../services/productService');
const productModel = require('../models/product');

let self = {};

self.get = function (req, res) {
  const id = req.params.id
  productService.getItem(id).then(function (data) {
    productService.getDescription(id).then(function (result) {
      data.description = result.plain_text
      const model = new productModel(data).getProduct();
      return res.jason({
        author: {
          name: 'Nadia',
          lastname: 'Nemo'
        },
        item: model
      })
    }).catch(function (err) {
      console.log(err);
    })
  }).catch(function (err) {
    console.log(err);
  })
}

module.exports = self;

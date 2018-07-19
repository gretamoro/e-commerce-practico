const productService = require('../services/productService');
const productModel = require('../models/product');

let self = {};

self.get = function (req, res) {
  const id = req.params.id
  productService.getItem(id).then(function (data) {
    const catId = data.category_id;
    productService.getCategory(catId).then(function (categories) {
      self.categories = [];
      const catArray = categories.path_from_root;
      for (var i = 0; i < catArray.length; i++) {
        self.categories.push(catArray[i].name);
      }
      console.log(self.categories);
    }).catch(function (err) {
      console.log(err);
    })

    productService.getDescription(id).then(function (result) {
      data.description = result.plain_text
      const model = new productModel(data).getProduct();
      return res.json({
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

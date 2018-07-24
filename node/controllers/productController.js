const productService = require('../services/productService');
const productModel = require('../models/product');

let self = {};

self.get = function (req, res) {
  const id = req.params.id

  let categories = [];

  productService.getItem(id).then(function (data) {
    const catId = data.category_id;

    productService.getCategory(catId).then(function (dataCategories) {
      const catArray = dataCategories.path_from_root;

      for (var i = 0; i < catArray.length; i++) {
        categories.push(catArray[i].name);
      }

      productService.getDescription(id).then(function (result) {
        data.categories = categories
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
        return res.sendStatus(500);
      })
    }).catch(function (err) {
      console.log(err);
      return res.sendStatus(500);
    })
  }).catch(function (err) {
    console.log(err);
    return res.sendStatus(500);
  })
}

module.exports = self;

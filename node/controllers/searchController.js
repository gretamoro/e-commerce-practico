const searchService = require('../services/searchService');

let self = {};

self.get = function (req, res) {
  const query = req.query['q'];

  searchService.getInfo(query).then(function (result) {
    let categories = []
    let hasCat = [];

    if (result.filters[0]) {
      hasCat = result.filters[0]
    }else {
      hasCat = [];
    }

    if (hasCat == result.filters[0]) {
      categories = hasCat.values[0].path_from_root.map((category) => {
        return category.name
      })
    }else {
      let catArray = [];

      result.available_filters[0].values.map((catResults) => {
        catArray.push(catResults)
      })

      let bestCategory = catArray[0]

      for (var i = 0; i < catArray.length; i++) {
        if (bestCategory <= catArray[i].results) {
          bestCategory = catArray[i];
        }
      }

      categories.push(bestCategory.name);
    }

    return res.json({
      author: {
      name: 'Nadia',
      lastname: 'Nemo'
      },
      categories: categories,
      items: searchService.getResults(result.results)
    })
  }).catch(function (err) {
    console.log(err);
    return res.sendStatus(500);
  })
}

module.exports = self;

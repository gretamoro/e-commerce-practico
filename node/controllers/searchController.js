const searchService = require('../services/searchService');

let self = {};

self.get = function (req, res) {
  const query = req.query['q'];
  searchService.getInfo(query).then(function (result) {
    searchService.getResults(result.results);
    return res.json({
      author: {
      name: 'Nadia',
      lastname: 'Nemo'
      },
      categories: [],
      items: searchService.items
    })
  })
}

module.exports = self;

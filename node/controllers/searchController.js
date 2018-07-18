const searchService = require('../services/searchService');

let self = {};

self.get = function (req, res) {
  const query = req.query['q'];
  console.log('get');
  searchService.getInfo(query).then(function (result) {
    console.log('res.json');
    
    return res.json({
      author: {
      name: 'Nadia',
      lastname: 'Nemo'
      },
      categories: [],
      items: searchService.getResults(result.results)
    })
  }).catch(function (err) {
    console.log(err);
  })
}

module.exports = self;

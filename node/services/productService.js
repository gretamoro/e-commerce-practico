const rest = require('restler');

let self = {};

self.getItem = function (id) {
  const itemId = new Promise( (resolve, reject) => {
    rest.get('https://api.mercadolibre.com/items/​' + id).on('success',
    (result) => {
      resolve(result)
    }).on('fail', (err) => {
      reject(err)
    })
  })
  return itemId
}

self.getCategory = function (category_id) {
  const catPromise = new Promise( (resolve, reject) => {
    rest.get('https://api.mercadolibre.com/categories/' + category_id).on('success',
    (result) => {
      resolve(result)
    }).on('fail', (err) => {
      reject(err)
    })
  })
  return catPromise
}

self.getDescription = function (id) {
  const description = new Promise( (resolve, reject) => {
    rest.get('https://api.mercadolibre.com/items/' + id + '/description').on('success',
    (result) => {
      resolve(result)
    }).on('fail', (err) => {
      reject(err)
    })
  })
  return description
}

module.exports = self;

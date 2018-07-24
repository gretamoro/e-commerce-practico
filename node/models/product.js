class Product {
  constructor(data){
    this.id = data.id
    this.title = data.title
    this.price = data.price
    this.currency_id = data.currency_id
    this.thumbnail = data.thumbnail
    this.condition = data.condition
    this.shipping = data.shipping.free_shipping
    this.sold_quantity = data.sold_quantity
    this.description = data.description
    this.categories = data.categories
  }

  getSearch(){
    return {
      id: this.id,
      title: this.title,
      price: this.splitPrice(this.price),
      picture: this.thumbnail,
      condition: this.condition,
      free_shipping: this.shipping
    }
  }

  getProduct(){
    return {
      id: this.id,
      title: this.title,
      price: this.splitPrice(this.price),
      picture: this.thumbnail,
      condition: this.condition,
      free_shipping: this.shipping,
      sold_quantity: this.sold_quantity,
      description: this.description,
      categories: this.categories
    }
  }

  splitPrice(){
    const toString = this.price.toString();
    const priceSplit = toString.split(',');
    return {
      currency: this.currency_id,
      amount: parseInt(priceSplit[0]),
      decimals: parseInt(priceSplit[1])
    }
  }
}

module.exports = Product

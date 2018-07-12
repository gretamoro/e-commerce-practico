class Product {
  constructor(data){
    this.id = id
    this.title = title
    this.price = price
    this.currency_id = currency_id
    this.picture = picture
    this.condition = condition
    this.free_shipping = free_shipping
  }

  getProduct(){
    return {
      id: this.id,
      title: this.title,
      price: this.splitPrice(this.price)
      picture: this.picture,
      condition: this.condition,
      free_shipping: this.free_shipping
    }
  }

  splitPrice(){
    const priceSplit = this.price.split(',');
    return {
      currency: this.currency_id,
      amount: priceSplit[0],
      decimals: priceSplit[1]
    }
  }
}

module.exports = Product

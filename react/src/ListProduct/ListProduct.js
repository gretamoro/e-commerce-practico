import React, { Component } from 'react';
import './ListProduct.css';

class ListProduct extends Component {
  render() {
    return (
      <div className="listProduct">
        <div className="image">
          <img src={this.props.picture} alt={this.props.title}/>
        </div>
        <div className="listPriceAndTitle">
          <h2 className="priceAmount">${this.props.priceAmount}</h2>
          <p className="priceDecimals">{this.props.priceDecimals}</p>
          <h3 className="title">{this.props.title}</h3>
        </div>
      </div>
    )
  }
}

export default ListProduct;

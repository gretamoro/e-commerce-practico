import React, { Component } from 'react';

class ListProduct extends Component {
  render() {
    return (
      <div className="listProduct">
        <div className="image">
          <img src={this.props.picture} alt={this.props.title}/>
        </div>
        <div className="listPrice">
          <h2 className="price">{this.props.price}</h2>
        </div>
        <div className="listTitle">
          <h3 className="title">{this.props.title}</h3>
        </div>
      </div>
    )
  }
}

export default ListProduct;

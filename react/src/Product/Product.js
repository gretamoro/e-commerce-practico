import React, { Component } from 'react';
import Search from '../Search/Search';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

class  Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: ''
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const api = await fetch('http://localhost:3001/api/items/' + id);
    const json = await api.json();

    this.setState({
      result: json
    })
  }

  render(){
    console.log(this.state.result);
    return(
      <main className="main-container">
        {this.state.result &&
          <div>
            <Search />

            {this.state.result.item.categories &&
              <Breadcrumb categories={this.state.result.item.categories}/>
            }

            <section className="productData">
              <img src={this.state.result.item.picture} alt={this.state.result.item.title}/>
              <span className="condition">{this.state.result.item.condition} - </span>
              <span className="quantity">{this.state.result.item.sold_quantity} vendidos</span>
              <h2 className="title">{this.state.result.item.title}</h2>
              <span className="amount">${this.state.result.item.price.amount}</span>
              <span className="decimals">{this.state.result.item.price.decimals}</span>
              <h2 className="descripTitle">Descripción del producto</h2>
              <p className="description">{this.state.result.item.description}</p>
            </section>
          </div>
        }
      </main>
    )
  }
}

export default Product;

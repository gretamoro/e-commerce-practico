import React, { Component } from 'react';
import Search from '../Search/Search';

class  Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: ''
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const api = await fetch('http://localhost:3001/api/items' + id);
    const json = await api.json();

    this.setState({
      result: json
    })
  }

  render(){
    return(
      <main className="main-container">
        {this.state.data &&
          <div>
            {/*<Search />*/}

            <section className="productData">
              <img src={this.state.result.picture} alt={this.state.result.title}/>
              <span className="condition">{this.state.result.condition}</span>
              <span className="quantity">{this.state.result.sold_quantity} vendidos</span>
              <h2 className="title">{this.state.result.title}</h2>
              <span className="amount">${this.state.result.price.amount}</span>
              <span className="decimals">{this.state.result.price.decimals}</span>
              <h2 className="descripTitle">Descripción del producto</h2>
              <p className="description">{this.state.data.description}</p>
            </section>
          </div>
        }
      </main>
    )
  }
}

export default Product;

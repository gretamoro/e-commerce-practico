import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListProduct from '../ListProduct/ListProduct';
import Search from '../Search/Search';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './Results.css';
const queryString = require('query-string');

class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:''
    }
  }

  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    console.log(query);
    const parsed = query.search;
    const api = await fetch('http://localhost:3001/api/items?q=' + parsed);
    const JSON = await api.json();

    this.setState({
      data: JSON
    })
  }

  render(){
    return(
      <main className="main-container">
        <Search />

        <div className="breadcrumbDiv">
          {this.state.data &&
            <Breadcrumb categories={this.state.data.categories}/>
          }
        </div>

        <div className="list">
          {this.state.data &&
            this.state.data.items.map((item, i) => {
              const urlId = '/items/' + item.id
              return (
                <Link className="link" to={urlId} key={i}>
                  <ListProduct
                  picture={item.picture}
                  priceAmount={item.price.amount}
                  priceDecimals={item.price.decimals}
                  title={item.title}
                  />
                </Link>
              )
            })
          }
        </div>

      </main>
    )
  }
}

export default Results;

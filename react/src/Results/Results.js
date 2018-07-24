import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListProduct from '../ListProduct/ListProduct';
import Search from '../Search/Search';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
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
        {this.state.data &&
          <Breadcrumb categories={this.state.data.categories}/>
        }

        {this.state.data &&
          this.state.data.items.map((item, i) => {
            const urlId = '/items/' + item.id
            return (
              <Link to={urlId} key={i}>
                <ListProduct picture={item.picture} price={item.price.amount} title={item.title}/>
              </Link>
            )
          })
        }
      </main>
    )
  }
}

export default Results;

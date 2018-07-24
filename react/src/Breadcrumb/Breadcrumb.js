import React, { Component } from 'react';
import Results from '../Results/Results';
import './Breadcrumb.css';

class Breadcrumb extends Component {

  render(){
    console.log(this.props.categories);
    return(
      <div>
        {this.props.categories.map((breadcrumb, i) => {
          return(
            <span className="breadcrumb" key={i}>{breadcrumb}</span>
          )
        })}
      </div>
    )
  }
}

export default Breadcrumb;

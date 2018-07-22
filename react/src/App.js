import React, { Component } from 'react';
import Search from './Search/Search';
import Results from './Results/Results';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Search} />
          <Route path="/items" component={Results} />
          <Route path="/items/:id" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;

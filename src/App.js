import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
          <Link to="/task-list" activeClassName="active" onlyActiveOnIndex={true}>task-list</Link>
        </header>
        <div className="wrap">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

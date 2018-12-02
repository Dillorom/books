import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Body from './containers/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;

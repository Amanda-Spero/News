import React, { Component } from 'react';
import logo from './logo.svg';
import Jumbotron from './components/Jumbotron/jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Jumbotron />
      </div>
    );
  }
}

export default App;

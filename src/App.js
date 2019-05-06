import React, { Component } from 'react';
import logo from './logo.svg';
import Jumbotron from './components/Jumbotron/jumbotron';
import SearchBar from './components/SearchBar/search-bar';
import AllNewspaperResults from './components/AllNewspaperResults/results';
import AjaxArticle from './components/AjaxCall/Ajax'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <SearchBar />
        {/* <AjaxArticle /> */}
        <AllNewspaperResults />
        <AllNewspaperResults />
        <AllNewspaperResults />
        <AllNewspaperResults />
        <AllNewspaperResults />
        <AllNewspaperResults />
      </div>
    );
  }
}

export default App;

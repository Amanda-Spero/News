import React, {Component} from 'react';

import './jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4"> 
            News Aggregator
          </h1>
        </div>
      </div>
    )
  }
}

export default Jumbotron;
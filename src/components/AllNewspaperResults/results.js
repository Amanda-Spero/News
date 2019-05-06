import React, {Component} from 'react';
import ArticleSummary from '../ArticleSummary/article-summary';
import './results.css';

class Results extends Component {
  render() {
    return (
      <div className="results-div">
        <h3>Newspaper Name</h3>
        <ArticleSummary />
      </div>
    )
  }
}

export default Results;
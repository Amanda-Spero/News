import React, {Component} from 'react';

import './article-summary.css';

class ArticleSummary extends Component {
  render() {
    return (
      <div className="article-summary-div">
        <span>Dec 41, 3010</span>
        <a href="#">Headline About The Keyword Searched</a>
        <p>This is the one to two sentence summary of the news article. This is the one to two sentence summary of the news article. </p>
      </div>
    )
  }
}

export default ArticleSummary;
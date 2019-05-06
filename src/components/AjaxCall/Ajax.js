// import React, {Component} from 'react';

// class AjaxArticle extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {articles: []};
//   }

//   componentDidMount() {
//     this.UserList();
//   }

//   UserList() {
//     fetch('https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey=02bf96a2931141da99b5ecf6c8328f5a')
//       .then(results => {
//         return results.json();
//       }).then(data => {
//         let articles = data.results.map((item) => {
//           return (
//             <div key={item.results}>
//               <span>{item.article.title}</span>
//             </div>
//           )
//       })

//         })
//         this.setState({ data: results }));
//   }


//   render() {
//     const articles = this.state.articles
//     const headlines =  (
//       <div>
//         <h1></h1>
//         <span></span>
//       </div>
//     );


//     return (
//       <div id="layout-content" className="layout-content-wrapper">
//         <div className="panel-list">{articles}</div>
//       </div>
//     );
//   }
// }

// export default AjaxArticle;
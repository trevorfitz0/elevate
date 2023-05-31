import React, { Component } from 'react'
import { getNews } from '../../APICalls';
import Header from '../Header/Header';
import getSampleData from '../../SampleData';
import Articles from '../Articles/Articles';
import { Route, Switch } from 'react-router-dom';
import Article from '../Article/Article';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    // getNews().then(data => {
    //   this.setState({ articles: data.articles})
    // });
    // console.log(this.state.articles)
    const sample = getSampleData()
    this.setState({ articles: sample })
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <Articles articles={ this.state.articles }/>}/>
          <Route exact path='/article/:title' render={({ match }) => {
          const article = this.state.articles.find(article => article.title.replace(/\s+/g, '') === match.params.title)
          console.log(article)
          return <Article article={ article } />
        }}/>
        </Switch>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { getNews } from '../../APICalls';
import Header from '../Header/Header';
import getSampleData from '../../SampleData';
import Articles from '../Articles/Articles';
import { Redirect, Route, Switch } from 'react-router-dom';
import Article from '../Article/Article';
import ErrorPage from '../ErrorPage/ErrorPage';

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
          <Route exact path="/404"><ErrorPage/></Route>
          <Route path="*"><Redirect to="/404"/></Route>
        </Switch>
      </div>
    )
  }
}

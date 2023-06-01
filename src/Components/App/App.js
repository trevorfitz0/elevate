import React, { Component } from 'react'
import { getNews } from '../../APICalls';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import { Redirect, Route, Switch } from 'react-router-dom';
import Article from '../Article/Article';
import ErrorPage from '../ErrorPage/ErrorPage';
import './App.css'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true
    }
  }

  componentDidMount() {
    // await this.getNewsData()
    // const sample = getSampleData()
    // this.setState({ articles: sample })
  }

  componentWillMount() {
    this.getNewsData()
  }

  getNewsData() {
    getNews().then(data => {
      data.articles.map(article => {
        if(article.title.includes("%")) {
          article.title = encodeURIComponent(article.title);
        }
        return null
    })
      this.setState({ articles: data.articles,  loading: false })
    })
  }

  render() {
    if(this.state.loading) {
      return (
        <div className='loading-page'>
          <i className='spinner' class="fa-solid fa-spinner fa-spin fa-2xl"></i>
        </div>
      )
    } else {
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
}
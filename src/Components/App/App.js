import React, { Component } from 'react'
import { getNews } from '../../APICalls';
import Header from '../Header/Header';
import getSampleData from '../../SampleData';
import Articles from '../Articles/Articles';

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
        <Articles/>
      </div>
    )
  }
}

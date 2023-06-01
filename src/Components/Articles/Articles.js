import React, { useState } from 'react'
import './Articles.css'
import { NavLink } from 'react-router-dom'

function Articles( { articles } ) {

    console.log(articles)

    const [filter, setFilter] = useState(articles)

    const filterArticles = (value) => {
        setFilter(articles.filter(article => article.title.includes(value)))
        console.log(filter)
    }

    const topArticles =  
        filter.map(article => {
            return (
                <NavLink to={`article/${article.title.replace(/\s+/g, '')}`} className='article-box'>
                    <img alt={ article.title } className='article-image' src={ article.urlToImage }></img>
                    <h2 className='article-title'>{article.title}</h2>
                </NavLink>
                )
        })
    
  return (
    <div className='page'>
        <div className='title-section'>
            <h1 className='page-title'>Top Articles</h1>
            <input placeholder='Search for articles' onChange={(e) => filterArticles(e.target.value)}></input>
        </div>
        <section className='article-section'>
            { 
                topArticles
            }
        </section>
    </div>
  )
}

export default Articles
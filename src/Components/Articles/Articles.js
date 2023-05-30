import React from 'react'
import './Articles.css'

function Articles( { articles } ) {

    const topArticles =  
        articles.map(article => {
            return (
                <div className='article-box'>
                    <img alt={ article.title } className='article-image' src={ article.urlToImage }></img>
                    <h2 className='article-title'>{article.title}</h2>
                </div>
                )
        })
    

  return (
    <div>
        <div className='title-section'>
            <h1 className='page-title'>Top Articles</h1>
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
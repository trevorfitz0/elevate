import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Article.css'

function Article( { article } ) {

    console.log(article)

  return (
    <div className='single-article-page'>
        <section className='single-article-box'>
            <section className='single-article-title-section'>
                <h1 className='single-article-title'>{article.title}</h1>
                <div className='line-break'></div>
            </section>
            <div className='single-article-data'>
                <img className='single-article-image' alt={ article.title } src={article.urlToImage}></img>
                <p>
                    {
                        article.description
                    }
                </p>
            </div>
            <NavLink to={`/`} className="link">
                    Back Home
            </NavLink>
        </section>
    </div>
  )
}

export default Article
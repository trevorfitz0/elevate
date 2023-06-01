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
            <NavLink to={`/`}>
                    <h2 className='home-button'>Back Home</h2>
            </NavLink>
        </section>
    </div>
  )
}

export default Article


// {
//     "articleName": {
//       "source": {
//         "id": null,
//         "name": "Medical Xpress"
//       },
//       "author": "Science X",
//       "title": "Low-flavanol diet drives age-related memory loss, large study finds - Medical Xpress",
//       "description": "A large-scale study led by researchers at Columbia and Brigham and Women's Hospital/Harvard is the first to establish that a diet low in flavanols—nutrients found in certain fruits and vegetables—drives age-related memory loss.",
//       "url": "https://medicalxpress.com/news/2023-05-low-flavanol-diet-age-related-memory-loss.html",
//       "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/fruits-and-vegetables.jpg",
//       "publishedAt": "2023-05-29T19:00:02Z",
//       "content": "A large-scale study led by researchers at Columbia and Brigham and Women's Hospital/Harvard is the first to establish that a diet low in flavanolsnutrients found in certain fruits and vegetablesdrive… [+7516 chars]"
//     }
//   }
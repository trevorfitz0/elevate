import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css'

function ErrorPage() {
  return (
    <div className='error-page'>
        <div className='page-content'>
            <h1 className='error-text'>Page not found</h1>
            <i class="fa-solid fa-bomb fa-bounce fa-2xl"></i>
            <NavLink className='link' to={`/`}>Back Home</NavLink>
        </div>
    </div>
  )
}

export default ErrorPage
import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css'

function ErrorPage() {
  return (
    <div className='error-page'>
        <div className='page-content'>
            <h1>Page not found</h1>
            <NavLink to={`/`}>
                        <h2 className='home-button'>Back Home</h2>
            </NavLink>
        </div>
    </div>
  )
}

export default ErrorPage
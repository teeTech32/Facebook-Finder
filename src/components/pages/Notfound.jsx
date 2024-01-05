import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='hero'>
      <div className="text-center text-red-500 hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-4">Oops!</h1>
          <p className="text-5xl mb-4">Error 404-page not found</p>
          <Link  to='/' className='btn btn-primary btn-lg text-2xl'>
            <FaHome/>
            <p>Go Back Home</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notfound
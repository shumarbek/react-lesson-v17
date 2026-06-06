import React from 'react'
import './components/MovieListItems/movie-list-items.css'

function MovieListItems() {
  return (
    <div>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <span className='list-group-item-label'>Empire of Osman</span>
        <input type="number" className='list-group-item-input' placeholder='900' />
        <button className='btn-cookie btn-sm' type='button'>
            <i className="fas fa-cookie"></i>
        </button>
        <button className='btn-trash btn-sm' type='button'>
            <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </li>
    </div>
  )
}

export default MovieListItems

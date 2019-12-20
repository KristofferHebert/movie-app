import React from 'react'

const MovieItem = ({ title = '', genre = [], poster = '' }) => {
  return (
    <li className='ma_column ma_column_col--3'>
      <article className='ma_movie-item'>
        <img className='ma_movie-item__poster' src={poster} alt={`Post for ${title}`} />
        <h2 className='ma_movie-item__title'>{title}</h2>
        <p className='ma_movie-item__genre'>{genre.join(', ')}</p>
      </article>
    </li>
  )
}

export default MovieItem

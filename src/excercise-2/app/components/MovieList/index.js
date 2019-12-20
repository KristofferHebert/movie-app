import React, { useContext } from 'react'
import _ from 'lodash'
import MovieItem from '../MovieItem'
import * as utils from '../../utils'
import GlobalContext from '../Global/context'

const MovieList = () => {
  const { state } = useContext(GlobalContext)
  var media = _.cloneDeep(state.media)
  var filters = _.cloneDeep(state.filters)

  if (filters.genre && filters.genre.length === 0) {
    delete filters.genre
  }

  // If filter has search term, apply only search term filter
  if (filters.searchTerm) {
    media = utils.search(media, filters.searchTerm)
  } else if (filters) {
    // else apply other filters
    media = utils.filterBy(media, filters)
  }

  const Movies = media.length === 0 ? (<li className='ma_column ma_column_col--12 ma_centered ma_large-font ma_full-width'>No results found</li>) : media.map((movie, index) => {
    return <MovieItem {...movie} index={index} key={index + movie.title} />
  })
  return (
    <ul className='ma_row'>{Movies}</ul>
  )
}

export default MovieList

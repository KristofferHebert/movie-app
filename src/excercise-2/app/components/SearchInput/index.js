import React, { useContext } from 'react'
import GlobalContext from '../Global/context'
import { actionTypes } from '../Global/reducer'

const SearchInput = () => {
  const { state, dispatch } = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    var searchTerm = state.searchTerm

    // Prevent empty submission
    if (searchTerm === false) {
      return false
    }

    var updatedFilter = {
      searchTerm: searchTerm
    }

    // Remove searchTerm submission if empty
    if (updatedFilter.searchTerm === '') {
      delete updatedFilter.searchTerm
    }

    dispatch({
      type: actionTypes.UPDATE_VALUE,
      payload: {
        filters: updatedFilter
      }
    })
  }
  return (
    <form onSubmit={handleSubmit} className='ma_search'>
      <input
        className='ma_search__input'
        value={state.searchTerm || ''}
        onChange={(e) => {
          e.preventDefault()

          dispatch({
            type: actionTypes.UPDATE_VALUE,
            payload: {
              searchTerm: e.target.value
            }
          })
        }}
      />
      <input type='submit' className='ma_search__submit' value='Search' />
    </form>
  )
}

export default SearchInput

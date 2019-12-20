import React, { useContext } from 'react'
import GlobalContext from '../Global/context'
import { actionTypes } from '../Global/reducer'

const ClearFilters = ({ onClick, ...props }) => {
  const { dispatch } = useContext(GlobalContext)

  return (
    <div className='ma_fe'>
      <button
        className='ma_search__clear' onClick={(e) => {
          e.preventDefault()
          dispatch({ type: actionTypes.CLEAR_FILTER })
        }} {...props}
      >Clear Filters
      </button>
    </div>
  )
}
export default ClearFilters

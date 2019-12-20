import React, { useContext, useState } from 'react'
import _ from 'lodash'
import GlobalContext from '../Global/context'
import { actionTypes } from '../Global/reducer'
import InputField from '../InputField'

const FilterSelect = ({ type = '', categories = [] }) => {
  const { state, dispatch } = useContext(GlobalContext)
  const [toggleState, setToggleState] = useState(false)

  const onClick = function (cType) {
    return function (e) {
      var updatedFilters = _.cloneDeep(state.filters)

      if (cType === 'year') {
        // Toggle year if it alreay exists
        if (updatedFilters.year && updatedFilters.year === e.target.value) {
          delete updatedFilters.year
        } else {
          updatedFilters.year = e.target.value
        }
      }
      if (cType === 'genre') {
        updatedFilters.genre = updatedFilters.genre || []
        var indx = updatedFilters.genre.indexOf(e.target.value)
        if (indx !== -1) {
          // Remove value if it exists
          updatedFilters.genre.splice(indx, 1)
        } else {
          // Add it if it does not exist
          updatedFilters.genre.push(e.target.value)
        }
      }
      // Remove empty filter types
      if (updatedFilters[cType] && updatedFilters[cType].length === 0) {
        delete updatedFilters[cType]
      }

      dispatch({
        type: actionTypes.UPDATE_FILTER,
        payload: {
          filters: updatedFilters
        }
      })
    }
  }

  var selectedCatagories = (state.filters && state.filters[type]) || []
  const items = categories.map((category, index) => {
    return (
      <li key={index + category} className='ma_menu__item'>
        <InputField
          labelClassName='ma_menu__label'
          id={category}
          type='checkbox'
          checked={selectedCatagories.includes(category)}
          value={category}
          onChange={onClick(type)}
        />
      </li>
    )
  })
  return (
    <li className='ma_menu__top-link'>
      <a
        className='ma_menu__anchor' onClick={(e) => {
          e.preventDefault()
          setToggleState(!toggleState)
        }}
      >{type}
      </a>
      {toggleState && (
        <div className='ma_menu__dropdown'>
          <ul id={type} className='ma_menu__items'>
            {items}
          </ul>
        </div>)}
    </li>
  )
}

export default FilterSelect

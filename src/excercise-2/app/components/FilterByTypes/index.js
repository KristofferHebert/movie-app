import React, { useContext } from 'react'

import GlobalContext from '../Global/context'
import InputField from '../InputField'
import { actionTypes } from '../Global/reducer'

const FilterByTypes = ({ types }) => {
  const { state, dispatch } = useContext(GlobalContext)

  const onChange = (e) => {
    dispatch({
      type: actionTypes.UPDATE_VALUE,
      payload: {
        filters: {
          ...state.filters,
          type: e.target.value
        }
      }
    })
  }

  const Radios = types.map((value, index) => {
    return (
      <InputField
        labelClassName='ma_capitalize ma_bold ma_mr'
        name='type'
        type='radio'
        id={value}
        value={value}
        key={index + value}
        onChange={onChange}
        checked={state.filters && state.filters.type === value}
      />
    )
  })

  return (
    <>
      {Radios}
    </>
  )
}

export default FilterByTypes

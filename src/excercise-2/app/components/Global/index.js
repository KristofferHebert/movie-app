import React, { useReducer } from 'react'
import GlobalContext from './context'
import GlobalReducer, { initialState } from './reducer'

const Global = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}

export default Global

import React from 'react'
// import test from './utils/index.test'

import './styles/app.scss'

import Home from './pages/Home'
import Global from './components/Global'

const App = () => {
  return (
    <>
      <Global>
        <Home />
      </Global>
    </>
  )
}

export default App

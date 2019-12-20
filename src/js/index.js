import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/index.scss'
import App from '../excercise-2/app'

const root = document.querySelectorAll('div.exercise-header')[1].nextElementSibling

ReactDOM.render(<App />, root)

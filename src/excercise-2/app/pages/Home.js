import React, { useContext, useEffect } from 'react'

import * as utils from '../utils'
import SearchBar from '../components/SearchBar'
import GlobalContext from '../components/Global/context'
import { Layout, Nav, Footer } from '../layout'
import MovieList from '../components/MovieList'
import { actionTypes } from '../components/Global/reducer'

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext)

  // fetch Data
  useEffect(() => {
    function handleData (data) {
      // Making categories dynamic based on data, makes it easy to additional genres and years
      // without a code push

      const categories = {
        genre: utils.getTypesByName(data.media, 'genre'),
        year: utils.getTypesByName(data.media, 'year')
      }
      dispatch({ type: actionTypes.TOGGLE_LOADING })

      dispatch({
        type: actionTypes.UPDATE_VALUE,
        payload: { media: utils.sortBy(data.media), categories }
      })
    }

    dispatch({ type: actionTypes.TOGGLE_LOADING })

    // eslint-disable-next-line no-undef
    fetch('https://hubspotwebteam.github.io/CodeExercise/src/js/data/data.json')
      .then((res) => {
        return res.json()
      })
      .then(handleData)
  }, [])

  return (
    <>
      <Nav>
        <SearchBar />
      </Nav>
      <Layout>
        <MovieList media={state.media} movieFilters={state.filters} />
      </Layout>
      <Footer />
    </>
  )
}

export default Home

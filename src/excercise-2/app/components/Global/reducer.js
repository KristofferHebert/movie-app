export const initialState = {
  searchTerm: false,
  filters: {
    genre: []
  },
  media: [],
  isLoading: false,
  categories: {
    genre: [],
    year: []
  }
}

export const actionTypes = {
  UPDATE_VALUE: 'UPDATE_VALUE',
  UPDATE_FILTER: 'UPDATE_FILTER',
  TOGGLE_LOADING: 'TOGGLE_LOADING',
  CLEAR_FILTER: 'CLEAR_FILTER'
}

const GlobalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case (actionTypes.UPDATE_FILTER):
      return {
        ...state,
        filters: payload.filters
      }
    case (actionTypes.UPDATE_VALUE):
      return {
        ...state,
        ...payload
      }
    case (actionTypes.TOGGLE_LOADING):
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case (actionTypes.CLEAR_FILTER):
      return {
        ...state,
        searchTerm: false,
        filters: {
          genre: []
        }
      }
    default:
      return state
  }
}

export default GlobalReducer

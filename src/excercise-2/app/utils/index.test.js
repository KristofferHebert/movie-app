import * as utils from './index'
import data from '../../data/data.json'

// SORTBY
const media = utils.sortBy(data.media)
// It should default to sorting by title in ASC order
console.log('It should default to sorting by title in ASC order', media)

// FILTERBY
console.log('Filter by type: movie', utils.filterBy(media, { type: 'movie' }))
console.log('Filter by type: book', utils.filterBy(media, { type: 'book' }))
console.log('filter by genre comedy or western', utils.filterBy(media, { genre: ['comedy', 'western'] }))

// SEARCH

// It should return multi results as an array if them match
console.log('Search by The', utils.search(media, 'The'))

// It should return a result as an array if them exact match
console.log('Search by The Other Guys', utils.search(media, 'The Other Guys'))

// It should be case insensitive
console.log('Search by the other guys', utils.search(media, 'the other guys'))

// It should return an empty array if no results are found
console.log('Search should have no results', utils.search(media, 'This movie does not exist'))

// It should return an array of available names for a media type
console.log('Returns unique names for all possible genres', utils.getTypesByName(media, 'genre'))

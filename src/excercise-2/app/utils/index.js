import _ from 'lodash'

export const sortBy = (mediaArr, attribute = ['title'], order = ['asc']) => {
  return _.orderBy(mediaArr, attribute, order)
}

// Genre should return either items in a genre
export const filterBy = (mediaArr, filterObj) => {
  // Cache genre values for later use
  var genres = filterObj.genre
  delete filterObj.genre

  var results = _.filter(mediaArr, filterObj)

  // Filter results by items in genres
  // For example comedy or western
  if (genres) {
    results = _.filter(results, (result) => {
      for (const g in genres) {
        if (result.genre.includes(genres[g])) {
          return true
        }
      }
      return false
    })
  }
  return results
}

export const search = (mediaArr, titleStr = '') => {
  if (!titleStr) {
    return mediaArr
  }
  return _.filter(mediaArr, (media) => {
    // Makes it so title searchs are case insensitive
    const mediaTitle = media.title.toLowerCase()
    return mediaTitle && mediaTitle.includes(titleStr && titleStr.toLowerCase())
  })
}

export const getTypesByName = (mediaArr, typeNameStr) => {
  return [...new Set(_.flatten(mediaArr.map(m => m[typeNameStr])))].sort()
}

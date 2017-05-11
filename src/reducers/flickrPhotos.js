const flickrPhotos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FROM_FLICKR_PENDING':
      return Object.assign({}, state, {
        isPending: true
      })
    case 'FETCH_FROM_FLICKR_FULFILLED':
      return Object.assign({}, state, {
        isPending: false,
        photos: action.payload.photos.photo
      })
    case 'UPDATE_EXISTING_TOPIC':
      return Object.assign({}, state, {
        isPending: false,
        photos: action.flickrPhotos
      })
    case 'RESET':
      return Object.assign({}, action.payload.flickrPhotos)
    default:
      return state
  }
}
export default flickrPhotos;
const pixabayPhotos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FROM_PIXABAY_PENDING':
      return Object.assign({}, state, {
        isPending: true
      })
    case 'FETCH_FROM_PIXABAY_FULFILLED':
      return Object.assign({}, state, {
        isPending: false,
        photos: action.payload.hits
      })
    case 'UPDATE_EXISTING_TOPIC':
      return Object.assign({}, state, {
        isPending: false,
        photos: action.pixabayPhotos
      })
    case 'RESET':
      return Object.assign({}, action.payload.pixabayPhotos)
    default:
      return state
  }
}
export default pixabayPhotos;
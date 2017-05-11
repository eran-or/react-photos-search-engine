const searchHistory = (state = [], action) => {
  switch (action.type) {
    case 'SET_TOPIC':
      return [...state, {
        topic: action.topic,
        timeOfSearch: action.timeOfSearch,
        flickrPhotos: action.flickrPhotos,
        pixabayPhotos: action.pixabayPhotos
      }]
    case 'UPDATE_EXISTING_TOPIC':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1), {
        topic: action.topic,
        timeOfSearch: action.timeOfSearch,
        flickrPhotos: action.flickrPhotos,
        pixabayPhotos: action.pixabayPhotos
      }]
    case 'RESET':
      return [...action.payload.searchHistory]

    default:
      return state
  }
}
export default searchHistory;
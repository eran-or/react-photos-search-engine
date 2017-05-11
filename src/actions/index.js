const setTopic = (getState, timeOfSearch, topic) => {
  return {
    type: 'SET_TOPIC',
    topic,
    timeOfSearch,
    pixabayPhotos: getState.pixabayPhotos,
    flickrPhotos: getState.flickrPhotos
  }
}
const updateExistingTopic = (getState, timeOfSearch, topic, index) => {
  return {
    type: 'UPDATE_EXISTING_TOPIC',
    topic,
    index,
    timeOfSearch,
    pixabayPhotos: getState.searchHistory[index].pixabayPhotos,
    flickrPhotos: getState.searchHistory[index].flickrPhotos
  }
}

const fetchFromFlickr = (topic, dispatch, getState) => {

  const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ee9f4512c2a54b3b2f09cb2000ce4a89&text=${topic}&format=json&nojsoncallback=1`;

  return {
    type: 'FETCH_FROM_FLICKR',
    payload: fetch(flickrUrl).then(res => { return res.json() })
  }
}
const fetchFromPixabay = (topic, dispatch, getState) => {

  const pixabayUrl = `https://pixabay.com/api/?key=5167438-bfac80315fa01ec4da1031d88&q=${topic}&image_type=photo`;

  return {
    type: 'FETCH_FROM_PIXABAY',
    payload: fetch(pixabayUrl).then(res => { return res.json() })
  }
}
export const search = (topic) => {

  const timeOfSearch = new Date().toLocaleString();

  return (dispatch, getState) => {

    const index = getState().topics.indexOf(topic)
    if (index > -1) {
      //If we searched allready the topic let's return it from cache and update the topic // in history page 

      //return from cache
      return (
        dispatch(updateExistingTopic(getState(), timeOfSearch, topic, index))
      )

    } else {
      //If it's the first time we search the topic let's fetching it from Api's 
      return dispatch({
        type: 'FETCHING',
        payload: Promise.all([
          dispatch(fetchFromFlickr(topic, dispatch, getState)),
          dispatch(fetchFromPixabay(topic, dispatch, getState)),
        ]),
      }).then(({ value, action }) => {
        dispatch(setTopic(getState(), timeOfSearch, topic))
      })
    }
  }
}
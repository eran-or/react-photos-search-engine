import { combineReducers } from 'redux'
import pixabayPhotos from './pixabayPhotos'
import flickrPhotos from './flickrPhotos'
import searchHistory from './searchHistory'
import topics from './topics'
import fetchingFulfilled from './fetchingFulfilled'

const rootReducer = combineReducers({ topics, pixabayPhotos, flickrPhotos, searchHistory, fetchingFulfilled })

export default rootReducer;
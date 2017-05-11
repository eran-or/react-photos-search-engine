const fetchingFulfilled = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_FULFILLED':
      return true
    //RESET currently not active. to active the action uncomment in main index.js
    //the related code to recoverFromStorage
    case 'RESET':
      return action.payload.fetchingFulfilled
    default:
      return state
  }
}
export default fetchingFulfilled;
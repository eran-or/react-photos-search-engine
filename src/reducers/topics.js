const topics = (state = [], action) => {
  switch (action.type) {
    // case 'INIT':
    //   return state
    case 'SET_TOPIC':
      return [...state, action.topic]
    case 'UPDATE_EXISTING_TOPIC':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1), action.topic]
    case 'RESET':
      return [...action.payload.topics]
    default:
      return state
  }
}
export default topics;
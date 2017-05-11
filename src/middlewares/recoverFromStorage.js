export default store => next => action => {
  const { type } = action
  if (type === 'INIT') {
    const state = JSON.parse(localStorage.getItem('PS_ENGINE_STATE') || '{}')
    if (state) {
      store.dispatch({
        type: 'RESET',
        payload: state
      })
    }
  } else {
    next(action)
    const state = store.getState();
    localStorage.setItem('PS_ENGINE_STATE', JSON.stringify(state));
  }


}
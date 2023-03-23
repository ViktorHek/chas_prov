import initialStore from './initialStore'

const rootReducer = (state = initialStore, action) => {

  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
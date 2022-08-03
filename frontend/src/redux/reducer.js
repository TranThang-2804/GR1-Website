const initState = {
  selectedStudent: null
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'selectedStudent/update':
      return {
        ...state,
        selectedStudent: {
          ...action.payload
        }
      }
    default:
      return state;
  }
}

export default rootReducer;
const initState = {
  selectedStudent: null,
  studentList: [],
  stateRefresh: false
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
    case 'studentList/add':
      return {
        ...state,
        studentList: state.studentList.filter(function(item) {
          return item.id !== action.payload.id
        })
      }
    case 'studentList/remove':
      return {
        ...state,
        studentList: [
          ...state.studentList,
          action.payload
        ]
      }
    case 'state/update':
      return {
        ...state,
        stateRefresh: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
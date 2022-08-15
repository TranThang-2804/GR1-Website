export const updateSelectedStudent = (data) => {
  return {
    type: 'selectedStudent/update',
    payload: data
  }
}

export const addStudentList = (data) => {
  return {
    type: 'studentList/add',
    payload: data
  }
}

export const removeStudentList = (data) => {
  return {
    type: 'studentList/remove',
    payload: data
  }
}

export const updateRefreshState = (data) => {
  return {
    type: 'state/update',
    payload: data
  }
}
export const updateSelectedStudent = (data) => {
  return {
    type: 'selectedStudent/update',
    payload: data
  }
}
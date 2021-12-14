import { Action } from '../actionTypes/StudentActionType'
import StudentsState from '../StudentsState'

const initialState: StudentsState = {
  entities: [],
  loading: false
}

export const studentsReducer = (state = initialState, action: Action): StudentsState => {
  switch (action.type) {
    case 'GET_STUDENTS_PENDING':
      return {
        loading: true,
        entities: []
      }
    case 'GET_STUDENTS_SUCCESS':
      return {
        loading: false,
        entities: action.payload
      }
    case 'GET_STUDENTS_FAIL':
      return {
        loading: false,
        entities: []
      }
    default:
      return state
  }
}

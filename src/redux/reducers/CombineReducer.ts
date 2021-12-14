import { combineReducers } from 'redux'
import { studentsReducer } from './StudentsReducer'

const reducers = combineReducers({
  students: studentsReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>;

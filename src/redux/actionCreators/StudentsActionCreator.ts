import axios from 'axios'
import { Dispatch } from 'redux'
import { Action, ActionType } from '../actionTypes/StudentActionType'

export const getStudents = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_STUDENTS_PENDING
    })

    try {
      const backendUrl: string = (process.env.REACT_APP_BACKEND_URL as string)
      const { data } = await axios.get(backendUrl)

      dispatch({
        type: ActionType.GET_STUDENTS_SUCCESS,
        payload: data
      })
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_STUDENTS_FAIL,
        payload: err.message
      })
    }
  }
}

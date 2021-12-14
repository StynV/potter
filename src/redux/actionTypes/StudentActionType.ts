/* eslint-disable no-unused-vars */

import Student from '../Student'

export enum ActionType {
    GET_STUDENTS_PENDING = 'GET_STUDENTS_PENDING',
    GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS',
    GET_STUDENTS_FAIL = 'GET_STUDENTS_FAIL'
}

interface actionPending {
    type: ActionType.GET_STUDENTS_PENDING
}

interface actionSuccess {
    type: ActionType.GET_STUDENTS_SUCCESS;
    payload: Student[]
}

interface actionFail {
    type: ActionType.GET_STUDENTS_FAIL;
    payload: string
}

export type Action = actionPending | actionSuccess | actionFail

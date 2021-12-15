/* eslint-disable no-unused-vars */

import Student from '../Student'

export enum ActionType {
    GET_STUDENTS_PENDING = 'GET_STUDENTS_PENDING',
    GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS',
    GET_STUDENTS_FAIL = 'GET_STUDENTS_FAIL'
}

export interface actionPending {
    type: ActionType.GET_STUDENTS_PENDING
}

export interface actionSuccess {
    type: ActionType.GET_STUDENTS_SUCCESS;
    payload: Student[]
}

export interface actionFail {
    type: ActionType.GET_STUDENTS_FAIL;
    payload: string
}

export type Action = actionPending | actionSuccess | actionFail

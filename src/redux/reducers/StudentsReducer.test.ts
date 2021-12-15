import StudentsState from '../StudentsState'
import { studentsReducer } from './StudentsReducer'
import { actionPending, actionSuccess, actionFail, ActionType } from '../actionTypes/StudentActionType'

/* eslint-disable no-undef */
describe('getStudents reducer', () => {
  const initialState: StudentsState = {
    entities: [],
    loading: false
  }

  const mockStudent =
  {
    name: 'name',
    alternate_names: ['alternate_names'],
    species: 'species',
    gender: 'gender',
    house: 'house',
    dateOfBirth: 'dateOfBirth',
    yearOfBirth: 0,
    wizard: true,
    ancestry: 'ancestry',
    eyeColour: 'eyeColour',
    hairColour: 'hairColour',
    wand: {
      wood: 'wood',
      core: 'core',
      length: 0
    },
    patronus: 'patronus',
    hogwartsStudent: true,
    hogwartsStaff: true,
    actor: 'actor',
    alternate_actors: ['alternate_actors'],
    alive: true,
    image: 'image'
  }

  const changedState: StudentsState = {
    entities: [mockStudent],
    loading: false
  }

  const pending: actionPending = { type: ActionType.GET_STUDENTS_PENDING }
  const success: actionSuccess = { type: ActionType.GET_STUDENTS_SUCCESS, payload: [mockStudent] }
  const fail: actionFail = { type: ActionType.GET_STUDENTS_FAIL, payload: '' }

  it('sets state right when calling GET_STUDENTS_PENDING', () => {
    expect(studentsReducer(initialState, pending)).toEqual(
      {
        loading: true,
        entities: []
      }
    )
  })

  it('sets state right when calling GET_STUDENTS_SUCCESS', () => {
    expect(studentsReducer(changedState, success)).toEqual(
      {
        loading: false,
        entities: [mockStudent]
      }
    )
  })

  it('sets state right when calling GET_STUDENTS_FAIL', () => {
    expect(studentsReducer(initialState, fail)).toEqual(
      {
        loading: false,
        entities: []
      }
    )
  })
})

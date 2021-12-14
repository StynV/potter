import Student from './Student'

export default interface StudentsState {
    entities: Student[],
    loading: boolean
}

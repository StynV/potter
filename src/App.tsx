// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { getStudents } from './redux/actionCreators/StudentsActionCreator'
import Student from './redux/Student'
import { useTypedSelector } from './UseTypeSelector'

function App () {
  const dispatch = useDispatch()
  const { entities, loading } = useTypedSelector((state) => state.students)

  useEffect(() => {
    dispatch(getStudents())
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div className="App">
      {
      entities.map((entity: Student) => {
        return (
          <p key={entity.name}>{ entity.name }</p>
        )
      })
      }
    </div>
  )
}

export default App

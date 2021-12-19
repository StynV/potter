// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import StudentCard from './components/StudentCard'
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
      <div className='flex flex-wrap flex-row justify-center items-start content-start'>
      {
        entities
          .slice(0, 10)
          .map((entity: Student) => {
            return (
              <StudentCard key={entity.name} student={entity} />
            )
          })
      }
      </div>

    </div>
  )
}

export default App

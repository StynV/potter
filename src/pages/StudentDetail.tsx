// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../UseTypeSelector'

export default function StudentDetail () {
  const params = useParams()
  const { entities } = useTypedSelector((state) => state.students)
  const optionalEntity = entities.find(student => student.name === params.name)

  if (optionalEntity === undefined) {
    return (
      <main><p>Student not found</p></main>
    )
  } else {
    const style = 'w-6/12 inline-block p-6 text-center'
    const styleHeader = 'font-semibold text-xl'
    const styleText = 'text-lg'
    return (
      <main>
          <img className="object-cover pt-auto ml-auto mr-auto mt-32 rounded-full w-60 h-60" src={ optionalEntity.image } alt="Student image"></img>
          <div className='mt-16 ml-auto mr-auto w-6/12'>

            <div>
              <div className={style}>
                <p className={styleHeader}>Name</p>
                <p className={styleText}>{ optionalEntity.name }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>Species</p>
                <p className={styleText}>{ optionalEntity.species }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>Gender</p>
                <p className={styleText}>{ optionalEntity.gender }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>House</p>
                <p className={styleText}>{ optionalEntity.house }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>Date of birth</p>
                <p className={styleText}>{ optionalEntity.dateOfBirth }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>Ancestry</p>
                <p className={styleText}>{ optionalEntity.ancestry }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>Eye colour</p>
                <p className={styleText}>{ optionalEntity.eyeColour }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>Hair colour</p>
                <p className={styleText}>{ optionalEntity.hairColour }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>Patronus</p>
                <p className={styleText}>{ optionalEntity.patronus }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>Actor</p>
                <p className={styleText}>{ optionalEntity.actor }</p>
              </div>
            </div>
          </div>
      </main>
    )
  }
}

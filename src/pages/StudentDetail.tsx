// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../UseTypeSelector'

export default function StudentDetail () {
  const params = useParams()
  const { entities } = useTypedSelector((state) => state.students)
  const optionalEntity = entities.find(student => student.name === params.name)
  const { t, i18n } = useTranslation('common')

  if (optionalEntity === undefined) {
    return (
      <main><p>Student not found</p></main>
    )
  } else {
    const style = 'w-6/12 inline-block p-6 text-center'
    const styleHeader = 'font-semibold text-xl'
    const styleText = 'text-lg'
    const styleButton = 'bg-blue-500 text-white p-2 rounded-full'

    return (
      <main>
          <img className="object-cover pt-auto ml-auto mr-auto mt-32 rounded-full w-60 h-60" src={ optionalEntity.image } alt="Student image"></img>
          <div className='mt-16 ml-auto mr-auto w-6/12'>

            <div>
              <div className={style}>
                <p className={styleHeader}>{t('name')}</p>
                <p className={styleText}>{ optionalEntity.name }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>{t('species')}</p>
                <p className={styleText}>{ optionalEntity.species }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>{t('gender')}</p>
                <p className={styleText}>{ optionalEntity.gender }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>{t('house')}</p>
                <p className={styleText}>{ optionalEntity.house }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>{t('dateOfBirth')}</p>
                <p className={styleText}>{ optionalEntity.dateOfBirth }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>{t('ancestry')}</p>
                <p className={styleText}>{ optionalEntity.ancestry }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>{t('eyeColour')}</p>
                <p className={styleText}>{ optionalEntity.eyeColour }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>{t('hairColour')}</p>
                <p className={styleText}>{ optionalEntity.hairColour }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <p className={styleHeader}>{t('patronus')}</p>
                <p className={styleText}>{ optionalEntity.patronus }</p>
              </div>
              <div className={style}>
                <p className={styleHeader}>{t('actor')}</p>
                <p className={styleText}>{ optionalEntity.actor }</p>
              </div>
            </div>

            <div>
              <div className={style}>
                <button className={styleButton} onClick={() => i18n.changeLanguage('en')}>English</button>
              </div>
              <div className={style}>
                <button className={styleButton} onClick={() => i18n.changeLanguage('nl')}>Nederlands</button>
              </div>
            </div>
          </div>
      </main>
    )
  }
}

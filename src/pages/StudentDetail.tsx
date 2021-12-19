// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useParams } from 'react-router-dom'

export default function StudentDetail () {
  const params = useParams()
  return (
        <main>
            <p>{params.name}</p>
        </main>
  )
}

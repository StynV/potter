// eslint-disable-next-line no-use-before-define
import React from 'react'
import Student from '../redux/Student'

class StudentCard extends React.Component<{ student: Student }> {
  render () {
    return (
        <div className="max-w-xs m-6 relative rounded shadow-lg">
            <img className="object-cover w-96 h-96" src={ this.props.student.image } alt="Student image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ this.props.student.name }</div>
            </div>
            <div className="px-6 pt-4 pb-2 h-32">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ this.props.student.dateOfBirth }</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ this.props.student.patronus }</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ this.props.student.actor }</span>
            </div>
        </div>
    )
  }
}

export default StudentCard

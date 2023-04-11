import React from 'react'
import Task from './Task'

const Column = () => {
  return (
    <div className='column'>
        <div className='column-header'>
        To Do
        </div>
        <div className='column-body'>
            <Task />
            <Task />
            <Task />
        </div>
    </div>
  )
}

export default Column
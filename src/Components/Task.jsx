import React from 'react'

const Task = ({item}) => {
  return (
    <div className='task' draggable>{item}</div>
  )
}

export default Task
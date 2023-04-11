import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux';

const Column = ({title}) => {
  const {done, inProgress, todo} = useSelector((state) => state.kanban);
  return (
    <div className='column'>
        <div className='column-header'>
        {title}
        </div>
        <div className='column-body'>
          {title === 'TODO' && todo.map((item) => <Task key={item} item={item} />)}
          {title === 'PROGRESS' && inProgress.map((item) => <Task key={item} item={item} />)}
          {title === 'DONE' && done.map((item) => <Task key={item} item={item} />)}
            
        </div>
    </div>
  )
}

export default Column
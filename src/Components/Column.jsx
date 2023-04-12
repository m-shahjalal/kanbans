import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const Column = ({ title, id }) => {
    const { done, inProgress, todo } = useSelector((state) => state.kanban);

    return (
        <div className="column" id={id}>
            <div className="column-header">{title}</div>
            <div className="column-body">
                {title === 'TODO' && todo.map((item) => <Task title="todo" key={item.id} item={item} />)}
                {title === 'PROGRESS' && inProgress.map((item) => <Task title="progress" key={item.id} item={item} />)}
                {title === 'DONE' && done.map((item) => <Task title="done" key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default Column;

import React, { useEffect, useRef } from 'react';
import { removeDone, removeInProgress, removeTodo } from '../store/slices/kanbanSlice';
import { useDispatch } from 'react-redux';

const Task = ({ item, title }) => {
    const itemRef = useRef()
    const dispatch = useDispatch();


    useEffect(() => {
        itemRef.current.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('info', JSON.stringify({ item: item, title }));
        });

        itemRef.current.addEventListener('dragend', (e) => {
            e.preventDefault();
            title === 'todo' && dispatch(removeTodo(item.id))
            title === 'progress' && dispatch(removeInProgress(item.id))
            title === 'done' && dispatch(removeDone(item.id))
        });
    }, []);

    return (
        <div className="task" ref={itemRef} draggable>
            {item.name}
        </div>
    );
};

export default Task;

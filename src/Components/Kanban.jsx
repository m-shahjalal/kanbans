import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addDone, addInProgress, addTodo } from '../store/slices/kanbanSlice';
import Column from './Column';

const Kanban = () => {
    const globalRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        const columns = globalRef.current.children;
        for (let column of columns) {
            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.target.classList.add('dragover');
            });

            column.addEventListener('dragleave', (e) => {
                e.preventDefault();
                e.target.classList.remove('dragover');
            });

            column.addEventListener('drop', (e) => {
                console.log(e.target)
                e.preventDefault();
                e.target.classList.remove('dragover');

                const { item } = JSON.parse(e.dataTransfer.getData('info'));
                const id = e.target.id;

                if (id === 'progress') dispatch(addInProgress(item));
                else if (id === 'done') dispatch(addDone(item));
                else if (id === 'todo') dispatch(addTodo(item));
            });
        }
    }, []);

    return (
        <div ref={globalRef} className="kanban">
            <Column title="TODO" id="todo" />
            <Column title="PROGRESS" id="progress" />
            <Column id="done" title="DONE" />
        </div>
    );
};

export default Kanban;

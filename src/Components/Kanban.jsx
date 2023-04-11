import React from 'react';
import Column from './Column';

const Kanban = () => {
    return <div className="kanban">
        <Column title='TODO' />
        <Column title='PROGRESS' />
        <Column title='DONE' />
        
    </div>;
};

export default Kanban;

import React from 'react';

const ToDoFilter = (props) => {
    const filtered = props.filtered || 'all';
    const filteredStates = ['all', 'active', 'completed'];

    const filters = filteredStates.map((state) => {
        const activeStyle = (state === filtered) ? 'todo-filter-item active' : 'todo-filter-item';
        
        return (
            <span 
                key={state} 
                className={activeStyle}
                onClick={() => props.setFilter(state)}>{state}</span>
        );
    });

    return (
        <span className="todo-filter">
            Show: 
            {filters}
        </span>
    );
};

export default ToDoFilter;
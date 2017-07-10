import React from 'react';

const ToDoFilter = (props) => {
    const allFilters = ['all', 'active', 'completed'];
    
    // here, we are mapping each item in allFilters
    // into a new element with an onClick handler
    // that sends the setFilter() method back up to the parent component
    // which in turn calls the parent method and updates state
    const filters = allFilters.map((state) => {
        const activeStyle = (state === props.filtered) ? 'todo-filter-item active' : 'todo-filter-item';
        
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
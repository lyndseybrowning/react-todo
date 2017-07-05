import React from 'react';

const ToDoItem = (props) => {
    
    const isComplete = props.completed;
    const isCompleteCss = isComplete ? "todoitem completed" : "todoitem";

    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                name={`item${props.id}`} 
                className="todo-complete" 
                checked={isComplete} 
                onChange={() => props.completeItem(props.id)}
            />
            <span className={isCompleteCss}>{props.name}</span>
            <span className="todo-delete" onClick={() => props.deleteItem(props.id)}>&#xd7;</span>
        </li>
    );
};

export default ToDoItem;
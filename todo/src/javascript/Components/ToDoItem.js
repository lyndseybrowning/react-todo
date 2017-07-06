import React from 'react';

// notice how we're not using a class here
// classes are only really useful when the component needs to stores state
// since this is just a simple component we can use a normal function 
// that returns a JSX component.
// props is an object containing all props passed to the component
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

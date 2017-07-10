import React from 'react';

// notice how we're not using a class here
// classes are only really useful when the component needs to stores state
// since this is just a simple component without state,
// we can use a normal function that returns a JSX component
// props is an object containing all props passed to the component
const ToDoItem = (props) => {

    // this is a very nice way of destructuring objects
    // using ES6/ES2015
    // we are literally extracting the variables from props
    // in the order that they are received and storing them in our own variables
    const {
        id,
        name,
        completed,
        completeItem,
        deleteItem,
        handleEdit,
        editing,
        editItem
    } = props;

    const completeStyle = completed ?  'todo-item completed' : 'todo-item';

    const handleBlur = (id, name, e) => {
        const value = e.target.value;

        if (value === '') {
            e.target.value = name;
        }

        // tell the editItem function that
        // we are in the onBlur event
        // so that it doesn't check for an Enter key being pressed
        editItem(e, id, true);
    };

    // if we are editing the current component
    // show the input field
    // otherwise, just show the item name
    const isEdit = () => {
        // if the item is completed,
        // we shouldn't let the user edit it.
        if (completed) {
            return (
                <span className="todo-text">
                    <span>{name}</span>
                </span>
            )
        }
        
        if (editing === id) {
            return (
                <input 
                    type="text" 
                    className="todo-edit"
                    defaultValue={name} 
                    onBlur={handleBlur.bind(null, id, name)}
                    onKeyPress={(e) => editItem(e, id)}
                />
            );
        }

        return (
            <span className="todo-text" onClick={() => handleEdit(id)}> 
                <span>{name}</span>
            </span>
        );
    };

    return (
        <li className={completeStyle}>    
            <input 
                type="checkbox" 
                name={`item${id}`} 
                className="todo-complete" 
                checked={completed} 
                onChange={() => completeItem(id)}
            />

            { isEdit() }

            <span className="todo-delete" onClick={() => deleteItem(id)}>&#xd7;</span>
        </li>
    );
};

export default ToDoItem;

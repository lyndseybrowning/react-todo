import React from 'react';

const AddToDo = (props) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="What needs to be done?" 
                className="todo-add"
                onKeyPress={props.addItem} />
        </div>
    );
};

export default AddToDo;
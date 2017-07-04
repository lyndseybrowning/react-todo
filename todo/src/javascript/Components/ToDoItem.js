
import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        const isComplete = this.props.completed;
        const isCompleteCss = isComplete ? "todoitem completed" : "todoitem";

        return (
            <li className="todo-item">
                <input 
                    type="checkbox" 
                    name={`item${this.props.id}`} 
                    className="todo-complete" 
                    checked={isComplete} 
                    onChange={() => this.props.handleComplete(this.props.id)}
                />
                <span className={isCompleteCss}>{this.props.name}</span>
                <span className="todo-delete">x</span>
            </li>
        );
    }
}

export default ToDoItem;
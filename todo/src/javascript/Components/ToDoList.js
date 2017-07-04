import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import '../../css/ToDoList.css';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: [{
                id: 1,
                name: 'Create React To Do List example',
                completed: true
            }]
        }
    }
    
    handleComplete(id) { 
        //const item = this.state.todo.findIndex(item => item.id === itemId);
    }

    renderItems() {
        const items = this.state.todo;

        return items.map((item) => (
            <ToDoItem 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                completed={item.completed}
                handleComplete={this.handleComplete}
            />
        ));
    }
    
    render() {
        const items = this.state.todo; 

        return (
            <div className="todo">
                <div><input type="text" placeholder="What needs to be done?" className="todo-add" /></div>
                {/*<div>
                    <span>Show:</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>*/}
                { 
                    items.length === 0 
                    ? "There are no items in your to do list" 
                    : <ul> { this.renderItems() } </ul>
                }
            </div>
        );
    }
}

export default ToDoList;
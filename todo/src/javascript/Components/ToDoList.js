import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';
import '../../css/ToDoList.css';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: [
                {
                    id: 1,
                    name: 'Create React To Do List example',
                    completed: false
                },
            ]
        };
    }
    
    handleComplete(id) { 
        const todo = this.state.todo;
        const item = todo.find(item => item.id === id);
          
        if (typeof item === 'undefined') {
            return;
        }
            
        item.completed = !item.completed;   
        
        const index = todo.findIndex(item => item.id === id);
        const todoCopy = todo.slice();

        // remove the current object
        todoCopy.splice(index, 1);
        // replace with the new object
        todoCopy.push(item);
        // update state and force a render
        this.setState({ todo: todoCopy })
    }

    addItem(e) {
        if (e.key !== 'Enter') {
            return;
        }

        const todo = this.state.todo;
        const name = e.target.value;
        const id = new Date().getTime();
        
        todo.push({
            name, id, completed: false
        });

        this.setState({ todo });

        e.target.value = '';
    }

    handleDelete(id) {
        const todo = this.state.todo;
        const itemIndex = todo.findIndex(item => item.id === id);
          
        if (itemIndex === 0) {
            return;
        }
            
        const todoCopy = todo.slice();

        // remove the current object
        todoCopy.splice(itemIndex, 1);
        
        // update state and force a render
        this.setState({ todo: todoCopy })
    }

    renderItems() {
        const items = this.state.todo;
        const sortComplete = ((a, b) => a.completed > b.completed);
        const sortAlpha = ((a, b) => a.name > b.name);

        return items
            .sort(sortAlpha)
            .sort(sortComplete)
            .map((item) => (
                <ToDoItem 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                    completed={item.completed}
                    handleComplete={this.handleComplete.bind(this)}
                    handleDelete={this.handleDelete.bind(this)}
                />
        ));
    }
    
    render() {
        const items = this.state.todo; 

        return (
            <div className="todo">
                <div>Total Items: <span>{items.length}</span></div>
                <AddToDo addItem={this.addItem.bind(this)} />
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
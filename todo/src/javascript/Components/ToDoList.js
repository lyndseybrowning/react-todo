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
    
    completeItem(id) { 
        this.setState(({ todo }) => {
            // find the object that we want to update
            const todoItem = todo.findIndex(item => item.id === id);
            
            // whilst this is a simple solution
            // it's not adhering to immutable principles
            // and we should try to keep objects immutable wherever possible
            // https://facebook.github.io/react/docs/update.html
            todo[todoItem].completed = !todo[todoItem].completed;

            // update state
            return {
                todo
            };
        });
    }

    addItem(e) {
        if (e.key !== 'Enter' || !e.target.value) {
            return;
        }

        // generate a random id based on the current date and time
        // this can be updated later after a successful AJAX request
        // returns the newly generated item
        const id = new Date().getTime();
        const name = e.target.value;

        // newly created items will be incomplete by default
        const completed = false;

        // destructuring allows us to extract the body of state 
        // in a custom variable
        // todo now contains state.todo
        this.setState(({ todo }) => { 
            
            // push our new item into the previous state
            todo.push({
                id, 
                name,
                completed
            });

            // return newly updated state 
            return {
                todo
            };
        });

        e.target.value = '';
    }

    deleteItem(id) {
        this.setState(({ todo }) => {
            return {
                todo: todo.filter(item => item.id !== id)
            };
        });
    }

    handleEdit(id) {
        this.setState({
            editing: id
        })
    }

    editItem(e, id, isBlurEvent = false) {
        if (!isBlurEvent && (e.key !== 'Enter' || !e.target.value)) {
            return;
        }

        const name = e.target.value;

        this.setState(({ todo }) => {
            // find the object that we want to update
            const todoItem = todo.findIndex(item => item.id === id);
            todo[todoItem].name = name;

            return {
                todo,
                editing: null 
            };
        });
    }

    renderItems() {   
        return this.state.todo
            .sort((a, b) => a.completed > b.completed)
            .map((item) => (
                <ToDoItem 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                    completed={item.completed}
                    completeItem={this.completeItem.bind(this)}
                    deleteItem={this.deleteItem.bind(this)}
                    handleEdit={this.handleEdit.bind(this)}
                    editing={this.state.editing}
                    editItem={this.editItem.bind(this)}
                />
        ));
    }
    
    render() {
        const totalItems = this.state.todo.length; 

        return (
            <div className="todo">
                <div>Total Items: <span>{totalItems}</span></div>
                <AddToDo addItem={this.addItem.bind(this)} />
                { 
                    totalItems === 0 
                    ? "There are no items in your to do list" 
                    : <ul> { this.renderItems() } </ul>
                }
            </div>
        );
    }
}

export default ToDoList;

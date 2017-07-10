import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';
import ToDoFilter from './ToDoFilter';
import '../../css/ToDoList.css';

// this is the component that holds the entire To Do list feature
class ToDoList extends Component {
    
    // we want state to be accessible from a single location
    // to make it easy to refactor and find what we are looking for
    // state should be stored in the class constructor
    // note: to use the "this" keyword in a constructor
    // you must make a call to super() first
    // which calls the base class constructor
    constructor() {
        super();

        // this is the entire state of our todo list
        // at the moment, we have one item and it is completed
        // and the todo list is filtered by all items (active and completed)
        // we are not editing anything at the moment, but the "editing" property
        // will be used later to tell the component which item we're editing.
        this.state = {
            todo: [
                {
                    id: 1,
                    name: 'Create React To-Do List',
                    completed: true
                },
            ],
            filtered: 'all',
            editing: null,
        };
    }
    
    // the following methods
    // are used to update state in our application
    // and are passed as "props" to the relevant components

    completeItem(id) { 
        // the setState() method updates the state object
        // and whenever this event occurs, React performs a re-render of
        // the components affected
        this.setState(({ todo }) => {

            // find the object that we want to update
            // arrow functions make this much more readable and concise!
            const todoItem = todo.findIndex(item => item.id === id);
            
            // whilst this is a simple solution
            // it's not adhering to immutable principles
            // and we should try to keep objects immutable wherever possible
            // https://facebook.github.io/react/docs/update.html
            todo[todoItem].completed = !todo[todoItem].completed;

            // return the newly updated state
            // NOTE: the following statement is equivalent to 
            // return { todo: todo }
            // this shorthand technique was introduced in ES2015
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
        // this can be updated later when/if a successful AJAX request
        // returns the newly generated item
        const id = new Date().getTime();
        const name = e.target.value;
        const completed = false;

        // destructuring allows us to extract the body of state 
        // into a custom variable
        // alternatively, we could have passed the previous state directly
        // and accessed the todo list via prevState.todo
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

        // clear the input box
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
        });
    }

    // ES2015 allows us to use default parameters
    // and is the same as saying isBlurEvent = isBlurEvent || false
    // in the function body
    // defaultParameters are much cleaner and more readable!
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

    // set the current filter in state
    // all, active or completed
    setFilter(filter) {
        this.setState({
            filtered: filter
        });
    }

    // this method is used inside renderItems()
    // to filter the to-do list based on the
    // filter stored in state
    filterItems(filtered, item) {
        switch (filtered) {
            case 'active':
                return !item.completed;
            case 'completed':
                return item.completed;
            default:
                return item;
        }
    }

    // this function maps each item in our to-do list
    // into a ToDoItem component
    // each property (known as "props") passed to the component
    // is accessible within that component
    // this allows the 1-way data-binding to take effect
    // the child component can call these functions
    // which in turn update state :)
    // NOTE: when displaying multiple components of the same type you must add a "key" property. 
    // This is used internally within React to store references to nodes that have changed etc
    renderItems() {   
        return this.state.todo
            .sort((a, b) => a.completed > b.completed)
            .filter(this.filterItems.bind(null, this.state.filtered))
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
    
    // the render function will display our component
    render() {
        const items = this.renderItems();
        const totalItems = items.length;

        return (
            <div className="todo">              
                <AddToDo addItem={this.addItem.bind(this)} />
                { 
                    totalItems === 0 
                    ? <p> There are no items to display </p>
                    : <ul> { items } </ul>
                }
                <div className="todo-footer">
                    <span>Showing <span>{totalItems} of {this.state.todo.length}</span> items</span>
                    <ToDoFilter filtered={this.state.filtered} setFilter={this.setFilter.bind(this)} />
                </div>
                
            </div>
        );
    }
}

export default ToDoList;

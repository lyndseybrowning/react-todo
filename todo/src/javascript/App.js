import React, { Component } from 'react';
import ToDoList from './Components/ToDoList';
import logo from '../img/logo.svg';
import '../css/App.css';

// when creating a component using ES6 class
// you must return the component in a render() function
class App extends Component {
  render() {
    return (
      // this is called JSX
      // it looks like HTML, but it isn't
      // it makes writing components very simple and readable!
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Do List</h2>
        </div>
        <p>Press the <code>Enter</code> key to add a new item. </p>
        <p><code>Click</code> on an item's name to edit it.</p>
        <ToDoList />
      </div>
    );
  }
}

// here we are exporting our component
// so that it can be imported in other parts of our application
// this is the ES6 way of exporting modules.
// Alternatively, Node provides CommonJs modules
// that can be imported using the require() syntax
// and exported using the module object, e.g.
// module.exports = App
export default App;

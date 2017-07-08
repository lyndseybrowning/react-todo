import React, { Component } from 'react';
import ToDoList from './Components/ToDoList';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
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

export default App;

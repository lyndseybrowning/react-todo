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
        <p className="App-intro">
          This is an example of a To Do List created using <code>ReactJs</code>.
        </p>
        <ToDoList />
      </div>
    );
  }
}

export default App;

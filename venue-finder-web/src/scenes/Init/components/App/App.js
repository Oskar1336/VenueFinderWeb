import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello, World!</h1>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

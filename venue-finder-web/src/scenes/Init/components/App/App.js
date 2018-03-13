import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import SearchField from '../Search/components/SearchField/SearchField.js'

class App extends Component {
  render() {
    return (
      <div>
        <SearchField/>
      </div>  
    );
  }
}

export default App;

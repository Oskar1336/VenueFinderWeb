import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import ShowListButton from '../SavedList/ShowListButton.js';
import SearchField from '../Search/components/SearchField/SearchField.js'

class App extends Component {
  
  render() {
    return (
      <div className="bmd-layout-container bmd-drawer-f-r bmd-drawer-overlay">        
        <header className="bmd-layout-header">
          <div className="navbar navbar-light">
              VenueFinder
          </div>
        </header>
        <div id="dw-p2" className="bmd-layout-drawer bg-faded">
          <header>
            <a className="navbar-brand">Saved events</a>
          </header>
          <div id="saved-events-container">
          </div>
        </div>
        <main className="bmd-layout-content">
          <div className="container">
              <div>
                <SearchField/>
              </div>
              <ShowListButton />
          </div>
        </main>
      </div>
      
    );
  }
}

export default App;





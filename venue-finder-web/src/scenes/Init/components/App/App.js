import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import VenueInfo from '../EventList/components/EventList.js'

class App extends Component {
  constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
   render() {
      return (
         <div className="container-fluid">
                  {this.state.data.map((person, i) => <VenueInfo key = {i} 
                     data = {person} />)}
         </div>
      );
   }
}

export default App;

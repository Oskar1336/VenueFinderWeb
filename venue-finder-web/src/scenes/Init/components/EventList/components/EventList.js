import React, { Component } from 'react';
import './EventList.css';
import concertPic from './images/concert-image.jpg'
import {searchForEvent} from '../../../../../helpers.js'


export default class VenueContainer extends Component {
	
	render() {
      return (
         <div>
                {this.props.events.map((person, i) => <VenueInfo key = {i} 
                    events = {person} />)}
         </div>
      );
   }
}


class VenueInfo extends React.Component {

	saveEvent(event) {
		var eventList = JSON.parse(localStorage.getItem("LOCALSTORAGE_SAVED_EVENTS"));
		if (eventList == null) {
			eventList = {
				events: []
			};
		}

		if (!searchForEvent(event, eventList.events)) {
			eventList.events.push(event);
			localStorage.setItem("LOCALSTORAGE_SAVED_EVENTS", JSON.stringify(eventList));
		}
	}

	render(){
		return(
			<div className="row">
				<div className="card col-lg-6 offset-lg-3 text-white bg-dark">
				  <img className="card-img-top" id="concertLogo" src={concertPic} alt="Card cap"/>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.events.title}</h5>
				    <p className="card-text">{this.props.events.location}</p>
				    <p className="card-text">{this.props.events.time}</p>
				    <div className="container">
					    <a href={this.props.events.link} target="_blank" className="btn btn-primary">Get tickets</a>
					    <button className="btn btn-danger float-right" onClick={() => this.saveEvent(this.props.events)}>Add to my events</button>
					</div>
				  </div>
				</div>
			</div>
		);
	}
} 
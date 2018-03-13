import React, { Component } from 'react';
import './SavedList.css';

class SavedEventList extends Component {

	renderSavedEvent(event) {
		return (
			<a href={event.link} className="list-group-item list-group-item-action flex-column align-items-start active">
			    <div className="d-flex w-100 justify-content-between">
			      <h5 className="mb-1">{event.title}</h5>
			      <small>{event.time}</small>
			    </div>
			    <small>{event.location}</small>
			  </a>
		);
	}

	render() {
		var events = this.props.events;
		var eventItems = events.map(this.renderSavedEvent);

		return (
			<div className="list-group">
				{eventItems}
			</div>
		);
	}
}

export default SavedEventList;
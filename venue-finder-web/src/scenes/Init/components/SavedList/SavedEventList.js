import React, { Component } from 'react';
import './SavedList.css';

class SavedEventList extends Component {

	renderSavedEvent(event) {
		return (
			<div key={event.title} className="event-container list-group-item list-group-item-action flex-column align-items-start">
				<button type="button" className="btn btn-danger bmd-btn-fab bmd-btn-fab-sm float-right remove-button">
					<i className="glyphicon glyphicon-remove"></i>
				</button>
				<div className="d-flex w-100 justify-content-between">
					<a href={event.link} target="_blank" className="mb-1">{event.title}</a>
				</div>
				<small>{event.location}</small>
				<small className="float-right">{event.time}</small>
				
			</div>
		);
	}

	render() {
		var eventItems = this.props.events.map(this.renderSavedEvent);
		return (
			<div className="list-group">
				{eventItems}
			</div>
		);
	}
}

export default SavedEventList;
import React, { Component } from 'react';
import './SavedList.css';

class SavedEventList extends Component {

	renderSavedEvent(event) {
		return (
			<a key={event.title} href={event.link} target="_blank" className="list-group-item list-group-item-action flex-column align-items-start">
				<div className="d-flex w-100 justify-content-between">
					<p className="mb-1">{event.title}</p>
				</div>
				<small>{event.location}</small>
				<small className="float-right">{event.time}</small>
			</a>
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
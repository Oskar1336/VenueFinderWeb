import React, { Component } from 'react';
import './SavedList.css';
import close from './images/ic_close_black_24dp.png';

class SavedEventList extends Component {

	constructor(props) {
		super(props);
		this.renderSavedEvent = this.renderSavedEvent.bind(this);
	}

	remove(e) {
		this.props.remove(e);
	}

	renderSavedEvent(event) {
		return (
			<div key={event.title} className="event-container list-group-item list-group-item-action flex-column align-items-start">
				<button type="button" onClick={this.remove.bind(this, event)} className="btn btn-danger bmd-btn-fab bmd-btn-fab-sm float-right remove-button">
					<img src={close} className="close-img" alt='S' />
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
		var events = this.props.savedEvents.map(this.renderSavedEvent);

		return (
			<div className="list-group">
				{events}
			</div>
		);
	}
}

export default SavedEventList;


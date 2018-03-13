import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SavedEventList from './SavedEventList.js';
import schedule from './images/ic_date_range_black.png';
import './SavedList.css';

class ShowListButton extends Component {

	showSavedList() {
		var savedEvents = JSON.parse(localStorage.getItem("LOCALSTORAGE_SAVED_EVENTS"));
		if (savedEvents != null) {
			ReactDOM.render(<SavedEventList events={savedEvents} />, document.getElementById('saved-events-container'));
		}
	}

	render() {
		return (
			<div className="fab-button">
				<button type="button" data-toggle="drawer" data-target="#dw-p2" onClick={() => this.showSavedList()} className="btn btn-info bmd-btn-fab">
					<img src={schedule} style={{width: 30+'px'}} alt='S' />
				</button>
			</div>
		);
	}
}

export default ShowListButton;
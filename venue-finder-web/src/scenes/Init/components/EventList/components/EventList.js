import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './EventList.css';
import concertPic from './images/concert-image.jpg'
import {searchForEvent} from '../../../../../helpers.js'
import Alert from '../../Alerts/components/alert.js'


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

	constructor(props){
		super(props);

		this.state = {
			alertProps : {
				alertMessage: '',
				alertVisible : false,
				alertState : ''
			}
		}
	}

	showAlert(){
		var classReference = this;
		let alertProps = {...this.state.alertProps};
		alertProps.alertVisible = true;
		alertProps.alertMessage = 'Added to your event list-->'
		this.setState({
			alertProps
		});

		ReactDOM.render(<Alert alert={this.state.alertProps}/>, document.getElementById("root"));
		console.log("showAlert");

		setTimeout(function(){
			alertProps.alertVisible = false;
			classReference.setState({
				alertProps
			});
		}, 5000);
	}

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
			this.showAlert();
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
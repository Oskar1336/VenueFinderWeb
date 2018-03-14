import React, {Component} from 'react';
import axios from 'axios';
import VenueContainer from '../../../EventList/components/EventList.js';
import './SearchField.css';

export default class SearchField extends Component{
	constructor(props){
		super(props);

		this.state =  {
			city : '',
			venueList: [],
			lat: '',
			lng: '',
			alertProps : {
				message : '',
				alertVisible: false
			}
		};

		this.updateCity = this.updateCity.bind(this);
		this.fetchResults = this.fetchResults.bind(this);
		this.getLatLng = this.getLatLng.bind(this);
		this.showAlert = this.showAlert.bind(this);
	}

	render(){
		return(
			<div>
				<div className = "row">
					<div className="col-lg-6 offset-lg-3">
						<div className="input-group mb-3">
			  				<input type="text" value={this.state.city} onChange= {this.updateCity} id="input-city" className="form-control" placeholder={this.props.hintText} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
			  				<div className="input-group-append">
			    				<button className="btn btn-outline-secondary bg-dark" id="btn-search" onClick={this.getLatLng} type="button">{this.props.btnText}</button>
			  				</div>
						</div>
					</div>		
				</div>
				<VenueContainer showAlert={this.showAlert} events={this.state.venueList}/>
			</div>		
		);
	}

	updateCity(evt){
	 	this.setState({
	 		city : evt.target.value
	 	});
	}

	showAlert(text){
		this.props.showAlert(text);
	}


	getLatLng(){
	 	var that = this;
	 	axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+that.state.city+"&key=AIzaSyD07WnCpgabR945R95UiJp5LMyfvLkQgP4")
	 	.then(function(response){
	 		console.log(response);
	 		if(response.data.results.length !== 0){
		 		that.setState({lat: response.data.results[0].geometry.location.lat,
		 						lng: response.data.results[0].geometry.location.lng});
		 		that.fetchResults();
	 		}else{
	 			that.showAlert("No such city!");
	 		}
	 	})
	 	.catch(function(response){
	 		console.log(response);
	 		that.showAlert("Fetch failed!");
	 	});
	 }

	fetchResults(){
		var that = this;
		axios.get("http://api.songkick.com/api/3.0/events.json?location=geo:"+that.state.lat+","+that.state.lng+"&apikey=zPpYhc36BMCR85fT")
			.then(function(response){
				var eventList = [];
				console.log(response);
				for(var i = 0; i < response.data.resultsPage.results.event.length; i++){
					var event = {
						title: response.data.resultsPage.results.event[i].displayName,
						location: response.data.resultsPage.results.event[i].venue.displayName,
						link: response.data.resultsPage.results.event[i].uri,
						time: response.data.resultsPage.results.event[i].start.time
					};
					eventList.push(event);
				}
				that.setState({
					venueList: eventList
				});
			
			})
			.catch(function(response){
				console.log(response);
				that.showAlert("Fetch failed!");
			});
	}

}

SearchField.defaultProps = {
		hintText: "Choose city",
		btnText: "Search"		
}



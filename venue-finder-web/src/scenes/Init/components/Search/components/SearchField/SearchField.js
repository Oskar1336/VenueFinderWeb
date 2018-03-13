import React, {Component} from 'react';
import axios from 'axios';
import VenueContainer from '../EventList/components/EventList.js';


export default class SearchField extends React.Component{
	constructor(props){
		super(props);

		this.state =  {
			city : '',
			venueList: []
		};

		this.updateCity = this.updateCity.bind(this);
		this.fetchResults = this.fetchResults.bind(this);
	}
	render(){
		return(
			<div>
				<div className = "row">
					<div className="col-lg-6 offset-lg-3">
						<div className="input-group mb-3">
			  				<input type="text" value={this.state.city} onChange= {this.updateCity} className="form-control" placeholder={this.props.hintText} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
			  				<div className="input-group-append">
			    				<button className="btn btn-outline-secondary" onClick={this.fetchResults} type="button">{this.props.btnText}</button>
			  				</div>
						</div>
					</div>	
				</div>
				<VenueContainer events={this.state.venueList}/>
			</div>		
		);
	}

	updateCity(evt){
		this.setState({
			city : evt.target.value,
		});
			
	}

	fetchResults(){
		console.log(this.state.city);
		axios.get("http://api.songkick.com/api/3.0/events.json?location=geo:55.6,13.0&apikey=zPpYhc36BMCR85fT")
			.then(function(response){
				var eventList = [];
				console.log(response);
				for(var i = 0; i < response.resultsPage.results.event.length; i++){
					var event = {
						title: response.resultsPage.results.event[i].displayName,
						location: response.resultsPage.results.event[i].venue.displayName,
						link: response.resultsPage.results.event[i].uri,
						time: response.resultsPage.results.event[i].start.time
					};
					eventList.push(event);
				}
				this.setState({
					venueList: [...this.state.venueList, eventList]
					});

			})
			.catch(function(response){
				console.log(response);
			});
	}

}

SearchField.defaultProps = {
		hintText: "Choose city",
		btnText: "Search"		
}



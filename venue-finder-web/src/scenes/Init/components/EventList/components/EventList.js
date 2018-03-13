import React, { Component } from 'react';
import './EventList.css';



export default class VenueContainer extends React.Component {
	constructor(props){
		super(props);
		console.log(props);
	}
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
	render(){
		return(
			<div className="row">
				<div className="card col-lg-6 offset-lg-3 text-white bg-dark">
				  <img className="card-img-top" src="http://destinationfemme.com/wp-content/uploads/2014/08/Concert-Fixed.jpg" alt="Card image cap"/>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.events.title}</h5>
				    <p className="card-text">{this.props.events.location}</p>
				    <p className="card-text">{this.props.events.time}</p>
				    <div className="container">
					    <a href={this.props.events.link} className="btn btn-primary">Get tickets</a>
					    <a href={this.props.events.link} className="btn btn-danger float-right">Add to my events</a>
					</div>
				  </div>
				</div>
			</div>
		);
	}
} 
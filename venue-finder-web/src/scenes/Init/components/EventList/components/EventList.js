import React, { Component } from 'react';


export default class VenueInfo extends React.Component {
	render(){
		return(
			<div className="row">
				<div className="card col-lg-6 offset-lg-3">
				  <img className="card-img-top" src="http://destinationfemme.com/wp-content/uploads/2014/08/Concert-Fixed.jpg" alt="Card image cap"/>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.data.name}</h5>
				    <p className="card-text">{this.props.data.age}</p>
				    <a href="#" class="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
			</div>
		);
	}
} 
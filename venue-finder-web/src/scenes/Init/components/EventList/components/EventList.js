import React, { Component } from 'react';



export default class VenueContainer extends React.Component {
	render() {
      return (
         <div>
                {this.props.events.map((person, i) => <VenueInfo key = {i} 
                    data = {person} />)}
         </div>
      );
   }
}


class VenueInfo extends React.Component {
	render(){
		return(
			<div className="row">
				<div className="card col-lg-6 offset-lg-3">
				  <img className="card-img-top" src="http://destinationfemme.com/wp-content/uploads/2014/08/Concert-Fixed.jpg" alt="Card image cap"/>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.event.title}</h5>
				    <p className="card-text">{this.props.event.location}</p>
				    <p className="card-text">{this.props.event.time}</p>
				    <a href={this.props.event.link} class="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
			</div>
		);
	}
} 
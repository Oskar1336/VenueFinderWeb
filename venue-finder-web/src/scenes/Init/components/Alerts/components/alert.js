import React, { Component } from 'react';
import './alert.css';

export default class Alert extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
	}

	render(){
		if(this.props.alert.alertVisible){
			return(
				<div className="alert alert-danger " role="alert">
	  				<h2>{this.props.alert.message}</h2>
				</div>
			);
		}
		return null;
	}
}
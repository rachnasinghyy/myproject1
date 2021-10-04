import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class About extends Component{
	render(){
		return(
			<div>
			<h1> this is about us page</h1>
			<br/>
			<NavLink to="/contact">Contact Page</NavLink>

			</div>
		)
	}
}

export default About;
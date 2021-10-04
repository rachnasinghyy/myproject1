import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class Home extends Component{
	render(){
		return(
			<div>
			<h1> this is home page</h1>
			<br/>
			<NavLink to="/about-us">About Page</NavLink>
			<br/>
			<NavLink to="login-page">Login Page</NavLink>
			<br/>
			<NavLink to="/contact">Contact Page</NavLink>
			<br/>
			<NavLink to="/product">Product Page</NavLink>
			<br/>
			<NavLink to="/mail">Mail Page</NavLink>
			</div>
		)
	}
}

export default Home;
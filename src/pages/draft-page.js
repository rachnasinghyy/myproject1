import React,{Component} from 'react';
import axios from "axios";

class Draft extends Component{

	constructor(props){
		super(props);
		this.state = {
		  name : '',
		  job : ''
		}
	  }
	
		onHandleInput = (event) => {
		this.setState({
		  [event.target.name] : event.target.value
		})
	  }
	
		onSubmit(){
			//console.log(this.state)
			const url = "https://reqres.in/api/users/2";
	
			axios.put(url, this.state)
			.then((response) => {
				console.log(response.data)
				alert('Updated the user infromation successfully');
			})
	
			.catch((error) => {
				console.log(error)
			})
		}
	
	 
	
		render(){
			return(
				
				<div>
					<h1>this is a Draft Page</h1>
				
					<div className="bottom-space">
						<label className="lable-Text ">Enter your name :</label>
						<input type="text" placeholder="Please enter a name.." className="input-space" onChange={this.onHandleInput} name="name"/>
					</div>
					<div className="bottom-space">
						<label className="lable-Text ">Enter your Job desc :</label>
						<input type="text" placeholder="Please enter a Job desc.." className="input-space" onChange={this.onHandleInput} name="job"/>
					</div>
					<button onClick={() => this.onSubmit()}>Submit</button>
				</div>
				)
		}
	}
export default Draft;
import React,{Component} from 'react';
import axios from "axios";

class RegisterPage extends Component{

    constructor(props){
        super(props);
        this.state= {
            first_name:"",
            last_name : "",
            email_id : "",
            password : "",
            gender : "",
            dob : "",
            address : "",
            city : "",
            invisible :true,
            showPassword : false

        }

    }

 onHandleInput =(event) =>{
     this.setState({
         [event.target.name] : event.target.value
     })

 }

 onSubmit() {
     console.log(this.state)
 } 

showImage(){
    this.setState({
    invisible : true
    })
}

hideImage(){
    this.setState({
    invisible :false
    })
}

showOrHideImage(){
    this.setState({
        invisible : !this.state.invisible
    })
}

hideShowPassword(status){
    this.setState({
        showPassword : status
    })
}
	

 

	render(){
        let student_name = "rachna singh";
		return(
            
			
			<div>
				<h1>Register Page</h1>

                <button onClick={() => this.showImage()}>Show Image</button>
                <button onClick={() => this.hideImage()}>Hide Image</button>
                <button onClick={() => this.showOrHideImage()}>Show or Hide Image</button>

                {this.state.invisible && <div>
                    <img src={require("../images/download.jpg").default} className="car-img" />
                </div>}
			
				<div className="bottom-space">
					<label className="lable-Text ">Enter First name :</label>
					<input type="text" placeholder="Please enter your first name.." className="input-space" onChange={this.onHandleInput} name="first_name"/>
				</div>

                <div className="bottom-space">
					<label className="lable-Text ">Enter Last name :</label>
					<input type="text" placeholder="Please enter your last name.." className="input-space"onChange={this.onHandleInput} name="last_name"/>
				</div>

				<div className="bottom-space">
					<label className="lable-Text ">Enter Email Id :</label>
					<input type="text" placeholder="Please enter your email id.." className="input-space" onChange={this.onHandleInput} name="email_id" />
				</div>

                <div className="bottom-space icon-align">
					<label className="lable-Text ">Enter your Password :</label>
					<input type={this.state.showPassword ? "text": "password"} placeholder="Please enter your email id.." className="input-space" onChange={this.onHandleInput} name="password" />

                    {this.state.showPassword ?
                    <img src={require("../images/open_eye.png").default} className="icon" onClick={()=>this.hideShowPassword(false)}/>
                     :
                    <img src={require("../images/close_eye.png").default} className="icon" onClick={()=>this.hideShowPassword(true)}/>
                    }
				</div>

                <div className="bottom-space">
                <label className="lable-Text ">Select your Gender :</label> 
                <input className="font" type="radio" name="gender" onChange={this.onHandleInput} value="Male"/>Male
                <input className="font" type="radio" name="gender" onChange={this.onHandleInput} value="female"/>Female
                <input className="font" type="radio" name="gender" onChange={this.onHandleInput} value="others"/>Others
                </div>

                <div className="bottom-space">
                <label className="lable-Text ">Select your DOB :</label> 
                <input type="date" className="input-space" onChange={this.onHandleInput} name="dob" />
                </div>

                <div className="bottom-space center-text">
                <label className="lable-Text ">Enter your Address :</label> 
                <textarea className="input-space" placeholder="Please enter your address.." onChange={this.onHandleInput} name="address"></textarea>
                
                </div>

                <div className="bottom-space center-text ">
                <label className="lable-Text ">Select your City :</label> 
                <select className="input-space" onChange={this.onHandleInput} name="city" >
                    <option>Please select any city</option>
                    <option>Agra</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Pune</option>
                </select>
                </div>

                <div>
                    <button className="create-btn" onClick={()=>this.onSubmit()}>Create Account</button>
                </div>
                <h1>the student name is {student_name}</h1>
                <h1>the student name is {this.state.first_name}</h1>


				
			</div>
			)
	}
}

export default RegisterPage;
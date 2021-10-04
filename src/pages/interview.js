import React, {Component} from "react";
import axios from "axios";

class Interview extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            firstname : "",
            lastname : "",
            emailid : "",
            address1 : "",
            address2 : ""
        }
    }

    onHandleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit(){
        console.log(this.state)
       
    }

    render(){
        return(
            <div className="container">
                <div className="small-conatiner">
                <h1>Create a new Account</h1>

                <div className="box-1">
                    <div className="box-small">
                        <label className="lable-Text1">First Name :</label>
                        <input type="text" placeholder="Enter first name" className="input-space1" onChange={this.onHandleInput } name="firstname" />
                    </div>
                    <div className="box-small">
                        <label className="lable-Text1">Last Name :</label>
                        <input type="text" placeholder="Enter first name"  className="input-space1" onChange={this.onHandleInput } name="lastname" />
                    </div>
                </div>

                <div className="box-1">
                    <label className="lable-Text1">Email Id :</label>
                <input type="text" placeholder="Enter last name" className="input-space2" onChange={this.onHandleInput } name="emailid" />
                </div>

                <p>Address</p>
                <div className="box-1">
                    <div className="box-small">
                        <label className="lable-Text1">Address 1 :</label>
                        <input type="text" placeholder="Enter address 1" className="input-space1" onChange={this.onHandleInput } name="address1" />
                    </div>
                    <div className="box-small">
                        <label className="lable-Text1">Address 2 :</label>
                        <input type="text" placeholder="Enter address 2" className="input-space1" onChange={this.onHandleInput } name="address2" />
                    </div>
                </div>

                <div>
                    <button onClick={() => this.onSubmit()} className="butt" >Create Account</button>
                </div>
                </div>

                


            
            </div>
        )
    }
}

export default Interview;
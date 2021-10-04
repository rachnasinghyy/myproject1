class LoginPage extends Component{

	constructor(props){
    	super(props);
    	this.state = {
    		email : '',
    		password : ''
      
    }

  }

  handleInput = (event) => {
  	/*console.log(event.target.value,event.target.name)*/
  	this.setState({
  			[event.target.value] :event.target.name
  		});
  		
  	}


  displayLogin(){
    console.log(this.state)
  }

  

	render(){
		return(
		<div>
				<h1 className="heading">Welcome to Login Page</h1>
			<div className="bottem-space">
        		<label className="lable-text">Enter your Email Id :</label>
        		<input type="text" placeholder="Please enter your email id" className="input-space" onChange={this.handleInput} name="email"/>
      		</div>

      		<div className="bottem-space">
       			<label className="lable-text">Enter your Password :</label>
        		<input type="Password" placeholder="Please enter your password" className="input-space" onChange={this.handleInput} name="password"/>
      		</div>

      		<div className="bottem-space">
      			<button onClick={() => this.displayLogin()}>Login</button>
      		</div>

      		<div>
          		<h2>The typed email is - {this.state.email}</h2>
          		<h2>The typed password is - {this.state.password}</h2>
        	</div>
      	</div>
      		)
		}

	}

export default LoginPage;

cclass App extends Component{

  constructor(props){
    super(props);
    this.state = {
      message :"tHis is a state message"
    }

  }
  
  display(){
    this.setState({
      message :"hello,Welcome to react js" 
    })
  }

  render(){
    return(
      <div>
        <h1>Hello! Welcome to React Learning</h1>
        <h1>Tutorial by Karthick</h1>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.display()}>Run the function</button>

      </div>
    )
  }

}

export default App;






/*class App extends Component{
  render(){
    render(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about-us" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/product" Component={Product}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;*/

import LoginPage from './login-page';

 <div className="main-content">
        <div className="header"></div>
        <div className="body">
          <div className="sidebar"></div>
          <div className="content">
            <div className="pages">
              {/* Here Page */}
              <Switch>
                <Route path="/mail/inbox" component={Inbox}></Route>
                <Route path="/mail/sent" component={Sent}></Route>
                <Route path="/mail/trash" component={Trash}></Route>
                <Route path="/mail/draft" component={Draft}></Route>
              </Switch>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>


import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import Product from './pages/product';
import LoginPage from './login-page';
import Mail from "./pages/mail";
import Interview from "./pages/interview";
import RegisterPage from "./pages/register";


class App extends Component{

  render(){
    return(

       <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login-page" component={LoginPage}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/mail" component={Mail}></Route>
          <Route path="/interview" component={Interview}></Route>
          <Route path="/signin" component={RegisterPage}></Route>
        </Switch>
      </BrowserRouter> 


//       <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// </>
      
    )
  }

}

export default App;
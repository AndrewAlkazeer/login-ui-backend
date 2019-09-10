import React, { Component } from 'react';
import Background from './images/Login-Background.png';
import './App.css';
import Login from './Components/login';
import Signup from './Components/signup';
import Home from './Components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
constructor(){
super();

this.state = {
  user: []
}
}

  render(){
  return (
    <Router>
    <Route exact path = "/" render={props => (
  <body className="app-body">
    <Link className = "signup" to="/signup">REGISTER</Link>
    
    <div className="Login-Comp">
    <Login />

    </div>
  
    </body>
    )}
    
    />
    <Route path="/signup" component={Signup} />
    <Route path="/home" component={Home} />
    </Router>
  );
}
}
export default App;

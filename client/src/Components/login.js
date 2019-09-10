import React, { Component } from 'react'
import './login.css';
import Avatar from '../images/avatar.svg';

export class Login extends Component {
    constructor(){
        super();

        this.state = {
            user: '',
            userChange: '',
            passwordChange: ''
        }
    }
/*
handleSubmit = (e) => {
    e.preventDefault();
this.setState({user: this.state.userChange});
}

handleChange = (e) => {
    this.setState({[e.target.username]: e.target.value})
}
*/
    render() {
        return (
            <div className="container login-cont">
            <div className="row">
                <img className="col-lg-5 col-md-5 col-sm-5 col-5 login-avatar" src={Avatar} />
                </div>
                <div class = "row">
                <h1 className="welcome">WELCOME</h1>
                </div>
            <form action="/api/login" method="POST">
                <div className="row">
                <label htmlFor="inputUsername" className="label-1"><span className="glyphicon glyphicon-user span-1"></span><input id="inputUsername" className="input-1" type="text" placeholder="Username" name="username" required/></label>
                <label htmlFor="inputPassword" className="label-2"><span className="glyphicon glyphicon-lock span-2"></span><input id="inputPassword" className="input-2" type="password" placeholder="Password" name="password" required/></label>
                </div>

                <div className="row">
                <a href="#" className="forgot">Forgot Password?</a>
                </div>

                <div className="row">
                <button type="submit" className="login">LOGIN</button>
                </div>
            </form>
            </div>
        )
    }
}

export default Login;

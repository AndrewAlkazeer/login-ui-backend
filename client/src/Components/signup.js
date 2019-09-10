import React, { Component } from 'react'
import './signup.css';
import Avatar from '../images/avatar.svg';
import { Link } from 'react-router-dom';

export class Signup extends Component {
    render() {
        return (
            <body className="signup-body">
            <Link to = "/" className="signup">LOGIN</Link>
            <div className="container cont">
            <div className="row">
                <img className="col-lg-5 col-md-5 col-sm-5 col-5 signup-avatar" src={Avatar} />
                </div>
                <div className = "row">
                <h1 className="welcome">REGISTER</h1>
                </div>
            <form action="/api/signup" method="POST" className="signup-form">
                <div className="row">
                <label htmlFor="inputUsername" className="label-1"><span className="glyphicon glyphicon-user span-1"></span><input id="inputUsername" className="input-1" type="text" placeholder="Username" name="username" required/></label>
                <label htmlFor="inputPassword" className="label-2"><span className="glyphicon glyphicon-lock span-2"></span><input id="inputPassword" className="input-2" type="password" placeholder="Password" name="password" required/></label>
                <label htmlFor="inputEmail" className="label-3"><span className="glyphicon glyphicon-envelope span-3"></span><input id="inputEmail" className="input-3" type="email" placeholder="Email" name="email" required/></label>
                </div>

                <div className="row">
                <a href="#" className="forgot">Forgot Password?</a>
                </div>

                <div className="row signup-row-button">
                <button type="submit" className="login">REGISTER</button>
                </div>
            </form>
            </div>
            </body>
        )
    }
}

export default Signup;

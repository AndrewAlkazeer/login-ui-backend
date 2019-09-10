import React, { Component } from 'react'
import './home.css';
import Avatar from '../images/avatar.svg';
import axios from 'axios';
import Posts from './posts';

export class Home extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            messages: [],
            users: []
        }
    }
    
    componentDidMount = () => {
        axios.post('/posts').then(db => {
            this.setState({messages: db.data})
        });

        axios.post('/users').then(db => {
            this.setState({users: db.data})
        });
    }

    render() {

const users = this.state.users.map(props => {
    return (
        <h4><img src={Avatar} className="home-users-avatar"/>{props.Username}</h4>
    )
})

        return (
            <body className="home-body">
            <div className="navv">
            <img src={Avatar} alt="avatar" className="avatarr" />
            <p className="home-p">you are logged in as {this.props.user}</p>
            </div>

            <div className="container home-cont">
<form action="/posts" method="POST">
            <div className="row home-row">

             <input className="home-input col-lg-8" type="text" placeholder="Enter Message" name="message" required/>

             <button className="col-lg home-button-div" type="submit">POST</button>

            </div>
</form>
            <div className="row">
<div className="container home-contt">
            <div className="row home-row-div">
            <div className="col-lg-8 mt-5 home-div">
            <Posts messages={this.state.messages} />
            </div>
            </div>
</div>
            </div>
            </div>
           
            <div className="home-div-users">
            <h3>Registered Users</h3>
            {users}
            </div>
            
            
            
            </body>
        )
    }
}

export default Home;

import React, { Component } from 'react'
import './posts.css';

export class Posts extends Component {
    
    render() {

      
        
        const msg = this.props.messages.map(props => {
            
            return (
           <h4>
           {props.Message}
           </h4>
            )
        });
   
// console.log(msg)

    return (
        <div className="col-lg-12 col-md-9 col-sm-9 col-8 posts-div">
        {msg}
        </div>
    )

    }
}

export default Posts;

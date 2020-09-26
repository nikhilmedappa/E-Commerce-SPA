import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

class Signin extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handlePassChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleUserChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  
  render() {
    const { username, password } = this.state;
    const { handleSignin } = this.props;
    return (
      <div className="signin-wrapper">
        <div  className="signin-container">
          <input id="username" onChange={this.handleUserChange} placeholder="Username/ Email" />

          <input type="password" id="password" onChange={this.handlePassChange} placeholder="Password"/>

          <button id="signinn-btn" onClick={() => handleSignin(username, password)}>Signin</button>  
        </div>

        <hr></hr>

        <span id="signup-desc">New to Balenciaga?</span>

        <button id="signupp-btn"><Link to="/signup"style={{ textDecoration: 'none' }}>Signup</Link></button> 
      </div>
      
    );
  }
}

export default Signin;

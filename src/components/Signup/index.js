import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

class Signup extends React.Component {
  state = {
    username: "",
    emailid: "",
    password: "",
    repassword: "",
  };

  handleUserChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleEmailidChange = event => {
    this.setState({
      emailid: event.target.value
    });
  };

  handlePassChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleRePassChange = event => {
    this.setState({
      repassword: event.target.value
    });
  };

  render() {
    const { username, emailid, password, repassword } = this.state;
    const { handleSignup } = this.props;
    return (
      <div className="signup-wrapper">
        <div className="signup-container">
          <input id="username" onChange={this.handleUserChange} placeholder="Username" />

          <input id="emailid" onChange={this.handleEmailidChange} placeholder="Email" />

          <input type="password" id="password" onChange={this.handlePassChange} placeholder="Password"/>

          <input type="password" id="repassword" onChange={this.handlePassChange} placeholder="Re enter - Password"/>

          <button id="signup-btn" onClick={() => handleSignup(username, emailid, password, repassword)}>Signup</button>  
        </div>

        <hr></hr>

        <span id="signup-desc">Already have an account</span>

        <button id="signin-btn"><Link to="/signin"style={{ textDecoration: 'none' }}>Signin</Link></button> 
      </div>
      
    );
  }
}

export default Signup;

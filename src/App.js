import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Collection from './components/Collection'
import Signin from './components/SignIn'
import Signup from './components/Signup'
import ProductList from './components/ProductList'
import { BrowserRouter, Route, Redirect } from "react-router-dom";


class App extends React.Component {
  state = {
    isLoggedin: false,
    user: null,
    cart: []
  };

  handleSignin = (username, password) => {
    // const username = document.getElementById("username").value;
    // const password = document.getElementById("password").value;
    if (username === "soal" && password === "soal") {
      // this.state.isLoggedin = false;
      // // not recommended
      // this.forceUpdate();
      this.setState({
        isLoggedin: true,
        user: username
      });
      console.log("Login success..!");
    } else {
      console.error("Login failed..!");
    }
  };

  handleAddToCart(product) {
    console.log("clicked", product)
  }

  render() {
    const { isLoggedin, user } = this.state;
    return (
      <div className="App">

        <BrowserRouter>
          <Navigation isLoggedin = {isLoggedin} />
          <Route
            exact
            path="/"
            render={props => {
              if (isLoggedin) {
                return <Collection {...props} name={user} />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          />
          <Route exact path="/collection" component={Collection}/>
          <Route 
            exact 
            path="/collection/forhim" 
            render={props => {
              return (<ProductList 
                {...props}
                addToCart={this.handleAddToCart}
                />)
            }}
            component={ProductList}/>
          <Route exact path="/collection/forher" component={ProductList}/>
          <Route
            exact
            path="/signin"
            render={props => {
              if (isLoggedin) {
                return <Redirect to="/" />;
              } else {
                return (
                  <Signin
                    {...props}
                    handleSignin={this.handleSignin}
                    isLoggedin={isLoggedin}
                  />
                );
              }
            }}
          />
          
          
          
        </BrowserRouter>
        
      </div>
    );
  }
  
}

export default App;

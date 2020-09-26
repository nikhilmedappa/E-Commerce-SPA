import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import './style.css';
import SearchBox from '../SearchBox/SearchBox'
import makeExpanding from '../SearchBox/expanding-animation'
import { Link } from "react-router-dom"



injectTapEventPlugin();

const ExpandingSearchBox = makeExpanding(SearchBox);

const Nav = props => {

  console.log(props)
  return (
    <div className="Nav">
      <div className="logo">
        <h4><Link to="/" style={{ textDecoration: 'none' }}>BALENCIAGA</Link></h4>
      </div>

      <ul className="nav-list">
        <li>
          <button id="collectionbtn">
            <Link to="/collection" style={{ textDecoration: 'none' }}>Collection</Link>
          </button> 
        </li>

        <li>
          <div id="search-box">
            <MuiThemeProvider>
              <ExpandingSearchBox />
            </MuiThemeProvider>
          </div>
        </li>

        <li>
          {props.isloggedin ? (
          <button id="signinbtn">
            <Link to="/" style={{ textDecoration: 'none' }}>Log Out</Link>
          </button>
          ) : (
          <button id="signinbtn">
            <Link to="/signin" style={{ textDecoration: 'none' }}>Sign In</Link>
          </button>
          )}
        </li>

        <li>  
          <button id="shoppingcart">
            <Link to="/shoppingcart" style={{ textDecoration: 'none' }}>
              <svg className="bi bi-cart3" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </Link>
          </button>  
        </li>
      </ul>
    </div>
  );
}

export default Nav;

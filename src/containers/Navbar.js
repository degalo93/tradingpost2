import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Navbar extends Component {


  render() {
      
    return (
      <nav className="nav-wrapper cyan darken-3">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="navbar-brand">
              <img src=" " alt="Trading-Post" />
            </Link>
         
          <ul className="right">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
          </div>
     {/*      <ul className = "sidenav grey darken-3"> 
          <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul> */}
         
        </div>
      </nav>
    );
 }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";


class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
      
    return (
      <div>
      <nav className="nav-wrapper cyan darken-3">
             <Link to="/" className="brand-logo">
              <img src=" " alt="Trading-Post" />
            </Link>
            {this.props.currentUser.isAuthenticated ? (
            <ul className="right">
              <li>
                <Link to={`/api/users/${this.props.currentUser.user._id}`}>
                  Your Profile
                </Link>
              </li>
              <li>
                <a onClick={this.logout}>Log out</a>
              </li>
            </ul>
          ) : (
          <ul className="right">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
          )}
      </nav>
      </div>
    );
 }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);

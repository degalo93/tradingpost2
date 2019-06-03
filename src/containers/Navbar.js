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
          <ul className="left">
            <li>
              <Link to="/" className="nav-pic-link">
                <img className="nav-pic" src="/Logo.png" alt="Trading-Post" />
              </Link>
            </li>
            <li>
              <Link to="/" className="tp-link">
              <span className="navbar-title inline-flex">Trading Post</span>
              </Link>
            </li>
          </ul>
          {this.props.currentUser.isAuthenticated ? (
            <ul className="right">
              <li>
                {/*  <Link to={`/api/users/${this.props.currentUser.user._id}`}> */}
                <Link
                  className="inline-flex"
                  to={`/profile/${this.props.currentUser.user._id}`}
                >
                  <i className="material-icons prefix navbar-icon">account_circle</i>
                  Profile
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

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

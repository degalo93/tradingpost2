import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout} from "../store/actions/auth";

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
      };

  render() {
      
    return (
      <nav className="nav-wrapper cyan darken-3">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="navbar-brand">
              <img src=" " alt="Trading-Post" />
            </Link>
         {this.props.currentUser.isAuthenticated ? ( 
             <ul className="right">
             <li>
               <Link to={`/profile${this.props.currentUser.user.id}/profile/new`} >Profile</Link> 
             </li>
             <li>
             <a onClick={this.logout}>Log out</a>
             </li>
           </ul>
          
         ): (
          <ul className="right">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
          
         )}
         </div>
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

export default connect(mapStateToProps, { logout })(Navbar);

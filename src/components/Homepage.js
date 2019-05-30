import React from "react";
import { Link } from "react-router-dom";


const Homepage = ({currentUser }) => {
 
    if (!currentUser.isAuthenticated ){
     return (
      <div className="home-landing">
        <h1>Trading Post</h1>
        <h4> An App that is used to help people trade with one another without using money </h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
     );
    }
  return (
    <div> <h1> Search for items </h1></div>
  );
 
  };

export default Homepage;

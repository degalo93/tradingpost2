import React from "react";
import { Link } from "react-router-dom";


const Homepage = ({currentUser}) => {
 
  if(!currentUser.isAuthenticated) { 
    return (
      <div className="home-landing">
        <h1>Trading Post</h1>
        <h4> An App that is used to help people trade with one another without using money </h4>
        <Link to="/search" className="btn btn-primary">
          Enter Site
        </Link>
      </div>
      );
    } 
    return (
      <div>
        <h1>YOU MADE IT!</h1>
      </div>
    );
};

export default Homepage;

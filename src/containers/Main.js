import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth"; 
import { removeError } from "../store/actions/errors";
import Landing from "../pages/landing";
import Profile from "../pages/profile";
import UpdateItem from "../pages/updateitem";
import PostItem from "../pages/postitem";
import ItemPage from "../pages/item"
 
const Main = props => {
  const { authUser, errors, removeError, currentUser } = props; 
  return (
    <div className="container">
      <Switch>
        <Route exact path="/tradingpost2" render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route exact path="/search" render={props => <Landing currentUser={currentUser} {...props} />} />
        <Route path="/profile/:id" render={props => <Profile currentUser={currentUser} {...props} />} />
        <Route exact path="/postitem/:id" component={PostItem} />
        <Route exact path="/updateitem/:userid/:itemid" component={UpdateItem} />
        <Route exact path="/item/:userid/:itemid" render={props => <ItemPage currentUser={currentUser} {...props} />} />
         <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser} 
                buttonText="Log in"
                heading="Welcome Back."
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Join Trading Post"
                {...props}
              />
            );
          }}
        /> 
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter( connect(mapStateToProps, { authUser, removeError })(Main));

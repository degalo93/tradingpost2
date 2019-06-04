//import React from 'react'
import React, { Component } from "react";
import { ProfileTop, List } from "../components/ProfileCard";
import { Row } from "../components/Grid";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Homepage from "../components/Homepage";
import Landing from "./landing";

class Profile extends Component {
  state = {
    _id: "",
    isLoaded: false,
    error: null,
    firstName: "",
    lastName: "",
    userName: "",
    city: "",
    state: "",
    phone: "",
    bio: "",
    profilePic: "https://www.sccpre.cat/mypng/detail/26-268559_profile-picture-placeholder-round.png",
    items: [],
    wishlist: [],
    searchTerm: "",
    pg: "Profile",
    redirect: false,
    categories: [
      "General",
      "Books",
      "Electronics",
      "Jewerly",
      "Tools",
      "Clothing",
      "Furniture",
      "Games",
      "Sports Equipment",
      "Appliances"
    ]
  };

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    let path = "/postitem/" + this.state._id;
    if (this.state.redirect) {
      return <Redirect to={path} />;
    }
  };

  //method to redirect to postitem page on 'Add Item' button click
  routeChangeAddItem = () => {
    console.log("id " + this.state._id);
    let path = "/postitem/" + this.state._id;
    this.props.history.push(path);
  };

  //we will get iser id in the props passed to this method
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("id " + id);
    this.setState._id = id;
    this.loadUser(id);
    
  }

  loadUser = id => {
    API.getUserInfo(id).then(
      res => {
        let pic = res.data.profilePic ? res.data.profilePic : "https://www.sccpre.cat/mypng/detail/26-268559_profile-picture-placeholder-round.png";
        this.setState({
          isLoaded: true,
          error: null,
          _id: res.data._id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          userName: res.data.userName,
          city: res.data.city,
          state: res.data.state,
          phone: res.data.phone,
          items: res.data.items,
          wishlist: res.data.wishlist,
          searchterm: res.data.searchTerm,
          bio: res.data.bio,
          profilePic: pic 
        });
      },
      error => {
        this.setState({ isLoaded: true, error });
      }
    );
    
  };

  //method to delete an item
  deleteUserItem = (userId, itemId) => {
    API.deleteItem(userId, itemId).then(res => {
      console.log("Item deleted");
      this.loadUser(this.state._id);
    });
  };

  //method to update an item
  updateUserItem = (userId, itemId) => {
    console.log("To update Item");
    let path = "/updateitem/" + this.state._id + "/" + itemId;
    this.props.history.push("/updateitem/" + this.state._id + "/" + itemId);
  };

  routeChangeAddItem = () => {
    console.log("id " + this.state._id);
    this.props.history.push("/postitem/" + this.state._id);
  };

  render() {
    if (this.props.currentUser.isAuthenticated) {
      return (
        <div>
          <br />
          <div className="row">
            <div className="container">
              <div className="profile-pic-div">
              <div className="col s4">
                <img
                  src={this.state.profilePic}
                  
                  className="circle profile-pic responsive-img z-depth-4 "
                  alt="Profile Pic"
                />
              </div>
              </div>
              <div className="col s7 offset-s1">
                <h3 className="left-align inline-flex">
                  {this.state.userName}
                </h3>
                <button
                className="waves-effect waves-light btn-small inline-flex right post-btn"
                style={{ fontSize: 9 }}
                onClick={this.routeChangeAddItem}
              >
                Add Item
              </button>
                <hr />

                <p>{this.state.description}</p>
              </div>
            </div>
          </div>
          <Row>
            <List
              listTitle="Posts"
              userId={this.state._id}
              deleteUserItem={this.deleteUserItem}
              updateUserItem={this.updateUserItem}
              items={this.state.items}
            />
            <List
              listTitle="Wishlist"
              userId={this.state._id}
              items={this.state.wishlist}
            />
          </Row>
        </div>
      );
    } else {
      {
        this.props.history.push("/");
      }
      return <Landing />;
    }
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
)(Profile);

//export default Profile;

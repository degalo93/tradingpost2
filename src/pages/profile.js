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
        let pic = res.data.profilePic ? res.data.profilePic : "data:image/png;base64,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";
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

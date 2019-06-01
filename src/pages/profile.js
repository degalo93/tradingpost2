//import React from 'react'
import React, { Component } from "react";
import { ProfileTop, List } from '../components/ProfileCard';
import { Row } from '../components/Grid';
import API from "../utils/API";
import { Redirect } from 'react-router-dom';



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
        profilePic: "",
        items: [],
        wishlist: [],
        searchTerm: "",
        pg: "Profile",
        redirect: false,
        categories: ['General', 'Books', 'Electronics', 'Jewerly', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        let path = '/postitem/' + this.state._id;
        if (this.state.redirect) {
            return <Redirect to={path} />
        }
    }

    //method to redirect to postitem page on 'Add Item' button click
    routeChangeAddItem = () => {
        console.log("id " + this.state._id);
        let path = "/postitem/" + this.state._id;
        this.props.history.push(path);
    }

    //we will get iser id in the props passed to this method
    componentDidMount() {
        const { id } = this.props.match.params
        console.log("id " + id);
        this.setState._id = id;
        this.loadUser(id);
        //this.loadUser(id, (id) => { this.setState._id = id }); ???

    }

    loadUser = (id) => {
        API.getUserInfo(id)
            .then(
                res => {
                    console.log(res.data)
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
                        profilePic: res.data.profilePic
                    })

                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
        //.catch(err => console.log(err));
    };

    //method to delete an item 
    deleteUserItem = (userId, itemId) => {
        API.deleteItem(userId, itemId).then(res => {
            console.log("Item deleted");
            this.loadUser(this.state._id);                 
        })
    }

    //method to update an item 
    updateUserItem = (userId, itemId) => { 
            console.log("To update Item");
            let path = "/updateitem/" + this.state._id + "/" + itemId;
            console.log(path);
            this.props.history.push("/updateitem/" + this.state._id + "/" + itemId);
            //return <Redirect to={path}/>               
    }
    


    routeChangeAddItem = () => {
        console.log("id " + this.state._id);
        this.props.history.push("/postitem/" + this.state._id);
    }

    render() {
        /* console.log(this.state) */

            return (
                <div>

                    <br />

                    <ProfileTop
                        image={this.state.profilePic}
                        username={this.state.userName}
                        description={this.state.bio} />
                    <Row>
                        <div className="col s6">
                        </div>
                        <div className="col s6">
                            <button className="waves-effect waves-light btn-small" style={{fontSize: 9}} onClick={this.routeChangeAddItem}>Add Item</button>
                            {/*  {this.renderRedirect()}
                            <button className="waves-effect waves-light btn-small" style={{ fontSize: 10 }} onClick={this.setRedirect}>Add Item</button>  */}
                        </div>
                    </Row>

                    <Row>
                        <List
                            listTitle="Posts"
                            userId={this.state._id}
                            deleteUserItem={this.deleteUserItem}
                            updateUserItem={this.updateUserItem}
                            items={
                                this.state.items
                            }

                        />
                        <List
                            listTitle="Wishlist"
                            userId={this.state._id}
                            items={
                                this.state.wishlist
                            }

                        />
                    </Row>
                </div>
            )       
    }

}

export default Profile;
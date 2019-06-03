import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'
import API from "../utils/API"
import { isTSTypeParameterDeclaration } from '@babel/types';




class ItemPage extends Component {

    state = {
        //id: "",
        picture: "",
        title: "",
        description: "",
        condition: "",
        //ownerID: "",
        email: "",
        nick: "",
        currentUser: null

    };
 
   

    componentDidMount() {
        const { userid, itemid } = this.props.match.params;
        const {description, nick, title, condition, picture, email, currentUser } = this.props.location.state;
        this.setState({
            description,
            nick,
            title,
            condition,
            picture,
            email,
            currentUser

        });
       
        //this.getItem( userid, itemid );

    }

/*     getItem = (userId, itemId) => {
        API.updateItem(userId, itemId)
            .then(
                res => {
                    console.log(res.data)
                    this.setState({
                        id: res.data._id,
                        picture: res.data.picture,
                        title: res.data.title,
                        description: res.data.description,
                        condition: res.data.condition
                    })

                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
    }; */



    render() {

        return (
            <ItemCard
                picture={this.state.picture}
                title={this.state.title}
                description={this.state.description}
                condition={this.state.condition}
                currentUser = {this.state.currentUser}
                ownerEmail={this.state.email} />
        )
    }


}


export default ItemPage
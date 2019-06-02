import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'
import API from "../utils/API"
import { isTSTypeParameterDeclaration } from '@babel/types';




class ItemPage extends Component {
    state = {
        id: "",
        picture: "",
        title: "",
        description: "",
        condition: "",
        ownerID: "",
        ownerEmail: ""
    }

    componentDidMount() {
        const { userid, itemid } = this.props.match.params;
        console.log(`userid: ${userid} itemid ${itemid}`);
        this.getItem( userid, itemid );

    }

    getItem = (userId, itemId) => {
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
        //.catch(err => console.log(err));
    };



    render() {
        return (
            <ItemCard
                picture={this.state.picture}
                title={this.state.title}
                description={this.state.description}
                condition={this.state.condition}
                ownerEmail={this.state.ownerEmail} />
        )
    }


}


export default ItemPage
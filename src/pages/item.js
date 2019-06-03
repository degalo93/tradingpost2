import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'
import API from "../utils/API"
import { isTSTypeParameterDeclaration } from '@babel/types';




class ItemPage extends Component {

   /*  constructor (props) {
        //super(props); */
    state = {
        id: "",
        picture: "",
        title: "",
        description: "",
        condition: "",
        ownerID: "",
        ownerEmail: "",
        nick: ""
    };
 //}
   

    componentDidMount() {
        const { userid, itemid } = this.props.match.params;
        console.log(`userid: ${userid} itemid ${itemid}`);
        const {description, nick, title, condition, picture, email } = this.props.location.state;
        console.log("20 "  + this.props.location.state.nick);
        console.log("21 "  + this.props.location.state.description);
        console.log("22 "  + this.props.location.key);
        console.log("23 "  + this.props.location.state.title);
        console.log("24 "  + this.props.location.state.condition);
        console.log("25 "  + this.props.location.state.picture);
        this.setState({
            description,
            nick,
            title,
            condition,
            picture,
            email
        });
       
        //this.getItem( userid, itemid );

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
        //const { nick, description} = this.props;
        //console.log(this.props.location.state.description);
        //console.log( "inside item nick " + nick + " description " + description );

        return (
            <ItemCard
                picture={this.state.picture}
                title={this.state.title}
                description={this.state.description}
                condition={this.state.condition}
                ownerEmail={this.state.email} />
        )
    }


}


export default ItemPage
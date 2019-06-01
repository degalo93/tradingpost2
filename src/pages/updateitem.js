import React, { Component } from "react";
import { Container } from '../components/Grid';
import API from "../utils/API";


class UpdateItem extends Component {

  state = {
    userId: "",
    _id: "",
    title: "",
    picture: "",
    description: "",
    selectedCategory: "General",
    condition: "",
    //redirect: false,
    categories: ['General', 'Books', 'Electronics', 'Jewelry', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
  };

  componentDidMount() {
    const { userid, itemid } = this.props.match.params
    console.log("id " + userid + " itemId  " + itemid);
    this.setState({ _id: itemid , userId: userid});
    this.loadItemInfo(userid, itemid);
  }

  loadItemInfo = (userid, itemid) => {
    API.updateItem(userid, itemid)
      .then(
        res => {
          console.log(res.data)
          this.setState({
            //_id was set in the State already
            title: res.data.title,
            picture: res.data.picture,
            description: res.data.description,
            condition: res.data.condition,
            category: res.data.category,
            _owner: res.data._owner,
            isLoaded: true
          })
        },
        error => {
          this.setState({ isLoaded: true, error });
        }
      )
    //.catch(err => console.log(err));
  };


  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //form submit event handler
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.selectedCategory);
    /* let path = "/trading-post/profile/" + sessionStorage.getItem("UserId");
    console.log("path: " + path); */
    API.updateExistingItem(this.state.userId, this.state._id,
      {
        title: this.state.title,
        picture: this.state.picture.length === 0 ? "https://www.pluggedin.com/images/content-image/placeholder_book.jpg" : this.state.picture,
        description: this.state.description,
        condition: this.state.condition
      })
      .then(res => {
        console.log("The item was updated " + res.data);
        this.props.history.push(`/profile/${this.state.userId}`);
        //this.renderRedirect(); 
        //add later redirect to the profile page if the item was added sucessfully
        //this.setState({ returnedItems: res.data, searchTerm: "" });     5ccf460d1cae0a3028fe84fd
      })
  }


  render() {
    return (
      <Container>
        <form>
          <div className="formCont">
            <h3>Update your Item</h3>
            <div className="row">
              <div className="input-field col s2">
                <label for="title">Title:</label>
              </div>
              <div className="input-field col s10">
                <input id="title" type="text"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title" required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s2">
                <label for="Description">Description:</label>
              </div>
              <div className="input-field col s10">
                <input id="Description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s2">
                <label for="Condition">Condition:</label>
              </div>
              <div className="input-field col s10">
                <input id="Condition" type="text" name="condition" value={this.state.condition} onChange={this.handleInputChange} required />

              </div>
            </div>
            <div className="row">
              <div className="input-field col s2">
                <label for="picture">Picture:</label>
              </div>
              <div className="input-field col s10">
                <input id="picture" type="text" name="picture" onChange={this.handleInputChange} value={this.state.picture} required />
              </div>
            </div>
            <button className="waves-effect waves-light btn-small" onClick={this.handleFormSubmit}>Update Item</button>
          </div>
        </form>
      </Container>

    )
  }
}

export default UpdateItem;    
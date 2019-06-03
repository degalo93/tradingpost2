import React, { Component } from "react";
import { Container } from '../components/Grid';
import API from "../utils/API";
import styles from '../components/Postform/style.css';
//import SearchCategory from "../components/SearchCategory";
import Select from 'react-select';


const options = [
  { label: "General", value: "General" },
  { label: "Books", value: 'Books' },
  { label: "Electronics", value: "Electronics" },
  { label: "Jewelry", value: "Jewelry" },
  { label: "Tools", value: "Tools" },
  { label: "Clothing", value: "Clothing" },
  { label: "Furniture", value: "Furniture" },
  { label: "Games", value: "Games" },
  { label: "Sports Equipment", value: "Sports Equipment" },
  { label: "Appliances", value: "Appliances" },
 
 ];
 const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', outline: 'none', position: 'relative',
  cursor: 'pointer', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #9e9e9e', height: '3rem', outline: 'none',
  lineHeight: '3rem, width: 100%', fontSize: '16px', margin: '0 0 8px 0', padding: 0, userSelect: 'none'}),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: 'white',
      color: '#757575',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
};



class PostItem extends Component {


  /* constructor(props) {
    super(props);
    this.selectCategory = React.createRef();
  } */

  state = {
    title: "",
    optionItems: [],
    picture: "",
    description: "",
    selectedCategory: "General",
    condition: "",
    selectedOption: { label: "General", value: "General"}
  };


  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //use this method to read userid for now, later can try to read it from the session !
  componentDidMount() {
    const { id } = this.props.match.params
    console.log("id " + id);  
    this.setState({_owner: id});
   
  
   /*  let categOptions = this.state.categories;
    this.setState.optionItems = categOptions.map((category) =>
                <option key={category.name}>{category.name}</option>) */
   
  } 
//handleing change on category 
handleChange = selectedOption => {
  this.setState({ selectedOption });
  console.log(`Option selected:`, selectedOption);
};

  //form submit event handler
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.selectedOption.value);

    API.createNewItem(
     /*  sessionStorage.getItem("UserId"), */
      this.state._owner,
      {
        _owner: this.state._owner,
        title: this.state.title,
        picture: this.state.picture.length === 0 ? "https://www.pluggedin.com/images/content-image/placeholder_book.jpg" : this.state.picture,
        description: this.state.description,
        category: this.state.selectedOption.value,
        condition: this.state.condition
      }).then(res => {
        console.log("The item was posted " + res.data);
        let path = "/profile/" + this.state._owner;
        this.props.history.push(path);


        //this.props.history.push(`/trading-post/profile/${sessionStorage.getItem("UserId")}`);

        //this.renderRedirect(); 
        //add later redirect to the profile page if the item was added sucessfully
      })
  }


  render() {

    const { selectedOption } = this.state;
    return (

      <Container>
        <form>
          <div className="formCont">
            <h3>Post your Item</h3>
            <div className="row">
              <div className="input-field col s6">

                <input id="title" type="text"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title" required />
                <label for="title">Add a Title</label>
              </div>

              <div className="input-field col s6">
                <div>
                <Select
              defaultValue={options[0]}
              styles={colourStyles}
               value={selectedOption}
              onChange={this.handleChange}
              options={options}
               />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">

                <input id="Description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} required />
                <label for="Description">Description</label>
              </div>
              <div className="row">
                <div className="input-field col s12">

                  <input id="Condition" type="text" name="condition" value={this.state.condition} onChange={this.handleInputChange} required />
                  <label for="Condition">Condition</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="picture" type="text" name="picture" onChange={this.handleInputChange} value={this.state.picture} required />
                  <label for="picture">Add a Picture</label>
                </div>
              </div>
              <button className="waves-effect waves-light btn-small" onClick={this.handleFormSubmit}>Add Item</button>
            </div>
          </div>
        </form>
      </Container>

    )
  }
}

export default PostItem;


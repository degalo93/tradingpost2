import React, { Component } from "react";
import CardRow from '../components/CardRow'
import API from "../utils/API";
import { SearchBtn } from "../components/SearchBtn";
//import SearchCategory from "../components/SearchCategory";
import { connect } from "react-redux";
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

class Landing extends Component {

  state = {
    returnedItems: [],
    searchTerm: "",
    pg: "Landing",
    selectedCategory: "General",
    //categories: ['General', 'Books', 'Electronics', 'Jewelry', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
    selectedOption: { label: "General", value: "General"}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//handleing change on category 
handleChange = selectedOption => {
  this.setState({ selectedOption });
  console.log(`Option selected:`, selectedOption);
};

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.selectedOption.value);
    console.log(this.state.searchTerm);

    API.getSearchedItems(this.state.selectedOption.value, this.state.searchTerm)
    .then(res => {

     /*  console.log(res.data);
      console.log("landing: " + res.data.items.length); */

      this.setState({ returnedItems: res.data, searchTerm: "" });     
    })
  };

  componentDidMount() {
    this.loadItems();
    
  }

  loadItems = () => {
    API.getRecentItems()
      .then(
        res => {
          this.setState({ returnedItems: res.data, isLoaded: true })
          // console.log(res.data)
        },
        error => {
          this.setState({ isLoaded: true, error });
        }
      )
    //.catch(err => console.log(err));
  };



  render() {
    const { selectedOption } = this.state;
    return (

      <div>
        <div>
          <form className="search search-form">
            <div className="row">
              <div className="col s12 m5 l5" style={{ 'margin-top': '15px' }}>

              <Select
              defaultValue={options[0]}
              styles={colourStyles}
               value={selectedOption}
              onChange={this.handleChange}
              options={options}
               />

              </div>
              <div className="input-field col s12 m5 l5">
                <i class="material-icons prefix">search</i>
                <input id="search" type="search" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} required />
                <label for="search">Seach for items</label>
              </div>
              <div className="col s12 m2 l2" style={{ 'margin-top': '10px' }}>
                <SearchBtn
                  onClick={this.handleFormSubmit}
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <CardRow
            items={this.state.returnedItems} currentUser={this.props.currentUser} />
          {/*  <Postform></Postform>  */}
        </div>
        </div>
     
    )
  }

}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps
)(Landing);

/* export default Landing; */

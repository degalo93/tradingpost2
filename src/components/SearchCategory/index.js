/* import React, {Component} from "react"

 class SearchCategory extends Component {
    render(){
      return(
  // example drop down for now ls
  <div>
    <select className="dropdown">
    
    <option value="General">General</option>
    <option value="Books">Books</option>
    <option value="Electronics">Electronics</option>
    <option value="Jewerly">Jewerly</option>
    <option value="Tools">Tools</option>
    <option value="Clothing">Clothing</option>
    <option value="Furniture">Furniture</option>
    <option value="Games">Games</option>
    <option value="Sports Equipment">Sports Equipment</option>
    <option value="Appliances">Appliances</option>
  </select>
  </div>
    )
}
 }
export default SearchCategory; */

import React from 'react';
import Select from 'react-select';



const categories = [
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

const SearchCategory = () => (
  <div className="container">
    <div className="row">
      <div>
        <Select options={ categories } />
      </div>
    </div>
  </div>
);

//export default SearchCategory;
export default () => (
  <Select
    defaultValue={categories[0]}
    label="Single select"
    options={categories}
    styles={colourStyles}
  />
);
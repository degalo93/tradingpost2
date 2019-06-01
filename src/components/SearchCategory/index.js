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
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

const SearchCategory = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ categories } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);

export default SearchCategory;
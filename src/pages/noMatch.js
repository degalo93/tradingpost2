//import React from "react";
import React from "react";

const imgStyle={
  width: "50%",
  height: "auto",
  display: "block",
  margin: "auto"
}

const divStyle={
  width: "100%",
  height:"100%",
  margin: "auto",
  backgroundColor: "Black",
}

//this page will display anytime a route is not found, will display 404 page not found

function noMatch() {
  return (
    <div style={divStyle}>
            <h1 className="center white-text">404 Page Not Found</h1>
            
              <img style={imgStyle} src="https://media1.tenor.com/images/84c4e8c1a24b84bece745d2dcd2a5aa8/tenor.gif?itemid=5551618" alt="Sad Pikachu" />
            
    </div> 
  ); 
}

export default noMatch;

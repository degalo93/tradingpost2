import React from "react";

//this component gives the Materialize styling of a "card" and also gives a shaddow for that card,
//if you wish to add more classes to further customize styling, assign the prop classes to do so.

function BasicCard(props) {
  const classes = `card z-depth-4 ${props.classes}`
  return (
      <div className={classes}>
          <div>{props.children}</div>
          </div>
  );
}


export default BasicCard;
import React from "react";

function BasicCard(props) {
  const classes = `card z-depth-4 ${props.classes}`
  return (
      <div className={classes}>
          <div className="cardContent">{props.children}</div>
          </div>
  );
}


export default BasicCard;
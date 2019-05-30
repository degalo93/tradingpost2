import React from "react";

function BasicCard(props) {
  return (
      <div className="card z-depth-4">
          <div className="cardContent">{props.children}</div>
          </div>
  );
}


export default BasicCard;
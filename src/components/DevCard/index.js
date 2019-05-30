import React from "react";
import BasicCard from '../BasicCard';

const cardImageStyle = {
    height: "200px",
    width: "100%",
    display: "block",
    margin: "auto"
}

const titleDiv = {
    fontSize: "22px",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "50px",
    background: "#00838f",
    opacity: ".6",
    padding: "0, 5%, 30px, 5%"

}

function DevCard(props) {
  return (
    <div className="col l4 m6 s12">
      <div className="card z-depth-4">
        <div className="card-image">
          <img
            className="responsive-img"
            style={cardImageStyle}
            src={props.image}
            alt={props.name}
          />
          <div className="valign-wrapper" style={titleDiv}>
              <p>{props.bio}</p>
              </div>
        </div>
      </div>
    </div>
  );
}


export default DevCard;
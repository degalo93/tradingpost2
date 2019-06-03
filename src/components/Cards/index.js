import React from "react";
import { Link } from "react-router-dom";
import BasicCard from "../BasicCard";
import { Row, Col } from "../Grid";

const buttonStyle = {
  alignContent: "right",
  padding: "0px 2px 2px 2px",
  width: "90px",
  display: "inline-block",
  marginBottom: "10px",
  marginRight: "10px"
};

const titleText = {
  padding: "10%",
  color: "white"
};

const content = {
  padding: "24px, 24px, 5px, 24px",
  margin: "20px"
};

function Card(props) {
  //console.log("Inside Card " + props.currentUser.isAuthenticated);
  return (
    <div>
      <Col size="col l4 m6 s12">
        <BasicCard>
          <div className="card-image">
            <Link to={`/item/${props.id}`}>
              <img
                className="responsive-img item-image"
                src={props.image}
                alt={props.title}
              />
            </Link>
            <div className="valign-wrapper item-title">
              <p className="truncate" style={titleText}>
                {props.title}
              </p>
            </div>
          </div>
          <div>
            <p className="truncate">{props.description}</p>
            <Row>
           {/*  {props.currentUser.isAuthenticated ? ( */}
              <Col size="col s2 offset-s6">
            

                <Link
                         className="card-action btn text-center teal lighten-1"
                         style={buttonStyle}
                         to={ { pathname:`/item/${props.owner}/${props.id}`, 
                         state: {
                           nick: props.nick,
                           description: props.description,
                           email: props.email,
                           title: props.title,
                           condition: props.condition,
                           picture: props.image
                         }
                      
                       } }> Details
                </Link>
               
       
              </Col>
              {/*    ) : ( <div></div>
                    )} */}
            </Row>
          </div>
        </BasicCard>
      </Col>
    </div>
  );
}

export default Card;

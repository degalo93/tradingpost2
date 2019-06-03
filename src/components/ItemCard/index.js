import React from "react";
import style from "./style.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../Grid";

const imageStyle = {
  maxWidth: "60%",
  maxHeight: "450px",
  margin: "auto",
  display: "block"
};

const buttonStyle = {
  padding: "2px, 2px, 2px, 2px",
  margin: "2px, 2px, 10px, 2px"
};

function ItemCard(props) {
  console.log("ItemCard props " + props);
 //console.log("ItemCard user " + props.currentUser.isAuthenticated);
  return (
    <Container>
      <div className="col s10 z-depth-4">
        <div className="card ">
          <h2
            className="center"
            style={{
              fontSize: 40,
              padding: 20,
              background: "#00838f",
              color: "white"
            }}
          >
            {props.title}
          </h2>
          <Row>
            <div className="card-image">
              <img
                className="responsive-img"
                style={imageStyle}
                src={props.picture}
                alt={props.title}
              />
            </div>
          </Row>
          <Row>
            <div className="card-content">
              <Row>
                <Col size="s7">
                  <h5>Description: </h5>
                  <Row>
                    <Col size="s11 offset-s1">
                      <p>{props.description}</p>
                    </Col>
                  </Row>
                </Col>
                <Row>
                  <Col size="s4">
                    <Row>
                      <h5>Condition: {props.condition}</h5>
                    </Row>
                    <Row>
                      <Col size="s10 offset-s1">
                     {/*  {props.currentUser.isAuthenticated ? (  */}
                        <Link
                          to="#emailForm"
                          className="btn green modal-trigger"
                          style={buttonStyle}
                        >
                          Email this user!
                        </Link>
                    {/*   ) : (
                        <div></div>
                      )} */}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </div>
          </Row>
        </div>
      </div>
      <div id="emailForm" className="modal">
        <div className="container">
          <form
            action={"mailto:" + props.ownerEmail}
            method="post"
            enctype="text/plain"
          >
            <br />
            Hi, My name is <input type="text" name="name" placeholder="Name" />
            <br />
            <br />
            <input
              type="text"
              name="comment"
              size="50"
              placeholder="Your Message Here"
            />
            <br />
            <br />
            <input type="submit" value="Send" />
            <input type="reset" value="Reset" />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ItemCard;

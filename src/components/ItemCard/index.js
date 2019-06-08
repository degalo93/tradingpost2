import React from "react";
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

//This component renders the details of a specific item, handed down through props

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
                  <h5 className="item-section-title">Description: </h5>
                  <Row>
                    <Col size="s12">
                      <p>{props.description}</p>
                    </Col>
                  </Row>
                </Col>
                <Row>
                  <Col size="s4">
                    <Row>
                      <h5 className="item-section-title">Condition:</h5>
                      <Col size="s12">
                      <p>{props.condition}</p>
                    </Col>
                    </Row>
                    <Row>
                      <Col size="s10 offset-s1">
                     {/*  {props.currentUser.isAuthenticated ? (  */}
                      <form
            action={"mailto: testEmail@gmail.com"}
            method="post"
            enctype="text/plain"
          >
                        <button
                          className="btn green waves-effect waves-light"
                          type="submit"
                          style={buttonStyle}
                        >
                          Email this user!
                        </button>
                        </form>
                    
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </div>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default ItemCard;

import React from "react";
import { Link } from "react-router-dom";
import BasicCard from "./BasicCard";
import { Container, Row, Col } from "../components/Grid";

const Homepage = () => (
  <div className="home-landing">
    <h1>Trading Post</h1>
    <Container>
      <Row>
        <BasicCard>
          <h6 >
            {" "}
            An App that is used to help people trade with one another without
            using money.{" "}
          </h6>
        </BasicCard>
      </Row>
      <Row>
        <h3>Features</h3>
      </Row>
      <Row>
        <Col size="l4 m6 s12">
          <BasicCard>
          <h2 className="cardTitle">1th Card</h2>
          </BasicCard>
        </Col>
        <Col size="l4 m6 s12">
          <BasicCard>
          <h2 className="cardTitle">2nd Card</h2>
          </BasicCard>
        </Col>
        <Col size="l4 m6 s12">
          <BasicCard>
          <h2 className="cardTitle">3nd Card</h2>
          </BasicCard>
        </Col>
      </Row>
      <Link to="/signup" className="btn btn-primary">
        Sign up here
      </Link>
    </Container>
  </div>
);

export default Homepage;

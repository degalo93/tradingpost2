import React from "react";
import { Link } from "react-router-dom";
import BasicCard from "./BasicCard";
import { Container, Row, Col } from "../components/Grid";

const Homepage = () => (
  <div className="home-landing">
    <h2>Trading Post</h2>
    <Container>
      <Row>
        <BasicCard>
          <h6 >
            Trading post is a bartering platform where people can trade goods without the use of money. 
          </h6>
        </BasicCard>
      </Row>
      <Row>
        <h3>Features</h3>
      </Row>
      <Row>
        <Col size="l4 m6 s12">
          <BasicCard>
            <div className="homeCard">
          <h2 className="cardTitle">Create an account</h2>
          <p>When you create an account with us, this allows you to post items, and also save them to your wishlist if you don't have anything to trade at the moment</p>
          </div>
          </BasicCard>
        </Col>
        <Col size="l4 m6 s12">
          <BasicCard>
          <div className="homeCard">
          <h2 className="cardTitle">View, save, and create posts</h2>
          <p>See other people's posts, save the ones you like for later, and create your owns </p>
          </div>
          </BasicCard>
        </Col>
        <Col size="l4 m6 s12">
          <BasicCard>
          <div className="homeCard">
          <h2 className="cardTitle">Contact users, and trade!</h2>
          <p>If you see something you like, you can message the person who posted it, and if you can work out a deal, meet up and trade!</p>
          </div>
          </BasicCard>
        </Col>
      </Row>
      <Link to="/signup" className="btn btn-primary">
        Sign up here
      </Link>
      <Link to="/trading-post" className="btn btn-primary">
      Enter Site
      </Link>
    </Container>
  </div>
);

export default Homepage;

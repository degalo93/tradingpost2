import React from "react";
import { Link } from "react-router-dom";
import BasicCard from "./BasicCard";
import { Container, Row, Col } from "../components/Grid";
import Landing from "../pages/landing";

const Homepage = ({currentUser}) => {
 
 if(!currentUser.isAuthenticated) { 
    return ( 
      <div className="home-landing">
    <h2 className="section-title">Trading Post</h2>
    <Container>
      <Row>
        <BasicCard classes="hp-card cardContent animated fadeIn">
          <h6 className="text-grey text-darken-4">
            Trading post is a bartering platform where people can trade goods without the use of money. 
          </h6>
        </BasicCard >
      </Row>
      <Row>
        <h3 className="section-title animated fadeIn delay-1s">Features</h3>
      </Row>
      <Row>
        <Col size="l4 m6 s12">
          <BasicCard classes="hp-card cardContent animated flipInY delay-2s">
            <div className="homeCard">
          <h2 className="cardTitle feature-title">Create an account</h2>
          <p className="text-grey text-darken-4">When you create an account with us, this allows you to post items, and also save them to your wishlist if you don't have anything to trade at the moment</p>
          </div>
          </BasicCard>
        </Col>
        <Col size="l4 m6 s12">
          <BasicCard classes="hp-card cardContent animated flipInY delay-3s">
          <div className="homeCard">
          <h2 className="cardTitle feature-title">View, save, and create posts</h2>
          <p className="text-grey text-darken-4">See other people's posts, save the ones you like for later, and create your owns </p>
          </div>
          </BasicCard>
        </Col>
        <Col size="l4 m6 s12">
          <BasicCard classes="hp-card cardContent animated flipInY delay-4s">
          <div className="homeCard">
          <h2 className="cardTitle feature-title">Contact users, and trade!</h2>
          <p className="text-grey text-darken-4">If you see something you like, you can message the person who posted it, and if you can work out a deal, meet up and trade!</p>
          </div>
          </BasicCard>
        </Col>
      </Row>
      <Link to="/search" className="btn btn-primary animated fadeIn delay-5s">
      Enter Site
      </Link>
    </Container>
  </div>
      );
    } 
    return (
  <Landing/>
    ); 
};

export default Homepage;

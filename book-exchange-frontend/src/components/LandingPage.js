import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Container fluid className="landing-page">
      <Row className="landing-content">
        <Col md={12} className="landing-text">
          <h1>Welcome to Book Exchange</h1>
          <p>
            Discover new reading material, share your favorite books with others, 
            and connect with fellow book enthusiasts. Join our community and 
            start exchanging books today!
          </p>
          <div className="landing-buttons">
            <Link to="/login">
              <Button variant="primary" className="m-2">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline-primary" className="m-2">Register</Button>
            </Link>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default LandingPage;

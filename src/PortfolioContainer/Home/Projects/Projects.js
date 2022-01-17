import React from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-parent">
        <div className="project-details">
          <div className="projects-intro">
            <h1>Projects</h1>
            <p>Here is a list of the latest projects I've been working on</p>
          </div>
          <div className="projects-colz">
            <Container>
              <Row className="row-1">
                <Col xs={12} md={6}>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={require('../../../assets/Projects/bimmer.jpg')} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>

                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Col>
                <Col xs={12} md={6}>
                  <CardGroup>
                    <Card>
                    <Card.Img variant="top" src={require('../../../assets/Projects/gym.jpg')} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>

                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
              <Row className="row-2">
                <Col xs={12} md={6}>
                  <CardGroup>
                    <Card>
                    <Card.Img variant="top" src={require('../../../assets/Projects/nocturne.jpg')} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>

                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Col>
                <Col xs={12} md={6}>
                  <CardGroup>
                    <Card>
                    <Card.Img variant="top" src={require('../../../assets/Projects/dice.jpg')} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>

                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

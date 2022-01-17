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
            <p>
              Below is a combination of professional and personal projects that
              I've created. Apart from these projects, I've also had the
              pleasure of contributing towards third party companies via
              contracting roles. Contributions include, but are not limited to:
              Cost-effective Shopify B2B implementation (No Shopify Plus
              Necessary), platform migration, website re-design, and more.
            </p>
            <span className="disclaimer">
              For my personal projects, please be patient with loading times as
              these are hosted via Heroku.
            </span>
          </div>
          <div className="projects-colz">
            <Container>
              <Row className="row-1">
                <Col xs={12} md={6}>
                  <CardGroup>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={require("../../../assets/Projects/bimmer.jpg")}
                      />
                      <Card.Body>
                        <Card.Title><h2>Card title</h2></Card.Title>
                        <Card.Text>
                          <p>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                          </p>
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
                      <Card.Img
                        variant="top"
                        src={require("../../../assets/Projects/gym.jpg")}
                      />
                      <Card.Body>
                        <Card.Title><h2>Card title</h2></Card.Title>
                        <Card.Text>
                        <p>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                          </p>
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
                      <Card.Img
                        variant="top"
                        src={require("../../../assets/Projects/nocturne.jpg")}
                      />
                      <Card.Body>
                        <Card.Title><h2>Card title</h2></Card.Title>
                        <Card.Text>
                        <p>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                          </p>
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
                      <Card.Img
                        variant="top"
                        src={require("../../../assets/Projects/dice.jpg")}
                      />
                      <Card.Body>
                        <Card.Title><h2>Card title</h2></Card.Title>
                        <Card.Text>
                        <p>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                          </p>
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

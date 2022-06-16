import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Timeline = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col sm="12">
            <Card
              className="position-relative inner-page-bg bg-primary"
              style={{ height: "150px" }}
            >
              <div className="inner-page-title">
                <h3 className="text-white">Timeline Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Product Orders</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="iq-timeline ms-1">
                  <li>
                    <div className="timeline-dots"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-success"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-danger"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans{" "}
                        <Link to="#">gummi bears</Link>gummi bears jelly
                        lollipop apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-primary"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-info"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-info"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-warning"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-info"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Product Orders</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="iq-timeline ms-1">
                  <li>
                    <div className="timeline-dots"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-success"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-danger"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans{" "}
                        <Link to="#">gummi bears</Link>gummi bears jelly
                        lollipop apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-primary"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-info"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-info"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-warning"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-dots border-info"></div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-1">Client Meeting</h6>
                      <small>19 November 2019</small>
                    </div>
                    <div className="d-inline-block w-100">
                      <p>
                        Bonbon macaroon jelly beans gummi bears jelly lollipop
                        apple
                      </p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Timeline;

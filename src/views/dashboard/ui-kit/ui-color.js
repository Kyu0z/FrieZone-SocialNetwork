import React from "react";
import { appName } from "../../../config";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const UiColors = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <div
              className="card position-relative inner-page-bg bg-primary"
              style={{ height: "150px" }}
            >
              <div className="inner-page-title">
                <h3 className="text-white">Color Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">{appName} Color</h4>
                </div>
              </div>
              <Card.Body>
                <p>
                  Similar to the contextual text color classes, easily set the
                  background of an element to any contextual class. Anchor
                  components will darken on hover, just like the text classes.
                  Background utilities{" "}
                  <strong>
                    do not set <code>color</code>
                  </strong>
                  , so in some cases you’ll want to use <code>.text-*</code>{" "}
                  utilities.
                </p>
                <Row className=" mt-4">
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-primary pt-5 pb-5 text-center rounded"></p>
                    <h6>Primary</h6>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-secondary pt-5 pb-5 text-center rounded"></p>
                    <h6>Secondary</h6>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-success pt-5 pb-5 text-center rounded"></p>
                    <h6>Success</h6>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-danger pt-5 pb-5 text-center rounded"></p>
                    <h6>Danger</h6>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-warning pt-5 pb-5 text-center rounded"></p>
                    <h6>Warning</h6>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-info pt-5 pb-5 text-center rounded"></p>
                    <h6>Info</h6>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center mt-4">
                    <p className="bg-light pt-5 pb-5 text-center rounded"></p>
                    <h6>Light</h6>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center mt-4">
                    <p className="bg-dark pt-5 pb-5 text-center rounded"></p>
                    <h6>Dark</h6>
                  </div>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">{appName} Color</h4>
                </div>
              </div>
              <Card.Body>
                <p>
                  Similar to the contextual text color classes, easily set the
                  background of an element to any contextual class. Anchor
                  components will darken on hover, just like the text classes.
                  Background utilities{" "}
                  <strong>
                    do not set <code>color</code>
                  </strong>
                  , so in some cases you’ll want to use <code>.text-*</code>{" "}
                  utilities.
                </p>
                <Row className="mt-4">
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-soft-primary pt-5 pb-5 text-center rounded font-size-18">
                      Primary
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-soft-secondary pt-5 pb-5 text-center rounded font-size-18">
                      Secondary
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-soft-success pt-5 pb-5 text-center rounded font-size-18">
                      Success
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-soft-danger pt-5 pb-5 text-center rounded font-size-18">
                      Danger
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-soft-warning pt-5 pb-5 text-center rounded font-size-18">
                      Warning
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center">
                    <p className="bg-soft-info pt-5 pb-5 text-center rounded font-size-18">
                      Info
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 text-center mt-4">
                    <p className="bg-soft-dark pt-5 pb-5 text-center rounded font-size-18">
                      Dark
                    </p>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">{appName} Text Color</h4>
                </div>
              </div>
              <Card.Body>
                <p>
                  Contextual text classes also work well on anchors with the
                  provided hover and focus states.{" "}
                  <strong>
                    Note that the <code>.text-white</code> and{" "}
                    <code>.text-muted</code> class has no additional link
                    styling beyond underline.
                  </strong>
                </p>
                <p className="text-primary">.text-primary</p>
                <p className="text-secondary">.text-secondary</p>
                <p className="text-success">.text-success</p>
                <p className="text-danger">.text-danger</p>
                <p className="text-warning">.text-warning</p>
                <p className="text-info">.text-info</p>
                <p className="text-light bg-dark">.text-light</p>
                <p className="text-dark">.text-dark</p>
                <p className="text-muted">.text-muted</p>
                <p className="text-white bg-dark">.text-white</p>
                <p className="text-black-50">.text-black-50</p>
                <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">{appName} Text Color</h4>
                </div>
              </div>
              <Card.Body>
                <p>
                  Contextual text classes also work well on anchors with the
                  provided hover and focus states.{" "}
                  <strong>
                    Note that the <code>.text-white</code> and{" "}
                    <code>.text-muted</code> class has no additional link
                    styling beyond underline.
                  </strong>
                </p>
                <p>
                  <Link to="#" className="text-primary">
                    Primary link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-secondary">
                    Secondary link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-success">
                    Success link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-danger">
                    Danger link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-warning">
                    Warning link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-info">
                    Info link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-light bg-dark">
                    Light link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-dark">
                    Dark link
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-muted">
                    Muted link
                  </Link>
                </p>
                <p className="mb-0">
                  <Link to="#" className="text-white bg-dark">
                    White link
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">{appName} Text Color</h4>
                </div>
              </div>
              <Card.Body>
                <p>
                  Contextual text classes also work well on anchors with the
                  provided hover and focus states.{" "}
                  <strong>
                    Note that the <code>.text-white</code> and{" "}
                    <code>.text-muted</code> class has no additional link
                    styling beyond underline.
                  </strong>
                </p>
                <p className="bg-soft-primary ps-3 pe-3 pt-2 pb-2 rounded">
                  Primary link
                </p>
                <p className="bg-soft-secondary ps-3 pe-3 pt-2 pb-2 rounded">
                  Secondary link
                </p>
                <p className="bg-soft-success ps-3 pe-3 pt-2 pb-2 rounded">
                  Success link
                </p>
                <p className="bg-soft-danger ps-3 pe-3 pt-2 pb-2 rounded">
                  Danger link
                </p>
                <p className="bg-soft-warning ps-3 pe-3 pt-2 pb-2 rounded">
                  Warning link
                </p>
                <p className="bg-soft-info ps-3 pe-3 pt-2 pb-2 rounded">
                  Info link
                </p>
                <p className="bg-soft-dark ps-3 pe-3 pt-2 pb-2 rounded mb-0">
                  Dark link
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">{appName} Text Color</h4>
                </div>
              </div>
              <Card.Body>
                <p>
                  Contextual text classes also work well on anchors with the
                  provided hover and focus states.{" "}
                  <strong>
                    Note that the <code>.text-white</code> and{" "}
                    <code>.text-muted</code> class has no additional link
                    styling beyond underline.
                  </strong>
                </p>
                <p>
                  <Link
                    to="#"
                    className="bg-soft-primary ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                  >
                    Primary link
                  </Link>
                </p>
                <p>
                  <Link
                    to="#"
                    className="bg-soft-secondary ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                  >
                    Secondary link
                  </Link>
                </p>
                <p>
                  <Link
                    to="#"
                    className="bg-soft-success ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                  >
                    Success link
                  </Link>
                </p>
                <p>
                  <Link
                    to="#"
                    className="bg-soft-danger ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                  >
                    Danger link
                  </Link>
                </p>
                <p>
                  <Link
                    to="#"
                    className="bg-soft-warning ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                  >
                    Warning link
                  </Link>
                </p>
                <p>
                  <Link
                    to="#"
                    className="bg-soft-info ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                  >
                    Info link
                  </Link>
                </p>
                <p className="mb-0">
                  <Link
                    to="#"
                    className="bg-dark ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                  >
                    Dark link
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiColors;

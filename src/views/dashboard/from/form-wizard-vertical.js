import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// img
import image1 from "../../../assets/images/pages/img-success.png";

const FormWizardVertical = () => {
  const [show, AccountShow] = useState("A");
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card
              className="card position-relative inner-page-bg bg-primary"
              style={{ height: "150px" }}
            >
              <div className="inner-page-title">
                <h3 className="text-white">Vertical Wizard Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Vertical Wizard</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md="3">
                    <ul id="top-tabbar-vertical" className="p-0">
                      <li
                        className={` ${show === "A" ? "active done" : ""} ${
                          show === "Account" ? "active done" : ""
                        } ${
                          show === "Personal" ? "active done" : ""
                        }  active step1`}
                        id="personal"
                      >
                        <Link to="#">
                          <i className="ri-lock-unlock-line bg-soft-primary text-primary"></i>
                          <span>Personal</span>
                        </Link>
                      </li>
                      <li
                        id="contact"
                        className={` ${
                          show === "Account" ? "active done" : ""
                        } ${show === "Personal" ? "active done" : ""} ${
                          show === "Image" ? "active done" : ""
                        } step2`}
                      >
                        <Link to="#">
                          <i className="ri-user-fill bg-soft-danger text-danger"></i>
                          <span>Contact</span>
                        </Link>
                      </li>
                      <li
                        id="official"
                        className={` ${
                          show === "Personal" ? "active done" : ""
                        } ${show === "Image" ? "active done" : ""} step3`}
                      >
                        <Link to="#">
                          <i className="ri-camera-fill bg-soft-success text-success"></i>
                          <span>Official</span>
                        </Link>
                      </li>
                      <li
                        id="payment"
                        className={` ${
                          show === "Image" ? "active done" : ""
                        } step4`}
                      >
                        <Link to="#">
                          <i className="ri-check-fill bg-soft-warning text-warning"></i>
                          <span>Payment</span>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md="9">
                    <Form id="form-wizard3" className="text-start">
                      <fieldset
                        className={`${show === "A" ? "d-block" : "d-none"}`}
                      >
                        <div className="form-card text-left">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4">User Information:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>First Name: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="fname"
                                  name="fname"
                                  placeholder="First Name"
                                  required="required"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Last Name: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="lname"
                                  name="lname"
                                  placeholder="Last Name"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Gender: *</Form.Label>
                                <Form.Check className="form-check">
                                  <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input
                                      type="radio"
                                      className="form-check-input"
                                      name="customRadio"
                                      id="customRadio1"
                                    />
                                    <Form.Check.Label> Male</Form.Check.Label>
                                  </Form.Check>
                                  <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input
                                      type="radio"
                                      className="form-check-input"
                                      name="customRadio"
                                      id="customRadio2"
                                    />
                                    <Form.Check.Label> Female</Form.Check.Label>
                                  </Form.Check>
                                </Form.Check>
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Date Of Birth: *</Form.Label>
                                <Form.Control type="date" id="dob" name="dob" />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          id="submit"
                          name="next"
                          className="btn-primary next action-button float-end"
                          value="Next"
                          onClick={() => AccountShow("Account")}
                        >
                          Next
                        </Button>
                      </fieldset>
                      <fieldset
                        className={`${
                          show === "Account" ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="form-card text-left">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4">Contact Information:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Email Id: *</Form.Label>
                                <Form.Control
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Email Id"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Contact Number: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="ccno"
                                  name="ccno"
                                  placeholder="Contact Number"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>City: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="city"
                                  name="city"
                                  placeholder="City."
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>State: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="state"
                                  name="state"
                                  placeholder="State."
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          varint="primary"
                          name="next"
                          className="next action-button float-end"
                          value="Next"
                          onClick={() => AccountShow("Personal")}
                        >
                          Next
                        </Button>
                        <Button
                          variant="dark"
                          name="previous"
                          className="previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={() => AccountShow("A")}
                        >
                          Previous
                        </Button>
                      </fieldset>
                      <fieldset
                        className={`${
                          show === "Personal" ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="form-card text-left">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4">Official Information:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Employee Id: *</Form.Label>
                                <Form.Control
                                  type="email"
                                  className="form-control"
                                  id="empid"
                                  name="empid"
                                  placeholder="Employee Id."
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Designation: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control"
                                  id="desg"
                                  name="desg"
                                  placeholder="Designation."
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Department Name: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control"
                                  id="accname"
                                  name="accname"
                                  placeholder="Department Name."
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Working Hour: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  className="form-control"
                                  id="workhour"
                                  name="workhour"
                                  placeholder="Working Hour."
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          variant="primary"
                          name="next"
                          className="next action-button float-end"
                          value="Submit"
                          onClick={() => AccountShow("Image")}
                        >
                          Next
                        </Button>
                        <Button
                          variant="dark"
                          name="previous"
                          className="previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={() => AccountShow("Account")}
                        >
                          Previous
                        </Button>
                      </fieldset>
                      <fieldset
                        className={`${show === "Image" ? "d-block" : "d-none"}`}
                      >
                        <div className="form-card text-left">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4 text-left">Payment:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Pan No: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="panno"
                                  name="panno"
                                  placeholder="Pan No."
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Account No: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="accno"
                                  name="accno"
                                  placeholder="Account No."
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>Account Holder Name: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="holname"
                                  name="accname"
                                  placeholder="Account Holder Name."
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <Form.Group className="form-group">
                                <Form.Label>IFSC Code: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  id="ifsc"
                                  name="ifsc"
                                  placeholder="IFSC Code."
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          variant="primary"
                          className="action-button float-end"
                          href="#"
                          onClick={() => AccountShow("Image2")}
                        >
                          Submit
                        </Button>
                        <Button
                          variant="dark"
                          name="previous"
                          className="previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={() => AccountShow("Personal")}
                        >
                          Previous
                        </Button>
                      </fieldset>
                      <fieldset
                        className={`${
                          show === "Image2" ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="form-card">
                          <Row>
                            <div className="col-7">
                              <h3 className="mb-4 text-left">Finish:</h3>
                            </div>
                            <div className="col-5">
                              <h2 className="steps">Step 4 - 4</h2>
                            </div>
                          </Row>
                          <br />
                          <br />
                          <h2 className="text-success text-center">
                            <strong>SUCCESS !</strong>
                          </h2>
                          <br />
                          <Row className="justify-content-center">
                            <div className="col-3">
                              <Image
                                src={image1}
                                className="img-fluid"
                                alt="fit-image"
                              />
                            </div>
                          </Row>
                          <br />
                          <br />
                          <Row className="justify-content-center">
                            <div className="col-7 text-center">
                              <h5 className="purple-text text-center">
                                You Have Successfully Signed Up
                              </h5>
                            </div>
                          </Row>
                        </div>
                      </fieldset>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormWizardVertical;

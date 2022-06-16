import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  Nav,
  TabContent,
  TabPane,
  Button,
  Image,
} from "react-bootstrap";

// img
import image1 from "../../../assets/images/pages/img-success.png";

const FormWizardValidate = () => {
  const [show, AccountShow] = useState("A");
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card
              className="position-relative inner-page-bg bg-primary"
              style={{ height: "150px" }}
            >
              <div className="inner-page-title">
                <h3 className="text-white">Validate Wizard Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Validate Wizard</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Form method="post" id="registration">
                  <Nav
                    fill
                    variant="pills"
                    className="stepwizard-row"
                    id="nav-tab"
                    role="tablist"
                  >
                    <Nav.Link
                      className={` ${show === "A" ? "active" : ""}  btn`}
                      id="user-tab"
                      data-toggle="tab"
                      href="#user-detail"
                    >
                      <i className="ri-lock-unlock-line bg-soft-primary text-primary"></i>
                      <span>User Detail</span>
                    </Nav.Link>
                    <Nav.Link
                      className={` ${
                        show === "Account" ? "active done" : ""
                      } btn`}
                      id="document-tab"
                      data-toggle="tab"
                      href="#document-detail"
                    >
                      <i className="ri-user-fill bg-soft-danger text-danger"></i>
                      <span>Document Detail</span>
                    </Nav.Link>
                    <Nav.Link
                      className={` ${
                        show === "Personal" ? "active done" : ""
                      }  btn`}
                      id="bank-tab"
                      data-toggle="tab"
                      href="#bank-detail"
                    >
                      <i className="ri-camera-fill bg-soft-success text-success"></i>
                      <span>Bank Detail</span>
                    </Nav.Link>
                    <Nav.Link
                      className={` ${
                        show === "Image" ? "active done" : ""
                      } btn`}
                      id="cpnfirm-tab"
                      data-toggle="tab"
                      href="#cpnfirm-data"
                    >
                      <i className="ri-check-fill bg-soft-warning text-warning"></i>
                      <span>Confirm</span>
                    </Nav.Link>
                  </Nav>
                  <TabContent className="pt-4 pb-2" id="nav-tabContent">
                    <TabPane
                      className={` ${
                        show === "A" ? "d-block" : "d-none"
                      } fade row show`}
                      id="user-detail"
                    >
                      <Col sm="12">
                        <Col md="12" className="p-0">
                          <h3 className="mb-4">User Information:</h3>
                          <Row>
                            <Form.Group className=" col-md-6 form-group">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control
                                type="text"
                                required="required"
                                placeholder="Enter First Name"
                              />
                            </Form.Group>
                            <Form.Group className=" col-md-6 form-group">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control
                                type="text"
                                required="required"
                                placeholder="Enter Last Name"
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group ">
                              <Form.Label>User Name: *</Form.Label>
                              <Form.Control
                                type="text"
                                id="uname"
                                required="required"
                                name="uname"
                                placeholder="Enter User Name"
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group ">
                              <Form.Label>Email Id: *</Form.Label>
                              <Form.Control
                                type="email"
                                id="emailid"
                                required="required"
                                name="emailid"
                                placeholder="Email ID"
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group ">
                              <Form.Label>Password: *</Form.Label>
                              <Form.Control
                                type="password"
                                required="required"
                                id="pwd"
                                name="pwd"
                                placeholder="Password"
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group ">
                              <Form.Label>Confirm Password: *</Form.Label>
                              <Form.Control
                                type="password"
                                id="cpwd"
                                required="required"
                                name="cpwd"
                                placeholder="Confirm Password"
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group ">
                              <Form.Label>Contact Number: *</Form.Label>
                              <Form.Control
                                type="text"
                                required="required"
                                id="cno"
                                name="cno"
                                placeholder="Contact Number"
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group ">
                              <Form.Label>
                                Alternate Contact Number: *
                              </Form.Label>
                              <Form.Control
                                type="text"
                                required="required"
                                id="acno"
                                name="acno"
                                placeholder="Alternate Contact Number"
                              />
                            </Form.Group>
                            <Form.Group className="col-md-12 form-group mb-3 ">
                              <Form.Label>Address: *</Form.Label>
                              <Form.Control
                                as="textarea"
                                name="address"
                                id="address"
                                rows="5"
                                required="required"
                              ></Form.Control>
                            </Form.Group>
                          </Row>
                          <Button
                            className="btn-primary float-end"
                            data-enchanter="next"
                            onClick={() => AccountShow("Account")}
                          >
                            Next
                          </Button>
                        </Col>
                      </Col>
                    </TabPane>
                    <TabPane
                      className={` ${
                        show === "Account" ? "d-block" : "d-none"
                      } row show fade`}
                      id="document-detail"
                    >
                      <Col sm="12">
                        <Col md="12" className="p-0">
                          <h3 className="mb-4">Document Details:</h3>
                          <Row>
                            <Form.Group className="form-group col-md-6">
                              <Form.Label>Company Name: *</Form.Label>
                              <Form.Control
                                type="text"
                                required="required"
                                id="fname"
                                name="fname"
                                placeholder="Company Name"
                              />
                            </Form.Group>
                            <Form.Group className="form-group col-md-6">
                              <Form.Label>Contact Number: *</Form.Label>
                              <Form.Control
                                type="text"
                                required="required"
                                id="ccno"
                                name="ccno"
                                placeholder="Contact Number"
                              />
                            </Form.Group>
                            <Form.Group className="form-group col-md-6">
                              <Form.Label>Company Url: *</Form.Label>
                              <Form.Control
                                type="text"
                                required="required"
                                id="url"
                                name="url"
                                placeholder="Company Url."
                              />
                            </Form.Group>
                            <Form.Group className="form-group col-md-6">
                              <Form.Label>Company Mail Id: *</Form.Label>
                              <Form.Control
                                type="email"
                                required="required"
                                id="cemail"
                                name="cemail"
                                placeholder="Company Mail Id."
                              />
                            </Form.Group>
                            <Form.Group className="form-group col-md-12">
                              <Form.Label>Company Address: *</Form.Label>
                              <Form.Control
                                name="cadd"
                                required="required"
                                id="cadd"
                                rows="5"
                              ></Form.Control>
                            </Form.Group>
                          </Row>
                          <Button
                            variant="secondary"
                            className="float-start"
                            data-enchanter="previous"
                            onClick={() => AccountShow("A")}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="primary"
                            className="float-end"
                            data-enchanter="next"
                            onClick={() => AccountShow("Personal")}
                          >
                            Next
                          </Button>
                        </Col>
                      </Col>
                    </TabPane>
                    <TabPane
                      className={` ${
                        show === "Personal" ? "d-block" : "d-none"
                      } row show fade`}
                      id="bank-detail"
                    >
                      <Col sm="12">
                        <Col md="12" className="p-0">
                          <h3 className="mb-4">Bank Detail:</h3>
                          <Row>
                            <Form.Group className="col-md-6 form-group">
                              <Form.Label>Pan No: *</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control"
                                required="required"
                                id="panno"
                                name="panno"
                                placeholder="Pan No."
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group">
                              <Form.Label>Account No: *</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control"
                                required="required"
                                id="accno"
                                name="accno"
                                placeholder="Account No."
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group">
                              <Form.Label>Account Holder Name: *</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control"
                                required="required"
                                id="accname"
                                name="accname"
                                placeholder="Account Holder Name."
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group">
                              <Form.Label>IFSC Code: *</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control"
                                required="required"
                                id="ifsc"
                                name="ifsc"
                                placeholder="IFSC Code."
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group">
                              <Form.Label>Bank Name: *</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control"
                                required="required"
                                id="bankname"
                                name="bankname"
                                placeholder="Bank Name."
                              />
                            </Form.Group>
                            <Form.Group className="col-md-6 form-group">
                              <Form.Label>Bank Branch Name: *</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control"
                                required="required"
                                id="branch"
                                name="branch"
                                placeholder="Bank Branch Name."
                              />
                            </Form.Group>
                          </Row>
                          <Button
                            variant="secondary"
                            className="float-start"
                            data-enchanter="previous"
                            onClick={() => AccountShow("Account")}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="primary"
                            className="float-end"
                            data-enchanter="next"
                            onClick={() => AccountShow("Image")}
                          >
                            Next
                          </Button>
                        </Col>
                      </Col>
                    </TabPane>
                    <TabPane
                      className={` ${
                        show === "Image" ? "d-block" : "d-none"
                      } row show fade`}
                      id="cpnfirm-data"
                    >
                      <Col sm="12">
                        <Col md="12" className="p-0">
                          <h3 className="mb-4 text-left">Finish:</h3>
                          <Row className="justify-content-center">
                            <div className="col-3">
                              <Image
                                src={image1}
                                className="img-fluid"
                                alt="img-success"
                              />
                            </div>
                          </Row>
                        </Col>
                      </Col>
                    </TabPane>
                  </TabContent>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormWizardValidate;

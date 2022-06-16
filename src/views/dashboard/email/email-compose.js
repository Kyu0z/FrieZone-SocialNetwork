import React, { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
//select
import Select from "react-select";

//css
import "./email-compose.css";

const EmailCompose = () => {
  const data = [
    {
      value: 1,
      label: "Petey Cruiser",
    },
    {
      value: 2,
      label: "Bob Frapples",
    },
    {
      value: 3,
      label: "Barb Ackue",
    },
    {
      value: 4,
      label: "Greta Life",
    },
  ];
  const data2 = [
    {
      value: 1,
      label: "Brock Lee",
    },
    {
      value: 2,
      label: "Rick O'Shea",
    },
    {
      value: 3,
      label: "Barb Ackue",
    },
    {
      value: 4,
      label: "Greta Life",
    },
  ];
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  // set value for default selection
  const [selectedValue1, setSelectedValue1] = useState([]);

  // handle onChange event of the dropdown
  const handleChange1 = (e) => {
    setSelectedValue1(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  return (
    <>
      <Container>
        <Row className="row-eq-height">
          <Col md="12">
            <Row>
              <Col md="12">
                <Card className="iq-border-radius-20">
                  <Card.Body>
                    <Row>
                      <Col md="12" className="mb-3">
                        <h5 className="text-primary card-title">
                          <i className="ri-pencil-fill"></i> Compose Message
                        </h5>
                      </Col>
                    </Row>
                    <Form className="email-form">
                      <Row className="form-group">
                        <Form.Label
                          htmlFor="inputEmail3"
                          column
                          sm="2"
                          className="col-form-label"
                        >
                          To:
                        </Form.Label>
                        <Col sm="10">
                          <Select
                            className="dropdown"
                            placeholder=""
                            value={data.filter((obj) =>
                              selectedValue.includes(obj.value)
                            )} // set selected values
                            options={data} // set list of the data
                            onChange={handleChange} // assign onChange function
                            isMulti
                            isClearable
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Form.Label
                          column
                          sm="2"
                          htmlFor="cc"
                          className="col-form-label"
                        >
                          Cc:
                        </Form.Label>
                        <Col sm="10">
                          <Select
                            type="text"
                            className="dropdown"
                            placeholder=""
                            value={data2.filter((obj) =>
                              selectedValue1.includes(obj.value)
                            )} // set selected values
                            options={data2} // set list of the data
                            onChange={handleChange1} // assign onChange function
                            isMulti
                            isClearable
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Form.Label
                          column
                          sm="2"
                          htmlFor="subject"
                          className="col-form-label"
                        >
                          Subject:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" id="subject" />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Form.Label
                          htmlFor="subject"
                          column
                          sm="2"
                          className="col-form-label"
                        >
                          Your Message:
                        </Form.Label>
                        <Col md="10">
                          <Form.Control
                            as="textarea"
                            className="textarea"
                            rows={5}
                            defaultValue="Next, use our Get Started docs to setup Tiny!"
                          />
                        </Col>
                      </Row>
                      <Form.Group className="form-group d-flex flex-wrap align-items-center justify-content-between mb-0">
                        <div className="d-flex flex-wrap flex-grow-1 align-items-center">
                          <div className="send-btn pl-3 mb-2">
                            <button type="button" className="btn btn-primary">
                              Send
                            </button>
                          </div>
                          <div className="send-panel mb-2">
                            <Form.Label
                              className="ms-2 mb-0 bg-soft-primary rounded"
                              htmlFor="file"
                            >
                              {" "}
                              <Form.Control
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                              />
                              <Link to="#">
                                {" "}
                                <i className="ri-attachment-line text-primary"></i>
                              </Link>{" "}
                            </Form.Label>
                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                              {" "}
                              <Link to="#">
                                {" "}
                                <i className="ri-map-pin-user-line text-primary"></i>
                              </Link>{" "}
                            </Form.Label>
                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                              {" "}
                              <Link to="#">
                                {" "}
                                <i className="ri-drive-line text-primary"></i>
                              </Link>{" "}
                            </Form.Label>
                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                              {" "}
                              <Link to="#">
                                {" "}
                                <i className="ri-camera-line text-primary"></i>
                              </Link>{" "}
                            </Form.Label>
                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                              {" "}
                              <Link to="#">
                                {" "}
                                <i className="ri-user-smile-line text-primary"></i>
                              </Link>{" "}
                            </Form.Label>
                          </div>
                        </div>
                        <div className="d-flex mr-3 align-items-center">
                          <div className="send-panel float-right">
                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                              <Link to="#">
                                <i className="ri-settings-2-line text-primary"></i>
                              </Link>
                            </Form.Label>
                            <Form.Label className="ms-2 mb-0 bg-soft-primary rounded">
                              <Link to="#">
                                {" "}
                                <i className="ri-delete-bin-line text-primary"></i>
                              </Link>{" "}
                            </Form.Label>
                          </div>
                        </div>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmailCompose;

import React from "react";
import { Card, Row, Col, Container, Form } from "react-bootstrap";

const FormSwitch = () => {
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
                <h3 className="text-white">Form Switch Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">State</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    disabled
                    className="bg-primary"
                    id="customSwitch1"
                  />
                  <Form.Check.Label>false / Inactive</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    className="bg-primary"
                    id="customSwitch2"
                    defaultChecked
                  />
                  <Form.Check.Label>true / active</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    className="bg-primary"
                    defaultChecked
                    id="customSwitch3"
                  />
                  <Form.Check.Label>disable / active</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    disabled
                    type="checkbox"
                    className="bg-primary"
                    id="customSwitch4"
                  />
                  <Form.Check.Label>disable / Inactive</Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Color</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    className="bg-primary"
                    id="customSwitch01"
                    defaultChecked
                  />
                  <Form.Check.Label>Primary</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    variant="bg-success"
                    id="customSwitch02"
                    defaultChecked
                  />
                  <Form.Check.Label>Success</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    className="bg-danger"
                    id="customSwitch03"
                    defaultChecked
                  />
                  <Form.Check.Label>Danger</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    className="bg-waring"
                    id="customSwitch04"
                    defaultChecked
                  />
                  <Form.Check.Label>Waring</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    className="bg-dark"
                    id="customSwitch05"
                    defaultChecked
                  />
                  <Form.Check.Label>Dark</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-switch form-check-inline">
                  <Form.Check
                    type="checkbox"
                    className="bg-info"
                    id="customSwitch06"
                    defaultChecked
                  />
                  <Form.Check.Label>Info</Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormSwitch;

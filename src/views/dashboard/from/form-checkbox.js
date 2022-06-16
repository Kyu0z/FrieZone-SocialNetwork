import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const FormCheckbox = () => {
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
                <h3 className="text-white">Form Checkbox Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Basic Checkbox</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox1"
                  />
                  <Form.Check.Label>Primary / Inactive</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="checkbox2"
                    defaultChecked
                  />
                  <Form.Check.Label>Primary / Active</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="checkbox3"
                    disabled
                  />
                  <Form.Check.Label>Disable / Inactive</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="checkbox4"
                    defaultChecked
                    disabled
                  />
                  <Form.Check.Label>Active / Disable</Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Custom Color</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check form-check-inline form-checkbox form-checkbox-color me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-primary"
                    id="customCheck-11"
                  />
                  <Form.Check.Label>Primary</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline form-checkbox form-checkbox-color me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-success"
                    id="customCheck-22"
                  />
                  <Form.Check.Label>Success</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline form-checkbox form-checkbox-color me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-danger"
                    id="customCheck-33"
                  />
                  <Form.Check.Label>Danger</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline form-checkbox form-checkbox-color me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-warning"
                    id="customCheck-44"
                  />
                  <Form.Check.Label>Warning</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline form-checkbox form-checkbox-color me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-dark"
                    id="customCheck-55"
                  />
                  <Form.Check.Label>Dark</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-check-inline form-checkbox form-checkbox-color me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-info"
                    id="customCheck-66"
                  />
                  <Form.Check.Label> Info</Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Boolean Checkbox</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    id="customCheck-t"
                    defaultChecked
                  />{" "}
                  <Form.Check.Label>True</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check-inline me-2">
                  <Form.Check.Input type="checkbox" id="customCheck-f" />{" "}
                  <Form.Check.Label>False</Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Custom Checkbox</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check form-checkbox form-check-inline">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheck5"
                  />
                  <Form.Check.Label>Primary / Inactive</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-checkbox form-check-inline">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheck6"
                    defaultChecked
                  />
                  <Form.Check.Label>Primary - active</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-checkbox form-check-inline">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheck7"
                    disabled
                  />
                  <Form.Check.Label>
                    Primary - inactive - disabled
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-checkbox form-check-inline">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheck8"
                    defaultChecked
                    disabled
                  />
                  <Form.Check.Label>
                    Primary - active - disabled
                  </Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
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
                <Form.Check className="form-check form-checkbox form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-primary"
                    id="customCheck-1"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Primary
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-checkbox form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-success"
                    id="customCheck-2"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    Success
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-checkbox form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-danger"
                    id="customCheck-3"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    Danger
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-checkbox form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-warning"
                    id="customCheck-4"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    Warning
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-checkbox form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-dark"
                    id="customCheck-5"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    Dark
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check form-checkbox form-check-inline me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="form-check-input bg-info"
                    id="customCheck-6"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    Info
                  </Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormCheckbox;

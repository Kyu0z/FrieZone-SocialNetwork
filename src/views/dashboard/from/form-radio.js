import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const FormRadio = () => {
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
                <h3 className="text-white">Form Radio Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Default Radio Buttons</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    name="bsradio"
                    id="radio1"
                    defaultChecked
                  />
                  <Form.Check.Label>Active</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check radio form-check-inline">
                  <Form.Check.Input type="radio" name="bsradio" id="radio2" />
                  <Form.Check.Label>Inactive</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    name="bsradio1"
                    id="radio3"
                    disabled
                    defaultChecked
                  />
                  <Form.Check.Label>Active - Disabled</Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    name="bsradio1"
                    id="radio4"
                    disabled
                  />
                  <Form.Check.Label>Inactive - Disabled</Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Custom Colored Radio Buttons</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check custom-radio custom-radio-color form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio01"
                    name="customRadio-11"
                    className="form-check-input bg-primary"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Primary{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio02"
                    name="customRadio-11"
                    className="form-check-input bg-success"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Success{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio03"
                    name="customRadio-11"
                    className="form-check-input bg-danger"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Danger{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio04"
                    name="customRadio-11"
                    className="form-check-input bg-warning"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Warning{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio05"
                    name="customRadio-11"
                    className="form-check-input bg-dark"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Dark{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio06"
                    name="customRadio-11"
                    className="form-check-input bg-info"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Info{" "}
                  </Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Custom Radio Buttons</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check custom-radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio6"
                    name="customRadio-1"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    One{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio7"
                    name="customRadio-1"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Two{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio8"
                    name="customRadio-1"
                    className="form-check-input"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Three{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio-8"
                    name="customRadio-2"
                    className="form-check-input"
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Four defaultChecked{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio9"
                    name="customRadio-3"
                    className="form-check-input"
                    disabled
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Five disabled
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio10"
                    name="customRadio-4"
                    className="form-check-input"
                    disabled
                    defaultChecked
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Six Selected and disabled
                  </Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Colored Radio Buttons</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form.Check className="form-check custom-radio custom-radio-color-defaultChecked form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio-1"
                    name="customRadio-10"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Primary{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color-defaultChecked form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio-2"
                    name="customRadio-10"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Success{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color-defaultChecked form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio-3"
                    name="customRadio-10"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Danger{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color-defaultChecked form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio-4"
                    name="customRadio-10"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Warning{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color-defaultChecked form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio-5"
                    name="customRadio-10"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Dark{" "}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="form-check custom-radio custom-radio-color-defaultChecked form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    id="customRadio-6"
                    name="customRadio-10"
                    className="form-check-input"
                  />
                  <Form.Check.Label className="form-check-label">
                    {" "}
                    Info{" "}
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

export default FormRadio;

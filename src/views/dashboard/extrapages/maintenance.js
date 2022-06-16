import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

//image
import error2 from "../../../assets/images/error/02.png";

const Maintenance = () => {
  return (
    <>
      <div className="wrapper">
        <div className="mt-5 iq-maintenance">
          <Container fluid>
            <Row className="no-gutters">
              <Col sm="12" className="text-center">
                <div className="iq-maintenance">
                  <Image src={error2} className="img-fluid" alt="" />
                  <h3 className="mt-4 mb-1 text-center">
                    We are Currently Performing Maintenance
                  </h3>
                  <p className="text-center">Please check back in sometime.</p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-3">
            <Row>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-window-line ri-4x line-height text-primary"></i>
                    <h5 className="card-title mt-1 text-center">
                      Why is the Site Down?
                    </h5>
                    <p className="mb-0 text-center">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-time-line ri-4x line-height text-primary"></i>
                    <h5 className="card-title mt-1 text-center">
                      What is the Downtime?
                    </h5>
                    <p className="mb-0 text-center">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-information-line ri-4x line-height text-primary"></i>
                    <h5 className="card-title mt-1 text-center">
                      Do you need Support?
                    </h5>
                    <p className="mb-0 text-center">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Maintenance;

import React from "react";
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";
import Card from "../../../components/Card";

const UiBreadcrumbs = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col sm="12">
              <div
                className="card position-relative inner-page-bg bg-primary"
                style={{ height: "150px" }}
              >
                <div className="inner-page-title">
                  <h3 className="text-white">Breadcrumb Page</h3>
                  <p className="text-white">lorem ipsum</p>
                </div>
              </div>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Breadcrumb</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    Use the items in order to programatically generate the
                    breadcrumb links.use class <code>.breadcrumb to ol</code>
                  </p>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Library</Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Breadcrumb With Icon</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    Use the items in order to programatically generate the
                    breadcrumb links.use class <code>.breadcrumb to ol</code>{" "}
                    with Icon
                  </p>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item active>
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item href="#">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Library</Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item href="#">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Breadcrumb</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    use class <code>.breadcrumb .bg-primary</code>
                  </p>
                  <Breadcrumb bsPrefix="breadcrumb bg-primary">
                    <Breadcrumb.Item active className="text-white">
                      Home
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-primary">
                    <Breadcrumb.Item className="text-white">
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className="text-white">
                      Library
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-primary">
                    <Breadcrumb.Item className="text-white">
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="text-white">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className="text-white">
                      Data
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Breadcrumb With Icon</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    use class <code>.breadcrumb .bg-primary </code> With Icon.
                  </p>
                  <Breadcrumb bsPrefix="breadcrumb bg-primary">
                    <Breadcrumb.Item active className="text-white">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-primary">
                    <Breadcrumb.Item className="text-white">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className="text-white">
                      Library
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-primary">
                    <Breadcrumb.Item className="text-white">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="text-white">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className="text-white">
                      Data
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Breadcrumb With Icon</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    use class <code>.breadcrumb .iq-bg-primary</code>
                  </p>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item active>
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item href="#">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Library</Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                    <Breadcrumb.Item href="#">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Breadcrumb With Icon</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    use class <code>.breadcrumb .iq-bg-danger</code>
                  </p>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                    <Breadcrumb.Item active>
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                    <Breadcrumb.Item className="text-danger">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Library</Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                    <Breadcrumb.Item className="text-danger">
                      <i className="ri-home-4-line me-1"></i>Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="text-danger">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UiBreadcrumbs;

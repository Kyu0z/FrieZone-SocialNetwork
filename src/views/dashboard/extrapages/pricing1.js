import React from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";

//image
import image25 from "../../../assets/images/page-img/25.jpg";
import image26 from "../../../assets/images/page-img/26.jpg";
import image27 from "../../../assets/images/page-img/27.jpg";
import image28 from "../../../assets/images/page-img/28.jpg";

const Pricing1 = () => {
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
                <h3 className="text-white">Pricing-1 Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card>
              <Card.Body className="border text-center rounded">
                <span className="text-uppercase">Basic</span>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3">$26</h2>
                  <small className=" text-muted">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button className="btn-primary mt-5">Start Starter</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card className="bg-primary text-white">
              <Card.Body className="border text-center rounded">
                <span className="text-uppercase">Basic</span>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3 text-white">$99</h2>
                  <small className="text-white-50">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0 ">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button className="btn-light text-dark btn-block mt-5">
                  Start Starter
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card>
              <Card.Body className="border text-center rounded">
                <span className="text-uppercase">Basic</span>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3">$39</h2>
                  <small className=" text-muted">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button className="btn-primary mt-5">Start Starter</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card>
              <Card.Body className="border text-center rounded">
                <span className="text-uppercase">Basic</span>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3">$25</h2>
                  <small className=" text-muted">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button className="btn-primary mt-5">Start Starter</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="bg-dark text-white text-center">
              <Image src={image25} className="card-img rounded" alt="#" />
              <div className="card-img-overlay">
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3 text-white">$19</h2>
                  <small className="text-white">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0 ">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button className="btn-primary mt-3">Get started</Button>
              </div>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="bg-dark text-white text-center">
              <Image src={image26} className="card-img rounded" alt="#" />
              <div className="card-img-overlay">
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3 text-white">$19</h2>
                  <small className="text-white">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button variant="primary" className="mt-3">
                  Get started
                </Button>
              </div>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="bg-dark text-white text-center">
              <Image src={image27} className="card-img rounded" alt="#" />
              <div className="card-img-overlay">
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3 text-white">$19</h2>
                  <small className="text-white">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0 ">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button variant="primary" className="mt-3">
                  Get started
                </Button>
              </div>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="bg-dark text-white text-center">
              <Image src={image28} className="card-img rounded" alt="#" />
              <div className="card-img-overlay">
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mb-4 display-3 text-white">$19</h2>
                  <small className="text-white">/ Month</small>
                </div>
                <ul className="list-unstyled line-height-4 mb-0 ">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
                <Button variant="primary" className="mt-3">
                  Get started
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing1;

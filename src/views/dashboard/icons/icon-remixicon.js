import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const remixicon = [
  {
    class: "ri-4k-fill",
    name: "4k Fill",
  },
  {
    class: "ri-4k-line",
    name: "4k line",
  },
  {
    class: "ri-account-box-fill",
    name: "Account Fill",
  },
  {
    class: "ri-account-pin-box-line",
    name: "account-pin-box",
  },
  {
    class: "ri-award-line",
    name: "award-line",
  },
  {
    class: "ri-award-fill",
    name: "award-fill",
  },
  {
    class: "ri-bookmark-line",
    name: "bookmark-line",
  },
  {
    class: "ri-bookmark-fill",
    name: "bookmark-fill",
  },
  {
    class: "ri-calculator-line",
    name: "calculator-line",
  },
  {
    class: "ri-calculator-fill",
    name: "calculator-fill",
  },
  {
    class: "ri-calendar-line",
    name: "calendar-line",
  },
  {
    class: "ri-calendar-fill",
    name: "calendar-fill",
  },
  {
    class: "ri-reply-line",
    name: "reply-line",
  },
  {
    class: "ri-reply-fill",
    name: "reply-fill",
  },
  {
    class: "ri-send-plane-line",
    name: "send-plane-line",
  },
  {
    class: "ri-send-plane-fill",
    name: "send-plane-fill",
  },
  {
    class: "ri-computer-line",
    name: "computer-line",
  },
  {
    class: "ri-computer-fill",
    name: "computer-fill",
  },
  {
    class: "ri-cellphone-line",
    name: "cellphone-line",
  },
  {
    class: "ri-cellphone-fill",
    name: "cellphone-fill",
  },
  {
    class: "ri-phone-line",
    name: "phone-line",
  },
  {
    class: "ri-phone-fill",
    name: "phone-fill",
  },
  {
    class: "ri-tablet-line",
    name: "tablet-line",
  },
  {
    class: "ri-tablet-fill",
    name: "tablet-fill",
  },
  {
    class: "ri-device-line",
    name: "device-line",
  },
  {
    class: "ri-device-fill",
    name: "device-fill",
  },
  {
    class: "ri-battery-line",
    name: "battery-line",
  },
  {
    class: "ri-battery-fill",
    name: "battery-fill",
  },
  {
    class: "ri-battery-low-line",
    name: "battery-low-line",
  },
  {
    class: "ri-battery-low-fill",
    name: "battery-low-fill",
  },
  {
    class: "ri-file-line",
    name: "file-line",
  },
  {
    class: "ri-file-fill",
    name: "file-fill",
  },
  {
    class: "ri-book-open-line",
    name: "book-open-line",
  },
  {
    class: "ri-book-open-fill",
    name: "book-open-fill",
  },
  {
    class: "ri-lightbulb-line",
    name: "lightbulb-line",
  },
  {
    class: "ri-lightbulb-fill",
    name: "lightbulb-fill",
  },
  {
    class: "ri-map-pin-line",
    name: "map-pin-line",
  },
  {
    class: "ri-map-pin-fill",
    name: "map-pin-fill",
  },
  {
    class: "ri-drop-line",
    name: "drop-line",
  },
  {
    class: "ri-drop-fill",
    name: "drop-fill",
  },
  {
    class: "ri-drop-fill",
    name: "drop-fill",
  },
  {
    class: "ri-drop-fill",
    name: "drop-fill",
  },
];

const Remixicon = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Remixicon Icon</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Use Class{" "}
                  <code>&lt;i className="ri-4k-fill"&gt;&lt;/i&gt;</code>
                </p>
                <Row className="mt-3">
                  {remixicon.map((item, idx) => (
                    <Col sm="6" md="4" lg="2" key={idx}>
                      <Link className="iq-icons-list" to="#">
                        <i className={`${item.class}`}></i>
                        {item.name}
                      </Link>
                    </Col>
                  ))}
                  <Col sm="12" className="text-center mt-3">
                    <Button
                      href="https://remixicon.com/"
                      target="blank"
                      className="btn-primary"
                    >
                      View All Icon
                    </Button>
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

export default Remixicon;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Data_table = [
  {
    class: "far fa-address-book",
    name: "address-book",
  },
  {
    class: "fa fa-envelope-open",
    name: "envelope-open",
  },
  {
    class: "fa fa-id-card",
    name: "id-card",
  },
  {
    class: "fab fa-telegram",
    name: "telegram",
  },
  {
    class: "fa fa-user-circle",
    name: "user-circle",
  },
  {
    class: "far fa-address-card",
    name: "icard",
  },
  {
    class: "fa fa-asterisk",
    name: "aestrisk",
  },
  {
    class: "fa fa-car",
    name: "car",
  },
  {
    class: "fa fa-bars",
    name: "bars",
  },
  {
    class: "fa fa-battery-full",
    name: "battery-full",
  },
  {
    class: "fab fa-bluetooth-b",
    name: "bluetooth",
  },
  {
    class: "fa fa-book",
    name: "book",
  },
  {
    class: "fa fa-bug",
    name: "bug",
  },
  {
    class: "fa fa-building",
    name: "building",
  },
  {
    class: "fa fa-calculator",
    name: "calculator",
  },
  {
    class: "fa fa-calendar",
    name: "calendar",
  },
  {
    class: "fa fa-camera",
    name: "camera",
  },
  {
    class: "far fa-comments",
    name: "comment",
  },
  {
    class: "fa fa-crop",
    name: "crop",
  },
  {
    class: "fa fa-download",
    name: "download",
  },
  {
    class: "fa fa-folder",
    name: "folder",
  },
  {
    class: "fa fa-gift",
    name: "gift",
  },
  {
    class: "fa fa-users",
    name: "users",
  },
  {
    class: "fa fa-hashtag",
    name: "hashtag",
  },
  {
    class: "fa fa-home",
    name: "home",
  },
  {
    class: "fa fa-lock",
    name: "lock",
  },
  {
    class: "fa fa-graduation-cap",
    name: "graduation-cap",
  },
  {
    class: "fa fa-paper-plane",
    name: "paper-plane",
  },
  {
    class: "fa fa-star",
    name: "star",
  },
  {
    class: "fa fa-tag",
    name: "tag",
  },
  {
    class: "fa fa-trash",
    name: "trash",
  },
  {
    class: "fa fa-upload",
    name: "upload",
  },
  {
    class: "fa fa-university",
    name: "university",
  },
  {
    class: "fa fa-wifi",
    name: "wifi",
  },
  {
    class: "fa fa-thumbs-up",
    name: "thumbs-up",
  },
  {
    class: "fa fa-train",
    name: "train",
  },
  {
    class: "fa fa-file",
    name: "file",
  },
  {
    class: "fab fa-snapchat",
    name: "snapchat",
  },
  {
    class: "fab fa-twitter",
    name: "twitter",
  },
  {
    class: "fab fa-wordpress",
    name: "wordpress",
  },
  {
    class: "fab fa-html5",
    name: "html",
  },
  {
    class: "fab fa-css3-alt",
    name: "css",
  },
];

const Fontawesome = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Fontawesome Icon</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Use Class{" "}
                  <code>
                    &lt;i className="far fa-address-book"&gt;&lt;/i&gt;
                  </code>
                </p>
                <Row className="mt-3">
                  {Data_table.map((item, idx) => (
                    <Col sm="6" md="4" lg="2" key={idx}>
                      <Link className="iq-icons-list" to="#">
                        <i className={`${item.class}`}></i>
                        {item.name}
                      </Link>
                    </Col>
                  ))}
                  <Col sm="12" className="text-center mt-3">
                    <Button
                      href="https://fontawesome.com/v4.7.0/"
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

export default Fontawesome;

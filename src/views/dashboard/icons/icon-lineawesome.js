import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const lineawesome = [
  {
    class: "las la-bell",
    name: "bell",
  },
  {
    class: "las la-phone-volume",
    name: "phone",
  },
  {
    class: "las la-radiation",
    name: "radiation",
  },
  {
    class: "las la-dog",
    name: "dog",
  },
  {
    class: "las la-fish",
    name: "fish",
  },
  {
    class: "las la-spider",
    name: "spider",
  },
  {
    class: "las la-angle-down",
    name: "angle-down",
  },
  {
    class: "las la-angle-left",
    name: "angle-left",
  },
  {
    class: "las la-angle-right",
    name: "angle-right",
  },
  {
    class: "las la-angle-up",
    name: "angle-up",
  },
  {
    class: "las la-caret-left",
    name: "caret-left",
  },
  {
    class: "las la-caret-right",
    name: "caret-right",
  },
  {
    class: "las la-download",
    name: "download",
  },
  {
    class: "las la-location-arrow",
    name: "location-arrow",
  },
  {
    class: "las la-share",
    name: "share",
  },
  {
    class: "las la-backward",
    name: "backward",
  },
  {
    class: "las la-play",
    name: "play",
  },
  {
    class: "las la-pause",
    name: "pause",
  },
  {
    class: "las la-sync",
    name: "sync",
  },
  {
    class: "las la-volume-down",
    name: "volume-down",
  },
  {
    class: "las la-volume-mute",
    name: "volume-mute",
  },
  {
    class: "las la-volume-off",
    name: "volume-off",
  },
  {
    class: "las la-volume-up",
    name: "volume-up",
  },
  {
    class: "lab la-youtube",
    name: "youtube",
  },
  {
    class: "las la-car",
    name: "car",
  },
  {
    class: "las la-truck",
    name: "truck",
  },
  {
    class: "las la-tree",
    name: "tree",
  },
  {
    class: "lab la-pinterest-p",
    name: "pinterest",
  },
  {
    class: "lab la-java",
    name: "java",
  },
  {
    class: "las la-city",
    name: "city",
  },
  {
    class: "las la-edit",
    name: "edit",
  },
  {
    class: "las la-copy",
    name: "copy",
  },
  {
    class: "las la-cut",
    name: "cut",
  },
  {
    class: "las la-pen",
    name: "pen",
  },
  {
    class: "las la-tag",
    name: "tag",
  },
  {
    class: "las la-save",
    name: "save",
  },
  {
    class: "las la-tasks",
    name: "tasks",
  },
  {
    class: "las la-comment",
    name: "comment",
  },
  {
    class: "las la-video",
    name: "video",
  },
  {
    class: "las la-smile",
    name: "smile",
  },
  {
    class: "las la-smile",
    name: "smile",
  },
  {
    class: "las la-smile",
    name: "smile",
  },
];

const Lineawesome = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">lineawesome Icon</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Use Class{" "}
                  <code>&lt;i className="las la-bell"&gt;&lt;/i&gt;</code>
                </p>
                <Row className="mt-3">
                  {lineawesome.map((item, idx) => (
                    <Col key={idx} sm="6" md="4" lg="2">
                      <Link className="iq-icons-list" to="#">
                        <i className={`${item.class}`}></i>
                        {item.name}
                      </Link>
                    </Col>
                  ))}
                  <Col sm="12" className="text-center mt-3">
                    <Button
                      href="https://icons8.com/line-awesome"
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

export default Lineawesome;

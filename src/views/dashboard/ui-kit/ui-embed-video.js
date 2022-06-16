import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const UiEmbedVideos = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col sm="12">
              <Card
                className="position-relative inner-page-bg bg-primary"
                style={{ height: "150px" }}
              >
                <div className="inner-page-title">
                  <h3 className="text-white">Embed Video Page</h3>
                  <p className="text-white">lorem ipsum</p>
                </div>
              </Card>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Embeds Video</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    Wrap any embed like an{" "}
                    <code className="highlighter-rouge">&lt;iframe&gt;</code> in
                    a parent element with{" "}
                    <code className="highlighter-rouge">.embed-responsive</code>{" "}
                    and an aspect ratio. The{" "}
                    <code className="highlighter-rouge">
                      .embed-responsive-item
                    </code>{" "}
                    isn’t strictly required, but we encourage it.
                  </p>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      title="v1"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Responsive Aspect ratios 4:3</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    Progress components are built with two HTML elements, some
                    CSS to set the width, and a few attributes.
                  </p>
                  <div className="ratio ratio-4x3">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      title="v2"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="6">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">
                      Responsive Aspect ratios 21:9
                    </h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    Progress components are built with two HTML elements, some
                    CSS to set the width, and a few attributes.
                  </p>
                  <div className="ratio ratio-21x9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      title="v3"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Responsive Aspect ratios 1:1</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p>
                    Progress components are built with two HTML elements, some
                    CSS to set the width, and a few attributes.
                  </p>
                  <div className="ratio ratio-1x1">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      title="v4"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UiEmbedVideos;

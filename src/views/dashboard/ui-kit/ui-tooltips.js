import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const UiTooltips = () => {
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
                <h3 className="text-white">Tooltips Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Tooltips</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  You can pass the<code> Overlay</code> injected props directly
                  to the Tooltip component. Or pass a Tooltip element to{" "}
                  <code> OverlayTrigger </code> instead.
                </p>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Tooltip on top</Tooltip>}
                >
                  <Button variant="secondary mt-2">Tooltip on top</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Tooltip on right</Tooltip>}
                >
                  <Button variant="secondary mt-2">Tooltip on right</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Tooltip on bottom</Tooltip>}
                >
                  <Button variant="secondary mt-2">Tooltip on bottom</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Tooltip on left</Tooltip>}
                >
                  <Button variant="secondary mt-2">Tooltip on left</Button>
                </OverlayTrigger>{" "}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Disabled elements</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Elements with the <code>disabled</code> attribute aren’t
                  interactive, meaning users cannot hover or click them to
                  trigger a popover (or tooltip). As a workaround, you’ll want
                  to trigger the overlay from a wrapper
                  <code> &lt;div&gt; </code>or <code> &lt;span&gt; </code>and
                  override the pointer-events on the disabled element.
                </p>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="Disabledtooltip">Disabled tooltip</Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <Button
                      className="btn-primary"
                      disabled
                      style={{ pointerEvents: "none" }}
                    >
                      Disabled button
                    </Button>
                  </span>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Tooltips</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Hover over the buttons below to see the four tooltips
                  directions: top, right, bottom, and left Using background
                  colors
                </p>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Tooltip on top</Tooltip>}
                >
                  <Button className="btn-primary mt-2">Tooltip on top</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Tooltip on right</Tooltip>}
                >
                  <Button className="btn-success mt-2">Tooltip on right</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Tooltip on bottom</Tooltip>}
                >
                  <Button className="btn-danger mt-2">Tooltip on bottom</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Tooltip on left</Tooltip>}
                >
                  <Button className="btn-info mt-2">Tooltip on left</Button>
                </OverlayTrigger>{" "}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Tooltips</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Hover over the buttons below to see the four tooltips
                  directions: top, right, bottom, and left Using Light
                  background colors
                </p>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Tooltip on top</Tooltip>}
                >
                  <Button className="bg-soft-primary mt-3">
                    Tooltip on top
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Tooltip on right</Tooltip>}
                >
                  <Button className="bg-soft-success mt-3">
                    Tooltip on right
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Tooltip on bottom</Tooltip>}
                >
                  <Button className="bg-soft-danger mt-3">
                    Tooltip on bottom
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Tooltip on left</Tooltip>}
                >
                  <Button className="bg-soft-info mt-3">Tooltip on left</Button>
                </OverlayTrigger>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Hover elements</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>Hover over the buttons below to see the tooltip.</p>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">Some tooltip text!</Tooltip>
                  }
                >
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    title="Some tooltip text!"
                  >
                    Hover over me
                  </Link>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiTooltips;

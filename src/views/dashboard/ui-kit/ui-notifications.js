import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const UiNotifications = () => {
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
                <h3 className="text-white">Notification Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Notifications</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  To encourage extensible and predictable toasts, we recommend a
                  header and body. Toast headers use display: flex, allowing
                  easy alignment of content thanks to our margin and flexbox
                  utilities.
                </p>
                <Toast
                  className="fade show"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <Toast.Header>
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Stacking</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  You can stack toasts by wrapping them in a toast container,
                  which will vertically add some spacing.
                </p>
                <ToastContainer>
                  <Toast
                    className="fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <Toast.Header>
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect width="100%" height="100%" fill="#007aff"></rect>
                      </svg>
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">just now</small>
                    </Toast.Header>
                    <div className="toast-body">See? Just like this.</div>
                  </Toast>
                  <Toast
                    className="fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <Toast.Header>
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect width="100%" height="100%" fill="#007aff"></rect>
                      </svg>
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">2 seconds ago</small>
                    </Toast.Header>
                    <div className="toast-body">
                      Heads up, toasts will stack automatically
                    </div>
                  </Toast>
                </ToastContainer>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">
                    Notifications horizontally and/or vertically{" "}
                  </h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Place toasts by setting a <code> position </code> in a{" "}
                  <code>ToastContainer</code>. The top right is often used for
                  notifications, as is the top middle.
                </p>
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="bg-dark position-relative"
                  style={{ minHeight: "240px" }}
                >
                  <ToastContainer className="p-3" position="middle-center">
                    <Toast>
                      <Toast.Header closeButton={false}>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                        </svg>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                  </ToastContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Notifications</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Toasts are slightly translucent, too, so they blend over
                  whatever they might appear over. For browsers that support the{" "}
                  <code>backdrop-filter</code> CSS property, we’ll also attempt
                  to blur the elements under a toast.
                </p>
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="bg-dark position-relative"
                  style={{ minHeight: "140px" }}
                >
                  <ToastContainer className="p-3" position="top-start">
                    <Toast>
                      <Toast.Header closeButton={false}>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                        </svg>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">2 seconds ago</small>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                  </ToastContainer>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Stacking Placement</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>Toast placement</p>
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="bg-dark position-relative"
                  style={{ minHeight: "240px" }}
                >
                  <ToastContainer className="p-3" position="top-end">
                    <Toast>
                      <Toast.Header closeButton={false}>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                        </svg>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                  </ToastContainer>
                </div>
                <p className="mt-3">
                  For systems that generate more notifications, consider using a
                  wrapping element so they can easily stack.
                </p>
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="bg-dark position-relative"
                  style={{ minHeight: "240px" }}
                >
                  <ToastContainer className="position-absolute top-0 end-0 p-3">
                    <Toast
                      className="fade show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <Toast.Header closeButton={false}>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                        </svg>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">just now</small>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                    <Toast
                      className="fade show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <Toast.Header closeButton={false}>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                        </svg>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">2 seconds ago</small>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                  </ToastContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Notifications</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>
                <ToastContainer>
                  <Toast
                    className="fade show bg-primary text-white"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <Toast.Header className="bg-primary text-white">
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                      >
                        <rect width="100%" height="100%" fill="#fff"></rect>
                      </svg>
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                  <Toast
                    className="fade show bg-success text-white"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <Toast.Header className="bg-success text-white">
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                      >
                        <rect width="100%" height="100%" fill="#fff"></rect>
                      </svg>
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiNotifications;

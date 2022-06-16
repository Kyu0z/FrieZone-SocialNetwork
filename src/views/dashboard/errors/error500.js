import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// img
import error500 from "../../../assets/images/error/500.png";

const Error500 = () => {
  let history = useHistory();
  return (
    <>
      <Container className="p-0">
        <Row className="no-gutters height-self-center">
          <Col sm="12" className="text-center align-self-center">
            <div className="iq-error position-relative mt-5">
              <Image src={error500} className="img-fluid iq-error-img" alt="" />
              <h2 className="mb-0 text-center">
                Oops! This Page is Not Working.
              </h2>
              <p className="text-center">
                The requested is Internal Server Error.
              </p>
              <Button
                variant="primary"
                className="mt-3"
                onClick={() => history.push("/")}
              >
                <i className="ri-home-4-line me-1"></i>Back to Home
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error500;

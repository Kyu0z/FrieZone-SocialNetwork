import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <Container id="faqAccordion">
        <Row>
          <Col lg="12">
            <Accordion id="accordionExample" defaultActiveKey="0">
              <Accordion.Item className="mb-3" eventKey="0">
                <Accordion.Header id="heading1">
                  It is a long established reader will be?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="1">
                <Accordion.Header id="heading2">
                  Distracted by the readable page whent?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="2">
                <Accordion.Header id="heading3">
                  What is user interface kit?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="3">
                <Accordion.Header id="heading4">
                  The readable content layout?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="4">
                <Accordion.Header id="heading5">
                  The readable content of a page at its layout?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="5">
                <Accordion.Header id="heading6">
                  What is user interface kit?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="6">
                <Accordion.Header id="heading7">
                  The readable content and survived?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="7">
                <Accordion.Header id="heading8">
                  The readable content of a page layout?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mb-3" eventKey="8">
                <Accordion.Header id="heading9">
                  Distracted by readable content of a page?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;

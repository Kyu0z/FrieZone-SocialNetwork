import React from "react";
import { Container, Col, Row, Card, Pagination } from "react-bootstrap";

const UiPaginations = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
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
                <h3 className="text-white">Pagination Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Pagination Examples</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  A set of presentational components for building pagination UI.
                </p>
                <div>
                  <Pagination>{items}</Pagination>
                  <br />
                  <Pagination size="lg">{items}</Pagination>
                  <br />
                  <Pagination size="sm">{items}</Pagination>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">More options</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  For building more complex pagination UI, there are few
                  convenient sub-components for adding "First", "Previous",
                  "Next", and "Last" buttons, as well as an{" "}
                  <code>Ellipsis</code> item for indicating previous or
                  continuing results.
                </p>
                <div>
                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiPaginations;

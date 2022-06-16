import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Pricing = () => {
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
                <h3 className="text-white">Pricing Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Body>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col"></th>
                        <th className="text-center" scope="col">
                          Starter
                        </th>
                        <th className="text-center" scope="col">
                          Business
                        </th>
                        <th className="text-center" scope="col">
                          Enterprise
                        </th>
                        <th className="text-center" scope="col">
                          Unlimited
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center" scope="row">
                          Email support
                        </th>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-center" scope="row">
                          UI Kit
                        </th>
                        <td className="text-center"></td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-center" scope="row">
                          100% support
                        </th>
                        <td className="text-center"></td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-center" scope="row">
                          Advance form
                        </th>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-center" scope="row">
                          Custom shortcode
                        </th>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-center" scope="row">
                          Thousand of Widgets
                        </th>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                        <td className="text-center">
                          <i className="ri-check-line ri-2x text-success"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center"></td>
                        <td className="text-center">
                          <h2 className="text-center">
                            $19<small> / Per month</small>
                          </h2>
                          <Button variant="primary" className="mt-3">
                            Purchase
                          </Button>
                        </td>
                        <td className="text-center">
                          <h2 className="text-center">
                            $39<small> / Per month</small>
                          </h2>
                          <Button variant="primary" className="mt-3">
                            Purchase
                          </Button>
                        </td>
                        <td className="text-center">
                          <h2 className="text-center">
                            $119<small> / Per month</small>
                          </h2>
                          <Button variant="primary" className="mt-3">
                            Purchase
                          </Button>
                        </td>
                        <td className="text-center">
                          <h2 className="text-center">
                            $219<small> / Per month</small>
                          </h2>
                          <Button variant="primary" className="mt-3">
                            Purchase
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { Trans } from "react-i18next";

//img
import profilebg4 from "../../../assets/images/page-img/profile-bg4.jpg";

import user5 from "../../../assets/images/user/05.jpg";
import user6 from "../../../assets/images/user/06.jpg";
import user7 from "../../../assets/images/user/07.jpg";
import user8 from "../../../assets/images/user/08.jpg";
import user9 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
import user13 from "../../../assets/images/user/13.jpg";
import user14 from "../../../assets/images/user/14.jpg";
import user15 from "../../../assets/images/user/15.jpg";
import user16 from "../../../assets/images/user/16.jpg";
import user17 from "../../../assets/images/user/17.jpg";
import user18 from "../../../assets/images/user/18.jpg";
import user19 from "../../../assets/images/user/19.jpg";

//profile-header
import ProfileHeader from "../../../components/profile-header";

const Birthday = () => {
  return (
    <>
      <ProfileHeader title="Birthday" img={profilebg4} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col sm="12">
              <div className="birthday-block">
                <Card>
                  <Card.Header className="d-flex justify-content-between rounded border-bottom-0">
                    <div className="header-title">
                      <h4 className="card-title"><Trans i18nKey="today_birth" /></h4>
                    </div>
                  </Card.Header>
                </Card>
                <Row>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user5}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Petey Cruiser</h5>
                                <p className="mb-0">Today</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user6}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Petey Cruiser</h5>
                                <p className="mb-0">Today</p>
                              </div>
                            </div>
                            <Button variant="primary"><Trans i18nKey="create_box" /></Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="birthday-block">
                <Card>
                  <Card.Header className=" d-flex justify-content-between rounded border-bottom-0">
                    <div className="header-title">
                      <h4 className="card-title">
                        <Trans i18nKey="upcoming_birthday_title" />
                      </h4>
                    </div>
                  </Card.Header>
                </Card>
                <Row>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user7}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Petey Cruiser</h5>
                                <p className="mb-0">Tomorrow</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user8}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Paul Molive</h5>
                                <p className="mb-0">Tomorrow</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="birthday-block">
                <Card>
                  <Card.Header className=" d-flex justify-content-between rounded border-bottom-0">
                    <div className="header-title">
                      <h4 className="card-title"><Trans i18nKey="jan_birth" /></h4>
                    </div>
                  </Card.Header>
                </Card>
                <Row>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user9}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Paige Turner</h5>
                                <p className="mb-0">02-jan-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user10}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Bob Frapples</h5>
                                <p className="mb-0">15-jan-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user13}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Barb Ackue</h5>
                                <p className="mb-0">15-jan-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="birthday-block">
                <Card>
                  <Card.Header className=" d-flex justify-content-between rounded border-bottom-0">
                    <div className="header-title">
                      <h4 className="card-title"><Trans i18nKey="feb_birth" /></h4>
                    </div>
                  </Card.Header>
                </Card>
                <Row>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user14}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Greta Life</h5>
                                <p className="mb-0">01-feb-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="birthday-block">
                <Card>
                  <Card.Header className=" d-flex justify-content-between rounded border-bottom-0">
                    <div className="header-title">
                      <h4 className="card-title"><Trans i18nKey="mar_birth" /></h4>
                    </div>
                  </Card.Header>
                </Card>
                <Row>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user15}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Ira Membrit</h5>
                                <p className="mb-0">01-Mar-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user16}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Pete Sariya</h5>
                                <p className="mb-0">5-Mar-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user17}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Monty Carlo</h5>
                                <p className="mb-0">20-Mar-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user18}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Ed Itorial</h5>
                                <p className="mb-0">30-Mar-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="birthday-block">
                <Card>
                  <Card.Header className=" d-flex justify-content-between rounded border-bottom-0">
                    <div className="header-title">
                      <h4 className="card-title"><Trans i18nKey="apr_birth" /></h4>
                    </div>
                  </Card.Header>
                </Card>
                <Row>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user19}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Paul Issy</h5>
                                <p className="mb-0">06-Apr-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user7}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Rick Shaw</h5>
                                <p className="mb-0">12-Apr-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user8}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Ben Effit</h5>
                                <p className="mb-0">18-Apr-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="birthday-block">
                <Card>
                  <Card.Header className=" d-flex justify-content-between rounded border-bottom-0">
                    <div className="header-title">
                      <h4 className="card-title"><Trans i18nKey="may_birth" /></h4>
                    </div>
                  </Card.Header>
                </Card>
                <Row>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user9}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Justin Case</h5>
                                <p className="mb-0">03-May-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user10}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Aaron Ottix</h5>
                                <p className="mb-0">4-May-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="6" md-="12">
                    <Card>
                      <Card.Body>
                        <div className="iq-birthday-block">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img
                                  src={user13}
                                  alt="profile-img"
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="friend-info ms-0 ms-md-3 mt-md-0 mt-2">
                                <h5>Pete Sariya</h5>
                                <p className="mb-0">15-May-2020</p>
                              </div>
                            </div>
                            <button className="btn btn-primary">
                              <Trans i18nKey="create_box" />
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Birthday;

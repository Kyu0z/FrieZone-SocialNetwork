import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";

//img
import user1 from "../../../assets/images/user/01.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import store1 from "../../../assets/images/store/01.jpg";
import store2 from "../../../assets/images/store/02.jpg";
import store3 from "../../../assets/images/store/03.jpg";
import store4 from "../../../assets/images/store/04.jpg";
import store5 from "../../../assets/images/store/05.jpg";
import store6 from "../../../assets/images/store/06.jpg";
import store7 from "../../../assets/images/store/07.jpg";
import store8 from "../../../assets/images/store/08.jpg";

import profilebg7 from "../../../assets/images/page-img/profile-bg7.jpg";

//profile-header
import ProfileHeader from "../../../components/profile-header";

const CatergoryList = () => {
  return (
    <>
      <ProfileHeader title="Store Category" img={profilebg7} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col lg="4">
              <Card>
                <Card.Header className=" d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Store Categories</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Form.Check className="form-check mb-2 d-block">
                    <Form.Check.Input type="checkbox" id="customCheck7" />
                    <Form.Check.Label htmlFor="customCheck7">
                      All Categories
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="  mb-2 d-block">
                    <Form.Check.Input type="checkbox" id="customCheck8" />
                    <Form.Check.Label htmlFor="customCheck8">
                      PSD Templates
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="  mb-2 d-block">
                    <Form.Check.Input type="checkbox" id="customCheck9" />
                    <Form.Check.Label htmlFor="customCheck9">
                      HTML Templates
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="  mb-2 d-block">
                    <Form.Check.Input type="checkbox" id="customCheck10" />
                    <Form.Check.Label htmlFor="customCheck10">
                      WP Templates
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className=" mb-2 d-block">
                    <Form.Check.Input type="checkbox" id="customCheck11" />
                    <Form.Check.Label htmlFor="customCheck11">
                      Stream Packs
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className=" d-block">
                    <Form.Check.Input type="checkbox" id="customCheck12" />
                    <Form.Check.Label htmlFor="customCheck12">
                      Logos and Badges
                    </Form.Check.Label>
                  </Form.Check>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className=" d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Price Range</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Form.Group className="form-group me-3" controlId="name1">
                      <label htmlFor="name1">From:</label>
                      <Form.Control type="text" defaultValue="$" />
                    </Form.Group>
                    <Form.Group className="form-group me-3">
                      <label htmlFor="to">To:</label>
                      <Form.Control type="text" id="to" defaultValue="$" />
                    </Form.Group>
                  </div>
                  <Button type="submit" variant="primary w-100">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className=" d-flex justify-content-between">
                  <div className="header-title">
                    <Card.Header.Title Aas="h4">Reviews</Card.Header.Title>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <Form.Check className="form-check d-flex align-items-center">
                      <Form.Check.Input
                        type="radio"
                        name="bsradio"
                        id="radio1"
                        defaultChecked
                      />
                      <Form.Check.Label htmlFor="radio1" className=" mb-0 ps-2">
                        <b>Al Reviews</b>
                      </Form.Check.Label>
                    </Form.Check>
                    <h6 className="text-primary">6870</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Form.Check className="form-check d-inline-block">
                      <Form.Check.Input
                        type="radio"
                        name="bsradio"
                        id="radio2"
                        defaultChecked
                      />
                      <Form.Check.Label htmlFor="radio2" className=" mb-0">
                        <span className="d-block line-height text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </Form.Check.Label>
                    </Form.Check>
                    <h6 className="text-primary">1023</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Form.Check className="form-check d-inline-block">
                      <Form.Check.Input
                        type="radio"
                        name="bsradio"
                        id="radio3"
                        defaultChecked
                      />
                      <Form.Check.Label htmlFor="radio3" className=" mb-0">
                        <span className="d-block line-height text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </span>
                      </Form.Check.Label>
                    </Form.Check>
                    <h6 className="text-primary">1000</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Form.Check className="form-check d-inline-block">
                      <Form.Check.Input
                        type="radio"
                        name="bsradio"
                        id="radio4"
                        defaultChecked
                      />
                      <Form.Check.Label htmlFor="radio4" className=" mb-0">
                        <span className="d-block line-height text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="far fa-star"></i>
                        </span>
                      </Form.Check.Label>
                    </Form.Check>
                    <h6 className="text-primary">982</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Form.Check className="form-check d-inline-block">
                      <Form.Check.Input
                        type="radio"
                        name="bsradio"
                        id="radio5"
                        defaultChecked
                      />
                      <Form.Check.Label htmlFor="radio5" className=" mb-0">
                        <span className="d-block line-height text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </span>
                      </Form.Check.Label>
                    </Form.Check>
                    <h6 className="text-primary">204</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Form.Check className="form-check d-inline-block">
                      <Form.Check.Input
                        type="radio"
                        name="bsradio"
                        id="radio6"
                        defaultChecked
                      />
                      <label htmlFor="radio6" className="form-check-label mb-0">
                        <span className="d-block line-height text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </span>
                      </label>
                    </Form.Check>
                    <h6 className="text-primary">50</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <Form.Check className="form-check d-inline-block">
                      <Form.Check.Input
                        type="radio"
                        name="bsradio"
                        id="radio7"
                        defaultChecked
                      />
                      <Form.Check.Label htmlFor="radio7" className=" mb-0">
                        <span className="d-block line-height text-warning">
                          <i className="fa fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </span>
                      </Form.Check.Label>
                    </Form.Check>
                    <h6 className="text-primary">8</h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="8">
              <Row>
                <Col md="12">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <Row className="align-items-top mb-3">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store1}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user1}
                                  alt=""
                                />
                                <div className=" ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-top mb-3">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store2}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user2}
                                  alt=""
                                />
                                <div className=" ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-top mb-3">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store3}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user1}
                                  alt=""
                                />
                                <div className=" ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-top mb-3">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store4}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user1}
                                  alt=""
                                />
                                <div className="ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-top mb-3">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store5}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user1}
                                  alt=""
                                />
                                <div className=" ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-top mb-3">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store6}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user1}
                                  alt=""
                                />
                                <div className=" ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-top mb-3">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store7}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user1}
                                  alt=""
                                />
                                <div className=" ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-top">
                        <Col lg="6">
                          <div className="image-block position-relative">
                            <img
                              src={store8}
                              className="img-fluid w-100 rounded"
                              alt="product-img"
                            />
                            <div className="offer">
                              <div className="offer-title">20%</div>
                            </div>
                            <h6 className="price">
                              <span className="regular-price text-dark pr-2">
                                $87.00
                              </span>
                              $75.00
                            </h6>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="product-description ps-2 circle-category mt-2 mt-md-0">
                            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <img
                                  className="img-fluid rounded-circle avatar-30"
                                  src={user1}
                                  alt=""
                                />
                                <div className=" ms-2">
                                  <p className="mb-0 line-height">Posted By</p>
                                  <h6>
                                    <Link to="#">Bearded Wonder</Link>
                                  </h6>
                                </div>
                              </div>
                              <div className="d-block line-height">
                                <span className="text-warning">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-1">Flaming Skull Team Logo</h6>
                            <span className="categry text-primary ps-3 mb-2 position-relative">
                              Logo and badges
                            </span>
                            <p className="mb-0">
                              Success in containing the virus comes slowing
                              activity.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CatergoryList;

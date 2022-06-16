import React from "react";
import Card from "../../../components/Card";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//img
import user1 from "../../../assets/images/user/01.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import user3 from "../../../assets/images/user/03.jpg";
import user4 from "../../../assets/images/user/04.jpg";
import user5 from "../../../assets/images/user/05.jpg";
import user6 from "../../../assets/images/user/06.jpg";
import user7 from "../../../assets/images/user/07.jpg";
import user8 from "../../../assets/images/user/08.jpg";

import store1 from "../../../assets/images/store/01.jpg";
import store2 from "../../../assets/images/store/02.jpg";
import store3 from "../../../assets/images/store/03.jpg";
import store4 from "../../../assets/images/store/04.jpg";
import store5 from "../../../assets/images/store/05.jpg";
import store6 from "../../../assets/images/store/06.jpg";
import store7 from "../../../assets/images/store/07.jpg";
import store8 from "../../../assets/images/store/08.jpg";
import profilebg7 from "../../../assets/images/page-img/profile-bg7.jpg";

import ProfileHeader from "../../../components/profile-header";

const CatergoryGrid = () => {
  return (
    <>
      <ProfileHeader title="Store Category" img={profilebg7} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col lg="4">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Store Categories</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Form.Check className="form-check d-block mb-2">
                    <Form.Check.Input type="checkbox" id="customCheck1" />
                    <Form.Check.Label htmlFor="customCheck1">
                      All Categories
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="form-check d-block mb-2">
                    <Form.Check.Input type="checkbox" id="customCheck2" />
                    <Form.Check.Label htmlFor="customCheck2">
                      PSD Templates
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="form-check d-block mb-2">
                    <Form.Check.Input type="checkbox" id="customCheck3" />
                    <Form.Check.Label htmlFor="customCheck3">
                      HTML Templates
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="form-check d-block mb-2">
                    <Form.Check.Input type="checkbox" id="customCheck4" />
                    <Form.Check.Label htmlFor="customCheck4">
                      WP Templates
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="form-check d-block mb-2">
                    <Form.Check.Input type="checkbox" id="customCheck5" />
                    <Form.Check.Label htmlFor="customCheck5">
                      Stream Packs
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="form-check d-block">
                    <Form.Check.Input type="checkbox" id="customCheck6" />
                    <Form.Check.Label htmlFor="customCheck6">
                      Logos and Badges
                    </Form.Check.Label>
                  </Form.Check>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Price Range</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Form.Group className="form-group me-3">
                      <label htmlFor="name01">From:</label>
                      <Form.Control
                        type="text"
                        id="name01"
                        defaultValue="$  "
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
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
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <Card.Header.Title as="h4">Reviews</Card.Header.Title>
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
                        <span className=" text-warning d-block line-height">
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
                        <span className="text-warning d-block line-height">
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
                      <Form.Check.Label htmlFor="radio4" className="mb-0">
                        <span className="text-warning d-block line-height">
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
                        <span className="text-warning d-block line-height">
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
                      <Form.Check.Label htmlFor="radio6" className=" mb-0">
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </span>
                      </Form.Check.Label>
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
                      <Form.Check.Label htmlFor="radio7" className="mb-0">
                        <span className="text-warning d-block line-height">
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
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user1}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Bearded Wonder</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
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
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user2}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Paul Molive</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="image-block position-relative">
                        <img
                          src={store2}
                          className="img-fluid w-100 rounded"
                          alt="product-img"
                        />
                        <div className="offer">
                          <div className="offer-title">30%</div>
                        </div>
                        <h6 className="price">
                          <span className="regular-price text-dark pr-2">
                            $87.00
                          </span>
                          $75.00
                        </h6>
                      </div>
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user3}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Anna Mull</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="image-block position-relative">
                        <img
                          src={store3}
                          className="img-fluid w-100 rounded"
                          alt="product-img"
                        />
                        <div className="offer bg-danger">
                          <div className="offer-title">50%</div>
                        </div>
                        <h6 className="price">
                          <span className="regular-price text-dark pr-2">
                            $87.00
                          </span>
                          $75.00
                        </h6>
                      </div>
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user4}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Terry Aki</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="image-block position-relative">
                        <img
                          src={store4}
                          className="img-fluid w-100 rounded"
                          alt="product-img"
                        />
                        <div className="offer">
                          <div className="offer-title">30%</div>
                        </div>
                        <h6 className="price">
                          <span className="regular-price text-dark pr-2">
                            $87.00
                          </span>
                          $75.00
                        </h6>
                      </div>
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user5}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Rock lai</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
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
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user6}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Cliff Hanger</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="image-block position-relative">
                        <img
                          src={store6}
                          className="img-fluid w-100 rounded"
                          alt="product-img"
                        />
                        <div className="offer">
                          <div className="offer-title">40%</div>
                        </div>
                        <h6 className="price">
                          <span className="regular-price text-dark pr-2">
                            $87.00
                          </span>
                          $75.00
                        </h6>
                      </div>
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user7}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Pete Sariya</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="image-block position-relative">
                        <img
                          src={store7}
                          className="img-fluid w-100 rounded"
                          alt="product-img"
                        />
                        <div className="offer bg-danger">
                          <div className="offer-title">50%</div>
                        </div>
                        <h6 className="price">
                          <span className="regular-price text-dark pr-2">
                            $87.00
                          </span>
                          $75.00
                        </h6>
                      </div>
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user8}
                            alt=""
                          />
                          <div className="media-body ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Alex john</Link>
                            </h6>
                          </div>
                        </div>
                        <span className="text-warning d-block line-height">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="image-block position-relative">
                        <img
                          src={store8}
                          className="img-fluid w-100 rounded"
                          alt="product-img"
                        />
                        <div className="offer">
                          <div className="offer-title">30%</div>
                        </div>
                        <h6 className="price">
                          <span className="regular-price text-dark pr-2">
                            $87.00
                          </span>
                          $75.00
                        </h6>
                      </div>
                      <div className="product-description mt-3">
                        <h6 className="mb-1">Flaming Skull Team Logo</h6>
                        <span className="categry text-primary ps-3 mb-2 position-relative">
                          Logo and badges
                        </span>
                        <p className="mb-0">
                          Success in containing the virus comes slowing
                          activity.
                        </p>
                      </div>
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

export default CatergoryGrid;

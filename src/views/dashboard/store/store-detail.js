import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/Card";

//img
import storec1 from "../../../assets/images/store/c1.jpg";
import storec2 from "../../../assets/images/store/c2.jpg";
import storec3 from "../../../assets/images/store/c3.jpg";
import storec4 from "../../../assets/images/store/c4.jpg";

import user1 from "../../../assets/images/user/01.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import user3 from "../../../assets/images/user/03.jpg";
import user4 from "../../../assets/images/user/04.jpg";
import user5 from "../../../assets/images/user/05.jpg";
import user6 from "../../../assets/images/user/06.jpg";
import user7 from "../../../assets/images/user/07.jpg";
import user8 from "../../../assets/images/user/08.jpg";
import user9 from "../../../assets/images/user/09.jpg";

import store1 from "../../../assets/images/store/01.jpg";
import store2 from "../../../assets/images/store/02.jpg";
import store3 from "../../../assets/images/store/03.jpg";
import store4 from "../../../assets/images/store/04.jpg";
import store5 from "../../../assets/images/store/05.jpg";
import store6 from "../../../assets/images/store/06.jpg";
import store7 from "../../../assets/images/store/07.jpg";
import store8 from "../../../assets/images/store/08.jpg";
import store9 from "../../../assets/images/store/09.jpg";

import profilebg7 from "../../../assets/images/page-img/profile-bg7.jpg";

//profile-header
import ProfileHeader from "../../../components/profile-header";

const StoreDetail = () => {
  return (
    <>
      <ProfileHeader title="Store" img={profilebg7} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col lg="12">
              <Card>
                <Card.Header className=" d-flex justify-content-between">
                  <div className="header-title">
                    <h4>Store Categories</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col sm="6" md="6" lg="3" className=" mb-md-0 mb-2">
                      <Link to="/dashboards/store/store-category-grid">
                        <img
                          className="img-fluid rounded"
                          src={storec1}
                          alt="category-image1"
                        />
                      </Link>
                    </Col>
                    <Col sm="6" md="6" lg="3" className=" mb-md-0 mb-2">
                      <Link to="/dashboards/store/store-category-grid">
                        <img
                          className="img-fluid rounded"
                          src={storec2}
                          alt="category-image2"
                        />
                      </Link>
                    </Col>
                    <Col sm="6" md="6" lg="3" className=" mb-md-0 mb-2">
                      <Link to="/dashboards/store/store-category-grid">
                        <img
                          className="img-fluid rounded"
                          src={storec3}
                          alt="category-image3"
                        />
                      </Link>
                    </Col>
                    <Col sm="6" md="6" lg="3">
                      <Link to="/dashboards/store/store-category-grid">
                        <img
                          className="img-fluid rounded"
                          src={storec4}
                          alt="category-image4"
                        />
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="12">
              <Card className=" shadow-none p-0">
                <Card.Header className=" d-flex justify-content-between rounded border-bottom-0">
                  <div className="header-title">
                    <h4>Store Categories</h4>
                  </div>
                </Card.Header>
              </Card>
              <Row>
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
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
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user2}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Paul Molive</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user3}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Anna Mull</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user4}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Terry Aki</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user5}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Rock lai</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user6}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Cliff Hanger</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user7}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Pete Sariya</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user8}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Alex john</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
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
                <Col sm="6" md="6" lg="4">
                  <Card className="card-block card-stretch card-height product">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between pb-3">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle avatar-30"
                            src={user9}
                            alt=""
                          />
                          <div className="ms-2">
                            <p className="mb-0 line-height">Posted By</p>
                            <h6>
                              <Link to="#">Paige Turner</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="d-block line-height">
                          <span className=" text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                        </div>
                      </div>
                      <div className="image-block position-relative">
                        <img
                          src={store9}
                          className="img-fluid w-100 rounded"
                          alt="product-img"
                        />
                        <div className="offer">
                          <div className="offer-title">10%</div>
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

export default StoreDetail;

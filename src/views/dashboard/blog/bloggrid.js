import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

// img
import blog1 from "../../../assets/images/blog/b1.jpg";
import blog2 from "../../../assets/images/blog/03.jpg";
import blog3 from "../../../assets/images/blog/04.jpg";
import blog4 from "../../../assets/images/blog/b2.jpg";
import blog5 from "../../../assets/images/blog/b3.jpg";
import blog6 from "../../../assets/images/blog/01.jpg";
import blog7 from "../../../assets/images/blog/b4.jpg";

import icon1 from "../../../assets/images/icon/01.png";
import icon2 from "../../../assets/images/icon/02.png";
import icon3 from "../../../assets/images/icon/03.png";
import icon4 from "../../../assets/images/icon/07.png";

const BlogGrid = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <Card className="card-block card-stretch card-height shadow-none blog-grid">
              <Card.Body className="p-0">
                <Row className="align-items-center">
                  <Col lg="6">
                    <div className="image-block mt-3">
                      <Image
                        src={blog1}
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="blog-description shadow-none p-3 text-center">
                      <div className="date mb-1">
                        <Link to="#" tabIndex="-1">
                          4 Month ago
                        </Link>
                      </div>
                      <h5 className="mb-2">
                        Containing coronavirus spread comes
                      </h5>
                      <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                        <div className="iq-media-group">
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon1}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon2}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon3}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon4}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="comment">
                          <i className="ri-chat-3-line me-2"></i>7 comments
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-transparent card-block card-stretch card-height blog-grid blog-single">
              <Card.Body className="p-0 position-relative">
                <div className="image-block">
                  <Image
                    src={blog2}
                    className="img-fluid rounded w-100"
                    alt="blog-img"
                  />
                </div>
                <div className="blog-description p-3">
                  <div className="date">
                    <Link to="#" tabIndex="-1">
                      3 Month ago
                    </Link>
                  </div>
                  <h5 className="mb-2">Containing coronavirus spread comes</h5>
                  <div className="d-flex align-items-center justify-content-between position-right-side">
                    <div className="like">
                      <i className="ri-thumb-up-line pe-2"></i>20 like
                    </div>
                    <div className="comments">
                      <i className="las la-comment-alt pe-2"></i>351 Comments
                    </div>
                    <div className="share">
                      <i className="ri-share-forward-line pe-2"></i>share
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-transparent card-block card-stretch card-height blog-grid blog-single">
              <Card.Body className="p-0 position-relative">
                <div className="image-block">
                  <Image
                    src={blog3}
                    className="img-fluid rounded w-100"
                    alt="blog-img"
                  />
                </div>
                <div className="blog-description p-3">
                  <div className="date">
                    <Link to="#" tabIndex="-1">
                      3 Month ago
                    </Link>
                  </div>
                  <h5 className="mb-2">Containing coronavirus spread comes</h5>
                  <div className="d-flex align-items-center justify-content-between position-right-side">
                    <div className="like">
                      <i className="ri-thumb-up-line pe-2"></i>20 like
                    </div>
                    <div className="comments">
                      <i className="las la-comment-alt pe-2"></i>351 Comments
                    </div>
                    <div className="share">
                      <i className="ri-share-forward-line pe-2"></i>share
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height shadow-none blog-grid">
              <Card.Body className="p-0">
                <Row className="align-items-center">
                  <Col lg="6">
                    <div className="blog-description shadow-none p-3 text-center">
                      <div className="date mb-1">
                        <Link to="#" tabIndex="-1">
                          4 Month ago
                        </Link>
                      </div>
                      <h5 className="mb-2">
                        Containing coronavirus spread comes
                      </h5>
                      <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                        <div className="iq-media-group">
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon1}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon2}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon3}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon4}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="comment">
                          <i className="ri-chat-3-line me-2"></i>7 comments
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="image-block mt-3">
                      <Image
                        src={blog4}
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height shadow-none blog-grid">
              <Card.Body className="p-0">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="image-block mt-3">
                      <Image
                        src={blog5}
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </div>
                  </div>
                  <Col lg="6">
                    <div className="blog-description shadow-none p-3 text-center">
                      <div className="date mb-1">
                        <Link to="#" tabIndex="-1">
                          4 Month ago
                        </Link>
                      </div>
                      <h5 className="mb-2">
                        Containing coronavirus spread comes
                      </h5>
                      <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                        <div className="iq-media-group">
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon1}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon2}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon3}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon4}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="comment">
                          <i className="ri-chat-3-line me-2"></i>7 comments
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-transparent card-block card-stretch card-height blog-grid blog-single">
              <Card.Body className="p-0 position-relative">
                <div className="image-block">
                  <Image
                    src={blog6}
                    className="img-fluid rounded w-100"
                    alt="blog-img"
                  />
                </div>
                <div className="blog-description p-3">
                  <div className="date">
                    <Link to="#" tabIndex="-1">
                      3 Month ago
                    </Link>
                  </div>
                  <h5 className="mb-2">Containing coronavirus spread comes</h5>
                  <div className="d-flex align-items-center justify-content-between position-right-side">
                    <div className="like">
                      <i className="ri-thumb-up-line pe-2"></i>20 like
                    </div>
                    <div className="comments">
                      <i className="las la-comment-alt pe-2"></i>351 Comments
                    </div>
                    <div className="share">
                      <i className="ri-share-forward-line pe-2"></i>share
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-transparent card-block card-stretch card-height blog-grid blog-single">
              <Card.Body className="p-0 position-relative">
                <div className="image-block">
                  <Image
                    src={blog2}
                    className="img-fluid rounded w-100"
                    alt="blog-img"
                  />
                </div>
                <div className="blog-description p-3">
                  <div className="date">
                    <Link to="#" tabIndex="-1">
                      3 Month ago
                    </Link>
                  </div>
                  <h5 className="mb-2">Containing coronavirus spread comes</h5>
                  <div className="d-flex align-items-center justify-content-between position-right-side">
                    <div className="like">
                      <i className="ri-thumb-up-line pe-2"></i>20 like
                    </div>
                    <div className="comments">
                      <i className="las la-comment-alt pe-2"></i>351 Comments
                    </div>
                    <div className="share">
                      <i className="ri-share-forward-line pe-2"></i>share
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-block card-stretch card-height shadow-none blog-grid">
              <Card.Body className="p-0">
                <Row className="align-items-center">
                  <Col lg="6">
                    <div className="blog-description shadow-none p-3 text-center">
                      <div className="date mb-1">
                        <Link to="#" tabIndex="-1">
                          4 Month ago
                        </Link>
                      </div>
                      <h5 className="mb-2">
                        Containing coronavirus spread comes
                      </h5>
                      <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                        <div className="iq-media-group">
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon1}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon2}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon3}
                              alt=""
                            />
                          </Link>
                          <Link to="#" className="iq-media">
                            <Image
                              className="img-fluid rounded-circle"
                              src={icon4}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="comment">
                          <i className="ri-chat-3-line me-2"></i>7 comments
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="image-block mt-3">
                      <Image
                        src={blog7}
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogGrid;

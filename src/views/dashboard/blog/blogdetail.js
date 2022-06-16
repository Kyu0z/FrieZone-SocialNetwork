import React from "react";
import { Row, Col, Image, Container, Button, Form } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

// img
import blog9 from "../../../assets/images/blog/01.jpg";
import blog3 from "../../../assets/images/blog/03.jpg";
import blog4 from "../../../assets/images/blog/04.jpg";
import blog5 from "../../../assets/images/blog/05.jpg";
import blog6 from "../../../assets/images/blog/06.jpg";
import blog7 from "../../../assets/images/blog/07.jpg";
import blog8 from "../../../assets/images/blog/08.jpg";

import user1 from "../../../assets/images/user/01.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import user3 from "../../../assets/images/user/03.jpg";
import user4 from "../../../assets/images/user/04.jpg";

const BlogDetail = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="8">
            <Card className="card-block card-stretch card-height blog blog-detail">
              <Card.Body>
                <div className="image-block">
                  <Image
                    src={blog9}
                    className="img-fluid rounded w-100"
                    alt="blog-img"
                  />
                </div>
                <div className="blog-description mt-3">
                  <h5 className="mb-3 pb-3 border-bottom">
                    There are many variations of passages.
                  </h5>
                  <div className="blog-meta d-flex align-items-center mb-3 position-right-side flex-wrap">
                    <div className="date me-4">
                      <i className="ri-calendar-2-fill text-primary pe-2"></i>2
                      Weeks ago
                    </div>
                    <div className="like me-4">
                      <i className="ri-thumb-up-line text-primary pe-2"></i>20
                      like
                    </div>
                    <div className="comments me-4">
                      <i className="ri-chat-3-line text-primary pe-2"></i>82
                      comments
                    </div>
                    <div className="share">
                      <i className="ri-share-forward-line text-primary pe-2"></i>
                      share
                    </div>
                  </div>
                  <p>
                    Voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <Link to="#" tabIndex="-1">
                    Read More <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-block card-stretch card-height blog-post">
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">New Post</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="list-inline p-0 mb-0 mt-2">
                  <li className="mb-3">
                    <Row className="align-items-top pb-3 border-bottom">
                      <Col md="5">
                        <div className="image-block">
                          <Image
                            src={blog3}
                            className="img-fluid rounded w-100"
                            alt="blog-img"
                          />
                        </div>
                      </Col>
                      <Col md="7">
                        <div className="blog-description mt-1 mt-md-0">
                          <div className="date mb-1">
                            <Link to="#" tabIndex="-1">
                              4 Weeks ago
                            </Link>
                          </div>
                          <h6>All the Lorem Ipsum generators</h6>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="mb-3">
                    <Row className="align-items-top pb-3 border-bottom">
                      <Col md="5">
                        <div className="image-block">
                          <Image
                            src={blog4}
                            className="img-fluid rounded w-100"
                            alt="blog-img"
                          />
                        </div>
                      </Col>
                      <Col md="7">
                        <div className="blog-description mt-1 mt-md-0">
                          <div className="date mb-1">
                            <Link to="#" tabIndex="-1">
                              3 Weeks ago
                            </Link>
                          </div>
                          <h6>All the Lorem Ipsum generators</h6>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="mb-3">
                    <Row className="align-items-top pb-3 border-bottom">
                      <Col md="5">
                        <div className="image-block">
                          <Image
                            src={blog5}
                            className="img-fluid rounded w-100"
                            alt="blog-img"
                          />
                        </div>
                      </Col>
                      <Col md="7">
                        <div className="blog-description mt-1 mt-md-0">
                          <div className="date mb-1">
                            <Link to="#" tabIndex="-1">
                              2 Weeks ago
                            </Link>
                          </div>
                          <h6>All the Lorem Ipsum generators</h6>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="mb-3">
                    <Row className="align-items-top pb-3 border-bottom">
                      <Col md="5">
                        <div className="image-block">
                          <Image
                            src={blog6}
                            className="img-fluid rounded w-100"
                            alt="blog-img"
                          />
                        </div>
                      </Col>
                      <Col md="7">
                        <div className="blog-description mt-1 mt-md-0">
                          <div className="date mb-1">
                            <Link to="#" tabIndex="-1">
                              1 Week ago
                            </Link>
                          </div>
                          <h6>All the Lorem Ipsum generators</h6>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="mb-3">
                    <Row className="align-items-top pb-3 border-bottom">
                      <Col md="5">
                        <div className="image-block">
                          <Image
                            src={blog7}
                            className="img-fluid rounded w-100"
                            alt="blog-img"
                          />
                        </div>
                      </Col>
                      <Col md="7">
                        <div className="blog-description mt-1 mt-md-0">
                          <div className="date mb-1">
                            <Link to="#" tabIndex="-1">
                              3 days ago
                            </Link>
                          </div>
                          <h6>All the Lorem Ipsum generators</h6>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row className="align-items-top">
                      <Col md="5">
                        <div className="image-block">
                          <Image
                            src={blog8}
                            className="img-fluid rounded w-100"
                            alt="blog-img"
                          />
                        </div>
                      </Col>
                      <Col md="7">
                        <div className="blog-description mt-1 mt-md-0">
                          <div className="date mb-1">
                            <Link to="#" tabIndex="-1">
                              2 Days ago
                            </Link>
                          </div>
                          <h6>All the Lorem Ipsum generators</h6>
                        </div>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="12">
            <Card className="card-block card-stretch card-height blog user-comment">
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">User Comment</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg="12">
                    <Card className="card-block card-stretch card-height blog">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <div className="user-image mb-3">
                            <Image
                              className="avatar-80 rounded"
                              src={user1}
                              alt="#"
                              data-original-title=""
                              title=""
                            />
                          </div>
                          <div className="ms-3">
                            <h5>Kaya Scodelario</h5>
                            <p>Web Developer</p>
                          </div>
                        </div>
                        <div className="blog-description">
                          <p>
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum atque
                            corrupti quos dolores et quas molestias excepturi
                            sint occaecati cupiditate non provident.
                          </p>
                          <div className="d-flex align-items-center justify-content-between mb-2 position-right-side">
                            <Link to="#" className="comments">
                              <i className="ri-chat-3-fill pe-2"></i>82 comments
                            </Link>
                            <span className="font-size-12 text-warning">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="12" className="ps-0 ps-md-5">
                    <Card className="card-block card-stretch card-height blog">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <div className="user-image mb-3">
                            <Image
                              className="avatar-80 rounded"
                              src={user2}
                              alt="#"
                              data-original-title=""
                              title=""
                            />
                          </div>
                          <div className="ms-3">
                            <h5>Tom Cruise</h5>
                            <p>Web Designer</p>
                          </div>
                        </div>
                        <div className="blog-description">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum Many desktop publishing packages and web page
                            editors now use Lorem Ipsum.
                          </p>
                          <div className="d-flex align-items-center justify-content-between mb-2 position-right-side">
                            <Link to="#" className="comments">
                              <i className="ri-chat-3-fill pe-2"></i>98 comments
                            </Link>
                            <span className="font-size-12 text-warning">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="12">
                    <Card className="card-block card-stretch card-height blog">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <div className="user-image mb-3">
                            <Image
                              className="avatar-80 rounded"
                              src={user3}
                              alt="#"
                              data-original-title=""
                              title=""
                            />
                          </div>
                          <div className="ms-3">
                            <h5>Walter Hucko</h5>
                            <p>Web Designer</p>
                          </div>
                        </div>
                        <div className="blog-description">
                          <p>
                            TThere are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div className="d-flex align-items-center justify-content-between mb-2 position-right-side">
                            <Link to="#" className="comments">
                              <i className="ri-chat-3-fill pe-2"></i>28 comments
                            </Link>
                            <span className="font-size-12 text-warning">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <i className="far fa-star"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="12" className="ps-0 ps-md-5">
                    <Card className="card-block card-stretch card-height blog">
                      <Card.Body>
                        <div className="d-flex align-items-center">
                          <div className="user-image mb-3">
                            <Image
                              className="avatar-80 rounded"
                              src={user4}
                              alt="#"
                              data-original-title=""
                              title=""
                            />
                          </div>
                          <div className="ms-3">
                            <h5>Mark Walton</h5>
                            <p>Web Manager</p>
                          </div>
                        </div>
                        <div className="blog-description">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.randomised words which don't look even
                            slightly believable variations of passages.
                          </p>
                          <div className="d-flex align-items-center justify-content-between mb-2 position-right-side">
                            <Link to="#" className="comments">
                              <i className="ri-chat-3-fill pe-2"></i>98 comments
                            </Link>
                            <span className="font-size-12 text-warning">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="12">
                    <Card className="card-block card-stretch card-height blog mb-0">
                      <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                          <h4 className="card-title">Your Comment</h4>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Form>
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email1">
                              Email address:
                            </Form.Label>
                            <Form.Control type="email" id="email1" />
                          </Form.Group>
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="pwd">Password:</Form.Label>
                            <Form.Control type="password" id="pwd" />
                          </Form.Group>
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlTextarea1">
                              Comment
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              id="exampleFormControlTextarea1"
                              rows={4}
                            />
                          </Form.Group>
                          <Form.Check className="form-check mt-3 mb-3 w-100">
                            <Form.Check.Input
                              type="checkbox"
                              id="remember-box"
                              value="option1"
                            />
                            <Form.Check.Label htmlFor="remember-box">
                              Remember me
                            </Form.Check.Label>
                          </Form.Check>
                          <Button type="button" variant="btn btn-primary me-2">
                            button
                          </Button>
                          <Button type="button" variant="btn bg-soft-danger">
                            Cancel
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
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

export default BlogDetail;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Card from "../../../components/Card";

import imgn56 from "../../../assets/images/page-img/56.jpg";
import imgp11 from "../../../assets/images/user/11.png";
import imgp08 from "../../../assets/images/icon/08.png";
import imgp09 from "../../../assets/images/icon/09.png";
import imgp10 from "../../../assets/images/icon/10.png";
import imgp13 from "../../../assets/images/icon/13.png";
import imgn51 from "../../../assets/images/page-img/51.jpg";
import imgn59 from "../../../assets/images/page-img/59.jpg";
import imgn55 from "../../../assets/images/page-img/55.jpg";
import imgn54 from "../../../assets/images/page-img/54.jpg";
import imgn52 from "../../../assets/images/page-img/52.jpg";
import imgn53 from "../../../assets/images/page-img/53.jpg";
import imgn02 from "../../../assets/images/user/02.jpg";
import imgn03 from "../../../assets/images/user/03.jpg";

const Market2 = () => {
  return (
    <>
      <Container>
        <Tab.Container defaultActiveKey="f1">
          <Row>
            <Col lg="4">
              <Card>
                <div className="top-bg-image">
                  <img src={imgn56} className="img-fluid" alt="Responsive" />
                </div>
                <Card.Body className="text-center">
                  <div className="group-icon">
                    <img
                      src={imgp11}
                      alt="profile-img"
                      className="avatar-130 img-fluid"
                    />
                  </div>
                  <h2 className="text-center">Roy</h2>
                  <h5>
                    098hgdvb53562...9056
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </h5>
                  <div className="mt-2">
                    <b>A good boy with a bed reputation</b>
                  </div>
                  <div className="mt-0">
                    <p>
                      createing arts,game,photos for NFT platforms. folllow me
                      and stay in trend
                    </p>
                  </div>
                  <div>
                    <ul className=" d-flex ms-4 list-inline justify-content-center">
                      <li className="pe-3">
                        <Link to="#">
                          <img
                            src={imgp08}
                            className="img-fluid rounded"
                            alt="facebook"
                          />
                        </Link>
                      </li>
                      <li className="pe-3">
                        <Link to="#">
                          <img
                            src={imgp09}
                            className="img-fluid rounded"
                            alt="Twitter"
                          />
                        </Link>
                      </li>
                      <li className=" pe-3">
                        <Link to="#">
                          <img
                            src={imgp10}
                            className="img-fluid rounded"
                            alt="Instagram"
                          />
                        </Link>
                      </li>
                      <li className="pe-3">
                        <Link to="#">
                          <img
                            src={imgp13}
                            className="img-fluid rounded"
                            alt="linkedin"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex d-flex justify-content-between">
                    Following:
                    <small>346</small>
                  </div>
                  <div className="d-flex d-flex justify-content-between">
                    Followers:
                    <small>2k</small>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill w-100 mt-3"
                  >
                    folllow
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="8">
              {/* <Tab.Container defaultActiveKey="f1">   */}
              <Card className="cardnavbar">
                <div className="user-tabing">
                  <Nav
                    variant="pills"
                    className="d-flex align-items-center nav-rounded justify-content-between profile-feed-items p-0 m-0"
                  >
                    <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                      <Nav.Link eventKey="f1" href="#">
                        On sale
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                      <Nav.Link className="" eventKey="f2" href="#">
                        Collectibles
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                      <Nav.Link className="" eventKey="f3" href="#">
                        Created
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                      <Nav.Link className="" eventKey="f4" href="#">
                        Liked
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                      <Nav.Link className="" eventKey="f5" href="#">
                        Activity
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Card>
              <Row>
                <Col sm="4">
                  <Card>
                    <Card.Body>
                      <div className="event-images position-relative">
                        <Link to="#">
                          <img
                            src={imgn51}
                            className="img-fluid"
                            alt="Responsive"
                          />
                        </Link>
                      </div>
                      <span className="badge bg-danger">40% off</span>
                      <div className="mt-1">
                        <h5>Fragments</h5>
                      </div>
                      <div className="mt-1">
                        <small>
                          <small className="text-primary">0.080 ETH</small> 1 of
                          56
                        </small>
                      </div>
                      <div className="mt-0">
                        <small>
                          Highest bid:
                          <small className="text-primary ms-1">0.080 ETH</small>
                        </small>
                      </div>
                      <hr className="hr-horizontal" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <small>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              className="mb-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <small className="ms-1">6 hours ago</small>
                          </small>
                        </div>
                        <small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <small className="ms-1">674</small>
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card>
                    <Card.Body>
                      <div className="event-images">
                        <Link to="#">
                          <img
                            src={imgn59}
                            className="img-fluid rounded"
                            alt="Responsive"
                          />{" "}
                        </Link>
                      </div>
                      <span className="badge bg-danger">80% off</span>
                      <div className="mt-1">
                        <h5>Shine brights_00</h5>
                      </div>
                      <div className="mt-1">
                        <small>
                          <small className="text-primary">0.003 ETH</small> 1 of
                          2
                        </small>
                      </div>
                      <div className="mt-0">
                        <small>
                          Highest bid:
                          <small className="text-primary ms-1">0.004 ETH</small>
                        </small>
                      </div>
                      <hr className="hr-horizontal" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <small>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              className="mb-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <small className="ms-1">8 hours ago</small>
                          </small>
                        </div>
                        <small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <small className="ms-1">36</small>
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card>
                    <Card.Body>
                      <div className="event-images">
                        <Link to="#">
                          <img
                            src={imgn55}
                            className="img-fluid"
                            alt="Responsive"
                          />
                        </Link>
                        <span className="badge bg-danger">30% off</span>
                      </div>
                      <div className="mt-1">
                        <h5>Anonimoic face </h5>
                      </div>
                      <div className="mt-1">
                        <small>
                          <small className="text-primary">0.034 ETH</small> 1 of
                          56
                        </small>
                      </div>
                      <div className="mt-0">
                        <small>
                          Highest bid:
                          <small className="text-primary ms-1">0.045 ETH</small>
                        </small>
                      </div>
                      <hr className="hr-horizontal" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <small>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              className="mb-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <small className="ms-1">8 days ago</small>
                          </small>
                        </div>
                        <small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <small className="ms-1">1k</small>
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <Card>
                    <Card.Body>
                      <div className="event-images">
                        <Link to="#">
                          <img
                            src={imgn54}
                            className="img-fluid"
                            alt="Responsive"
                          />
                        </Link>
                      </div>
                      <span className="badge bg-danger">70% off</span>
                      <div className="mt-1">
                        <h5>Fire magic</h5>
                      </div>
                      <div className="mt-1">
                        <small>
                          <small className="text-primary">0.009 ETH</small> 1 of
                          1
                        </small>
                      </div>
                      <div className="mt-0">
                        <small>
                          Highest bid:
                          <small className="text-primary ms-1">0.012ETH</small>
                        </small>
                      </div>
                      <hr className="hr-horizontal" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <small>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              className="mb-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <small className="ms-1">12 hours ago</small>
                          </small>
                        </div>
                        <small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <small className="ms-1">786</small>
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card>
                    <Card.Body>
                      <div className="event-images">
                        <Link to="#">
                          <img
                            src={imgn52}
                            className="img-fluid"
                            alt="Responsive"
                          />
                        </Link>
                      </div>
                      <span className="badge bg-danger">80% off</span>
                      <div className="mt-1">
                        <h5>Edition _02</h5>
                      </div>
                      <div className="mt-1">
                        <small>
                          <small className="text-primary">0.002 ETH</small> 1 of
                          6
                        </small>
                      </div>
                      <div className="mt-0">
                        <small>
                          Highest bid:
                          <small className="text-primary ms-1">0.080 ETH</small>
                        </small>
                      </div>
                      <hr className="hr-horizontal" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <small>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              className="mb-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <small className="ms-1">12 hours ago</small>
                          </small>
                        </div>
                        <small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <small className="ms-1">45</small>
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card>
                    <Card.Body>
                      <div className="event-images">
                        <Link to="#">
                          <img
                            src={imgn53}
                            className="img-fluid rounded"
                            alt="Responsive"
                          />
                        </Link>
                      </div>
                      <span className="badge bg-danger">50% off</span>
                      <div className="mt-1">
                        <h5>Smileface</h5>
                      </div>
                      <div className="mt-1">
                        <small>
                          <small className="text-primary">0.045 ETH</small> 1 of
                          1
                        </small>
                      </div>
                      <div className="mt-0">
                        <small>
                          Highest bid:
                          <small className="text-primary ms-1">0.048 ETH</small>
                        </small>
                      </div>
                      <hr className="hr-horizontal" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <small>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              className="mb-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <small className="ms-1">1 days ago</small>
                          </small>
                        </div>
                        <small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <small className="ms-1">3k</small>
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="f1" className=" fade show">
                  <Card>
                    <div className="card-header d-flex justify-content-between">
                      <div className="header-title">
                        <h4 className="card-title">your comments</h4>
                      </div>
                    </div>
                    <Card.Body>
                      <div className="align-items-center d-flex borderbox1 flex-wrap">
                        <img
                          src={imgn02}
                          alt="userimg"
                          className="avatar-20 rounded-circle"
                        />
                        <h6 className="ms-1">theodocre</h6>
                        <Link className="ms-1" to="#">
                          @john_ram
                        </Link>
                        <div className="ms-auto d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10px"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="mx-1">
                            <small>35 mins</small>
                          </span>
                        </div>
                      </div>
                      <p>
                        In any moment of decsion, the best thing of you can do
                        thing,the next best thing is the wrong thing,and the
                        worst thing of
                      </p>
                      <div className="align-items-center d-flex borderbox1 flex-wrap">
                        <img
                          src={imgn03}
                          alt="userimg"
                          className="avatar-20 rounded-circle"
                        />
                        <h6 className="ms-1">theodocre</h6>
                        <Link className="ms-1" to="#">
                          @john_ram
                        </Link>
                        <div className="ms-auto d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10px"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="mx-1">
                            <small>15 mins</small>
                          </span>
                        </div>
                      </div>
                      <p>great pictures!!</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="f2" className=" fade show">
                  <Row>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images position-relative">
                            <Link to="#">
                              <img
                                src={imgn51}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Fragments</h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.080 ETH</small>{" "}
                              1 of 56
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.080 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">6 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">674</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn59}
                                className="img-fluid rounded"
                                alt="Responsive"
                              />{" "}
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Shine brights_00</h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.003 ETH</small>{" "}
                              1 of 2
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.004 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">8 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">36</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn55}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Anonimoic face </h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.034 ETH</small>{" "}
                              1 of 56
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.045 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">8 days ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">1k</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn54}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Fire magic</h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.009 ETH</small>{" "}
                              1 of 1
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.012ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">12 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">786</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn52}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Edition _02</h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.002 ETH</small>{" "}
                              1 of 6
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.080 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">12 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">45</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn53}
                                className="img-fluid rounded"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Smileface</h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.045 ETH</small>{" "}
                              1 of 1
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.048 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">1 days ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">3k</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="f3" className=" fade show">
                  <Row>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images position-relative">
                            <Link to="#">
                              <img
                                src={imgn51}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">6 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <small className="ms-1">674</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn59}
                                className="img-fluid rounded"
                                alt="Responsive"
                              />{" "}
                            </Link>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">8 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <small className="ms-1">36</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn55}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">8 days ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <small className="ms-1">1k</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="f4" className=" fade show">
                  <Row>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images position-relative">
                            <Link to="#">
                              <img
                                src={imgn51}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Fragments</h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.080 ETH</small>{" "}
                              1 of 56
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.080 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">6 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">674</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn59}
                                className="img-fluid rounded"
                                alt="Responsive"
                              />{" "}
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Shine brights_00</h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.003 ETH</small>{" "}
                              1 of 2
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.004 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">8 hours ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">36</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card>
                        <Card.Body>
                          <div className="event-images">
                            <Link to="#">
                              <img
                                src={imgn55}
                                className="img-fluid"
                                alt="Responsive"
                              />
                            </Link>
                          </div>
                          <div className="mt-1">
                            <h5>Anonimoic face </h5>
                          </div>
                          <div className="mt-1">
                            <small>
                              <small className="text-primary">0.034 ETH</small>{" "}
                              1 of 56
                            </small>
                          </div>
                          <div className="mt-0">
                            <small>
                              Highest bid:
                              <small className="text-primary ms-1">
                                0.045 ETH
                              </small>
                            </small>
                          </div>
                          <hr className="hr-horizontal" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <small>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12px"
                                  className="mb-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <small className="ms-1">8 days ago</small>
                              </small>
                            </div>
                            <small>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12px"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <small className="ms-1">1k</small>
                            </small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="f5" className=" fade show">
                  <Card>
                    <div className="card-header d-flex justify-content-between">
                      <div className="header-title">
                        <h4 className="card-title">your comments</h4>
                      </div>
                    </div>
                    <Card.Body>
                      <div className="align-items-center d-flex borderbox1 flex-wrap">
                        <img
                          src={imgn02}
                          alt="userimg"
                          className="avatar-20 rounded-circle"
                        />
                        <h6 className="ms-1">theodocre</h6>
                        <Link className="ms-1" to="#">
                          @john_ram
                        </Link>
                        <div className="ms-auto d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10px"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="mx-1">
                            <small>35 mins</small>
                          </span>
                        </div>
                      </div>
                      <p>
                        In any moment of decsion, the best thing of you can do
                        thing,the next best thing is the wrong thing,and the
                        worst thing of
                      </p>
                      <div className="align-items-center d-flex borderbox1 flex-wrap">
                        <img
                          src={imgn03}
                          alt="userimg"
                          className="avatar-20 rounded-circle"
                        />
                        <h6 className="ms-1">theodocre</h6>
                        <Link className="ms-1" to="#">
                          @john_ram
                        </Link>
                        <div className="ms-auto d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10px"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="mx-1">
                            <small>15 mins</small>
                          </span>
                        </div>
                      </div>
                      <p>great pictures!!</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};
export default Market2;

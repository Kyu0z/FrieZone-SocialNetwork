import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Tab, Dropdown } from "react-bootstrap";
import Card from "../../../components/Card";

import imgbg1 from "../../../assets/images/page-img/profile-bg1.jpg";
import img2 from "../../../assets/images/user/02.jpg";
import img1 from "../../../assets/images/user/1.jpg";
import img3 from "../../../assets/images/user/1.jpg";
import img4 from "../../../assets/images/page-img/57.jpg";
import img5 from "../../../assets/images/page-img/58.jpg";
import img6 from "../../../assets/images/page-img/59.jpg";
import img7 from "../../../assets/images/user/1.jpg";
import img8 from "../../../assets/images/icon/09.png";
import img9 from "../../../assets/images/page-img/p3.jpg";
import img10 from "../../../assets/images/page-img/p1.jpg";
import img11 from "../../../assets/images/user/09.jpg";
import img12 from "../../../assets/images/user/05.jpg";
import img13 from "../../../assets/images/user/11.jpg";
import img14 from "../../../assets/images/user/02.jpg";
import img15 from "../../../assets/images/user/03.jpg";
import img16 from "../../../assets/images/user/05.jpg";
import img17 from "../../../assets/images/user/09.jpg";
import img18 from "../../../assets/images/user/06.jpg";
import img19 from "../../../assets/images/user/08.jpg";
import img20 from "../../../assets/images/user/07.jpg";
import img21 from "../../../assets/images/user/1.jpg";
import img22 from "../../../assets/images/page-img/57.jpg";
import img23 from "../../../assets/images/page-img/58.jpg";
import img24 from "../../../assets/images/page-img/59.jpg";
import img25 from "../../../assets/images/user/1.jpg";
import img26 from "../../../assets/images/page-img/60.jpg";
import img27 from "../../../assets/images/page-img/61.jpg";
import img28 from "../../../assets/images/page-img/62.jpg";
import img29 from "../../../assets/images/user/1.jpg";
import img30 from "../../../assets/images/page-img/63.jpg";
import img31 from "../../../assets/images/page-img/64.jpg";
import img32 from "../../../assets/images/page-img/65.jpg";
import img33 from "../../../assets/images/user/01.jpg";
import img34 from "../../../assets/images/user/02.jpg";
import img35 from "../../../assets/images/user/03.jpg";

const Profile1 = () => {
  return (
    <>
      <Container>
        <div className="container-fluid">
          <Row>
            <Col className="col-sm-12">
              <div className="position-relative">
                <img
                  src={imgbg1}
                  alt="profile-bg"
                  className="rounded img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="container containertop">
          <Row>
            <div className="col-lg-3">
              <Card>
                <Card.Body>
                  <div className="text-center">
                    <img
                      className="img-fluid rounded-circle avatar-50"
                      src={img20}
                      alt="profile-img"
                    />
                    <h6>John Ramsey</h6>
                    <Link to="#">@john_ram</Link>
                    <p>
                      Multidisciplinary photographer focused on travel and
                      nature content
                    </p>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <small className="text-primary">Tweets</small>
                    <small className="text-primary">Follower</small>
                    <small className="text-primary">Follow</small>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <h4 className="mb-0">847</h4>
                    <h4 className="mb-0">4.2k</h4>
                    <h4 className="mb-0">524</h4>
                  </div>
                </Card.Body>
              </Card>
              <div className="row">
                <div className="col-sm-3 col-lg-6">
                  <Card>
                    <Card.Body>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>Activity</div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-3 col-lg-6">
                  <Card>
                    <Card.Body>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                      <div>Moment</div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-3 col-lg-6 mt-1">
                  <Card>
                    <Card.Body>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <div>Friends</div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-3 col-lg-6 mt-1">
                  <Card>
                    <Card.Body>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>Edit</div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            {/* <Tab.Container defaultActiveKey="f1"> */}
            <Col lg="6">
              <Tab.Container defaultActiveKey="f1">
                <Card>
                  <Card.Body>
                    <Nav variant="tabs" className="tab-nav-pane  mb-0">
                      <Nav.Item as="li" className="pb-0 mb-0 ">
                        <Nav.Link eventKey="f1" href="#">
                          Tweets
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="pb-0 mb-0 ">
                        <Nav.Link eventKey="f2" href="#">
                          Tweets &#38 Retweets
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="pb-0 mb-0 ">
                        <Nav.Link eventKey="f3" href="#">
                          Media
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="pb-0 mb-0 ">
                        <Nav.Link eventKey="f4" href="#">
                          Likes
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="f1" className="fade show">
                        <div className="mt-2 borderbox1">
                          <div className="user-img me-2">
                            <img
                              src={img1}
                              alt="userimg"
                              className="avatar-40 rounded-circle"
                            />
                          </div>
                          <div className="borderbox border">
                            <small>LEONAROD RETWEETED</small>
                            <div className="borderbox1 d-flex align-items-center flex-wrap">
                              <h6>John Ramsey</h6>
                              <span className="text-primary ms-1 d-flex">
                                <svg width="15" viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                  ></path>
                                </svg>
                              </span>
                              <Link to="#" className="ms-1">
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
                            <h6>very good words..</h6>
                            <div className="border mt-2">
                              <div className="align-items-center d-flex borderbox1 flex-wrap">
                                <img
                                  src={img2}
                                  alt="userimg"
                                  className="avatar-20 rounded-circle"
                                />
                                <h6 className="ms-1">theodocre</h6>
                                <Link to="#" className="ms-1">
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
                                In any moment of decsion, the best thing of you
                                can do thing,the next best thing is the wrong
                                thing,and the worst thing of
                              </p>
                            </div>
                            <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20px"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="text-primary"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span className="ms-1">32</span>
                              </span>
                              <hr className="hr-vertical" />
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20px"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="text-primary"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-1">54</span>
                              </span>
                              <hr className="hr-vertical" />
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20px"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="text-primary"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>426</span>
                              </span>
                              <hr className="hr-vertical" />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="borderbox1 mt-2">
                          <div className="user-img me-2">
                            <img
                              src={img3}
                              alt="userimg"
                              className="avatar-40 rounded-circle"
                            />
                          </div>
                          <div className="borderbox border">
                            <div className="borderbox1 d-flex align-items-center flex-wrap">
                              <h6>John Ramsey</h6>
                              <span className="text-primary ms-1">
                                <svg width="15" viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                  ></path>
                                </svg>
                              </span>
                              <Link to="#" className="ms-1">
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
                                  <small>2 hours</small>
                                </span>
                              </div>
                            </div>
                            <h6>Best views from the vactions</h6>
                            <div className="row mt-2">
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img4}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img5}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img6}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20px"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="text-primary"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span className="ms-1">8</span>
                              </span>
                              <hr className="hr-vertical" />
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20px"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="text-primary"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-1">12</span>
                              </span>
                              <hr className="hr-vertical" />
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20px"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="text-primary"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>47</span>
                              </span>
                              <hr className="hr-vertical" />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="borderbox1 mt-2">
                          <div className="user-img me-2">
                            <img
                              src={img7}
                              alt="userimg"
                              className="avatar-40 rounded-circle"
                            />
                          </div>
                          <div className="borderbox border">
                            <div className="borderbox1 d-flex align-items-center flex-wrap">
                              <h6>John Ramsey</h6>
                              <span className="text-primary d-flex ms-1">
                                <svg width="15" viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                  ></path>
                                </svg>
                              </span>
                              <Link to="#" className="ms-1">
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
                                  <small>2 hours</small>
                                </span>
                              </div>
                            </div>
                            <small>Design is intellgence made visible</small>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="f2" className="fade show">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="">
                              <Card.Body>
                                <div className="d-flex  justify-content-between">
                                  <div className="me-3">
                                    <img
                                      src={img8}
                                      className="img-fluid rounded"
                                      alt="Twitter"
                                    />
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                      <div className="">
                                        <h5 className="mb-0 d-inline-block me-1">
                                          <Link to="#" className="">
                                            Bni Cyst
                                          </Link>
                                        </h5>
                                        <p className="mb-0 d-inline-block">
                                          Share Anna Mull's Post
                                        </p>
                                        <p className="mb-0">5 hour ago</p>
                                      </div>
                                      <div className="card-post-toolbar">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            as="span"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            role="button"
                                          >
                                            <i className="ri-more-fill"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="m-0 p-0">
                                            <Dropdown.Item
                                              className="p-3"
                                              href="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6>Save Post</h6>
                                                  <p className="mb-0">
                                                    Add this to your saved items
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="p-3"
                                              href="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-pencil-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6>Edit Post</h6>
                                                  <p className="mb-0">
                                                    Update your post and saved
                                                    items
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="p-3"
                                              href="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6>Hide From Timeline</h6>
                                                  <p className="mb-0">
                                                    See fewer posts like this.
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="p-3"
                                              href="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-delete-bin-7-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6>Delete</h6>
                                                  <p className="mb-0">
                                                    Remove thids Post on
                                                    Timeline
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="p-3"
                                              href="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6>Notifications</h6>
                                                  <p className="mb-0">
                                                    Turn on notifications for
                                                    this post
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span className="mt-1">
                                  Forget the pixels for a second. Let’s focus on
                                  Tweets.Design Twitter is full of folks who
                                  Tweet well, and we want to figure out the
                                  secret to their sauce.
                                </span>
                                <div className="user-post mt-2">
                                  <Link to="#">
                                    <img
                                      src={img9}
                                      alt="post-img"
                                      className="img-fluid w-100"
                                    />
                                  </Link>
                                </div>
                              </Card.Body>
                            </div>
                          </div>
                        </div>
                        <Row>
                          <div className="col-md-12">
                            <div className="">
                              <Card.Body>
                                <div className="borderbox border">
                                  <div className="borderbox1 d-flex align-items-center flex-wrap">
                                    <h6>John Ramsey</h6>
                                    <span className="text-primary d-flex ms-1">
                                      <svg width="15" viewBox="0 0 24 24">
                                        <path
                                          fill="currentColor"
                                          d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                        ></path>
                                      </svg>
                                    </span>
                                    <small className="ms-1">@john_ram</small>
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
                                        <small>2 hours</small>
                                      </span>
                                    </div>
                                  </div>
                                  <h6>Best views from the vactions</h6>
                                  <div className="row mt-2">
                                    <img
                                      src={img10}
                                      alt="post-img"
                                      className="img-fluid w-100"
                                    />
                                  </div>
                                  <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        ></path>
                                      </svg>
                                      <span className="ms-1">8</span>
                                    </span>
                                    <hr className="hr-vertical" />
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                      <span className="ms-1">12</span>
                                    </span>
                                    <hr className="hr-vertical" />
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                      <span>47</span>
                                    </span>
                                    <hr className="hr-vertical" />
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20px"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </Card.Body>
                            </div>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="f3" className="fade show">
                        <div className="mt-2 borderbox1">
                          <div className="user-img me-2">
                            <img
                              src={img21}
                              alt="userimg"
                              className="avatar-40 rounded-circle"
                            />
                          </div>
                          <div className="borderbox border">
                            <h6>very good words..</h6>
                            <div className="border mt-2">
                              <p>
                                In any moment of decsion, the best thing of you
                                can do thing,the next best thing is the wrong
                                thing,and the worst thing of
                              </p>
                            </div>
                            <h6>Best views from the vactions</h6>
                            <div className="row mt-2">
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img22}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img23}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img24}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 borderbox1">
                          <div className="user-img me-2">
                            <img
                              src={img25}
                              alt="userimg"
                              className="avatar-40 rounded-circle"
                            />
                          </div>
                          <div className="borderbox border">
                            <h6>very good words..</h6>
                            <div className="border mt-2">
                              <p>
                                In any moment of decsion, the best thing of you
                                can do thing,the next best thing is the wrong
                                thing,and the worst thing of
                              </p>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img26}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img27}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img28}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 borderbox1">
                          <div className="user-img me-2">
                            <img
                              src={img29}
                              alt="userimg"
                              className="avatar-40 rounded-circle"
                            />
                          </div>
                          <div className="borderbox border">
                            <h6>very good words..</h6>
                            <div className="border mt-2">
                              <p>
                                In any moment of decsion, the best thing of you
                                can do thing,the next best thing is the wrong
                                thing,and the worst thing of
                              </p>
                            </div>
                            <div className="row mt-2">
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img30}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img31}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                              <div className="col-lg-4 col-md-6 mt-1">
                                <img
                                  src={img32}
                                  className="img-fluid rounded"
                                  alt="Responsive img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="f4" className="fade show">
                        <div className="row">
                          <div className="col-md-12">
                            <ul
                              className="d-flex justify-content-between
                                        list-inline mt-1"
                            >
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img11}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">2 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>556</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img12}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">2 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>524</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img13}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>556</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img14}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>456</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img15}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>556</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img16}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>556</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img17}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>556</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img18}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>556</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img19}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>344</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                              <li className="col-lg-6">
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid rounded-circle avatar-40"
                                    src={img20}
                                    alt=""
                                  />
                                  <div className="media-body ms-1">
                                    <h6 className="mb-0">
                                      <Link to="#">Greta Life</Link>
                                    </h6>
                                    <p className="mb-0">3 hours</p>
                                  </div>
                                </div>
                              </li>
                              <li className="col-lg-6 text-center d-flex">
                                <span>
                                  <h4>556</h4>
                                </span>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
            {/* </Tab.Container> */}
            <Col lg="3">
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <h6>Trends for you</h6>
                    <i className="ri-settings-4-line"></i>
                  </div>
                  <hr />
                  <li className="d-flex mb-4 align-items-center">
                    <div className="ms-3 flex-grow-1">
                      <h6>#ecommerce</h6>
                      <small>71.4k Tweets</small>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as="span"
                        id="dropdownMenuButton9"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton9"
                      >
                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                        <Dropdown.Item href="#">block</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="ms-3 flex-grow-1">
                      <h6>#apple</h6>
                      <small>68.2k Tweets</small>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as="span"
                        id="dropdownMenuButton9"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton9"
                      >
                        <Dropdown.Item to="#">Unfollow</Dropdown.Item>
                        <Dropdown.Item to="#">Unfriend</Dropdown.Item>
                        <Dropdown.Item to="#">block</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="ms-3 flex-grow-1">
                      <h6>#ueta</h6>
                      <small>63.8k Tweets</small>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as="span"
                        id="dropdownMenuButton9"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton9"
                      >
                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                        <Dropdown.Item href="#">block</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="ms-3 flex-grow-1">
                      <h6>#music</h6>
                      <small>61k Tweets</small>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as="span"
                        id="dropdownMenuButton9"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton9"
                      >
                        <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                        <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                        <Dropdown.Item href="#">block</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <div className="text-center">
                    <small>SEE MORE</small>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <h6>You should follow</h6>
                    <i className="ri-settings-4-line"></i>
                  </div>
                  <hr />
                  <ul className="list-inline m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                      <img
                        className="img-fluid rounded-circle avatar-40"
                        src={img33}
                        alt=""
                      />
                      <div className="ms-1 flex-grow-1">
                        <h6>Kate Lingrad</h6>
                        <small>@kate14</small>
                      </div>
                      <button
                        type="submit"
                        className="btn bg-soft-primary smallbutton"
                      >
                        follow
                      </button>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <img
                        className="img-fluid rounded-circle avatar-40"
                        src={img34}
                        alt=""
                      />
                      <div className="ms-1 flex-grow-1">
                        <h6>Snowman</h6>
                        <small>@snow_man</small>
                      </div>
                      <button
                        type="submit"
                        className="btn bg-soft-primary smallbutton"
                      >
                        follow
                      </button>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <img
                        className="img-fluid rounded-circle avatar-40"
                        src={img35}
                        alt=""
                      />
                      <div className="ms-1 flex-grow-1">
                        <h6>Sharapova</h6>
                        <small>@Sharapova</small>
                      </div>
                      <button
                        type="submit"
                        className="btn bg-soft-primary smallbutton"
                      >
                        follow
                      </button>
                    </li>
                  </ul>
                  <div className="text-center mt-2">
                    <small>SEE ALL</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Profile1;

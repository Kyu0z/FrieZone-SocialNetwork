import React, { useState } from "react";
import { appName } from "../../../config";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Tab, Nav, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { Trans } from "react-i18next";

//img
import user1 from "../../../assets/images/user/1.jpg";
import user5 from "../../../assets/images/user/05.jpg";
import user6 from "../../../assets/images/user/06.jpg";
import user7 from "../../../assets/images/user/07.jpg";
import user8 from "../../../assets/images/user/08.jpg";
import user9 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
// import page100 from '../../../assets/images/page-img/100.jpg'

const Chat = () => {
  const [show, setShow] = useState("");
  const [show1, setShow1] = useState("");
  const ChatSidebar = () => {
    document.getElementsByClassName("scroller")[0].classList.add("show");
  };
  const ChatSidebarClose = () => {
    document.getElementsByClassName("scroller")[0].classList.remove("show");
  };

  return (
    <>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="start">
          <Row>
            <Col sm="12">
              <Card>
                <Card.Body className="chat-page p-0">
                  <div className="chat-data-block">
                    <Row>
                      <Col lg="3" className="chat-data-left scroller">
                        <div className="chat-search pt-3 ps-3">
                          <div className="d-flex align-items-center">
                            <div className="chat-profile me-3">
                              <img
                                src={user1}
                                alt="chat-user"
                                className="avatar-60 "
                                onClick={() => setShow1("true")}
                              />
                            </div>
                            <div className="chat-caption">
                              <h5 className="mb-0">Bni Jordan</h5>
                              <p className="m-0">Web Designer</p>
                            </div>
                            <Button
                              type="submit"
                              onClick={ChatSidebarClose}
                              variant=" close-btn-res p-3"
                            >
                              <i className="ri-close-fill"></i>
                            </Button>
                          </div>
                          <div
                            id="user-detail-popup"
                            className={`scroller ${
                              show1 === "true" ? "show" : ""
                            }`}
                          >
                            <div className="user-profile">
                              <Button type="submit" variant=" close-popup p-3">
                                <i
                                  className="ri-close-fill"
                                  onClick={() => setShow1("false")}
                                ></i>
                              </Button>
                              <div className="user text-center mb-4">
                                <Link className="avatar m-0" to="">
                                  <img src={user1} alt="avatar" />
                                </Link>
                                <div className="user-name mt-4">
                                  <h4 className="text-center">Bni Jordan</h4>
                                </div>
                                <div className="user-desc">
                                  <p className="text-center">Web Designer</p>
                                </div>
                              </div>
                              <hr />
                              <div className="user-detail text-left mt-4 ps-4 pe-4">
                                <h5 className="mt-4 mb-4">About</h5>
                                <p>
                                  It is long established fact that a reader will
                                  be distracted bt the reddable.
                                </p>
                                <h5 className="mt-3 mb-3">Status</h5>
                                <ul className="user-status p-0">
                                  <li className="mb-1">
                                    <i className="ri-checkbox-blank-circle-fill text-success pe-1"></i>
                                    <span>Online</span>
                                  </li>
                                  <li className="mb-1">
                                    <i className="ri-checkbox-blank-circle-fill text-warning pe-1"></i>
                                    <span>Away</span>
                                  </li>
                                  <li className="mb-1">
                                    <i className="ri-checkbox-blank-circle-fill text-danger pe-1"></i>
                                    <span>Do Not Disturb</span>
                                  </li>
                                  <li className="mb-1">
                                    <i className="ri-checkbox-blank-circle-fill text-light pe-1"></i>
                                    <span>Offline</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-searchbar mt-4">
                            <Form.Group className="form-group chat-search-data m-0">
                              <input
                                type="text"
                                className="form-control round"
                                id="chat-search"
                                placeholder="Search"
                              />
                              <i className="ri-search-line"></i>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="chat-sidebar-channel scroller mt-4 ps-3">
                          <h5>Public Channels</h5>
                          <Nav
                            as="ul"
                            variant="pills"
                            className="iq-chat-ui nav flex-column"
                          >
                            <Nav.Item as="li">
                              <Nav.Link
                                eventKey="first"
                                onClick={() => setShow("first")}
                                href="#chatbox1"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user5}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Team Discussions</h6>
                                    <span>Lorem Ipsum is</span>
                                  </div>
                                  <div className="chat-meta float-right text-center mt-2 me-1">
                                    <div className="chat-msg-counter bg-primary text-white">
                                      20
                                    </div>
                                    <span className="text-nowrap">05 min</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <li>
                              <Nav.Link
                                eventKey="second"
                                onClick={() => setShow("second")}
                                href="#chatbox2"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user6}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Announcement</h6>
                                    <span>This Sunday we</span>
                                  </div>
                                  <div className="chat-meta float-right text-center mt-2 me-1">
                                    <div className="chat-msg-counter bg-primary text-white">
                                      10
                                    </div>
                                    <span className="text-nowrap">10 min</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                          </Nav>
                          <h5 className="mt-3">Private Channels</h5>
                          <Nav
                            variant="pills"
                            className="iq-chat-ui nav flex-column "
                          >
                            <li>
                              <Nav.Link
                                eventKey="third"
                                onClick={() => setShow("third")}
                                href="#chatbox3"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user7}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-warning"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Designer</h6>
                                    <span>There are many </span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                eventKey="forth"
                                onClick={() => setShow("forth")}
                                href="#chatbox4"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user8}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Developer</h6>
                                    <span>passages of Lorem</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                eventKey="five"
                                onClick={() => setShow("five")}
                                href="#chatbox5"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user9}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-info"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Testing Team</h6>
                                    <span>Lorem Ipsum used</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                          </Nav>
                          <h5 className="mt-3">Direct Message</h5>
                          <Nav
                            variant="pills"
                            className="iq-chat-ui nav flex-column "
                          >
                            <li>
                              <Nav.Link
                                eventKey="six"
                                onClick={() => setShow("six")}
                                href="#chatbox6"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user10}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-dark"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Paul Molive</h6>
                                    <span>translation by</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                eventKey="seven"
                                onClick={() => setShow("seven")}
                                href="#chatbox7"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user5}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Paige Turner</h6>
                                    <span>Lorem Ipsum which</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                eventKey="eight"
                                onClick={() => setShow("eight")}
                                href="#chatbox8"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user6}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-primary"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Barb Ackue</h6>
                                    <span>simply random text</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                eventKey="nine"
                                onClick={() => setShow("nine")}
                                href="#chatbox9"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user7}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-danger"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Maya Didas</h6>
                                    <span> but also the leap</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                eventKey="ten"
                                onClick={() => setShow("ten")}
                                href="#chatbox10"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="avatar me-2">
                                    <img
                                      src={user8}
                                      alt="chatuserimage"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-warning"></i>
                                    </span>
                                  </div>
                                  <div className="chat-sidebar-name">
                                    <h6 className="mb-0">Monty Carlo</h6>
                                    <span>Contrary to popular</span>
                                  </div>
                                </div>
                              </Nav.Link>
                            </li>
                          </Nav>
                        </div>
                      </Col>
                      <Col lg={9} className=" chat-data p-0 chat-data-right">
                        <Tab.Content>
                          <Tab.Pane
                            eventKey="start"
                            className="tab-pane fade show"
                            id="default-block"
                            role="tabpanel"
                          >
                            <div className="chat-start">
                              <span className="iq-start-icon text-primary">
                                <i className="ri-message-3-line"></i>
                              </span>
                              <Button
                                id="chat-start"
                                onClick={ChatSidebar}
                                bsPrefix="btn bg-white mt-3"
                              >
                                Start Conversation!
                              </Button>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="first"
                            className={`fade ${show === "first" ? "show" : ""}`}
                            id="chatbox1"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Team Discussions</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user mb-4  text-center">
                                      <Link className="avatar m-0" to="">
                                        <img src={user5} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Bni Jordan</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6  title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6  text-right"
                                        >
                                          Bni
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Male
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer pe-0"
                                      id="dropdownMenuButton02"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton02"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  variant="primary d-flex align-items-center px-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="second"
                            className={`fade ${
                              show === "second" ? "show" : ""
                            }`}
                            id="chatbox2"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3  ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Announcement</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user mb-4 text-center">
                                      <Link className="avatar m-0" to="">
                                        <img src={user6} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Mark Jordan</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Atlanta, USA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6  text-right"
                                        >
                                          Mark
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6  text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6  text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6  text-right"
                                        >
                                          Female
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6  text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-bs-toggle Row-hide-ar cursor-pointer"
                                      id="dropdownMenuButton01"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton02"
                                    >
                                      {" "}
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  className=" primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                  <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="third"
                            className={`fade ${show === "third" ? "show" : ""}`}
                            id="chatbox3"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Designer</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile ">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user text-center mb-4">
                                      <Link className="avatar m-0" to="">
                                        <img src={user7} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Paige Turner</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          pai
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Male
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex ">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton1"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  variant="primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="forth"
                            className={`fade ${show === "forth" ? "show" : ""}`}
                            id="chatbox4"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Developer</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile ">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user mb-4 text-center">
                                      <Link className="avatar m-0" to="">
                                        <img src={user8} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Barb Ackue</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Babe
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Feale
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton2"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton2"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  variant="primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="five"
                            className={`fade ${show === "five" ? "show" : ""}`}
                            id="chatbox5"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user9}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Testing Team</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile ">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user mb-4 text-center">
                                      <Link className="avatar m-0" to="">
                                        <img src={user9} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Peta Saireya</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Pet
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Female
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton3"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton3"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user9}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user9}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user9}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  className=" primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="six"
                            className={`fade ${show === "six" ? "show" : ""}`}
                            id="chatbox6"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user10}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Paul Molive</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile ">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user mb-4 text-center">
                                      <Link className="avatar m-0" to="">
                                        <img src={user10} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Paul Molive</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Pau
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Male
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone  bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video  bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete  bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown  bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton4"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton4"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user10}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user10}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user10}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  variant="primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="seven"
                            className={`fade ${show === "seven" ? "show" : ""}`}
                            id="chatbox7"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Paige Turner</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile ">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user text-center mb-4">
                                      <Link className="avatar m-0" to="">
                                        <img src={user5} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Paige Turner</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Pai
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Feale
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton5"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton5"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user5}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  className=" primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="eight"
                            className={`fade ${show === "eight" ? "show" : ""}`}
                            id="chatbox8"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Barb Ackue</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user text-center mb-4">
                                      <Link className="avatar m-0" to="">
                                        <img src={user6} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Barb Ackue</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Babe
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Female
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton6"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton6"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user6}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  variant="primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="nine"
                            className={`fade ${show === "nine" ? "show" : ""}`}
                            id="chatbox9"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Maya Didas</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile ">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="user text-center mb-4">
                                      <Link className="avatar m-0" to="">
                                        <img src={user7} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Maya Didas</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Babe
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Male
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton7"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton7"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user7}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  variant="primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="ten"
                            id="chatbox10"
                            role="tabpanel"
                          >
                            <div className="chat-head">
                              <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                <div className="d-flex align-items-center">
                                  <div className="sidebar-toggle">
                                    <i className="ri-menu-3-line"></i>
                                  </div>
                                  <div className="avatar chat-user-profile m-0 me-3">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-50 "
                                    />
                                    <span className="avatar-status">
                                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                                    </span>
                                  </div>
                                  <h5 className="mb-0">Monty Carlo</h5>
                                </div>
                                <div className="chat-user-detail-popup scroller">
                                  <div className="user-profile ">
                                    <Button
                                      type="submit"
                                      variant=" close-popup p-3"
                                    >
                                      <i className="ri-close-fill"></i>
                                    </Button>
                                    <div className="text-center user mb-4">
                                      <Link className="avatar m-0" to="">
                                        <img src={user8} alt="avatar" />
                                      </Link>
                                      <div className="user-name mt-4">
                                        <h4>Monty Carlo</h4>
                                      </div>
                                      <div className="user-desc">
                                        <p>Cape Town, RSA</p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="chatuser-detail text-left mt-4">
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Bni Name:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Babe
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Tel:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          072 143 9920
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Date Of Birth:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          July 12, 1989
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Gender:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Female
                                        </Col>
                                      </Row>
                                      <hr />
                                      <Row>
                                        <Col md="6" className="col-6 title">
                                          Language:
                                        </Col>
                                        <Col
                                          md="6"
                                          className="col-6 text-right"
                                        >
                                          Engliah
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-header-icons d-flex">
                                  <Link
                                    to="#"
                                    className="chat-icon-phone bg-soft-primary"
                                  >
                                    <i className="ri-phone-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-video bg-soft-primary"
                                  >
                                    <i className="ri-vidicon-line"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    className="chat-icon-delete bg-soft-primary"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </Link>
                                  <span className="dropdown bg-soft-primary">
                                    <i
                                      className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                                      id="dropdownMenuButton8"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></i>
                                    <span
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuButton8"
                                    >
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-pushpin-2-line me-1 h5"></i>
                                        Pin to top
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-delete-bin-6-line me-1 h5"></i>
                                        Delete chat
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ri-time-line me-1 h5"></i>
                                        Block
                                      </Link>
                                    </span>
                                  </span>
                                </div>
                              </header>
                            </div>
                            <div className="chat-content scroller">
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:45</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      How can we help? We're here for you! 😄
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:48</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>
                                      Hey John, I am looking for the best admin
                                      template.
                                    </p>
                                    <p>
                                      Could you please help me to find it out?
                                      🤔
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:49</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Absolutely!</p>
                                    <p>
                                      {appName} Dashboard is the responsive
                                      bootstrap 5 admin template.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:52</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Looks clean and fresh UI.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:53</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Thanks, from ThemeForest.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user8}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:54</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>I will purchase it for sure. 👍</p>
                                  </div>
                                </div>
                              </div>
                              <div className="chat d-flex other-user">
                                <div className="chat-user">
                                  <Link className="avatar m-0" to="">
                                    <img
                                      src={user1}
                                      alt="avatar"
                                      className="avatar-35 "
                                    />
                                  </Link>
                                  <span className="chat-time mt-1">6:56</span>
                                </div>
                                <div className="chat-detail">
                                  <div className="chat-message">
                                    <p>Okay Thanks..</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer p-3 bg-white">
                              <Form
                                className="d-flex align-items-center"
                                action="#"
                              >
                                <div className="chat-attagement d-flex">
                                  <Link to="#">
                                    <i
                                      className="far fa-smile pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                  <Link to="#">
                                    <i
                                      className="fa fa-paperclip pe-3"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                                <Form.Control
                                  type="text"
                                  className="form-control me-3"
                                  placeholder="Type your message"
                                />
                                <Button
                                  type="submit"
                                  variant="primary d-flex align-items-center p-2"
                                >
                                  <i
                                    className="far fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="d-none d-lg-block ms-1">
                                    <Trans i18nKey="send" />
                                  </span>
                                </Button>
                              </Form>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};
export default Chat;

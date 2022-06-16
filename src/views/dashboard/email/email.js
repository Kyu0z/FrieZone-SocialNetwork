import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Nav,
  Tab,
  Tooltip,
  OverlayTrigger,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import EmailAppDetail from "../../../components/email-app-detail";
import CustomToggle from "../../../components/dropdowns";

const Email = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);
  const [show16, setShow16] = useState(false);
  const [show17, setShow17] = useState(false);
  const [show18, setShow18] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="relative">
        <Row>
          <Tab.Container defaultActiveKey="first">
            <Col lg="3">
              <Card>
                <Card.Body>
                  <div>
                    <div className="iq-email-list">
                      <Button
                        variant="primary"
                        className="btn-lg btn-block mb-3 p-2 w-100"
                        data-target="#compose-email-popup"
                        data-toggle="modal"
                      >
                        <i className="ri-send-plane-line me-2"></i>New Message
                      </Button>
                      <Nav
                        variant="pills"
                        className="iq-email-ui nav flex-column "
                      >
                        <Nav.Link
                          role="button"
                          eventKey="first"
                          to="#mail-inbox"
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <span>
                              <i className="ri-mail-line"></i>Inbox
                            </span>
                            <span className="badge bg-primary ms-2">4</span>
                          </div>
                        </Nav.Link>
                        <Nav.Link
                          role="button"
                          eventKey="second"
                          to="#mail-starred"
                        >
                          <i className="ri-star-line"></i>Starred
                        </Nav.Link>
                        <Nav.Link
                          role="button"
                          eventKey="third"
                          to="#mail-snoozed"
                        >
                          <i className="ri-time-line"></i>Snoozed
                        </Nav.Link>
                        <Nav.Link
                          role="button"
                          eventKey="forth"
                          to="#mail-draft"
                        >
                          <i className="ri-file-list-2-line"></i>Draft
                        </Nav.Link>
                        <Nav.Link
                          role="button"
                          eventKey="fifth"
                          to="#mail-sent"
                        >
                          <i className="ri-mail-send-line"></i>Sent Mail
                        </Nav.Link>
                        <Nav.Link role="button" eventKey="six" to="#mail-trash">
                          <i className="ri-delete-bin-line"></i>Trash
                        </Nav.Link>
                        <Nav.Link
                          role="button"
                          eventKey="seven"
                          to="#mail-important"
                        >
                          <i className="ri-bookmark-line"></i>Important
                        </Nav.Link>
                        <Nav.Link
                          role="button"
                          eventKey="eight"
                          to="#mail-spam"
                        >
                          <i className="ri-spam-line"></i>Spam
                        </Nav.Link>
                      </Nav>
                      <h6 className="mt-4 mb-3">Labels</h6>
                      <ul className="iq-email-ui iq-email-label list-inline p-0 m-0">
                        <li>
                          <Link to="#">
                            <i className="ri-focus-fill text-primary"></i>
                            Personal
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="ri-focus-fill text-danger"></i>Company
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="ri-focus-fill text-success"></i>
                            Important
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="ri-focus-fill text-info"></i>Private
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="ri-focus-fill text-warning"></i>
                            Private
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="ri-add-circle-line"></i>Add New Labels
                          </Link>
                        </li>
                      </ul>
                      <div className="iq-progress-bar-linear d-inline-block w-100">
                        <h6 className="mt-4 mb-3">Storage</h6>
                        <div className="iq-progress-bar">
                          <span className="bg-danger" data-percent="90"></span>
                        </div>
                        <span className="mt-1 d-inline-block w-100">
                          7.02 GB (46%) of 15 GB used
                        </span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="9" className="mail-box-detail">
              <Card>
                <Card.Body className="p-0">
                  <div>
                    <div className="iq-email-to-list p-3">
                      <div className="iq-email-to-list-detail d-flex justify-content-between">
                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                          <li className="me-1">
                            <Dropdown>
                              <Dropdown.Toggle
                                as={CustomToggle}
                                className="d-flex align-items-center"
                                variant="white"
                              >
                                <Form.Check className="d-flex align-items-center form-check">
                                  <Form.Check.Input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheck1"
                                  />
                                  <Form.Check.Label
                                    className="form-check-label"
                                    htmlFor="customCheck1"
                                  >
                                    <i className="ri-arrow-down-s-line"></i>
                                  </Form.Check.Label>
                                </Form.Check>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                          <li className="me-1">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Reload</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-restart-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </li>
                          <li className="me-1">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Archive</Tooltip>}
                              className="me-1"
                            >
                              <Link to="#">
                                <i className="ri-mail-open-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </li>
                          <li className="me-1">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                              className="me-1"
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </li>
                          <li className="me-1">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Inbox</Tooltip>}
                              className="me-1"
                            >
                              <Link to="#">
                                <i className="ri-mail-unread-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Zoom</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-drag-move-2-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </li>
                        </ul>
                        <div className="iq-email-search d-flex">
                          <Form className="me-2 position-relative searchbox">
                            <Form.Group className="form-group mb-0">
                              <Form.Control
                                type="email"
                                className="form-control search-input"
                                id="exampleInputEmail1"
                                placeholder="Search"
                              />
                              <Link className="search-link" to="#">
                                <i className="ri-search-line"></i>
                              </Link>
                            </Form.Group>
                          </Form>
                          <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                            <li className="me-2">
                              <Link
                                className="font-size-14"
                                to="#"
                                id="navbarDropdown1"
                                data-bs-toggle="dropdown"
                              >
                                1 - 50 of 505
                              </Link>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown1"
                              >
                                <Link className="dropdown-item" to="#">
                                  20 per page
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  50 per page
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  100 per page
                                </Link>
                              </div>
                            </li>
                            <li className="me-1">
                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Previous</Tooltip>}
                                className="me-1"
                              >
                                <Link to="#">
                                  <i className="ri-arrow-left-s-line"></i>
                                </Link>
                              </OverlayTrigger>
                            </li>
                            <li className="me-1">
                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Next</Tooltip>}
                                className="me-1"
                              >
                                <Link to="#">
                                  <i className="ri-arrow-right-s-line"></i>
                                </Link>
                              </OverlayTrigger>
                            </li>
                            <li className="me-0">
                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Setting</Tooltip>}
                                className="me-1"
                              >
                                <Link to="#">
                                  <i className="ri-list-settings-line"></i>
                                </Link>
                              </OverlayTrigger>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="iq-email-listbox">
                      <Tab.Content>
                        <Tab.Pane
                          eventKey="first"
                          id="mail-inbox"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li className="iq-unread">
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow1("1");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle text-warning"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@MackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @MackenzieBnio - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">08:00 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show1 === "1" ? "true" : ""}
                                onclick={setShow1}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow2("2");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk1"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk1"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Deray Billings (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Megan Allen (@meganallen) has sent you a
                                    direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">08:15 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show2 === "2" ? "true" : ""}
                                onclick={setShow2}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow3("3");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk2"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk2"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Dixa Horton (@dixahorton) has sent you a
                                    direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show3 === "3" ? "true" : ""}
                                onclick={setShow3}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow4("4");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk3"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk3"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show4 === "4" ? "true" : ""}
                                onclick={setShow4}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow5("5");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk4"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk4"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre (@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show5 === "5" ? "true" : ""}
                                onclick={setShow5}
                              />
                            </li>
                            <li className="iq-unread">
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow6("6");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk017"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk017"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle text-warning"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show6 === "6" ? "true" : ""}
                                onclick={setShow6}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow7("7");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check>
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk6"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk6"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show7 === "7" ? "true" : ""}
                                onclick={setShow7}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow8("8");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk7"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk7"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Deray Billings (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show8 === "8" ? "true" : ""}
                                onclick={setShow8}
                              />
                            </li>
                            <li className="iq-unread">
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow9("9");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk8"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk8"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle text-warning"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre (@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show9 === "9" ? "true" : ""}
                                onclick={setShow9}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow10("10");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check>
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk9"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk9"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show10 === "10" ? "true" : ""}
                                onclick={setShow10}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow11("11");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk011"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk011"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show11 === "11" ? "true" : ""}
                                onclick={setShow11}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow12("12");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk11"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk11"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show12 === "12" ? "true" : ""}
                                onclick={setShow12}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow13("13");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk12"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk12"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show13 === "13" ? "true" : ""}
                                onclick={setShow13}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow14("14");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk13"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk13"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Deray Billings (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg(@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show14 === "14" ? "true" : ""}
                                onclick={setShow14}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow15("15");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk14"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk14"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show15 === "15" ? "true" : ""}
                                onclick={setShow15}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow16("16");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk15"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk15"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre(@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show16 === "16" ? "true" : ""}
                                onclick={setShow16}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow17("17");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk16"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk16"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show17 === "17" ? "true" : ""}
                                onclick={setShow17}
                              />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow18("18");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk17"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk17"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail
                                show={show18 === "18" ? "true" : ""}
                                onclick={setShow18}
                              />
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="second"
                          id="mail-starred"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk02"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk02"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Dixa Horton (@dixahorton) has sent you a
                                    direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk03"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk03"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk04"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk04"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre (@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li className="iq-unread">
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk5"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk5"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle text-warning"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk018"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk018"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="third"
                          id="mail-snoozed"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk004"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk004"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre (@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li className="iq-unread">
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk012"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk012"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle text-warning"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk024"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk024"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="forth"
                          id="mail-draft"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk09"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk09"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk013"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk013"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk014"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk014"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk019"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk019"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk025"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk025"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Deray Billings (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg(@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="fifth"
                          id="mail-sent"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk015"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk015"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk020"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk020"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk026"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk026"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Deray Billings (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg(@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk027"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk027"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk032"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk032"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre(@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk037"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk037"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="six"
                          id="mail-trash"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk028"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk028"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk033"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk033"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre(@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk038"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk038"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="seven"
                          id="mail-important"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk029"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk029"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk034"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk034"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Deray Billings (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li className="iq-unread">
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk035"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk035"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle text-warning"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre (@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk009"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk009"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk010"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk010"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk016"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk016"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="eight"
                          id="mail-spam"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk021"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk021"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk023"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk023"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Deray Billings (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg(@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk030"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk030"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Lauren Drury (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk031"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk031"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Fabian Ros (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Let Hunre(@lethunre) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk036"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk036"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Dixa Horton (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Eb Begg (@ebbegg) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                            <li>
                              <div
                                className="d-flex align-self-center iq-unread-inner"
                                onClick={() => {
                                  setShow("true");
                                }}
                              >
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <Form.Check className="form-check">
                                      <Form.Check.Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk040"
                                      />
                                      <Form.Check.Label
                                        className="form-check-label"
                                        htmlFor="mailk040"
                                      ></Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <Link to="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </Link>
                                </div>
                                <div className="iq-email-content">
                                  <Link to="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool :) Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </Link>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <Link to="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-mail-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ri-time-line"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <EmailAppDetail show={show} onclick={setShow} />
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Tab.Container>
          <div
            id="compose-email-popup"
            className="compose-popup modal modal-sticky-bottom-right modal-sticky-lg"
          >
            <Card className="iq-border-radius-20 mb-0">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md="12" className="mb-3">
                    <h5 className="text-primary float-left">
                      <i className="ri-pencil-fill"></i> Compose Message
                    </h5>
                    <button
                      type="submit"
                      className="close-popup"
                      data-dismiss="modal"
                    >
                      <i className="ri-close-fill"></i>
                    </button>
                  </Col>
                </Row>
                <form className="email-form">
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      To:
                    </label>
                    <div className="col-sm-10">
                      <select
                        id="inputEmail3"
                        className="select2jsMultiSelect form-control"
                        multiple="multiple"
                      >
                        <option defaultValue="Petey Cruiser">
                          Petey Cruiser
                        </option>
                        <option defaultValue="Bob Frapples">
                          Bob Frapples
                        </option>
                        <option defaultValue="Barb Ackue">Barb Ackue</option>
                        <option defaultValue="Greta Life">Greta Life</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="cc" className="col-sm-2 col-form-label">
                      Cc:
                    </label>
                    <div className="col-sm-10">
                      <select
                        id="cc"
                        className="select2jsMultiSelect form-control"
                        multiple="multiple"
                      >
                        <option defaultValue="Brock Lee">Brock Lee</option>
                        <option defaultValue="Rick O'Shea">Rick O'Shea</option>
                        <option defaultValue="Cliff Hanger">
                          Cliff Hanger
                        </option>
                        <option defaultValue="Barb Dwyer">Barb Dwyer</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="subject"
                      className="col-sm-2 col-form-label"
                    >
                      Subject:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="subject"
                      className="col-sm-2 col-form-label"
                    >
                      Your Message:
                    </label>
                    <div className="col-md-10">
                      <textarea
                        className="textarea form-control"
                        rows="5"
                        defaultValue="Next, use our Get Started docs to setup Tiny!"
                      />
                    </div>
                  </div>
                  <div className="form-group row align-items-center compose-bottom pt-3 m-0">
                    <div className="d-flex flex-grow-1 align-items-center">
                      <div className="send-btn">
                        <button type="submit" className="btn btn-primary">
                          Send
                        </button>
                      </div>
                      <div className="send-panel">
                        <label
                          className="ms-2 mb-0 soft-bg-primary rounded"
                          htmlFor="file"
                        >
                          {" "}
                          <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                          />{" "}
                          <Link to="#">
                            <i className="ri-attachment-line"></i>{" "}
                          </Link>{" "}
                        </label>
                        <label className="ms-2 mb-0 soft-bg-primary rounded">
                          {" "}
                          <Link to="#">
                            {" "}
                            <i className="ri-map-pin-user-line text-primary"></i>
                          </Link>{" "}
                        </label>
                        <label className="ms-2 mb-0 soft-bg-primary rounded">
                          {" "}
                          <Link to="#">
                            {" "}
                            <i className="ri-drive-line text-primary"></i>
                          </Link>{" "}
                        </label>
                        <label className="ms-2 mb-0 soft-bg-primary rounded">
                          {" "}
                          <Link to="#">
                            {" "}
                            <i className="ri-camera-line text-primary"></i>
                          </Link>{" "}
                        </label>
                        <label className="ms-2 mb-0 soft-bg-primary rounded">
                          {" "}
                          <Link to="#">
                            {" "}
                            <i className="ri-user-smile-line text-primary"></i>
                          </Link>{" "}
                        </label>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="send-panel">
                        <label className="ms-2 mb-0 soft-bg-primary rounded">
                          <Link to="#">
                            <i className="ri-settings-2-line text-primary"></i>
                          </Link>
                        </label>
                        <label className="ms-2 mb-0 soft-bg-primary rounded">
                          <Link to="#">
                            <i className="ri-delete-bin-line text-primary"></i>
                          </Link>{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Email;

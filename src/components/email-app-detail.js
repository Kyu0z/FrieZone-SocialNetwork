import React from "react";
import { appName, supportEmail } from "../config";
import Card from "../components/Card";
import {
  Dropdown,
  Table,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../assets/images/user/user-1.jpg";

const EmailAppDetail = (props) => {
  return (
    <>
      <div
        className={`email-app-details ${props.show === "true" ? "show" : ""}`}
      >
        <Card>
          <Card.Body className="p-0">
            <div>
              <div className="iq-email-to-list p-3">
                <div className="d-flex justify-content-between">
                  <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                    <li className="me-3">
                      <Link
                        to="#"
                        className="email-remove"
                        onClick={() => {
                          props.onclick(false);
                        }}
                      >
                        <i className="ri-arrow-left-line m-0 h4"></i>
                      </Link>
                    </li>
                    <li className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Mail</Tooltip>}
                        className="me-1"
                      >
                        <Link to="#">
                          <i className="ri-mail-open-line"></i>
                        </Link>
                      </OverlayTrigger>
                    </li>
                    <li className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Info</Tooltip>}
                        className="me-1"
                      >
                        <Link to="#">
                          <i className="ri-information-line"></i>
                        </Link>
                      </OverlayTrigger>
                    </li>
                    <li className="me-2">
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
                    <li className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Unread</Tooltip>}
                        className="me-1"
                      >
                        <Link to="#">
                          <i className="ri-mail-unread-line"></i>
                        </Link>
                      </OverlayTrigger>
                    </li>
                    <li className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Transfer</Tooltip>}
                        className="me-1"
                      >
                        <Link to="#">
                          <i className="ri-folder-transfer-line"></i>
                        </Link>
                      </OverlayTrigger>
                    </li>
                    <li className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Bookmark</Tooltip>}
                        className="me-1"
                      >
                        <Link to="#">
                          <i className="ri-bookmark-line"></i>
                        </Link>
                      </OverlayTrigger>
                    </li>
                  </ul>
                  <div className="iq-email-search d-flex">
                    <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                      <li className="me-3">
                        <Link className="font-size-14" to="#">
                          1 of 505
                        </Link>
                      </li>
                      <li className="me-2">
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
                      <li className="me-2">
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
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="iq-inbox-subject p-3">
                <h5 className="mb-2">
                  Your elite author Graphic Optimization reward is ready!
                </h5>
                <div className="iq-inbox-subject-info">
                  <div className="iq-subject-info">
                    <img
                      src={img}
                      className="img-fluid rounded-circle avatar-80"
                      alt="#"
                    />
                    <div className="iq-subject-status align-self-center">
                      <h6 className="mb-0">
                        {appName} team{" "}
                        <Link to={supportEmail}>{supportEmail}</Link>
                      </h6>
                      <Dropdown bsPrefix="show">
                        <Dropdown.Toggle
                          as={Button}
                          variant="white"
                          className="p-0"
                          href="#"
                        >
                          to Me
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="font-size-12">
                          <Table className="iq-inbox-details">
                            <tbody>
                              <tr>
                                <td>from:</td>
                                <td>Medium Daily Digest</td>
                              </tr>
                              <tr>
                                <td>reply-to:</td>
                                <td>noreply@gmail.com</td>
                              </tr>
                              <tr>
                                <td>to:</td>
                                <td>iqonicdesigns@gmail.com</td>
                              </tr>
                              <tr>
                                <td>date:</td>
                                <td>13 Dec 2019, 08:30</td>
                              </tr>
                              <tr>
                                <td>subject:</td>
                                <td>The Golden Rule</td>
                              </tr>
                              <tr>
                                <td>security:</td>
                                <td>Standard encryption</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <span className="align-self-center">
                      Jan 15, 2029, 10:20AM
                    </span>
                  </div>
                  <div className="iq-inbox-body mt-5">
                    <p>Hi Jopour Xiong,</p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy.{" "}
                    </p>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                    <p className="mt-5 mb-0">
                      Regards,
                      <span className="d-inline-block w-100">John Deo</span>
                    </p>
                  </div>
                  <hr />
                  <div className="attegement">
                    <h6 className="mb-2">ATTACHED FILES:</h6>
                    <ul>
                      <li className="icon icon-attegment">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>{" "}
                        <span className="ms-1">mydoc.doc</span>
                      </li>
                      <li className="icon icon-attegment">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>{" "}
                        <span className="ms-1">mydoc.pdf</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default EmailAppDetail;

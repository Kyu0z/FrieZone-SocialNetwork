import React from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

// img
import pageimg1 from "../../../assets/images/page-img/43.png";
import pageimg2 from "../../../assets/images/page-img/44.png";
import pageimg3 from "../../../assets/images/page-img/45.png";
import pageimg4 from "../../../assets/images/page-img/46.png";
import pageimg5 from "../../../assets/images/page-img/47.png";
import { Trans } from "react-i18next";

const File = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title"><Trans i18nKey="files" /></h4>
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="dropdown-btoggle text-primary"
                      id="dropdownMenuButton5"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ri-more-2-fill h4"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton5"
                    >
                      <Dropdown.Item href="#">
                        <i className="ri-eye-fill me-2"></i><Trans i18nKey="view" />
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-delete-bin-6-fill me-2"></i><Trans i18nKey="delete" />
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-pencil-fill me-2"></i><Trans i18nKey="edit" />
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-printer-fill me-2"></i><Trans i18nKey="print" />
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-file-download-fill me-2"></i><Trans i18nKey="download" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Row className="justify-content-between d-flex">
                    <Col sm="12" md="6">
                      <div
                        id="user_list_datatable_info"
                        className="dataTables_filter"
                      >
                        <form className="me-3 position-relative">
                          <div className="form-group mb-0">
                            <input
                              type="search"
                              className="form-control"
                              id="exampleInputSearch"
                              placeholder="Search"
                            />
                          </div>
                        </form>
                      </div>
                    </Col>
                    <Col sm="12" md="6">
                      <div className="user-list-files d-flex justify-content-end">
                        <Link
                          to="#"
                          className="chat-icon-phone btn bg-soft-primary"
                        >
                          Print
                        </Link>
                        <Link
                          to="#"
                          className="chat-icon-video btn bg-soft-primary"
                        >
                          Excel
                        </Link>
                        <Link
                          to="#"
                          className="chat-icon-delete btn bg-soft-primary"
                        >
                          Pdf
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <table className="files-lists table table-striped mt-4">
                    <thead>
                      <tr>
                        <th scope="col">
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </th>
                        <th scope="col"><Trans i18nKey="files_name" /></th>
                        <th scope="col"><Trans i18nKey="files_type" /></th>
                        <th scope="col"><Trans i18nKey="date" /></th>
                        <th scope="col"><Trans i18nKey="size" /></th>
                        <th scope="col"><Trans i18nKey="author" /></th>
                        <th scope="col"><Trans i18nKey="activate" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </td>
                        <td>
                          <img
                            className="rounded-circle img-fluid avatar-40 me-2"
                            src={pageimg1}
                            alt="profile"
                          />{" "}
                          post report
                        </td>
                        <td>Document</td>
                        <td>Mar 12, 2020</td>
                        <td>390 kb</td>
                        <td>Anna Sthesia</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Download</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-download-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </td>
                        <td>
                          <img
                            className="rounded-circle img-fluid avatar-40 me-2"
                            src={pageimg2}
                            alt="profile"
                          />{" "}
                          usages
                        </td>
                        <td>Document</td>
                        <td>Mar 18, 2020</td>
                        <td>600 kb</td>
                        <td>Paul Molive</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Download</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-download-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </td>
                        <td>
                          <img
                            className="rounded-circle img-fluid avatar-40 me-2"
                            src={pageimg3}
                            alt="profile"
                          />{" "}
                          Images file
                        </td>
                        <td>Slide</td>
                        <td>Mar 19, 2020</td>
                        <td>800 kb</td>
                        <td>Bob Frapples</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Download</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-download-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </td>
                        <td>
                          <img
                            className="rounded-circle img-fluid avatar-40 me-2"
                            src={pageimg4}
                            alt="profile"
                          />{" "}
                          total comments
                        </td>
                        <td>Document</td>
                        <td>Mar 21, 2020</td>
                        <td>500 kb</td>
                        <td>Barb Ackue</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Download</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-download-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </td>
                        <td>
                          <img
                            className="rounded-circle img-fluid avatar-40 me-2"
                            src={pageimg5}
                            alt="profile"
                          />{" "}
                          popular events
                        </td>
                        <td>Pdf</td>
                        <td>Mar 24, 2020</td>
                        <td>320 kb</td>
                        <td>Barb Ackue</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Download</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-download-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </td>
                        <td>
                          <img
                            className="rounded-circle img-fluid avatar-40 me-2"
                            src={pageimg1}
                            alt="profile"
                          />{" "}
                          todo list
                        </td>
                        <td>excel</td>
                        <td>Mar 28, 2020</td>
                        <td>600 kb</td>
                        <td>Ira Membrit</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Download</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-download-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className=" text-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </div>
                        </td>
                        <td>
                          <img
                            className="rounded-circle img-fluid avatar-40 me-2"
                            src={pageimg3}
                            alt="profile"
                          />{" "}
                          music list
                        </td>
                        <td>pdf</td>
                        <td>Mar 30, 2020</td>
                        <td>900 kb</td>
                        <td>Pete Sariya</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Download</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-download-line"></i>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Delete</Tooltip>}
                            >
                              <Link to="#">
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default File;

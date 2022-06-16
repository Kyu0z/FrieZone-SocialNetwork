import React from "react";
import { appName } from "../../../../config";
import { Navbar, Dropdown, Nav, Form, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//image
import logo from "../../../../assets/images/logo.png";
import user1 from "../../../../assets/images/user/1.jpg";
import user2 from "../../../../assets/images/user/02.jpg";
import user3 from "../../../../assets/images/user/03.jpg";
import user4 from "../../../../assets/images/user/04.jpg";
import user5 from "../../../../assets/images/user/05.jpg";
import Button from "@restart/ui/esm/Button";
import { Trans } from "react-i18next";

const Header = () => {
  const minisidebar = () => {
    document.body.classList.toggle("sidebar-main");
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <Navbar expand="lg" variant="light" className="p-0">
            <div className="iq-navbar-logo d-flex justify-content-between">
              <Link to="/">
                <Image src={logo} className="img-fluid" alt="" />
                <span>{appName}</span>
              </Link>
              <div className="iq-menu-bt align-self-center">
                <div className="wrapper-menu" onClick={minisidebar}>
                  <div className="main-circle">
                    <i className="ri-menu-line"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-search-bar device-search">
              <Form action="#" className="searchbox">
                <Link className="search-link" to="#">
                  <i className="ri-search-line"></i>
                </Link>
                <input
                  type="text"
                  className="text search-input"
                  placeholder={t`search_placeholder` + " ..."}
                />
              </Form>
            </div>
            <Navbar.Toggle as="button">
              <i className="ri-menu-3-line"></i>
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav as="ul" className="ms-auto navbar-list">
                <Dropdown as="li" className="nav-item">
                  <Dropdown.Toggle
                    href="/"
                    as={Button}
                    className="d-flex align-items-center"
                    variant="search-toggle"
                  >
                    <i className="ri-home-line"></i>
                  </Dropdown.Toggle>
                </Dropdown>
                
                <Dropdown as="li" className="nav-item">
                  <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                    <i className="ri-group-line"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="sub-drop sub-drop-large"
                    aria-labelledby="group-drop"
                  >
                    <Card className="shadow-none m-0">
                      <Card.Header className="d-flex justify-content-between bg-primary">
                        <div className="header-title">
                          <h5 className="mb-0 text-white"><Trans i18nKey="friend_request" /></h5>
                        </div>
                        <small className="badge bg-light text-dark ">4</small>
                      </Card.Header>
                      <Card.Body className="p-0">
                        <div className="iq-friend-request">
                          <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Image
                                className="avatar-40 rounded"
                                src={user1}
                                alt=""
                              />
                              <div className="ms-3">
                                <h6 className="mb-0 ">Jaques Amole</h6>
                                <p className="mb-0">40 friends</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="me-3 btn btn-primary rounded"
                              >
                                <Trans i18nKey="confirm" />
                              </Link>
                              <Link
                                to="#"
                                className="me-3 btn btn-secondary rounded"
                              >
                                <Trans i18nKey="confirm_delete" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="iq-friend-request">
                          <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Image
                                className="avatar-40 rounded"
                                src={user2}
                                alt=""
                              />
                              <div className="ms-3">
                                <h6 className="mb-0 ">Lucy Tania</h6>
                                <p className="mb-0">12 friends</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="me-3 btn btn-primary rounded"
                              >
                                <Trans i18nKey="confirm" />
                              </Link>
                              <Link
                                to="#"
                                className="me-3 btn btn-secondary rounded"
                              >
                                <Trans i18nKey="confirm_delete" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="iq-friend-request">
                          <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Image
                                className="avatar-40 rounded"
                                src={user3}
                                alt=""
                              />
                              <div className="ms-3">
                                <h6 className="mb-0 ">Manny Petty</h6>
                                <p className="mb-0">3 friends</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="me-3 btn btn-primary rounded"
                              >
                                <Trans i18nKey="confirm" />
                              </Link>
                              <Link
                                to="#"
                                className="me-3 btn btn-secondary rounded"
                              >
                                <Trans i18nKey="confirm_delete" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="iq-friend-request">
                          <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <Image
                                className="avatar-40 rounded"
                                src={user4}
                                alt=""
                              />
                              <div className="ms-3">
                                <h6 className="mb-0 ">Marsha Mello</h6>
                                <p className="mb-0">15 friends</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="me-3 btn btn-primary rounded"
                              >
                                <Trans i18nKey="confirm" />
                              </Link>
                              <Link
                                to="#"
                                className="me-3 btn btn-secondary rounded"
                              >
                                <Trans i18nKey="confirm_delete" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <Link to="#" className=" btn text-primary">
                            <Trans i18nKey="see_all" />
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Dropdown.Menu>
                </Dropdown>
                
                <Dropdown as="li" className="nav-item">
                  <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                    <i className="ri-notification-4-line"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="sub-drop"
                    aria-labelledby="group-drop"
                  >
                    <Card className="shadow-none m-0">
                      <Card.Header className="d-flex justify-content-between bg-primary">
                        <div className="header-title bg-primary">
                          <h5 className="mb-0 text-white"><Trans i18nKey="notification" /></h5>
                        </div>
                        <small className="badge bg-light text-dark">4</small>
                      </Card.Header>
                      <Card.Body className="p-0">
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user1}
                              alt=""
                            />
                          </div>
                          <div className="ms-3 w-100">
                            <h6 className="mb-0 ">Emma Watson Bni</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">95 MB</p>
                              <small className="float-right font-size-12">
                                Just Now
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user2}
                              alt=""
                            />
                          </div>
                          <div className="ms-3 w-100">
                            <h6 className="mb-0 ">New Customer is join</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">Cyst Bni</p>
                              <small className="float-right font-size-12">
                                5 days ago
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user3}
                              alt=""
                            />
                          </div>
                          <div className="ms-3 w-100">
                            <h6 className="mb-0 ">Two customer is left</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">Cyst Bni</p>
                              <small className="float-right font-size-12">
                                2 days ago
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user4}
                              alt=""
                            />
                          </div>
                          <div className="ms-3 w-100">
                            <h6 className="mb-0 ">New Mail from Fenny</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">Cyst Bni</p>
                              <small className="float-right font-size-12">
                                3 days ago
                              </small>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="li" className="nav-item">
                  <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                    <i className="ri-mail-line"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="sub-drop dropdown-menu"
                    aria-labelledby="mail-drop"
                  >
                    <Card className="shadow-none m-0">
                      <Card.Header className="d-flex justify-content-between bg-primary">
                        <div className="header-title bg-primary">
                          <h5 className="mb-0 text-white"><Trans i18nKey="message" /></h5>
                        </div>
                        <small className="badge bg-light text-dark">4</small>
                      </Card.Header>
                      <Card.Body className="p-0 ">
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <Image
                                className="avatar-40 rounded"
                                src={user1}
                                alt=""
                              />
                            </div>
                            <div className=" w-100 ms-3">
                              <h6 className="mb-0 ">Bni Emma Watson</h6>
                              <small className="float-left font-size-12">
                                13 Jun
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                              <Image
                                className="avatar-40 rounded"
                                src={user2}
                                alt=""
                              />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                              <small className="float-left font-size-12">
                                20 Apr
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div>
                              <Image
                                className="avatar-40 rounded"
                                src={user3}
                                alt=""
                              />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">Why do we use it?</h6>
                              <small className="float-left font-size-12">
                                30 Jun
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div>
                              <Image
                                className="avatar-40 rounded"
                                src={user4}
                                alt=""
                              />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">Variations Passages</h6>
                              <small className="float-left font-size-12">
                                12 Sep
                              </small>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="iq-sub-card d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div>
                              <Image
                                className="avatar-40 rounded"
                                src={user5}
                                alt=""
                              />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                              <small className="float-left font-size-12">
                                5 Dec
                              </small>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="li" className="nav-item">
                  <Dropdown.Toggle
                    href="#"
                    as={Button}
                    bsPrefix="d-flex align-items-center search-toggle"
                  >
                    <Image
                      src={user1}
                      className="img-fluid rounded-circle me-3"
                      alt="user"
                    />
                    <div className="caption">
                      <h6 className="mb-0 line-height">Khải Duy</h6>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="sub-drop dropdown-menu caption-menu"
                    aria-labelledby="drop-down-arrow"
                  >
                    <Card className="shadow-none m-0">
                      <Card.Header className="bg-primary">
                        <div className="header-title">
                          <h5 className="mb-0 text-white">Hello Khải Duy</h5>
                          <span className="text-white font-size-12">
                            Available
                          </span>
                        </div>
                      </Card.Header>
                      <Card.Body className="p-0 ">
                        <Link
                          to="/dashboard/app/profile"
                          className="iq-sub-card iq-bg-primary-hover d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-primary">
                              <i className="ri-file-user-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 "><Trans i18nKey="my_profile" /></h6>
                              <p className="mb-0 font-size-12">
                                <Trans i18nKey="detail_profile" />
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/dashboard/app/user-profile-edit"
                          className="iq-sub-card iq-bg-warning-hover d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-warning">
                              <i className="ri-profile-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 "><Trans i18nKey="edit" /></h6>
                              <p className="mb-0 font-size-12">
                                <Trans i18nKey="edit_profile" />
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/dashboard/app/user-account-setting"
                          className="iq-sub-card iq-bg-info-hover d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-info">
                              <i className="ri-account-box-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 "><Trans i18nKey="setting_account" /></h6>
                              <p className="mb-0 font-size-12">
                                <Trans i18nKey="setting_detail_account" />
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/dashboard/app/user-privacy-setting"
                          className="iq-sub-card iq-bg-danger-hover d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-danger">
                              <i className="ri-lock-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 "><Trans i18nKey="setting_privacy" /></h6>
                              <p className="mb-0 font-size-12">
                                <Trans i18nKey="setting_detail_privacy" />
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div className="d-inline-block w-100 text-center p-3">
                          <Link
                            className="btn btn-primary iq-sign-btn"
                            to="/auth/sign-in"
                            role="button"
                          >
                            <Trans i18nKey="sign_out" />
                            <i className="ri-login-box-line ms-2"></i>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;

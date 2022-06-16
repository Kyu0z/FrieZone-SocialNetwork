import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  Nav,
  Tab,
  OverlayTrigger,
  Tooltip,
  Button,
  Modal,
} from "react-bootstrap";
import Card from "../../../components/Card";
import CustomToggle from "../../../components/dropdowns";
import ShareOffcanvas from "../../../components/share-offcanvas";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

// images
import img1 from "../../../assets/images/page-img/profile-bg1.jpg";
import img2 from "../../../assets/images/user/11.png";
import img3 from "../../../assets/images/icon/08.png";
import img4 from "../../../assets/images/icon/09.png";
import img5 from "../../../assets/images/icon/10.png";
import img6 from "../../../assets/images/icon/11.png";
import img7 from "../../../assets/images/icon/12.png";
import img8 from "../../../assets/images/icon/13.png";
import img9 from "../../../assets/images/page-img/07.jpg";
import img10 from "../../../assets/images/page-img/06.jpg";
import user1 from "../../../assets/images/user/1.jpg";
import user05 from "../../../assets/images/user/05.jpg";
import user01 from "../../../assets/images/user/01.jpg";
import user02 from "../../../assets/images/user/02.jpg";
import user03 from "../../../assets/images/user/03.jpg";
import user06 from "../../../assets/images/user/06.jpg";
import user07 from "../../../assets/images/user/07.jpg";
import user08 from "../../../assets/images/user/08.jpg";
import user09 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
import user13 from "../../../assets/images/user/13.jpg";
import user14 from "../../../assets/images/user/14.jpg";
import user15 from "../../../assets/images/user/15.jpg";
import user16 from "../../../assets/images/user/16.jpg";
import user17 from "../../../assets/images/user/17.jpg";
import user18 from "../../../assets/images/user/18.jpg";
import user19 from "../../../assets/images/user/19.jpg";
import p1 from "../../../assets/images/page-img/p1.jpg";
import p3 from "../../../assets/images/page-img/p3.jpg";
import icon1 from "../../../assets/images/icon/01.png";
import icon2 from "../../../assets/images/icon/02.png";
import icon3 from "../../../assets/images/icon/03.png";
import icon4 from "../../../assets/images/icon/04.png";
import icon5 from "../../../assets/images/icon/05.png";
import icon6 from "../../../assets/images/icon/06.png";
import icon7 from "../../../assets/images/icon/07.png";
import g1 from "../../../assets/images/page-img/g1.jpg";
import g2 from "../../../assets/images/page-img/g2.jpg";
import g3 from "../../../assets/images/page-img/g3.jpg";
import g4 from "../../../assets/images/page-img/g4.jpg";
import g5 from "../../../assets/images/page-img/g5.jpg";
import g6 from "../../../assets/images/page-img/g6.jpg";
import g7 from "../../../assets/images/page-img/g7.jpg";
import g8 from "../../../assets/images/page-img/g8.jpg";
import g9 from "../../../assets/images/page-img/g9.jpg";
import loader from "../../../assets/images/page-img/page-load-loader.gif";
import small07 from "../../../assets/images/small/07.png";
import small08 from "../../../assets/images/small/08.png";
import small09 from "../../../assets/images/small/09.png";
import small1 from "../../../assets/images/small/07.png";
import small2 from "../../../assets/images/small/08.png";
import small3 from "../../../assets/images/small/09.png";
import small4 from "../../../assets/images/small/10.png";
import small5 from "../../../assets/images/small/11.png";
import small6 from "../../../assets/images/small/12.png";
import small7 from "../../../assets/images/small/13.png";
import small8 from "../../../assets/images/small/14.png";
import user9 from "../../../assets/images/user/1.jpg";
import img51 from "../../../assets/images/page-img/51.jpg";
import img52 from "../../../assets/images/page-img/52.jpg";
import img53 from "../../../assets/images/page-img/53.jpg";
import img54 from "../../../assets/images/page-img/54.jpg";
import img55 from "../../../assets/images/page-img/55.jpg";
import img56 from "../../../assets/images/page-img/56.jpg";
import img57 from "../../../assets/images/page-img/57.jpg";
import img58 from "../../../assets/images/page-img/58.jpg";
import img59 from "../../../assets/images/page-img/59.jpg";
import img60 from "../../../assets/images/page-img/60.jpg";
import img61 from "../../../assets/images/page-img/61.jpg";
import img62 from "../../../assets/images/page-img/62.jpg";
import img64 from "../../../assets/images/page-img/64.jpg";
import img65 from "../../../assets/images/page-img/65.jpg";
import img63 from "../../../assets/images/page-img/63.jpg";

const UserProfile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Body className=" profile-page p-0">
                <div className="profile-header">
                  <div className="position-relative">
                    <img
                      src={img1}
                      alt="profile-bg"
                      className="rounded img-fluid"
                    />
                    <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                      <li>
                        <Link to="#">
                          <i className="ri-pencil-line"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ri-settings-4-line"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="user-detail text-center mb-3">
                    <div className="profile-img">
                      <img
                        src={img2}
                        alt="profile-img1"
                        className="avatar-130 img-fluid"
                      />
                    </div>
                    <div className="profile-detail">
                      <h3>Bni Cyst</h3>
                    </div>
                  </div>
                  <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                    <div className="social-links">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={img3}
                              className="img-fluid rounded"
                              alt="facebook"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={img4}
                              className="img-fluid rounded"
                              alt="Twitter"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={img5}
                              className="img-fluid rounded"
                              alt="Instagram"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={img6}
                              className="img-fluid rounded"
                              alt="Google plus"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={img7}
                              className="img-fluid rounded"
                              alt="You tube"
                            />
                          </Link>
                        </li>
                        <li className="text-center md-pe-3 pe-0">
                          <Link to="#">
                            <img
                              src={img8}
                              className="img-fluid rounded"
                              alt="linkedin"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social-info">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center ps-3">
                          <h6><Trans i18nKey="posts" /></h6>
                          <p className="mb-0">690</p>
                        </li>
                        <li className="text-center ps-3">
                          <h6><Trans i18nKey="follower" /></h6>
                          <p className="mb-0">206</p>
                        </li>
                        <li className="text-center ps-3">
                          <h6><Trans i18nKey="following" /></h6>
                          <p className="mb-0">100</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="user-tabing">
                  <Nav
                    as="ul"
                    variant="pills"
                    className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0"
                  >
                    <Nav.Item as="li" className=" col-12 col-sm-3 p-0 ">
                      <Nav.Link
                        href="#pills-timeline-tab"
                        eventKey="first"
                        role="button"
                        className=" text-center p-3"
                      >
                        <Trans i18nKey="timeline" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                      <Nav.Link
                        href="#pills-about-tab"
                        eventKey="second"
                        role="button"
                        className="text-center p-3"
                      >
                        <Trans i18nKey="about" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className=" col-12 col-sm-3 p-0">
                      <Nav.Link
                        href="#pills-friends-tab"
                        eventKey="third"
                        role="button"
                        className="text-center p-3"
                      >
                        <Trans i18nKey="friend" />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                      <Nav.Link
                        href="#pills-photos-tab"
                        eventKey="forth"
                        role="button"
                        className="text-center p-3"
                      >
                        <Trans i18nKey="photos" />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Card.Body className=" p-0">
                    <Row>
                      <Col lg={4}>
                        <div className="card">
                          <div className="card-body">
                            <Link to="#">
                              <span className="badge badge-pill bg-primary font-weight-normal ms-auto me-1">
                                <i className="ri-star-line"></i>
                              </span>{" "}
                              27 Items for yoou
                            </Link>
                          </div>
                        </div>
                        <Card>
                          <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title"><Trans i18nKey="event" /></h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <p className="m-0">
                                <Link to="#"> <Trans i18nKey="create" /> </Link>
                              </p>
                            </div>
                          </div>
                          <Card.Body>
                            <Row>
                              <Col sm={12}>
                                <div className="event-post position-relative">
                                  <Link to="#">
                                    <img
                                      src={img9}
                                      alt="gallary1"
                                      className="img-fluid rounded"
                                    />
                                  </Link>
                                  <div className="job-icon-position">
                                    <div className="job-icon bg-primary p-2 d-inline-block rounded-circle">
                                      <i className="ri-briefcase-line text-white"></i>
                                    </div>
                                  </div>
                                  <div className="card-body text-center p-2">
                                    <h5>Started New Job at Apple</h5>
                                    <p>January 24, 2019</p>
                                  </div>
                                </div>
                              </Col>
                              <Col sm={12}>
                                <div className="event-post position-relative">
                                  <Link to="#">
                                    <img
                                      src={img10}
                                      alt="gallary1"
                                      className="img-fluid rounded"
                                    />
                                  </Link>
                                  <div className="job-icon-position">
                                    <div className="job-icon bg-primary p-2 d-inline-block rounded-circle">
                                      <i className="ri-briefcase-line text-white"></i>
                                    </div>
                                  </div>
                                  <div className="card-body text-center p-2">
                                    <h5>Freelance Photographer</h5>
                                    <p className="mb-0">January 24, 2019</p>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                        <Card>
                          <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title"><Trans i18nKey="photos" /></h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <p className="m-0">
                                <Link to="#"><Trans i18nKey="add_photos" /></Link>
                              </p>
                            </div>
                          </div>
                          <Card.Body>
                            <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                              <li>
                                <Link to="#">
                                  <img
                                    src={g1}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g2}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g3}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g4}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g5}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g6}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g7}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g8}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={g9}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                              </li>
                            </ul>
                          </Card.Body>
                        </Card>
                        <Card>
                          <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title"><Trans i18nKey="friend" /></h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <p className="m-0">
                                <Link to="javacsript:void();"><Trans i18nKey="add_friend" /></Link>
                              </p>
                            </div>
                          </div>
                          <Card.Body>
                            <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                              <li>
                                <Link to="#">
                                  <img
                                    src={user05}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Anna Rexia</h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user06}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Tara Zona</h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user07}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Polly Tech</h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user08}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Bill Emia</h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user09}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Moe Fugga</h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user10}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">
                                  Hal Appeno{" "}
                                </h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user07}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Zack Lee</h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user06}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Terry Aki</h6>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src={user05}
                                    alt="gallary"
                                    className="img-fluid"
                                  />
                                </Link>
                                <h6 className="mt-2 text-center">Greta Life</h6>
                              </li>
                            </ul>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={8}>
                        <Card id="post-modal-data">
                          <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title">
                                <Trans i18nKey="create_post" />
                              </h4>
                            </div>
                          </div>
                          <Card.Body>
                            <div className="d-flex align-items-center">
                              <div className="user-img">
                                <img
                                  src={user1}
                                  alt="userimg"
                                  className="avatar-60 rounded-circle"
                                />
                              </div>
                              <form
                                className="post-text ms-3 w-100 "
                                onClick={handleShow}
                              >
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder={
                                    t`create_post_placeholder` + " ..."
                                  }
                                  style={{ border: "none" }}
                                />
                              </form>
                            </div>
                            <hr />
                            <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                              <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2">
                                <img
                                  src={small07}
                                  alt="icon"
                                  className="img-fluid me-2"
                                />{" "}
                                <Trans i18nKey="photo" />/
                                <Trans i18nKey="video" />
                              </li>
                              <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2">
                                <img
                                  src={small08}
                                  alt="icon"
                                  className="img-fluid me-2"
                                />{" "}
                                <Trans i18nKey="tag_friend" />
                              </li>
                              <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3">
                                <img
                                  src={small09}
                                  alt="icon"
                                  className="img-fluid me-2"
                                />{" "}
                                <Trans i18nKey="feeling" />/
                                <Trans i18nKey="activity" />
                              </li>
                              <li className="bg-soft-primary rounded p-2 pointer text-center">
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      as={CustomToggle}
                                      id="post-option"
                                    >
                                      <i className="ri-more-fill h4"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                      className=" dropdown-menu-right"
                                      aria-labelledby="post-option"
                                    >
                                      <Dropdown.Item
                                        onClick={handleShow}
                                        href="#"
                                      >
                                        Check in
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={handleShow}
                                        href="#"
                                      >
                                        Live Video
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={handleShow}
                                        href="#"
                                      >
                                        Gif
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={handleShow}
                                        href="#"
                                      >
                                        Watch Party
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={handleShow}
                                        href="#"
                                      >
                                        Play with Friend
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </li>
                            </ul>
                          </Card.Body>
                          <Modal show={show} onHide={handleClose} size="lg">
                            <Modal.Header className="d-flex justify-content-between">
                              <h5 className="modal-title" id="post-modalLabel">
                                <Trans i18nKey="create_post" />
                              </h5>
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClose}
                              >
                                <i className="ri-close-fill"></i>
                              </button>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="d-flex align-items-center">
                                <div className="user-img">
                                  <img
                                    src={img5}
                                    alt="userimg"
                                    className="avatar-60 rounded-circle img-fluid"
                                  />
                                </div>
                                <form
                                  className="post-text ms-3 w-100"
                                  action=""
                                >
                                  <input
                                    type="text"
                                    className="form-control rounded"
                                    placeholder={
                                      t`create_post_placeholder` + " ..."
                                    }
                                    style={{ border: "none" }}
                                  />
                                </form>
                              </div>
                              <hr />
                              <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small1}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    <Trans i18nKey="photo" />/
                                    <Trans i18nKey="video" />
                                  </div>
                                </li>
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small2}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    <Trans i18nKey="tag_friend" />
                                  </div>
                                </li>
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small3}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    <Trans i18nKey="feeling" />/
                                    <Trans i18nKey="activity" />
                                  </div>
                                </li>
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small4}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    Check in
                                  </div>
                                </li>
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small5}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    Live Video
                                  </div>
                                </li>
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small6}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    Gif
                                  </div>
                                </li>
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small7}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    Watch Party
                                  </div>
                                </li>
                                <li className="col-md-6 mb-3">
                                  <div className="bg-soft-primary rounded p-2 pointer me-3">
                                    <Link to="#"></Link>
                                    <img
                                      src={small8}
                                      alt="icon"
                                      className="img-fluid"
                                    />{" "}
                                    Play with Friends
                                  </div>
                                </li>
                              </ul>
                              <hr />
                              <div className="other-option">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <div className="user-img me-3">
                                      <img
                                        src={user9}
                                        alt="userimg"
                                        className="avatar-60 rounded-circle img-fluid"
                                      />
                                    </div>
                                    <h6>Your Story</h6>
                                  </div>
                                  <div className="card-post-toolbar">
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        role="button"
                                      >
                                        <span className="btn btn-primary">
                                          Friend
                                        </span>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu clemassName="dropdown-menu m-0 p-0">
                                        <Dropdown.Item
                                          className="dropdown-item p-3"
                                          href="#"
                                        >
                                          <div className="d-flex align-items-top">
                                            <i className="ri-save-line h4"></i>
                                            <div className="data ms-2">
                                              <h6>Public</h6>
                                              <p className="mb-0">
                                                Anyone on or off Facebook
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          className="dropdown-item p-3"
                                          href="#"
                                        >
                                          <div className="d-flex align-items-top">
                                            <i className="ri-close-circle-line h4"></i>
                                            <div className="data ms-2">
                                              <h6>Friends</h6>
                                              <p className="mb-0">
                                                Your Friend on facebook
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          className="dropdown-item p-3"
                                          href="#"
                                        >
                                          <div className="d-flex align-items-top">
                                            <i className="ri-user-unfollow-line h4"></i>
                                            <div className="data ms-2">
                                              <h6>Friends except</h6>
                                              <p className="mb-0">
                                                Don't show to some friends
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          className="dropdown-item p-3"
                                          href="#"
                                        >
                                          <div className="d-flex align-items-top">
                                            <i className="ri-notification-line h4"></i>
                                            <div className="data ms-2">
                                              <h6>Only Me</h6>
                                              <p className="mb-0">Only me</p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                              <Button
                                variant="primary"
                                className="d-block w-100 mt-3"
                              >
                                Post
                              </Button>
                            </Modal.Body>
                          </Modal>
                        </Card>
                        <Card>
                          <Card.Body>
                            <div className="post-item">
                              <div className="user-post-data pb-3">
                                <div className="d-flex justify-content-between">
                                  <div className="me-3">
                                    <img
                                      className="rounded-circle  avatar-60"
                                      src={user1}
                                      alt=""
                                    />
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex justify-content-between flex-wrap">
                                      <div>
                                        <h5 className="mb-0 d-inline-block">
                                          <Link to="#">Bni Cyst</Link>
                                        </h5>
                                        <p className="ms-1 mb-0 d-inline-block">
                                          Add New Post
                                        </p>
                                        <p className="mb-0">3 hour ago</p>
                                      </div>
                                      <div className="card-post-toolbar">
                                        <Dropdown>
                                          <Dropdown.Toggle className="bg-transparent border-white">
                                            <i className="ri-more-fill"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" m-0 p-0">
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="save" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="save_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-pencil-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="edit" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="edit_post" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="hide" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="hide_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-delete-bin-7-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="delete" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="delete_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="notification" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="notification_detail" />
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
                              </div>
                              <div className="user-post">
                                <Link to="#">
                                  <img
                                    src={p1}
                                    alt="post"
                                    className="img-fluid w-100"
                                  />
                                </Link>
                              </div>
                              <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="like-block position-relative d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                      <div className="like-data">
                                        <Dropdown>
                                          <Dropdown.Toggle as={CustomToggle}>
                                            <img
                                              src={icon1}
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" py-2">
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Like</Tooltip>}
                                              className="ms-2 me-2"
                                            >
                                              <img
                                                src={icon1}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Love</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon2}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Happy</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon3}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>HaHa</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon4}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Think</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon5}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Sade</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon6}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={
                                                <Tooltip>Lovely</Tooltip>
                                              }
                                              className="me-2"
                                            >
                                              <img
                                                src={icon7}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                      <div className="total-like-block ms-2 me-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            as={CustomToggle}
                                            id="post-option"
                                          >
                                            140 Likes
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item to="#">
                                              Max Emum
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Bill Yerds
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Hap E. Birthday
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Tara Misu
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Midge Itz
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Sal Vidge
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Other
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                    <div className="total-comment-block">
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          as={CustomToggle}
                                          id="post-option"
                                        >
                                          20 Comment
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item to="#">
                                            Max Emum
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Bill Yerds
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Hap E. Birthday
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Tara Misu
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Midge Itz
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Sal Vidge
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Other
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                  <ShareOffcanvas />
                                </div>
                                <hr />
                                <ul className="post-comments p-0 m-0">
                                  <li className="mb-2">
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user02}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user03}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <form className="comment-text d-flex align-items-center mt-3">
                                  <input
                                    type="text"
                                    className="form-control rounded"
                                    placeholder="Enter Your Comment"
                                  />
                                  <div className="comment-attagement d-flex">
                                    <Link to="#">
                                      <i className="ri-link me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-user-smile-line me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-camera-line me-3"></i>
                                    </Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="post-item">
                              <div className="user-post-data py-3">
                                <div className="d-flex  justify-content-between">
                                  <div className="me-3">
                                    <img
                                      className="rounded-circle  avatar-60"
                                      src={user1}
                                      alt=""
                                    />
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className="mb-0 d-inline-block me-1">
                                          <Link to="#">Bni Cyst</Link>
                                        </h5>
                                        <p className="mb-0 d-inline-block">
                                          Share Anna Mull's Post
                                        </p>
                                        <p className="mb-0">5 hour ago</p>
                                      </div>
                                      <div className="card-post-toolbar">
                                        <Dropdown>
                                          <Dropdown.Toggle className="bg-transparent border-white">
                                            <i className="ri-more-fill"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" m-0 p-0">
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="save" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="save_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-pencil-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="edit" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="edit_post" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="hide" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="hide_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-delete-bin-7-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="delete" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="delete_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="notification" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="notification_detail" />
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
                              </div>
                              <div className="user-post">
                                <Link to="#">
                                  <img
                                    src={p3}
                                    alt="post"
                                    className="img-fluid w-100"
                                  />
                                </Link>
                              </div>
                              <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="like-block position-relative d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                      <div className="like-data">
                                        <Dropdown>
                                          <Dropdown.Toggle as={CustomToggle}>
                                            <img
                                              src={icon1}
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" py-2">
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Like</Tooltip>}
                                              className="ms-2 me-2"
                                            >
                                              <img
                                                src={icon1}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Love</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon2}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Happy</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon3}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>HaHa</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon4}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Think</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon5}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Sade</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon6}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={
                                                <Tooltip>Lovely</Tooltip>
                                              }
                                              className="me-2"
                                            >
                                              <img
                                                src={icon7}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                      <div className="total-like-block ms-2 me-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            as={CustomToggle}
                                            id="post-option"
                                          >
                                            140 Likes
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item to="#">
                                              Max Emum
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Bill Yerds
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Hap E. Birthday
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Tara Misu
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Midge Itz
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Sal Vidge
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Other
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                    <div className="total-comment-block">
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          as={CustomToggle}
                                          id="post-option"
                                        >
                                          20 Comment
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item to="#">
                                            Max Emum
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Bill Yerds
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Hap E. Birthday
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Tara Misu
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Midge Itz
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Sal Vidge
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Other
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                  <ShareOffcanvas />
                                </div>
                                <hr />
                                <ul className="post-comments p-0 m-0">
                                  <li className="mb-2">
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user02}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user03}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <form className="comment-text d-flex align-items-center mt-3">
                                  <input
                                    type="text"
                                    className="form-control rounded"
                                    placeholder="Enter Your Comment"
                                  />
                                  <div className="comment-attagement d-flex">
                                    <Link to="#">
                                      <i className="ri-link me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-user-smile-line me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-camera-line me-3"></i>
                                    </Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="post-item">
                              <div className="user-post-data py-3">
                                <div className="d-flex justify-content-between">
                                  <div className="me-3">
                                    <img
                                      className="rounded-circle avatar-60"
                                      src={user1}
                                      alt=""
                                    />
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className="mb-0 d-inline-block">
                                          <Link to="#">Bni Cyst</Link>
                                        </h5>
                                        <p className="ms-1 mb-0 d-inline-block">
                                          Update his Status
                                        </p>
                                        <p className="mb-0">7 hour ago</p>
                                      </div>
                                      <div className="card-post-toolbar">
                                        <Dropdown>
                                          <Dropdown.Toggle className="bg-transparent border-white">
                                            <i className="ri-more-fill"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" m-0 p-0">
                                            <Dropdown.Item
                                              className="p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="save" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="save_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-pencil-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="edit" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="edit_post" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="hide" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="hide_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="dropdown-item p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-delete-bin-7-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="delete" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="delete_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="notification" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="notification_detail" />
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
                              </div>
                              <div className="user-post">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries,
                                </p>
                              </div>
                              <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="like-block position-relative d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                      <div className="like-data">
                                        <Dropdown>
                                          <Dropdown.Toggle as={CustomToggle}>
                                            <img
                                              src={icon1}
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" py-2">
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Like</Tooltip>}
                                              className="ms-2 me-2"
                                            >
                                              <img
                                                src={icon1}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Love</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon2}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Happy</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon3}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>HaHa</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon4}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Think</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon5}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Sade</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon6}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={
                                                <Tooltip>Lovely</Tooltip>
                                              }
                                              className="me-2"
                                            >
                                              <img
                                                src={icon7}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                      <div className="total-like-block ms-2 me-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            as={CustomToggle}
                                            id="post-option"
                                          >
                                            140 Likes
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item to="#">
                                              Max Emum
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Bill Yerds
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Hap E. Birthday
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Tara Misu
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Midge Itz
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Sal Vidge
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Other
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                    <div className="total-comment-block">
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          as={CustomToggle}
                                          id="post-option"
                                        >
                                          20 Comment
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item to="#">
                                            Max Emum
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Bill Yerds
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Hap E. Birthday
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Tara Misu
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Midge Itz
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Sal Vidge
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Other
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                  <ShareOffcanvas />
                                </div>
                                <hr />
                                <ul className="post-comments p-0 m-0">
                                  <li className="mb-2">
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user02}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user03}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <form className="comment-text d-flex align-items-center mt-3">
                                  <input
                                    type="text"
                                    className="form-control rounded"
                                    placeholder="Enter Your Comment"
                                  />
                                  <div className="comment-attagement d-flex">
                                    <Link to="#">
                                      <i className="ri-link me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-user-smile-line me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-camera-line me-3"></i>
                                    </Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="post-item">
                              <div className="user-post-data py-3">
                                <div className="d-flex justify-content-between">
                                  <div className=" me-3">
                                    <img
                                      className="rounded-circle avatar-60"
                                      src={user1}
                                      alt=""
                                    />
                                  </div>
                                  <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className="mb-0 d-inline-block me-1">
                                          <Link to="#">Bni Cyst</Link>
                                        </h5>
                                        <p className=" mb-0 d-inline-block">
                                          Change Profile Picture
                                        </p>
                                        <p className="mb-0">3 day ago</p>
                                      </div>
                                      <div className="card-post-toolbar">
                                        <Dropdown>
                                          <Dropdown.Toggle className="bg-transparent border-white">
                                            <i className="ri-more-fill"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" m-0 p-0">
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="save" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="save_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-pencil-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="edit" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="edit_post" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="hide" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="hide_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-delete-bin-7-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="delete" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="delete_detail" />
                                                  </p>
                                                </div>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className=" p-3"
                                              to="#"
                                            >
                                              <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4"></i>
                                                <div className="data ms-2">
                                                  <h6><Trans i18nKey="notification" /></h6>
                                                  <p className="mb-0">
                                                    <Trans i18nKey="notification_detail" />
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
                              </div>
                              <div className="user-post text-center">
                                <Link to="#">
                                  <img
                                    src={p1}
                                    alt="post"
                                    className="img-fluid profile-img"
                                  />
                                </Link>
                              </div>
                              <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="like-block position-relative d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                      <div className="like-data">
                                        <Dropdown>
                                          <Dropdown.Toggle as={CustomToggle}>
                                            <img
                                              src={icon1}
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className=" py-2">
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Like</Tooltip>}
                                              className="ms-2 me-2"
                                            >
                                              <img
                                                src={icon1}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Love</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon2}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Happy</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon3}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>HaHa</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon4}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Think</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon5}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={<Tooltip>Sade</Tooltip>}
                                              className="me-2"
                                            >
                                              <img
                                                src={icon6}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                              placement="top"
                                              overlay={
                                                <Tooltip>Lovely</Tooltip>
                                              }
                                              className="me-2"
                                            >
                                              <img
                                                src={icon7}
                                                className="img-fluid"
                                                alt=""
                                              />
                                            </OverlayTrigger>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                      <div className="total-like-block ms-2 me-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            as={CustomToggle}
                                            id="post-option"
                                          >
                                            140 Likes
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu>
                                            <Dropdown.Item to="#">
                                              Max Emum
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Bill Yerds
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Hap E. Birthday
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Tara Misu
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Midge Itz
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Sal Vidge
                                            </Dropdown.Item>
                                            <Dropdown.Item to="#">
                                              Other
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                    <div className="total-comment-block">
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          as={CustomToggle}
                                          id="post-option"
                                        >
                                          20 Comment
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item to="#">
                                            Max Emum
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Bill Yerds
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Hap E. Birthday
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Tara Misu
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Midge Itz
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Sal Vidge
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            Other
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                  <ShareOffcanvas />
                                </div>
                                <hr />
                                <ul className="post-comments p-0 m-0">
                                  <li className="mb-2">
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user02}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img
                                          src={user03}
                                          alt="userimg"
                                          className="avatar-35 rounded-circle img-fluid"
                                        />
                                      </div>
                                      <div className="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p className="mb-0">
                                          Lorem ipsum dolor sit amet
                                        </p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                          <Link to="#">like</Link>
                                          <Link to="#">reply</Link>
                                          <Link to="#">translate</Link>
                                          <span> 5 min </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <form className="comment-text d-flex align-items-center mt-3">
                                  <input
                                    type="text"
                                    className="form-control rounded"
                                    placeholder="Enter Your Comment"
                                  />
                                  <div className="comment-attagement d-flex">
                                    <Link to="#">
                                      <i className="ri-link me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-user-smile-line me-3"></i>
                                    </Link>
                                    <Link to="#">
                                      <i className="ri-camera-line me-3"></i>
                                    </Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="about1"
                  >
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={3}>
                            <Nav
                              variant="pills"
                              className=" basic-info-items list-inline d-block p-0 m-0"
                            >
                              <Nav.Item>
                                <Nav.Link href="#" eventKey="about1">
                                  <Trans i18nKey="contact_info" />
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link href="#" eventKey="about2">
                                  <Trans i18nKey="family_relationship" />
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link href="#" eventKey="about3">
                                  <Trans i18nKey="work_education" />
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link href="#" eventKey="about4">
                                  <Trans i18nKey="place" />
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link href="#" eventKey="about5">
                                  <Trans i18nKey="detail_you" />
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col md={9} className=" ps-4">
                            <Tab.Content>
                              <Tab.Pane eventKey="about1">
                                <h4><Trans i18nKey="contact_info" /></h4>
                                <hr />
                                <Row>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="email" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">Bnijohn@gmail.com</p>
                                  </div>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="mobile" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">(001) 4544 565 456</p>
                                  </div>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="address" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">
                                      United States of America
                                    </p>
                                  </div>
                                </Row>
                                <h4 className="mt-3">
                                  <Trans i18nKey="socialmedia" />
                                </h4>
                                <hr />
                                <div className="row">
                                  <div className="col-3">
                                    <h6><Trans i18nKey="website" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">www.bootstrap.com</p>
                                  </div>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="sociallink" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">www.bootstrap.com</p>
                                  </div>
                                </div>
                                <h4 className="mt-3"><Trans i18nKey="basic_info" /></h4>
                                <hr />
                                <Row>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="birth_date" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">24 January</p>
                                  </div>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="birth_year" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">1994</p>
                                  </div>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="gender" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">Female</p>
                                  </div>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="interested" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">Designing</p>
                                  </div>
                                  <div className="col-3">
                                    <h6><Trans i18nKey="language" /></h6>
                                  </div>
                                  <div className="col-9">
                                    <p className="mb-0">English, French</p>
                                  </div>
                                </Row>
                              </Tab.Pane>
                              <Tab.Pane eventKey="about2">
                                <h4 className="mb-3"><Trans i18nKey="relationship" /></h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill"></i>
                                    </div>
                                    <div className="media-support-info ms-3">
                                      <h6><Trans i18nKey="add_relationship" /></h6>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mt-3 mb-3"><Trans i18nKey="family_member" /></h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill"></i>
                                    </div>
                                    <div className="media-support-info ms-3">
                                      <h6><Trans i18nKey="add_memberfamily" /></h6>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center justify-content-between">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user01}
                                        alt="story1"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex justify-content-between">
                                        <div className="ms-3">
                                          <h6>Paul Molive</h6>
                                          <p className="mb-0">Brothe</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="d-flex justify-content-between mb-4  align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user02}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex flex-wrap justify-content-between">
                                        <div className=" ms-3">
                                          <h6>Anna Mull</h6>
                                          <p className="mb-0">Sister</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center justify-content-between">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user03}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex justify-content-between">
                                        <div className="ms-3">
                                          <h6>Paige Turner</h6>
                                          <p className="mb-0">Cousin</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </Tab.Pane>
                              <Tab.Pane eventKey="about3">
                                <h4 className="mb-3"><Trans i18nKey="work" /></h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex justify-content-between mb-4  align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill"></i>
                                    </div>
                                    <div className="ms-3">
                                      <h6><Trans i18nKey="add_workplace" /></h6>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center justify-content-between">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user01}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex justify-content-between">
                                        <div className="ms-3">
                                          <h6>Themeforest</h6>
                                          <p className="mb-0">Web Designer</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center justify-content-between">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user02}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex flex-wrap justify-content-between">
                                        <div className="ms-3">
                                          <h6>iqonicdesign</h6>
                                          <p className="mb-0">Web Developer</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center justify-content-between">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user03}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex flex-wrap justify-content-between">
                                        <div className="ms-3">
                                          <h6>W3school</h6>
                                          <p className="mb-0">Designer</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mb-3"><Trans i18nKey="skill" /></h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill"></i>
                                    </div>
                                    <div className="ms-3">
                                      <h6><Trans i18nKey="add_skill" /></h6>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mt-3 mb-3"><Trans i18nKey="college" /></h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill"></i>
                                    </div>
                                    <div className="ms-3">
                                      <h6><Trans i18nKey="add_college" /></h6>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user01}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex flex-wrap justify-content-between">
                                        <div className="ms-3">
                                          <h6>Lorem ipsum</h6>
                                          <p className="mb-0">USA</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </Tab.Pane>
                              <Tab.Pane eventKey="about4">
                                <h4 className="mb-3">
                                <Trans i18nKey="current_city" />
                                </h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center justify-content-between">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user01}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex flex-wrap justify-content-between">
                                        <div className="ms-3">
                                          <h6>Georgia</h6>
                                          <p className="mb-0">Georgia State</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="d-flex mb-4 align-items-center justify-content-between">
                                    <div className="user-img img-fluid">
                                      <img
                                        src={user02}
                                        alt="story-img"
                                        className="rounded-circle avatar-40"
                                      />
                                    </div>
                                    <div className="w-100">
                                      <div className="d-flex flex-wrap justify-content-between">
                                        <div className="ms-3">
                                          <h6>Atlanta</h6>
                                          <p className="mb-0">Atlanta City</p>
                                        </div>
                                        <div className="edit-relation">
                                          <Link to="#">
                                            <i className="ri-edit-line me-2"></i>
                                            <Trans i18nKey="edit" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <h4 className="mt-3 mb-3">
                                <Trans i18nKey="orther_place" />
                                </h4>
                                <ul className="suggestions-lists m-0 p-0">
                                  <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                      <i className="ri-add-fill"></i>
                                    </div>
                                    <div className="ms-3">
                                      <h6><Trans i18nKey="add_place" /></h6>
                                    </div>
                                  </li>
                                </ul>
                              </Tab.Pane>
                              <Tab.Pane eventKey="about5">
                                <h4 className="mb-3"><Trans i18nKey="about" /></h4>
                                <p>
                                  Hi, I’m Bni, I’m 26 and I work as a Web
                                  Designer for the iqonicdesign.
                                </p>
                                <h4 className="mt-3 mb-3"><Trans i18nKey="orther_name" /></h4>
                                <p>Bini Rock</p>
                                <h4 className="mt-3 mb-3"><Trans i18nKey="favorite" /></h4>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="all-friends"
                  >
                    <Card>
                      <Card.Body>
                        <h2>Friends</h2>
                        <div className="friend-list-tab mt-2">
                          <Nav
                            variant="pills"
                            className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2"
                          >
                            <Nav.Item>
                              <Nav.Link
                                href="#pill-all-friends"
                                eventKey="all-friends"
                              >
                                <Trans i18nKey="all_friend" />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                href="#pill-recently-add"
                                eventKey="recently-add"
                              >
                                <Trans i18nKey="recently_friend" />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                href="#pill-closefriends"
                                eventKey="closefriends"
                              >
                                {" "}
                                <Trans i18nKey="close_friend" />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link href="#pill-home" eventKey="home-town">
                                {" "}
                                <Trans i18nKey="city" />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                href="#pill-following"
                                eventKey="following"
                              >
                                <Trans i18nKey="following" />
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="all-friends">
                              <Card.Body className="p-0">
                                <Row>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Petey Cruiser</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Anna Sthesia</h5>
                                            <p className="mb-0">50 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user07}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Paul Molive</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user08}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Gail Forcewind</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user09}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Paige Turner</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user10}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>b Frapples</h5>
                                            <p className="mb-0">6 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user13}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Walter Melon</h5>
                                            <p className="mb-0">30 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user14}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Barb Ackue</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user15}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Buck Kinnear</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user16}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Ira Membrit</h5>
                                            <p className="mb-0">22 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user17}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Shonda Leer</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user18}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>ock Lee</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user19}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Maya Didas</h5>
                                            <p className="mb-0">40 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Rick O'Shea</h5>
                                            <p className="mb-0">50 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Pete Sariya</h5>
                                            <p className="mb-0">5 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user07}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Monty Carlo</h5>
                                            <p className="mb-0">2 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user08}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Sal Monella</h5>
                                            <p className="mb-0">0 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user09}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Sue Vaneer</h5>
                                            <p className="mb-0">25 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user10}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Cliff Hanger</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Barb Dwyer</h5>
                                            <p className="mb-0">23 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Terry Aki</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user13}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Cory Ander</h5>
                                            <p className="mb-0">7 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user14}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Robin Banks</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user15}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Jimmy Changa</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user16}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Barry Wine</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user17}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Poppa Cherry</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user18}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Zack Lee</h5>
                                            <p className="mb-0">33 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user19}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Don Stairs</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Peter Pants</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Hal Appeno </h5>
                                            <p className="mb-0">13 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Row>
                              </Card.Body>
                            </Tab.Pane>
                            <Tab.Pane eventKey="recently-add">
                              <div className="card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user07}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Otto Matic</h5>
                                            <p className="mb-0">4 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user08}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Moe Fugga</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user09}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Tom Foolery</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user10}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Bud Wiser</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user15}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Polly Tech</h5>
                                            <p className="mb-0">10 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user16}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Holly Graham</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user17}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Tara Zona</h5>
                                            <p className="mb-0">5 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user18}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Barry Cade</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="closefriends">
                              <div className="card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user19}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Bud Wiser</h5>
                                            <p className="mb-0">32 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Otto Matic</h5>
                                            <p className="mb-0">9 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Peter Pants</h5>
                                            <p className="mb-0">2 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user07}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Zack Lee</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user08}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Barry Wine</h5>
                                            <p className="mb-0">36 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user09}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Robin Banks</h5>
                                            <p className="mb-0">22 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user10}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Cory Ander</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user15}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Moe Fugga</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user16}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Polly Tech</h5>
                                            <p className="mb-0">30 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user17}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Hal Appeno</h5>
                                            <p className="mb-0">25 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="home-town">
                              <div className="card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user18}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Paul Molive</h5>
                                            <p className="mb-0">14 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user19}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Paige Turner</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Barb Ackue</h5>
                                            <p className="mb-0">23 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Ira Membrit</h5>
                                            <p className="mb-0">16 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user07}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Maya Didas</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="following">
                              <div className="card-body p-0">
                                <div className="row">
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Maya Didas</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Monty Carlo</h5>
                                            <p className="mb-0">3 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user07}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Cliff Hanger</h5>
                                            <p className="mb-0">20 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user08}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>b Ackue</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user09}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Bob Frapples</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user10}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Anna Mull</h5>
                                            <p className="mb-0">6 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user15}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>ry Wine</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user16}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Don Stairs</h5>
                                            <p className="mb-0">12 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user17}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Peter Pants</h5>
                                            <p className="mb-0">8 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user18}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Polly Tech</h5>
                                            <p className="mb-0">18 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user19}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Tara Zona</h5>
                                            <p className="mb-0">30 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user05}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Arty Ficial</h5>
                                            <p className="mb-0">15 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user06}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Bill Emia</h5>
                                            <p className="mb-0">25 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user07}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Bill Yerds</h5>
                                            <p className="mb-0">9 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 mb-3">
                                    <div className="iq-friendlist-block">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                          <Link to="#">
                                            <img
                                              src={user08}
                                              alt="profile-img"
                                              className="img-fluid"
                                            />
                                          </Link>
                                          <div className="friend-info ms-3">
                                            <h5>Matt Innae</h5>
                                            <p className="mb-0">19 friends</p>
                                          </div>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                            <Dropdown.Toggle className=" btn btn-secondary me-2">
                                              <i className="ri-check-line me-1 text-white"></i>{" "}
                                              <Trans i18nKey="friend" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                              <Dropdown.Item href="#">
                                                Get Notification
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Close Friend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfollow
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Unfriend
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#">
                                                Block
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="p1">
                    <Card>
                      <Card.Body>
                        <h2>Photos</h2>
                        <div className="friend-list-tab mt-2">
                          <Nav
                            variant="pills"
                            className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2"
                          >
                            <li>
                              <Nav.Link eventKey="p1" href="#pill-photosofyou">
                                Photos of You
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link eventKey="p2" href="#pill-your-photos">
                                Your Photos
                              </Nav.Link>
                            </li>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="p1">
                              <div className="card-body p-0">
                                <div className="d-grid gap-2 d-grid-template-1fr-13">
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img51}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img52}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img53}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img54}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img55}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img56}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img57}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img58}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img59}
                                          className="img-fluid rounded"
                                          alt=""
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img60}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img61}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img62}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img63}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img64}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img65}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img51}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img52}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img53}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img54}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img55}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img56}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img57}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img58}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img59}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="p2">
                              <div className="card-body p-0">
                                <div className="d-grid gap-2 d-grid-template-1fr-13 ">
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img51}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img52}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img53}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img54}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img55}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img56}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img57}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img58}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img59}
                                          className="img-fluid rounded"
                                          alt="Responsive "
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="user-images position-relative overflow-hidden">
                                      <Link to="#">
                                        <img
                                          src={img60}
                                          className="img-fluid rounded"
                                          alt="Responsive"
                                        />
                                      </Link>
                                      <div className="image-hover-data">
                                        <div className="product-elements-icon">
                                          <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                60{" "}
                                                <i className="ri-thumb-up-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                30{" "}
                                                <i className="ri-chat-3-line"></i>{" "}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="pe-3 text-white"
                                              >
                                                {" "}
                                                10{" "}
                                                <i className="ri-share-forward-line"></i>{" "}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <OverlayTrigger
                                        placement="top"
                                        overlay={
                                          <Tooltip>Edit or Remove</Tooltip>
                                        }
                                      >
                                        <Link to="#" className="image-edit-btn">
                                          <i className="ri-edit-2-fill"></i>
                                        </Link>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Container>
                </Tab.Pane>
                <div className="col-sm-12 text-center">
                  <img src={loader} alt="loader" style={{ height: "100px" }} />
                </div>
              </Tab.Content>
            </Col>
          </Tab.Container>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;

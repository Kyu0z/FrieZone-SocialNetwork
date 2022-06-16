import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import CustomToggle from "../../components/dropdowns";
import ShareOffcanvas from "../../components/share-offcanvas";
import { Trans, useTranslation } from "react-i18next";

//image
import user1 from "../../assets/images/user/1.jpg";
import user01 from "../../assets/images/user/01.jpg";
import user2 from "../../assets/images/user/02.jpg";
import user3 from "../../assets/images/user/03.jpg";
import user4 from "../../assets/images/user/04.jpg";
import img1 from "../../assets/images/small/07.png";
import img2 from "../../assets/images/small/08.png";
import img3 from "../../assets/images/small/09.png";
import img4 from "../../assets/images/small/10.png";
import img5 from "../../assets/images/small/11.png";
import img6 from "../../assets/images/small/12.png";
import img7 from "../../assets/images/small/13.png";
import img8 from "../../assets/images/small/14.png";
import p1 from "../../assets/images/page-img/p1.jpg";
import s1 from "../../assets/images/page-img/s1.jpg";
import s2 from "../../assets/images/page-img/s2.jpg";
import s3 from "../../assets/images/page-img/s3.jpg";
import s4 from "../../assets/images/page-img/s4.jpg";
import s5 from "../../assets/images/page-img/s5.jpg";
import p2 from "../../assets/images/page-img/p2.jpg";
import p3 from "../../assets/images/page-img/p3.jpg";
import p4 from "../../assets/images/page-img/p4.jpg";
import p5 from "../../assets/images/page-img/p5.jpg";
import img42 from "../../assets/images/page-img/42.png";
import icon1 from "../../assets/images/icon/01.png";
import icon2 from "../../assets/images/icon/02.png";
import icon3 from "../../assets/images/icon/03.png";
import icon4 from "../../assets/images/icon/04.png";
import icon5 from "../../assets/images/icon/05.png";
import icon6 from "../../assets/images/icon/06.png";
import icon7 from "../../assets/images/icon/07.png";
import img9 from "../../assets/images/small/img-1.jpg";
import img10 from "../../assets/images/small/img-2.jpg";
import loader from "../../assets/images/page-img/page-load-loader.gif";

const Index = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Row>
          <Col lg={8} className="row m-0 p-0">
            <Col sm={12}>
              <Card
                id="post-modal-data"
                className="card-block card-stretch card-height"
              >
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
                        alt="user1"
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
                        placeholder={t`create_post_placeholder` + " ..."}
                        style={{ border: "none" }}
                      />
                    </form>
                  </div>
                  <hr />
                  <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                    <li className="me-3 mb-md-0 mb-2">
                      <Link to="#" className="btn btn-soft-primary">
                        <img src={img1} alt="icon" className="img-fluid me-2" />{" "}
                        <Trans i18nKey="photo" />/<Trans i18nKey="video" />
                      </Link>
                    </li>
                    <li className="me-3 mb-md-0 mb-2">
                      <Link to="#" className="btn btn-soft-primary">
                        <img src={img2} alt="icon" className="img-fluid me-2" />{" "}
                        <Trans i18nKey="tag_friend" />
                      </Link>
                    </li>
                    <li className="me-3">
                      <Link to="#" className="btn btn-soft-primary">
                        <img src={img3} alt="icon" className="img-fluid me-2" />{" "}
                        <Trans i18nKey="feeling" />/<Trans i18nKey="activity" />
                      </Link>
                    </li>
                    <li>
                      <button className=" btn btn-soft-primary">
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown>
                            <Dropdown.Toggle as="div">
                              <i className="ri-more-fill h4"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={handleShow} href="#">
                                Check in
                              </Dropdown.Item>
                              <Dropdown.Item onClick={handleShow} href="#">
                                Live Video
                              </Dropdown.Item>
                              <Dropdown.Item onClick={handleShow} href="#">
                                Gif
                              </Dropdown.Item>
                              <Dropdown.Item onClick={handleShow} href="#">
                                Watch Party
                              </Dropdown.Item>
                              <Dropdown.Item onClick={handleShow} href="#">
                                Play with Friend
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </button>
                    </li>
                  </ul>
                </Card.Body>
                <Modal
                  size="lg"
                  className=" fade"
                  id="post-modal"
                  onHide={handleClose}
                  show={show}
                >
                  <Modal.Header className="d-flex justify-content-between">
                    <Modal.Title id="post-modalLabel">
                      <Trans i18nKey="create_post" />
                    </Modal.Title>
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
                          src={user1}
                          alt="user1"
                          className="avatar-60 rounded-circle img-fluid"
                        />
                      </div>
                      <form
                        className="post-text ms-3 w-100 "
                        data-bs-toggle="modal"
                        data-bs-target="#post-modal"
                      >
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder={t`create_post_placeholder` + " ..."}
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
                            src={img1}
                            alt="icon"
                            className="img-fluid"
                          />{" "}
                          <Trans i18nKey="photo" />/<Trans i18nKey="video" />
                        </div>
                      </li>
                      <li className="col-md-6 mb-3">
                        <div className="bg-soft-primary rounded p-2 pointer me-3">
                          <Link to="#"></Link>
                          <img
                            src={img2}
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
                            src={img3}
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
                            src={img4}
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
                            src={img5}
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
                            src={img6}
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
                            src={img7}
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
                            src={img8}
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
                              src={user1}
                              alt="user1"
                              className="avatar-60 rounded-circle img-fluid"
                            />
                          </div>
                          <h6>Your Story</h6>
                        </div>
                        <div className="card-post-toolbar">
                          <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} role="button">
                              <span className="btn btn-primary"><Trans i18nKey="friend" /></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className=" m-0 p-0">
                              <Dropdown.Item className=" p-3" to="#">
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
                              <Dropdown.Item className="p-3" to="#">
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
                              <Dropdown.Item className=" p-3" to="#">
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
                              <Dropdown.Item className=" p-3" to="#">
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
                    <button
                      type="submit"
                      className="btn btn-primary d-block w-100 mt-3"
                    >
                      <Trans i18nKey="post" />
                    </button>
                  </Modal.Body>
                </Modal>
              </Card>
            </Col>
            <Col sm={12}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body>
                  <div className="user-post-data">
                    <div className="d-flex justify-content-between">
                      <div className="me-3">
                        <img
                          className="rounded-circle img-fluid"
                          src={user01}
                          alt=""
                        />
                      </div>
                      <div className="w-100">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 className="mb-0 d-inline-block">
                              Anna Sthesia
                            </h5>
                            <span className="mb-0 ps-1 d-inline-block">
                              Add New Post
                            </span>
                            <p className="mb-0 text-primary">Just Now</p>
                          </div>
                          <div className="card-post-toolbar">
                            <Dropdown>
                              <Dropdown.Toggle className="bg-transparent border-white">
                                <i className="ri-more-fill"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <div className="h4">
                                      <i className="ri-save-line"></i>
                                    </div>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="save_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className="p-3" to="#">
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
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-user-unfollow-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="unfollow" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="unfollow_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
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
                  <div className="mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi nulla dolor, ornare at commodo non, feugiat non
                      nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                      massa sed rhoncus
                    </p>
                  </div>
                  <div className="user-post">
                    <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                      <div className="row-span-2 row-span-md-1">
                        <img
                          src={p2}
                          alt="post1"
                          className="img-fluid rounded w-100"
                        />
                      </div>
                      <div className="row-span-1">
                        <img
                          src={p1}
                          alt="post2"
                          className="img-fluid rounded w-100"
                        />
                      </div>
                      <div className="row-span-1 ">
                        <img
                          src={p3}
                          alt="post3"
                          className="img-fluid rounded w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <Dropdown>
                              <Dropdown.Toggle as={CustomToggle}>
                                <img src={icon1} className="img-fluid" alt="" />
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
                                  overlay={<Tooltip>Lovely</Tooltip>}
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
                                <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="post-option">
                              20 Comment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                              <Dropdown.Item href="#">Bill Yerds</Dropdown.Item>
                              <Dropdown.Item href="#">
                                Hap E. Birthday
                              </Dropdown.Item>
                              <Dropdown.Item href="#">Tara Misu</Dropdown.Item>
                              <Dropdown.Item href="#">Midge Itz</Dropdown.Item>
                              <Dropdown.Item href="#">Sal Vidge</Dropdown.Item>
                              <Dropdown.Item href="#">Other</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <ShareOffcanvas />
                    </div>
                    <hr />
                    <ul className="post-comments list-inline p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex">
                          <div className="user-img">
                            <img
                              src={user2}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
                        <div className="d-flex">
                          <div className="user-img">
                            <img
                              src={user3}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="user-post-data">
                    <div className="d-flex justify-content-between">
                      <div className="me-3">
                        <img
                          className="rounded-circle img-fluid"
                          src={user3}
                          alt=""
                        />
                      </div>
                      <div className="w-100">
                        <div className="d-flex  justify-content-between">
                          <div>
                            <h5 className="mb-0 d-inline-block">Barb Ackue</h5>
                            <span className="mb-0 ps-1 d-inline-block">
                              Added New Image in a Post
                            </span>
                            <p className="mb-0 text-primary">1 hour ago</p>
                          </div>
                          <div className="card-post-toolbar">
                            <Dropdown>
                              <Dropdown.Toggle className="bg-transparent border-white">
                                <i className="ri-more-fill"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <div className="h4">
                                      <i className="ri-save-line"></i>
                                    </div>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="save_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className="p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-close-circle-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save_detail" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="hide" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-user-unfollow-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="unfollow" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="unfollow_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
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
                  <div className="mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi nulla dolor, ornare at commodo non, feugiat non
                      nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                      massa sed rhoncus
                    </p>
                  </div>
                  <div className="user-post">
                    <Link to="#">
                      <img
                        src={p4}
                        alt="post1"
                        className="img-fluid rounded w-100"
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
                                <img src={icon1} className="img-fluid" alt="" />
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
                                  overlay={<Tooltip>Lovely</Tooltip>}
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
                                <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="post-option">
                              20 Comment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                              <Dropdown.Item href="#">Bill Yerds</Dropdown.Item>
                              <Dropdown.Item href="#">
                                Hap E. Birthday
                              </Dropdown.Item>
                              <Dropdown.Item href="#">Tara Misu</Dropdown.Item>
                              <Dropdown.Item href="#">Midge Itz</Dropdown.Item>
                              <Dropdown.Item href="#">Sal Vidge</Dropdown.Item>
                              <Dropdown.Item href="#">Other</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <ShareOffcanvas />
                    </div>
                    <hr />
                    <ul className="post-comments list-inline p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex ">
                          <div className="user-img">
                            <img
                              src={user2}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
                        <div className="d-flex ">
                          <div className="user-img">
                            <img
                              src={user3}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
              </div>
            </Col>
            <Col sm={12}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="user-post-data">
                    <div className="d-flex justify-content-between">
                      <div className="me-3">
                        <img
                          className="rounded-circle img-fluid"
                          src={user4}
                          alt=""
                        />
                      </div>
                      <div className="w-100">
                        <div className=" d-flex  justify-content-between">
                          <div>
                            <h5 className="mb-0 d-inline-block">Ira Membrit</h5>
                            <p className="mb-0 ps-1 d-inline-block">
                              Update her Status
                            </p>
                            <p className="mb-0 text-primary">6 hour ago</p>
                          </div>
                          <div className="card-post-toolbar">
                            <Dropdown>
                              <Dropdown.Toggle className="bg-transparent border-white">
                                <i className="ri-more-fill"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <div className="h4">
                                      <i className="ri-save-line"></i>
                                    </div>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="save_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className="p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-close-circle-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save_detail" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="hide" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-user-unfollow-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="unfollow" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="unfollow_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
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
                  <div className="mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi nulla dolor, ornare at commodo non, feugiat non
                      nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                      massa sed rhoncus
                    </p>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <Dropdown>
                              <Dropdown.Toggle as={CustomToggle}>
                                <img src={icon1} className="img-fluid" alt="" />
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
                                  overlay={<Tooltip>Lovely</Tooltip>}
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
                                <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="post-option">
                              20 Comment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                              <Dropdown.Item href="#">Bill Yerds</Dropdown.Item>
                              <Dropdown.Item href="#">
                                Hap E. Birthday
                              </Dropdown.Item>
                              <Dropdown.Item href="#">Tara Misu</Dropdown.Item>
                              <Dropdown.Item href="#">Midge Itz</Dropdown.Item>
                              <Dropdown.Item href="#">Sal Vidge</Dropdown.Item>
                              <Dropdown.Item href="#">Other</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <ShareOffcanvas />
                    </div>
                    <hr />
                    <ul className="post-comments list-inline p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex">
                          <div className="user-img">
                            <img
                              src={user2}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
                        <div className="d-flex ">
                          <div className="user-img">
                            <img
                              src={user3}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
              </div>
            </Col>
            <Col sm={12}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="post-item">
                    <div className="d-flex justify-content-between">
                      <div className="me-3">
                        <img
                          className="rounded-circle img-fluid avatar-60"
                          src={user1}
                          alt=""
                        />
                      </div>
                      <div className="w-100">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 className="mb-0 d-inline-block">Bni Cyst</h5>
                            <p className="ms-1 mb-0 ps-1 d-inline-block">
                              Changed Profile Picture
                            </p>
                            <p className="mb-0">3 day ago</p>
                          </div>
                          <div className="card-post-toolbar">
                            <Dropdown>
                              <Dropdown.Toggle className="bg-transparent border-white">
                                <i className="ri-more-fill"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <div className="h4">
                                      <i className="ri-save-line"></i>
                                    </div>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="save_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className="p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-close-circle-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save_detail" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="hide" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-user-unfollow-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="unfollow" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="unfollow_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
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
                        src={p5}
                        alt="post1"
                        className="img-fluid rounded w-100 mt-3"
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
                                <img src={icon1} className="img-fluid" alt="" />
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
                                  overlay={<Tooltip>Lovely</Tooltip>}
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
                                <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="post-option">
                              20 Comment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                              <Dropdown.Item href="#">Bill Yerds</Dropdown.Item>
                              <Dropdown.Item href="#">
                                Hap E. Birthday
                              </Dropdown.Item>
                              <Dropdown.Item href="#">Tara Misu</Dropdown.Item>
                              <Dropdown.Item href="#">Midge Itz</Dropdown.Item>
                              <Dropdown.Item href="#">Sal Vidge</Dropdown.Item>
                              <Dropdown.Item href="#">Other</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <ShareOffcanvas />
                    </div>
                    <hr />
                    <ul className="post-comments list-inline p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex">
                          <div className="user-img">
                            <img
                              src={user2}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
                        <div className="d-flex">
                          <div className="user-img">
                            <img
                              src={user3}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
              </div>
            </Col>
            <Col sm={12}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="user-post-data">
                    <div className="d-flex justify-content-between">
                      <div className="me-3">
                        <img
                          className="rounded-circle img-fluid"
                          src={user2}
                          alt=""
                        />
                      </div>
                      <div className="w-100">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 className="mb-0 d-inline-block">
                              Paige Turner
                            </h5>
                            <p className="mb-0 ps-1 d-inline-block">
                              Added New Video in his Timeline
                            </p>
                            <p className="mb-0 text-primary">1 day ago</p>
                          </div>
                          <div className="card-post-toolbar">
                            <Dropdown>
                              <Dropdown.Toggle className="bg-transparent border-white">
                                <i className="ri-more-fill"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <div className="h4">
                                      <i className="ri-save-line"></i>
                                    </div>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="save_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className="p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-close-circle-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="save_detail" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="hide" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
                                  <div className="d-flex align-items-top">
                                    <i className="ri-user-unfollow-line h4"></i>
                                    <div className="data ms-2">
                                      <h6><Trans i18nKey="unfollow" /></h6>
                                      <p className="mb-0">
                                        <Trans i18nKey="unfollow_detail" />
                                      </p>
                                    </div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item className=" p-3" to="#">
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
                  <div className="mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi nulla dolor, ornare at commodo non, feugiat non
                      nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                      massa sed rhoncus
                    </p>
                  </div>
                  <div className="user-post">
                    <div className="ratio ratio-16x9">
                      <iframe
                        title="vedio"
                        src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0"
                      ></iframe>
                    </div>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <Dropdown>
                              <Dropdown.Toggle
                                as={CustomToggle}
                                id="post-option"
                              >
                                <img src={icon1} className="img-fluid" alt="" />
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
                                  overlay={<Tooltip>Lovely</Tooltip>}
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
                                <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="post-option">
                              20 Comment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">Max Emum</Dropdown.Item>
                              <Dropdown.Item href="#">Bill Yerds</Dropdown.Item>
                              <Dropdown.Item href="#">
                                Hap E. Birthday
                              </Dropdown.Item>
                              <Dropdown.Item href="#">Tara Misu</Dropdown.Item>
                              <Dropdown.Item href="#">Midge Itz</Dropdown.Item>
                              <Dropdown.Item href="#">Sal Vidge</Dropdown.Item>
                              <Dropdown.Item href="#">Other</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <ShareOffcanvas />
                    </div>
                    <hr />
                    <ul className="post-comments list-inline p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img
                              src={user2}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
                              src={user3}
                              alt="user1"
                              className="avatar-35 rounded-circle img-fluid"
                            />
                          </div>
                          <div className="comment-data-block ms-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
              </div>
            </Col>
          </Col>
          <Col lg={4}>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">
                    <Trans i18nKey="story_title" />
                  </h4>
                </div>
              </div>
              <Card.Body>
                <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-3 align-items-center">
                    <i className="ri-add-line"></i>
                    <div className="stories-data ms-3">
                      <h5>
                        <Trans i18nKey="create_story" />
                      </h5>
                      <p className="mb-0">
                        <Trans i18nKey="create_story_time" />
                      </p>
                    </div>
                  </li>
                  <li className="d-flex mb-3 align-items-center active">
                    <img
                      src={s2}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Anna Mull</h5>
                      <p className="mb-0">1 hour ago</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <img
                      src={s3}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Ira Membrit</h5>
                      <p className="mb-0">4 hour ago</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <img
                      src={s1}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Bob Frapples</h5>
                      <p className="mb-0">9 hour ago</p>
                    </div>
                  </li>
                </ul>
                <Link to="#" className="btn btn-primary d-block mt-3">
                  <Trans i18nKey="see_all" />
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">
                    <Trans i18nKey="event_title" />
                  </h4>
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      role="button"
                    >
                      <i className="ri-more-fill h4"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className=" dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
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
              </div>
              <Card.Body>
                <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-4 align-items-center ">
                    <img
                      src={s4}
                      alt="story1"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Web Workshop</h5>
                      <p className="mb-0">1 hour ago</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <img
                      src={s5}
                      alt="story2"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Fun Events and Festivals</h5>
                      <p className="mb-0">1 hour ago</p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">
                    <Trans i18nKey="upcoming_birthday_title" />
                  </h4>
                </div>
              </div>
              <Card.Body>
                <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-4 align-items-center">
                    <img
                      src={user01}
                      alt="story3"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Anna Sthesia</h5>
                      <p className="mb-0">Today</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <img
                      src={user2}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Paul Molive</h5>
                      <p className="mb-0">Tomorrow</p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">
                    <Trans i18nKey="suggested_page_title" />
                  </h4>
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <i className="ri-more-fill h4"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton01"
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
              </div>
              <Card.Body>
                <ul className="suggested-page-story m-0 p-0 list-inline">
                  <li className="mb-3">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={img42}
                        alt="story-img"
                        className="rounded-circle img-fluid avatar-50"
                      />
                      <div className="stories-data ms-3">
                        <h5>Iqonic Studio</h5>
                        <p className="mb-0">Lorem Ipsum</p>
                      </div>
                    </div>
                    <img
                      src={img9}
                      className="img-fluid rounded"
                      alt="Responsive"
                    />
                    <div className="mt-3">
                      <Link to="#" className="btn d-block">
                        <i className="ri-thumb-up-line me-2"></i>{" "}
                        <Trans i18nKey="like_page" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={img42}
                        alt="story-img"
                        className="rounded-circle img-fluid avatar-50"
                      />
                      <div className="stories-data ms-3">
                        <h5>Cakes & Bakes </h5>
                        <p className="mb-0">Lorem Ipsum</p>
                      </div>
                    </div>
                    <img
                      src={img10}
                      className="img-fluid rounded"
                      alt="Responsive"
                    />
                    <div className="mt-3">
                      <Link to="#" className="btn d-block">
                        <i className="ri-thumb-up-line me-2"></i>{" "}
                        <Trans i18nKey="like_page" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <div className="col-sm-12 text-center">
            <img src={loader} alt="loader" style={{ height: "100px" }} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Index;

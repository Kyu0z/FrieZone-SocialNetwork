import React from "react";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import Card from "../../../components/Card";
import CustomToggle from "../../../components/dropdowns";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

// images
import img1 from "../../../assets/images/page-img/profile-bg1.jpg";
import user1 from "../../../assets/images/user/1.jpg";
import user05 from "../../../assets/images/user/05.jpg";
import user02 from "../../../assets/images/user/02.jpg";
import user03 from "../../../assets/images/user/03.jpg";
import user06 from "../../../assets/images/user/06.jpg";
import user07 from "../../../assets/images/user/07.jpg";
import user08 from "../../../assets/images/user/08.jpg";
import user09 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
import icon1 from "../../../assets/images/icon/01.png";
import icon2 from "../../../assets/images/icon/02.png";
import icon3 from "../../../assets/images/icon/03.png";
import icon4 from "../../../assets/images/icon/04.png";
import icon5 from "../../../assets/images/icon/05.png";
import icon6 from "../../../assets/images/icon/06.png";
import icon7 from "../../../assets/images/icon/07.png";
import icon8 from "../../../assets/images/icon/08.png";
import icon9 from "../../../assets/images/icon/09.png";
import icon10 from "../../../assets/images/icon/10.png";
import icon11 from "../../../assets/images/icon/11.png";
import icon12 from "../../../assets/images/icon/12.png";
import icon13 from "../../../assets/images/icon/13.png";
import g1 from "../../../assets/images/page-img/g1.jpg";
import g2 from "../../../assets/images/page-img/g2.jpg";
import g3 from "../../../assets/images/page-img/g3.jpg";
import g4 from "../../../assets/images/page-img/g4.jpg";
import g5 from "../../../assets/images/page-img/g5.jpg";
import g6 from "../../../assets/images/page-img/g6.jpg";
import g7 from "../../../assets/images/page-img/g7.jpg";
import g8 from "../../../assets/images/page-img/g8.jpg";
import g9 from "../../../assets/images/page-img/g9.jpg";
import img56 from "../../../assets/images/page-img/56.jpg";
import img58 from "../../../assets/images/page-img/58.jpg";
import img57 from "../../../assets/images/page-img/57.jpg";
import small07 from "../../../assets/images/small/07.png";
import small08 from "../../../assets/images/small/08.png";
import small09 from "../../../assets/images/small/09.png";
import small10 from "../../../assets/images/small/10.png";
import small11 from "../../../assets/images/small/11.png";
import small12 from "../../../assets/images/small/12.png";
import small13 from "../../../assets/images/small/13.png";
import small14 from "../../../assets/images/small/14.png";
import img59 from "../../../assets/images/page-img/59.jpg";

const FriendProfile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Body className=" profile-page p-0">
                <div className="profile-header profile-info">
                  <div className="cover-container">
                    <img
                      src={img1}
                      alt="profile-bg"
                      className="rounded img-fluid"
                    />
                    <ul className="header-nav d-flex flex-wrap justify-end p-0 m-0">
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
                        src={user1}
                        alt="profile-img"
                        className="avatar-130 img-fluid"
                      />
                    </div>
                    <div className="profile-detail">
                      <h3>Paul Molive</h3>
                    </div>
                  </div>
                  <div className="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                    <div className="social-links">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={icon8}
                              className="img-fluid rounded"
                              alt="facebook"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={icon9}
                              className="img-fluid rounded"
                              alt="Twitter"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={icon10}
                              className="img-fluid rounded"
                              alt="Instagram"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={icon11}
                              className="img-fluid rounded"
                              alt="Google plus"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={icon12}
                              className="img-fluid rounded"
                              alt="You tube"
                            />
                          </Link>
                        </li>
                        <li className="text-center pe-3">
                          <Link to="#">
                            <img
                              src={icon13}
                              className="img-fluid rounded"
                              alt="linkedin"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social-info">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center pe-3">
                          <h6><Trans i18nKey="posts" /></h6>
                          <p className="mb-0">690</p>
                        </li>
                        <li className="text-center pe-3">
                          <h6><Trans i18nKey="follower" /></h6>
                          <p className="mb-0">206</p>
                        </li>
                        <li className="text-center pe-3">
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
          <Row>
            <Col lg={4}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title"><Trans i18nKey="about" /></h4>
                  </div>
                </div>
                <Card.Body>
                  <ul className="list-inline p-0 m-0">
                    <li className="mb-2 d-flex align-items-center">
                      <i className="ri-user-line pe-3 font-size-20"></i>
                      <p className="mb-0">Web Developer</p>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="ri-git-repository-line pe-3 font-size-20"></i>
                      <p className="mb-0">
                        Success in slowing economic activity.
                      </p>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="ri-map-pin-line pe-3 font-size-20"></i>
                      <p className="mb-0">USA</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="ri-heart-line pe-3 font-size-20"></i>
                      <p className="mb-0">Single</p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title"><Trans i18nKey="photos" /></h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center">
                    <p className="m-0">
                      <Link to="#"><Trans i18nKey="add_photos" /> </Link>
                    </p>
                  </div>
                </div>
                <Card.Body>
                  <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                    <li>
                      <Link to="#">
                        <img src={g1} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g2} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g3} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g4} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g5} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g6} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g7} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g8} alt="gallary" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={g9} alt="gallary" className="img-fluid" />
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
                      <Link to="#"><Trans i18nKey="add_friend " /> </Link>
                    </p>
                  </div>
                </div>
                <Card.Body>
                  <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                    <li>
                      <Link to="#">
                        <img src={user05} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Anna Rexia</h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user06} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Tara Zona</h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user07} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Polly Tech</h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user08} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Bill Emia</h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user09} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Moe Fugga</h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user10} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Hal Appeno </h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user07} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Zack Lee</h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user06} alt="gallary" className="img-fluid" />
                      </Link>
                      <h6 className="mt-2 text-center">Terry Aki</h6>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={user05} alt="gallary" className="img-fluid" />
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
                <Card.Body data-toggle="modal" data-target="#post-modal">
                  <div className="d-flex align-items-center">
                    <div className="user-img">
                      <img
                        src={user1}
                        alt="userimg"
                        className="avatar-60 rounded-circle img-fluid"
                      />
                    </div>
                    <form className="post-text ms-3 w-100">
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder={t`create_post_placeholder` + " ..."}
                        style={{ border: "none" }}
                      />
                    </form>
                  </div>
                  <hr />
                  <ul className="post-opt-block d-flex align-items-center list-inline m-0 p-0">
                    <li className="rounded p-2 pointer me-3">
                      <Link to="#"></Link>
                      <img
                        src={small07}
                        alt="icon"
                        className="img-fluid"
                      />{" "}
                      <Trans i18nKey="photo" />/<Trans i18nKey="video" />
                    </li>
                    <li className="rounded p-2 pointer me-3">
                      <Link to="#"></Link>
                      <img src={small08} alt="icon" className="img-fluid" /> Tag
                      Friend
                    </li>
                    <li className="rounded p-2 pointer me-3">
                      <Link to="#"></Link>
                      <img
                        src={small09}
                        alt="icon"
                        className="img-fluid"
                      />{" "}
                      <Trans i18nKey="feeling" />/<Trans i18nKey="activity" />
                    </li>
                    <li className="rounded p-2 pointer">
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="post-option"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"
                          >
                            <Link className="dropdown-item" to="#">
                              Check in
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Live Video
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Gif
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Watch Party
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Play with Friend
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
                <div
                  className="modal fade"
                  id="post-modal"
                  role="dialog"
                  aria-labelledby="post-modalLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="post-modalLabel">
                          <Trans i18nKey="create_post" />
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          <i className="ri-close-fill"></i>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex align-items-center">
                          <div className="user-img">
                            <img
                              src={user1}
                              alt="userimg"
                              className="avatar-60 rounded-circle img-fluid"
                            />
                          </div>
                          <form className="post-text ms-3 w-100" action="#">
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
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small07}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              <Trans i18nKey="photo" />/
                              <Trans i18nKey="video" />
                            </div>
                          </li>
                          <li className="col-md-6 mb-3">
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small08}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              <Trans i18nKey="tag_friend" />
                            </div>
                          </li>
                          <li className="col-md-6 mb-3">
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small09}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              <Trans i18nKey="feeling" />/
                              <Trans i18nKey="activity" />
                            </div>
                          </li>
                          <li className="col-md-6 mb-3">
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small10}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              Check in
                            </div>
                          </li>
                          <li className="col-md-6 mb-3">
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small11}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              Live Video
                            </div>
                          </li>
                          <li className="col-md-6 mb-3">
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small12}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              Gif
                            </div>
                          </li>
                          <li className="col-md-6 mb-3">
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small13}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              Watch Party
                            </div>
                          </li>
                          <li className="col-md-6 mb-3">
                            <div className="bg-primary rounded p-2 pointer mr-3">
                              <Link to="#"></Link>
                              <img
                                src={small14}
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
                              <div className="user-img mr-3">
                                <img
                                  src={user1}
                                  alt="userimg"
                                  className="avatar-60 rounded-circle img-fluid"
                                />
                              </div>
                              <h6>Your Story</h6>
                            </div>
                            <div className="card-post-toolbar">
                              <Dropdown>
                                <Dropdown.Toggle
                                  as={CustomToggle}
                                  role="button"
                                >
                                  <span className="btn btn-primary">
                                    Friend
                                  </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" m-0 p-0">
                                  <Dropdown.Item className=" p-3" to="#">
                                    <div className="d-flex align-items-top">
                                      <div className="icon font-size-20">
                                        <i className="ri-save-line"></i>
                                      </div>
                                      <div className="data ml-2">
                                        <h6>Public</h6>
                                        <p className="mb-0">
                                          Anyone on or off Facebook
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="p-3" to="#">
                                    <div className="d-flex align-items-top">
                                      <div className="icon font-size-20">
                                        <i className="ri-close-circle-line"></i>
                                      </div>
                                      <div className="data ml-2">
                                        <h6>Friends</h6>
                                        <p className="mb-0">
                                          Your Friend on facebook
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item className=" p-3" to="#">
                                    <div className="d-flex align-items-top">
                                      <div className="icon font-size-20">
                                        <i className="ri-user-unfollow-line"></i>
                                      </div>
                                      <div className="data ml-2">
                                        <h6>Friends except</h6>
                                        <p className="mb-0">
                                          Don't show to some friends
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="p-3" to="#">
                                    <div className="d-flex align-items-top">
                                      <div className="icon font-size-20">
                                        <i className="ri-notification-line"></i>
                                      </div>
                                      <div className="data ml-2">
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
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <Card.Body>
                  <div className="post-item">
                    <div className="user-post-data p-3">
                      <div className="d-flex justify-content-between">
                        <div className="me-3">
                          <img
                            className="rounded-circle  avatar-60"
                            src={user05}
                            alt=""
                          />
                        </div>
                        <div className="w-100">
                          <div className="d-flex justify-content-between flex-wrap">
                            <div>
                              <h5 className="mb-0 d-inline-block">
                                <Link to="#">Anna Sthesia</Link>
                              </h5>

                              <p className="mb-0">8 hour ago</p>
                            </div>
                            <div className="card-post-toolbar">
                              <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                  <i className="ri-more-fill"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" m-0 p-0">
                                  <Dropdown.Item className="p-3" to="#">
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
                                  <Dropdown.Item className=" p-3" to="#">
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
                                      <i className="ri-delete-bin-7-line h4"></i>
                                      <div className="data ms-2">
                                        <h6><Trans i18nKey="delete" /></h6>
                                        <p className="mb-0">
                                          <Trans i18nKey="delete_detail" />
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
                    <div className="user-post">
                      <Link to="#">
                        <img
                          src={img59}
                          alt="post"
                          className="img-fluid w-100"
                        />
                      </Link>
                    </div>
                    <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="like-data">
                              <Dropdown>
                                <Dropdown.Toggle
                                  as={CustomToggle}
                                  role="button"
                                >
                                  <img
                                    src={icon1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Dropdown.Toggle>
                                <div className="dropdown-menu">
                                  <Link
                                    className="ml-2 mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Like"
                                  >
                                    <img
                                      src={icon1}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Love"
                                  >
                                    <img
                                      src={icon2}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Happy"
                                  >
                                    <img
                                      src={icon3}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="HaHa"
                                  >
                                    <img
                                      src={icon4}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Think"
                                  >
                                    <img
                                      src={icon5}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Sade"
                                  >
                                    <img
                                      src={icon6}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Lovely"
                                  >
                                    <img
                                      src={icon7}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                </div>
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
                                  <Dropdown.Item to="#">Max Emum</Dropdown.Item>
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
                                  <Dropdown.Item to="#">Other</Dropdown.Item>
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
                                <Dropdown.Item to="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item to="#">Bill Yerds</Dropdown.Item>
                                <Dropdown.Item to="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item to="#">Tara Misu</Dropdown.Item>
                                <Dropdown.Item to="#">Midge Itz</Dropdown.Item>
                                <Dropdown.Item to="#">Sal Vidge</Dropdown.Item>
                                <Dropdown.Item to="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="share-block d-flex align-items-center feather-icon mr-3">
                          <Link to="#">
                            <i className="ri-share-line"></i>
                            <span className="ms-1">99 Share</span>
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <ul className="post-comments p-0 m-0">
                        <li className="mb-2">
                          <div className="d-flex flex-wrap">
                            <div className="user-img">
                              <img
                                src={user09}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Moe Fugga</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="#">like</Link>
                                <Link to="#">reply</Link>
                                <Link to="#">translate</Link>
                                <span> 3 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex flex-wrap">
                            <div className="user-img">
                              <img
                                src={user08}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Bill Emia</h6>
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
                        <input type="text" className="form-control rounded" />
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
                    <div className="user-post-data p-3">
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
                                Update his Status
                              </p>
                              <p className="mb-0">7 hour ago</p>
                            </div>
                            <div className="card-post-toolbar">
                              <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                  <i className="ri-more-fill"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" m-0 p-0">
                                  <Dropdown.Item className=" p-3" to="#">
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
                                  <Dropdown.Item className="p-3" to="#">
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
                                  <Dropdown.Item className=" p-3" to="#">
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
                                  <Dropdown.Item className="p-3" to="#">
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
                    <div className="user-post">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                      </p>
                    </div>
                    <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="like-data">
                              <Dropdown>
                                <Dropdown.Toggle
                                  as={CustomToggle}
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  role="button"
                                >
                                  <img
                                    src={icon1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Link
                                    className="ms-2 me-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Like"
                                  >
                                    <img
                                      src={icon1}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Love"
                                  >
                                    <img
                                      src={icon2}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Happy"
                                  >
                                    <img
                                      src={icon3}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="HaHa"
                                  >
                                    <img
                                      src={icon4}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Think"
                                  >
                                    <img
                                      src={icon5}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Sade"
                                  >
                                    <img
                                      src={icon6}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Lovely"
                                  >
                                    <img
                                      src={icon7}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
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
                                  <Dropdown.Item to="#">Max Emum</Dropdown.Item>
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
                                  <Dropdown.Item to="#">Other</Dropdown.Item>
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
                                <Dropdown.Item to="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item to="#">Bill Yerds</Dropdown.Item>
                                <Dropdown.Item to="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item to="#">Tara Misu</Dropdown.Item>
                                <Dropdown.Item to="#">Midge Itz</Dropdown.Item>
                                <Dropdown.Item to="#">Sal Vidge</Dropdown.Item>
                                <Dropdown.Item to="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="share-block d-flex align-items-center feather-icon mr-3">
                          <Link to="#">
                            <i className="ri-share-line"></i>
                            <span className="ms-1">99 Share</span>
                          </Link>
                        </div>
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
                                src={user03}
                                alt="user"
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
                        <input type="text" className="form-control rounded" />
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
                    <div className="user-post-data p-3">
                      <div className="d-flex justify-content-between">
                        <div className="me-3">
                          <img
                            className="rounded-circle  avatar-60"
                            src={user05}
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
                                Update his Status
                              </p>
                              <p className="mb-0">7 hour ago</p>
                            </div>
                            <div className="card-post-toolbar">
                              <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                  <i className="ri-more-fill"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="m-0 p-0">
                                  <Dropdown.Item className=" p-3" to="#">
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
                                  <Dropdown.Item className="p-3" to="#">
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
                                  <Link className="dropdown-item p-3" to="#">
                                    <div className="d-flex align-items-top">
                                      <i className="ri-delete-bin-7-line h4"></i>
                                      <div className="data ms-2">
                                        <h6><Trans i18nKey="delete" /></h6>
                                        <p className="mb-0">
                                          <Trans i18nKey="delete_detail" />
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                  <Dropdown.Item className="p-3" to="#">
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
                      <Row>
                        <Col lg={8}>
                          <Link to="#">
                            <img
                              src={img56}
                              alt="post"
                              className="img-fluid w-100"
                            />
                          </Link>
                        </Col>
                        <div className="col-lg-4">
                          <div className="mb-3">
                            <Link to="#">
                              <img
                                src={img57}
                                alt="post"
                                className="img-fluid w-100"
                              />
                            </Link>
                          </div>
                          <Link to="#">
                            <img
                              src={img58}
                              alt="post"
                              className="img-fluid w-100"
                            />
                          </Link>
                        </div>
                      </Row>
                    </div>
                    <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="like-data">
                              <Dropdown>
                                <Dropdown.Toggle
                                  as={CustomToggle}
                                  role="button"
                                >
                                  <img
                                    src={icon1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Link
                                    className="ml-2 mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Like"
                                  >
                                    <img
                                      src={icon1}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Love"
                                  >
                                    <img
                                      src={icon2}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Happy"
                                  >
                                    <img
                                      src={icon3}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="HaHa"
                                  >
                                    <img
                                      src={icon4}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Think"
                                  >
                                    <img
                                      src={icon5}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Sade"
                                  >
                                    <img
                                      src={icon6}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <Link
                                    className="mr-2"
                                    to="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Lovely"
                                  >
                                    <img
                                      src={icon7}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
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
                                  <Dropdown.Item to="#">Max Emum</Dropdown.Item>
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
                                  <Dropdown.Item to="#">Other</Dropdown.Item>
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
                                <Dropdown.Item to="#">Max Emum</Dropdown.Item>
                                <Dropdown.Item to="#">Bill Yerds</Dropdown.Item>
                                <Dropdown.Item to="#">
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item to="#">Tara Misu</Dropdown.Item>
                                <Dropdown.Item to="#">Midge Itz</Dropdown.Item>
                                <Dropdown.Item to="#">Sal Vidge</Dropdown.Item>
                                <Dropdown.Item to="#">Other</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="share-block d-flex align-items-center feather-icon mr-3">
                          <Link to="#">
                            <i className="ri-share-line"></i>
                            <span className="ms-1">99 Share</span>
                          </Link>
                        </div>
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
                                src={user03}
                                alt="userimg"
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
                        <input type="text" className="form-control rounded" />
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
        </Row>
      </Container>
    </>
  );
};

export default FriendProfile;

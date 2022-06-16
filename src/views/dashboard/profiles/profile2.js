import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/Card";
import { useTranslation } from "react-i18next";

import imgp1 from "../../../assets/images/user/15.jpg";
import imgp2 from "../../../assets/images/user/05.jpg";
import imgp3 from "../../../assets/images/user/06.jpg";
import imgp4 from "../../../assets/images/user/07.jpg";
import imgp5 from "../../../assets/images/user/08.jpg";
import imgp6 from "../../../assets/images/user/15.jpg";
import imgp7 from "../../../assets/images/user/05.jpg";
import imgp8 from "../../../assets/images/user/06.jpg";
import imgp9 from "../../../assets/images/user/07.jpg";
import imgp10 from "../../../assets/images/user/08.jpg";
import imgp11 from "../../../assets/images/user/15.jpg";
import imgp12 from "../../../assets/images/user/05.jpg";
import imgp13 from "../../../assets/images/user/06.jpg";
import imgp14 from "../../../assets/images/user/07.jpg";
import imgp15 from "../../../assets/images/user/18.jpg";
import imgp16 from "../../../assets/images/user/15.jpg";
import imgp17 from "../../../assets/images/user/17.jpg";
import imgp18 from "../../../assets/images/user/13.jpg";
import imgp19 from "../../../assets/images/user/14.jpg";
import imgp20 from "../../../assets/images/user/10.jpg";
import imgp21 from "../../../assets/images/user/05.jpg";
import imgp22 from "../../../assets/images/user/19.jpg";
import imgp23 from "../../../assets/images/user/16.jpg";
import imgp24 from "../../../assets/images/user/1.jpg";
import imgp25 from "../../../assets/images/user/1.jpg";
import imgp26 from "../../../assets/images/user/02.jpg";
import imgp27 from "../../../assets/images/user/05.jpg";
import imgp28 from "../../../assets/images/user/06.jpg";
import imgp29 from "../../../assets/images/user/07.jpg";
import imgp30 from "../../../assets/images/user/08.jpg";
import imgp31 from "../../../assets/images/user/02.jpg";
import imgp32 from "../../../assets/images/user/05.jpg";
import imgp33 from "../../../assets/images/user/06.jpg";
import imgp34 from "../../../assets/images/user/07.jpg";
import imgp35 from "../../../assets/images/user/08.jpg";
import imgp36 from "../../../assets/images/user/02.jpg";
import imgp37 from "../../../assets/images/user/05.jpg";
import imgp38 from "../../../assets/images/user/06.jpg";
import imgp39 from "../../../assets/images/user/07.jpg";
import imgp40 from "../../../assets/images/user/08.jpg";
import imgp41 from "../../../assets/images/user/02.jpg";
import imgp42 from "../../../assets/images/user/02.jpg";
import imgp43 from "../../../assets/images/user/02.jpg";
import imgp44 from "../../../assets/images/user/02.jpg";
import imgp45 from "../../../assets/images/user/02.jpg";
import imgp46 from "../../../assets/images/user/02.jpg";
import imgp47 from "../../../assets/images/user/18.jpg";
import imgp48 from "../../../assets/images/user/17.jpg";
import imgp49 from "../../../assets/images/user/07.jpg";
import imgp50 from "../../../assets/images/user/09.jpg";
import imgp51 from "../../../assets/images/user/05.jpg";
import imgp52 from "../../../assets/images/user/06.jpg";
import imgp53 from "../../../assets/images/user/07.jpg";
import imgp54 from "../../../assets/images/user/08.jpg";
import ProfileHeader from "../../../components/profile-header";
import bg3 from "../../../assets/images/page-img/profile-bg3.jpg";

const Profile2 = () => {
  const { t } = useTranslation();

  return (
    <>
      <ProfileHeader title="Profile 2" img={bg3} />
      <Container>
        <Row>
          <Col lg="12">
            <Card className="card-header-1">
              <Card.Body>
                <div className="grid-container">
                  <div className="item1 ms-1">
                    <img
                      src={imgp1}
                      className="img-fluid rounded profile-image"
                      alt="profile-img"
                    />
                  </div>
                  <div className="item2 ms-1">
                    <h5 className="">Mathilda Gvarliani</h5>
                    <span>60 630 followers</span>
                  </div>
                  <div></div>
                  <div className="item4 ms-1">
                    <div className="d-flex justify-content-between align-items-center ms-1 flex-wrap">
                      <div>
                        <svg
                          width="18px"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          ></path>
                        </svg>
                        <span>Write a message</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary ms-2"
                      >
                        <i className="ri-add-line"></i>Follow
                      </button>
                    </div>
                  </div>
                  <div className="item5 ms-1">
                    <div className="d-flex flex-column justify-content-between flex-wrap">
                      <div>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          width="18px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                          ></path>
                        </svg>
                        <Link to="#" className="link-primary">
                          Model at next model management
                        </Link>
                      </div>
                      <div>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          width="18px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          ></path>
                        </svg>
                        <span>
                          Studies public relations at{" "}
                          <Link to="#" className="link-primary ">
                            Cacucasus University
                          </Link>
                        </span>
                      </div>
                      <div>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          width="18px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          ></path>
                        </svg>
                        <span>Born on October 9, 2000</span>
                      </div>
                    </div>
                  </div>
                  <div className="item6 border-light border-end border-start">
                    <div className="ms-1">
                      <span>People Mathilda follows</span>
                    </div>
                    <div className="iq-media-group ms-1">
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle"
                          src={imgp2}
                          alt=""
                        />
                      </Link>
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle"
                          src={imgp3}
                          alt=""
                        />
                      </Link>
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle"
                          src={imgp4}
                          alt=""
                        />
                      </Link>
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle"
                          src={imgp5}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="item7 ms-2">
                    <div className="d-flex justify-content-between mb-2 flex-wrap">
                      <span>Mathilda's Interests</span>
                      <Link to="#">See all</Link>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        Fashion
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        CS
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        Cats
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        Politics
                      </button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-header-2">
              <Card.Body className="text-center">
                <div className="mb-2">
                  <img
                    src={imgp6}
                    className="img-fluid rounded profile-image"
                    alt="profile-img"
                  />
                </div>
                <div className="mb-2">
                  <h6 className="">Mathilda Gvarliani</h6>
                  <span>60 630 followers</span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                  <div>
                    <svg
                      width="18px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                    <span>Write a message</span>
                  </div>
                  <button type="button" className="btn btn-sm btn-primary ms-2">
                    <i className="ri-add-line"></i>Follow
                  </button>
                </div>
                <hr />
                <div className="mb-2">
                  <div className="d-flex flex-column justify-content-between flex-wrap">
                    <div>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        width="18px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                        ></path>
                      </svg>
                      <Link to="#" className="link-primary">
                        Model at next model management
                      </Link>
                    </div>
                    <div>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        width="18px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        ></path>
                      </svg>
                      <span>
                        Studies public relations at{" "}
                        <Link to="#" className="link-primary ">
                          Cacucasus University
                        </Link>
                      </span>
                    </div>
                    <div>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        width="18px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        ></path>
                      </svg>
                      <span>Born on October 9, 2000</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mb-2">
                  <div className="ms-1">
                    <span>People Mathilda follows</span>
                  </div>
                  <div className="iq-media-group ms-1">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={imgp7}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={imgp8}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={imgp9}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={imgp10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="mb-2">
                  <div className="d-flex justify-content-between mb-2 flex-wrap">
                    <span>Mathilda's Interests</span>
                    <Link to="#">See all</Link>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark me-1"
                    >
                      Fashion
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark me-1"
                    >
                      CS
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark me-1"
                    >
                      Cats
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark me-1"
                    >
                      Politics
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-header-3">
              <Card.Body>
                <div className="mb-2 text-center">
                  <img
                    src={imgp11}
                    className="img-fluid rounded profile-image"
                    alt="profile-img"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="ms-1">
                    <h5 className="">Mathilda Gvarliani</h5>
                    <span>60 630 followers</span>
                  </div>
                  <div></div>
                  <div className="item4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div>
                        <svg
                          width="18px"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          ></path>
                        </svg>
                        <span>Write a message</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary ms-2"
                      >
                        <i className="ri-add-line"></i>Follow
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div className="item5 ms-1">
                    <div className="d-flex flex-column justify-content-between flex-wrap">
                      <div>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          width="18px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                          ></path>
                        </svg>
                        <Link to="#" className="link-primary">
                          Model at next model management
                        </Link>
                      </div>
                      <div>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          width="18px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          ></path>
                        </svg>
                        <span>
                          Studies public relations at{" "}
                          <Link to="#" className="link-primary ">
                            Cacucasus University
                          </Link>
                        </span>
                      </div>
                      <div>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          width="18px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          ></path>
                        </svg>
                        <span>Born on October 9, 2000</span>
                      </div>
                    </div>
                  </div>
                  <div className="item6 border-light border-end border-start">
                    <div className="ms-2">
                      <span>People Mathilda follows</span>
                    </div>
                    <div className="iq-media-group ms-1">
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle card-text-1"
                          src={imgp12}
                          alt=""
                        />
                      </Link>
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle card-text-1"
                          src={imgp13}
                          alt=""
                        />
                      </Link>
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle card-text-1"
                          src={imgp13}
                          alt=""
                        />
                      </Link>
                      <Link to="#" className="iq-media">
                        <img
                          className="img-fluid avatar-40 rounded-circle card-text-1"
                          src={imgp14}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="item7 ms-2">
                    <div className="d-flex justify-content-between mb-2 flex-wrap">
                      <span>Mathilda's Interests</span>
                      <Link to="#">See all</Link>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        Fashion
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        CS
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        Cats
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark me-1"
                      >
                        Politics
                      </button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Bio</h4>
                </div>
                <div className="d-flex align-items-center">
                  <p className="m-0">
                    <Link to="#"> Know More </Link>
                  </p>
                </div>
              </div>
              <Card.Body>
                <div className="d-flex flex-column justify-content-between">
                  <div className="mb-2">
                    <span>Mathilda Mariam Gvarliani - Georgian</span>
                  </div>
                  <div>
                    <span>@lookmodelsmanagement</span>
                  </div>
                  <div>
                    <span>@nextmodels</span>
                  </div>
                  <div>
                    <span>@munichmodels</span>
                  </div>
                  <div>
                    <span>@elite_copenenhagen</span>
                  </div>
                  <div className="mt-2">
                    <span>been unpredictable since childhood</span>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column justify-content-between">
                  <div>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      width="18px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      ></path>
                    </svg>
                    <Link to="#" className="link-primary">
                      Model at next model management
                    </Link>
                  </div>
                  <div>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      width="18px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                    <span>
                      Studies public relations at{" "}
                      <Link to="#" className="link-primary ">
                        Cacucasus University
                      </Link>
                    </span>
                  </div>
                  <div>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      width="18px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                    <span>Born on October 9, 2000</span>
                  </div>
                  <div>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      width="18px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      ></path>
                    </svg>
                    <span>
                      Lives in{" "}
                      <Link to="#" className="link-primary ">
                        Tbilisi, Georgia
                      </Link>
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex align-items-center justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Photos</h4>
                </div>
                <Link to="#">See all photos</Link>
              </div>
              <Card>
                <div className="d-grid gap-2 grid-cols-3">
                  {/* {{!-- <Link> --}} */}
                  <img
                    src={imgp15}
                    className="img-fluid bg-soft-info rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}} */}
                  {/* {{!-- <Link> --}} */}
                  <img
                    src={imgp16}
                    className="img-fluid bg-soft-primary rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}} */}
                  {/* {{!-- <Link> --}} */}
                  <img
                    src={imgp17}
                    className="img-fluid bg-soft-info rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}} */}
                  {/* {{!-- <Link> --}} */}
                  <img
                    src={imgp18}
                    className="img-fluid bg-soft-primary rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}}
                                {{!-- <Link> --}} */}
                  <img
                    src={imgp19}
                    className="img-fluid bg-soft-warning rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}}
                                {{!-- <Link> --}} */}
                  <img
                    src={imgp20}
                    className="img-fluid bg-soft-primary rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}}
                                {{!-- <Link> --}} */}
                  <img
                    src={imgp21}
                    className="img-fluid bg-soft-danger rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}}
                                {{!-- <Link> --}} */}
                  <img
                    src={imgp22}
                    className="img-fluid bg-soft-primary rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}}
                                {{!-- <Link> --}} */}
                  <img
                    src={imgp23}
                    className="img-fluid bg-soft-success rounded img-size"
                    alt="profile-img"
                  />
                  {/* {{!-- </Link> --}} */}
                </div>
              </Card>
            </Card>
            <Card>
              <div className="card-header d-flex align-items-center justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Videos</h4>
                </div>
                <Link to="#">See all videos</Link>
              </div>
              <Card.Body>
                <div className="d-grid gap-2">
                  <Link to="#" className="ratio ">
                    <iframe
                      title="myFrame"
                      className="rounded embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowFullScreen
                    ></iframe>
                  </Link>
                  <Link to="#" className="ratio">
                    <iframe
                      title="myFrame"
                      className="rounded embed-responsive-item"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowFullScreen
                    ></iframe>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="card-1">
              <Card.Body>
                <ul className="post-comments p-0 m-0">
                  <li className="">
                    <div className="d-flex justify-content-between">
                      <div className="user-img">
                        <img
                          src={imgp24}
                          alt="userimg"
                          className="avatar-60 me-3 rounded-circle img-fluid"
                        />
                      </div>
                      <div className="w-100">
                        <form className="post-text mt-2">
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder={t`create_post_placeholder` + " ..."}
                            style={{ border: "none" }}
                          />
                        </form>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                            <div className="d-flex align-items-center me-3 mb-md-0 mb-2">
                              Add:
                            </div>
                            <div className="d-flex align-items-center me-3 mb-md-0 mb-2">
                              <svg
                                fill="none"
                                width="18px"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                              </svg>
                              Photo
                            </div>
                            <div className="d-flex align-items-center me-3 mb-md-0 mb-2">
                              <svg
                                fill="none"
                                width="18px"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                ></path>
                              </svg>
                              Video
                            </div>
                            <div className="d-flex align-items-center me-3 mb-md-0 mb-2">
                              <svg
                                fill="none"
                                width="18px"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                                ></path>
                              </svg>
                              File
                            </div>
                          </div>
                          <div>
                            <div className="d-flex align-items-center">
                              <svg
                                fill="none"
                                width="18px"
                                stroke="currentColor"
                                className="me-2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <button className="btn btn-primary">
                                Publish post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <div className="card-2">
              <Card.Body>
                <ul className="post-comments p-0 m-0">
                  <li className="">
                    <div className="d-flex justify-content-between">
                      <div className="user-img">
                        <img
                          src={imgp25}
                          alt="userimg"
                          className="avatar-60 me-3 rounded-circle img-fluid"
                        />
                      </div>
                      <div className="w-100">
                        <form className="post-text mt-2">
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder={t`create_post_placeholder` + " ..."}
                            style={{ border: "none" }}
                          />
                        </form>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div className="">Add:</div>
                          <div className="">
                            <svg
                              fill="none"
                              width="18px"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                          <div className="">
                            <svg
                              fill="none"
                              width="18px"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                          <div className="">
                            <svg
                              fill="none"
                              width="18px"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                          </div>
                          <button className="btn btn-primary btn-sm">
                            Publish
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </div>
            <Card>
              <Card.Body>
                <ul className="post-comments p-0 m-0">
                  <li className="mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="user-img">
                        <img
                          src={imgp26}
                          alt="userimg"
                          className="avatar-60 me-3 rounded-circle img-fluid"
                        />
                      </div>
                      <div className="w-100 text-margin">
                        <h4>Mathilda Gvarliana</h4>
                        <h5 className="mb-0">March 14, 23:00</h5>
                        <p>
                          Hi, I am flying to Los Angeles to attend #VSFS2020
                          castings. I hope it will happen and my dream comes
                          true. Wish me luck.{" "}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          {/* {{!-- <div className="like-block position-relative d-flex align-items-center"> --}} */}
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Love it</span>
                            </div>
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Comment</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Share</span>
                            </div>
                          </div>
                          <span className="card-text-2">
                            5.2k people love it
                          </span>

                          <div className="d-flex justify-content-between align-items-center">
                            {/* {{!-- <div className=""> --}} */}
                            <span className="card-text-1 me-1">
                              5.2k people love it
                            </span>
                            {/* {{!-- <div className="iq-media-group"> --}} */}
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp27}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp28}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp29}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp30}
                                alt=""
                              />
                            </Link>
                            {/* {{!-- </div>                               --}} */}
                            {/* {{!-- </div> --}} */}
                          </div>
                          {/* {{!-- </div> --}} */}
                        </div>
                        <form
                          className="d-flex align-items-center mt-3"
                          action="#"
                        >
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Write your comment"
                          />
                          <div className="comment-attagement d-flex align-items-center me-4">
                            <svg
                              width="18px"
                              className="me-1 card-text-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              ></path>
                            </svg>
                            <h6 className="card-text-1">Comment</h6>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <ul className="post-comments p-0 m-0">
                  <li className="mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="user-img">
                        <img
                          src={imgp31}
                          alt="userimg"
                          className="avatar-60 me-3 rounded-circle img-fluid"
                        />
                      </div>
                      <div className="w-100 text-margin">
                        <h4>Mathilda Gvarliana</h4>
                        <h5 className="mb-0">March 14, 23:00</h5>
                        <div className="mt-2 mb-2 ratio">
                          <iframe
                            title="myFrame"
                            className="rounded embed-responsive-item"
                            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p>Dolce Spring Summer 2020 - Women's Show</p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          {/* {{!-- <div className="like-block position-relative d-flex align-items-center"> --}} */}
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Love it</span>
                            </div>
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Comment</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Share</span>
                            </div>
                          </div>
                          <span className="card-text-2">
                            5.2k people love it
                          </span>

                          <div className="d-flex justify-content-between align-items-center">
                            {/* {{!-- <div className=""> --}} */}
                            <span className="card-text-1 me-1">
                              5.2k people love it
                            </span>
                            {/* {{!-- <div className="iq-media-group"> --}} */}
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp32}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp33}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp34}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp35}
                                alt=""
                              />
                            </Link>
                            {/* {{!-- </div>                               --}} */}
                            {/* {{!-- </div> --}} */}
                          </div>
                          {/* {{!-- </div> --}} */}
                        </div>
                        <form
                          className="d-flex align-items-center mt-3"
                          action="#"
                        >
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Write your comment "
                          />
                          <div className="comment-attagement d-flex align-items-center me-4">
                            <svg
                              width="18px"
                              className="me-1 card-text-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              ></path>
                            </svg>
                            <h6 className="card-text-1">Comment</h6>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <ul className="post-comments p-0 m-0">
                  <li className="mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="user-img">
                        <img
                          src={imgp36}
                          alt="userimg"
                          className="avatar-60 me-3 rounded-circle img-fluid"
                        />
                      </div>
                      <div className="w-100 text-margin">
                        <h4>Mathilda Gvarliana</h4>
                        <h5 className="mb-0">March 14, 23:00</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.{" "}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          {/* {{!-- <div className="like-block position-relative d-flex align-items-center"> --}} */}
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Love it</span>
                            </div>
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Comment</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Share</span>
                            </div>
                          </div>
                          <span className="card-text-2">
                            5.2k people love it
                          </span>

                          <div className="d-flex justify-content-between align-items-center">
                            {/* {{!-- <div className=""> --}} */}
                            <span className="card-text-1 me-1">
                              5.2k people love it
                            </span>
                            {/* {{!-- <div className="iq-media-group"> --}} */}
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp37}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp38}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp39}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp40}
                                alt=""
                              />
                            </Link>
                            {/* {{!-- </div>                               --}} */}
                            {/* {{!-- </div> --}} */}
                          </div>
                          {/* {{!-- </div> --}} */}
                        </div>
                        <div className="text-center mt-4">
                          <p>Hide 203 comments</p>
                        </div>
                        <ul className="post-comments p-2 m-0 bg-soft-light text-dark">
                          <li className="mb-2">
                            <div className="d-flex justify-content-between">
                              <div className="user-img">
                                <img
                                  src={imgp41}
                                  alt="userimg"
                                  className="avatar-60 me-3 rounded-circle img-fluid"
                                />
                              </div>
                              <div className="w-100 text-margin">
                                <div className="">
                                  <h5 className="mb-0 d-inline-block me-1">
                                    Emma Labelle
                                  </h5>
                                  <h6 className=" mb-0 d-inline-block">
                                    2 weeks ago
                                  </h6>
                                </div>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.{" "}
                                </p>
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="d-flex justify-content-around align-items-center">
                                    <div className="me-3">
                                      <svg
                                        width="18px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        ></path>
                                      </svg>
                                      <span className="card-text-1">
                                        Love it
                                      </span>
                                    </div>
                                    <div className="me-3">
                                      <svg
                                        width="18px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        ></path>
                                      </svg>
                                      <span className="card-text-1">
                                        Comment
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="post-comments p-2 m-0 bg-soft-light text-dark">
                          <li className="mb-2">
                            <div className="d-flex justify-content-between">
                              <div className="user-img">
                                <img
                                  src={imgp42}
                                  alt="userimg"
                                  className="avatar-60 me-3 rounded-circle img-fluid"
                                />
                              </div>
                              <div className="w-100 text-margin">
                                <div className="">
                                  <h5 className="mb-0 d-inline-block me-1">
                                    Emma Labelle
                                  </h5>
                                  <span className=" mb-0 d-inline-block">
                                    2 weeks ago
                                  </span>
                                </div>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="d-flex justify-content-around align-items-center">
                                    <div className="me-3">
                                      <svg
                                        width="18px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        ></path>
                                      </svg>
                                      <span className="card-text-1">
                                        Love it
                                      </span>
                                    </div>
                                    <div className="me-3">
                                      <svg
                                        width="18px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        ></path>
                                      </svg>
                                      <span className="card-text-1">
                                        Comment
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <ul className="post-comments p-0 mt-4 text-dark">
                                  <li className="mb-2">
                                    <div className="d-flex justify-content-between">
                                      <div className="user-img">
                                        <img
                                          src={imgp43}
                                          alt="userimg"
                                          className="avatar-60 me-3 rounded-circle img-fluid avatar-1"
                                        />
                                      </div>
                                      <div className="w-100 text-margin">
                                        <div className="">
                                          <h5 className="mb-0 d-inline-block me-1">
                                            Emma Labelle
                                          </h5>
                                          <h6 className=" mb-0 d-inline-block">
                                            2 weeks ago
                                          </h6>
                                        </div>
                                        <p>
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard dummy text ever since the
                                          1500s.
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                          <div className="d-flex justify-content-around align-items-center">
                                            <div className="me-3">
                                              <svg
                                                width="18px"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                ></path>
                                              </svg>
                                              <span className="card-text-1">
                                                Love it
                                              </span>
                                            </div>
                                            <div className="me-3">
                                              <svg
                                                width="18px"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                ></path>
                                              </svg>
                                              <span className="card-text-1">
                                                Comment
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <ul className="post-comments p-0 mt-4 text-dark">
                                  <li className="mb-2">
                                    <div className="d-flex justify-content-between">
                                      <div className="user-img">
                                        <img
                                          src={imgp44}
                                          alt="userimg"
                                          className="avatar-60 me-3 rounded-circle img-fluid avatar-1"
                                        />
                                      </div>
                                      <div className="w-100 text-margin">
                                        <div className="">
                                          <h5 className="mb-0 d-inline-block me-1">
                                            Emma Labelle
                                          </h5>
                                          <h6 className=" mb-0 d-inline-block">
                                            2 weeks ago
                                          </h6>
                                        </div>
                                        <p>
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.{" "}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                          <div className="d-flex justify-content-around align-items-center">
                                            <div className="me-3">
                                              <svg
                                                width="18px"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                ></path>
                                              </svg>
                                              <span className="card-text-1">
                                                Love it
                                              </span>
                                            </div>
                                            <div className="me-3">
                                              <svg
                                                width="18px"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                ></path>
                                              </svg>
                                              <span className="card-text-1">
                                                Comment
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <form
                                          className="d-flex align-items-center mt-3"
                                          action="#"
                                        >
                                          <input
                                            type="text"
                                            className="form-control rounded"
                                            placeholder="Write your comment"
                                          />
                                          <div className="comment-attagement d-flex align-items-center me-4">
                                            <svg
                                              width="18px"
                                              className="me-1 card-text-1"
                                              fill="none"
                                              stroke="currentColor"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                              ></path>
                                            </svg>
                                            <h6 className="card-text-1 me-2">
                                              Comment
                                            </h6>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="post-comments p-2 mt-4 text-dark">
                          <li className="mb-2">
                            <div className="d-flex justify-content-between">
                              <div className="user-img">
                                <img
                                  src={imgp45}
                                  alt="userimg"
                                  className="avatar-60 me-3 rounded-circle img-fluid "
                                />
                              </div>
                              <div className="w-100 text-margin">
                                <div className="">
                                  <h5 className="mb-0 d-inline-block me-1">
                                    Emma Labelle
                                  </h5>
                                  <span className=" mb-0 d-inline-block">
                                    2 weeks ago
                                  </span>
                                </div>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="d-flex justify-content-around align-items-center">
                                    <div className="me-3">
                                      <svg
                                        width="18px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        ></path>
                                      </svg>
                                      <span className="card-text-1">
                                        {" "}
                                        Love it
                                      </span>
                                    </div>
                                    <div className="me-3">
                                      <svg
                                        width="18px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        ></path>
                                      </svg>
                                      <span className="card-text-1">
                                        Comment
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <form
                            className="d-flex align-items-center mt-3"
                            action="#"
                          >
                            <input
                              type="text"
                              className="form-control rounded"
                              placeholder="Write your comment "
                            />
                            <div className="comment-attagement d-flex align-items-center me-4">
                              <svg
                                width="18px"
                                className="me-1 card-text-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              <h6 className="card-text-1 me-2">Comment</h6>
                            </div>
                          </form>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <ul className="post-comments p-0 m-0">
                  <li className="mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="user-img">
                        <img
                          src={imgp46}
                          alt="userimg"
                          className="avatar-60 me-3 rounded-circle img-fluid"
                        />
                      </div>
                      <div className="w-100 text-margin">
                        <h4>Mathilda Gvarliana</h4>
                        <p className="mb-4">June 30, 12: 26</p>
                        <div className="d-grid gap-2 grid-cols-2 mb-2">
                          <Link to="#">
                            <img
                              src={imgp47}
                              className="img-fluid bg-soft-info rounded sub-image image-size"
                              alt="profile-img"
                            />
                          </Link>
                          <Link to="#">
                            <img
                              src={imgp48}
                              className="img-fluid bg-soft-primary rounded sub-image image-size"
                              alt="profile-img"
                            />
                          </Link>
                          <Link to="#">
                            <img
                              src={imgp49}
                              className="img-fluid bg-soft-info rounded sub-image image-size"
                              alt="profile-img"
                            />
                          </Link>
                          <Link to="#">
                            <img
                              src={imgp50}
                              className="img-fluid bg-soft-primary rounded sub-image image-size"
                              alt="profile-img"
                            />
                          </Link>
                        </div>
                        <span className="">
                          Photoshoot for Buyers Magazine - 2019
                        </span>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Love it</span>
                            </div>
                            <div className="d-flex align-items-center me-1">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Comment</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                width="18px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                ></path>
                              </svg>
                              <span className="card-text-1">Share</span>
                            </div>
                          </div>
                          <span className="card-text-2">
                            5.2k people love it
                          </span>

                          <div className="d-flex justify-content-between align-items-center">
                            {/* {{!-- <div className=""> --}} */}
                            <span className="card-text-1 me-1">
                              5.2k people love it{" "}
                            </span>
                            {/* {{!-- <div className="iq-media-group"> --}} */}
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp51}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp52}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp53}
                                alt=""
                              />
                            </Link>
                            <Link to="#" className="iq-media ">
                              <img
                                className="img-fluid item-img rounded-circle card-text-1"
                                src={imgp54}
                                alt=""
                              />
                            </Link>
                            {/* {{!-- </div>                               --}} */}
                            {/* {{!-- </div> --}} */}
                          </div>
                        </div>
                        <form
                          className="d-flex align-items-center mt-3"
                          action="#"
                        >
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Write your comment"
                          />
                          <div className="comment-attagement d-flex align-items-center me-4">
                            <svg
                              width="18px"
                              className="me-1 card-text-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              ></path>
                            </svg>
                            <h6 className="card-text-1">Comment</h6>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile2;

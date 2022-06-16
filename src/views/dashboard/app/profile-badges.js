import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

// images
import badges01 from "../../../assets/images/badges/01.png";
import badges02 from "../../../assets/images/badges/02.png";
import badges03 from "../../../assets/images/badges/03.png";
import badges04 from "../../../assets/images/badges/04.png";
import badges05 from "../../../assets/images/badges/05.png";
import badges07 from "../../../assets/images/badges/07.png";
import badges06 from "../../../assets/images/badges/06.png";
import badges08 from "../../../assets/images/badges/08.png";
import badges09 from "../../../assets/images/badges/09.png";
import badges10 from "../../../assets/images/badges/10.png";
import badges11 from "../../../assets/images/badges/11.png";
import badges12 from "../../../assets/images/badges/12.png";
import icon8 from "../../../assets/images/icon/08.png";
import icon9 from "../../../assets/images/icon/09.png";
import icon10 from "../../../assets/images/icon/10.png";
import icon11 from "../../../assets/images/icon/11.png";
import icon12 from "../../../assets/images/icon/12.png";
import icon13 from "../../../assets/images/icon/13.png";
import img1 from "../../../assets/images/page-img/profile-bg1.jpg";
import user1 from "../../../assets/images/user/1.jpg";
import { Trans } from "react-i18next";

const ProfileBadges = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Body className="profile-page p-0">
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
                        src={user1}
                        alt="profile-img"
                        className="avatar-130 img-fluid"
                      />
                    </div>
                    <div className="profile-detail">
                      <h3>Paul Molive</h3>
                    </div>
                  </div>
                  <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
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
                        <li className="text-center pe-0 md-pe-3">
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
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges01} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges02} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges03} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges04} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges05} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges06} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mt-5 col-md-6">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges07} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mt-5 col-md-6">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges08} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mt-5 col-md-6">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges09} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mt-5 col-md-6">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges10} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges11} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <Card>
              <Card.Body>
                <div className="iq-badges text-left">
                  <div className="badges-icon">
                    <img className="avatar-80 rounded" src={badges12} alt="" />
                  </div>
                  <h5 className="mb-2">Gold User</h5>
                  <p>Richard McClintock, a Latin professor consectetur.</p>
                  <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProfileBadges;

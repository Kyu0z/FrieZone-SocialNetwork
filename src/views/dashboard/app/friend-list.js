import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

//profile-header
import ProfileHeader from "../../../components/profile-header";

// image
import img1 from "../../../assets/images/page-img/profile-bg2.jpg";
import img2 from "../../../assets/images/page-img/profile-bg1.jpg";
import img3 from "../../../assets/images/page-img/profile-bg3.jpg";
import img4 from "../../../assets/images/page-img/profile-bg4.jpg";
import img5 from "../../../assets/images/page-img/profile-bg5.jpg";
import img6 from "../../../assets/images/page-img/profile-bg6.jpg";
import img7 from "../../../assets/images/page-img/profile-bg7.jpg";
import img8 from "../../../assets/images/page-img/profile-bg8.jpg";
import img9 from "../../../assets/images/page-img/profile-bg9.jpg";
import user05 from "../../../assets/images/user/05.jpg";
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
import { Trans } from "react-i18next";

const FriendList = () => {
  return (
    <>
      <ProfileHeader title="Friend Lists" img={img3} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img1}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user05}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Anna Sthesia
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className="card-body profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img2}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user06}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Paul Molive
                                </Link>
                              </h4>
                              <h6>@developer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img4}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user07}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Anna Mull
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img5}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user08}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Paige Turner
                                </Link>
                              </h4>
                              <h6>@tester</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img6}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user09}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Bob Frapples
                                </Link>
                              </h4>
                              <h6>@developer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img7}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user10}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Barb Ackue
                                </Link>
                              </h4>
                              <h6>@grapfics</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img8}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user13}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Greta Life
                                </Link>
                              </h4>
                              <h6>@fashion</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img9}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user14}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Ira Membrit
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img2}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user15}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Pete Sariya
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img1}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user16}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Monty Carlo
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card card-block card-stretch card-height">
                <div className="card-body profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img5}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user17}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Ed Itorial
                                </Link>
                              </h4>
                              <h6>@testen</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Card className="card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img8}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user18}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Paul Issy
                                </Link>
                              </h4>
                              <h6>@r&d</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img7}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user19}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Rick Shaw
                                </Link>
                              </h4>
                              <h6>@coder</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img9}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user07}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Ben Effit
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img4}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user08}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Justin Case
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card-block card-stretch card-height">
                <Card.Body className=" profile-page p-0">
                  <div className="profile-header-image">
                    <div className="cover-container">
                      <img
                        src={img1}
                        alt="profile-bg"
                        className="rounded img-fluid w-100"
                      />
                    </div>
                    <div className="profile-info p-4">
                      <div className="user-detail">
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                          <div className="profile-detail d-flex">
                            <div className="profile-img pe-4">
                              <img
                                src={user09}
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                              />
                            </div>
                            <div className="user-data-block">
                              <h4>
                                <Link to="/dashboard/app/friend-profile">
                                  Aaron Ottix
                                </Link>
                              </h4>
                              <h6>@designer</h6>
                              <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <Trans i18nKey="following" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FriendList;

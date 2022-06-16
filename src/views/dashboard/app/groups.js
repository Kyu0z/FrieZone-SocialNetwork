import React from "react";
import { Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import ProfileHeader from "../../../components/profile-header";

// images
import gi1 from "../../../assets/images/page-img/gi-1.jpg";
import gi2 from "../../../assets/images/page-img/gi-2.jpg";
import gi3 from "../../../assets/images/page-img/gi-3.jpg";
import gi4 from "../../../assets/images/page-img/gi-4.jpg";
import gi5 from "../../../assets/images/page-img/gi-5.jpg";
import gi6 from "../../../assets/images/page-img/gi-6.jpg";
import gi7 from "../../../assets/images/page-img/gi-7.jpg";
import gi8 from "../../../assets/images/page-img/gi-8.jpg";
import gi9 from "../../../assets/images/page-img/gi-9.jpg";
import user05 from "../../../assets/images/user/05.jpg";
import user06 from "../../../assets/images/user/06.jpg";
import user07 from "../../../assets/images/user/07.jpg";
import user08 from "../../../assets/images/user/08.jpg";
import user09 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
import img1 from "../../../assets/images/page-img/profile-bg1.jpg";
import img2 from "../../../assets/images/page-img/profile-bg2.jpg";
import img3 from "../../../assets/images/page-img/profile-bg3.jpg";
import img4 from "../../../assets/images/page-img/profile-bg4.jpg";
import img5 from "../../../assets/images/page-img/profile-bg5.jpg";
import img6 from "../../../assets/images/page-img/profile-bg6.jpg";
import img7 from "../../../assets/images/page-img/profile-bg7.jpg";
import img9 from "../../../assets/images/page-img/profile-bg9.jpg";
import { Trans } from "react-i18next";

const Groups = () => {
  return (
    <>
      <ProfileHeader img={img7} title="Groups" />
      <div id="content-page" className="content-page">
        <Container>
          <div className="d-grid gap-3 d-grid-template-1fr-19">
            <Card className="mb-0">
              <div className="top-bg-image">
                <img src={img1} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className=" text-center">
                <div className="group-icon">
                  <img
                    src={gi1}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Designer</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>600</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>320</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>1.2k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </Card.Body>
            </Card>
            <div className="card mb-0">
              <div className="top-bg-image">
                <img src={img2} className="img-fluid w-100" alt="group-bg" />
              </div>
              <div className="card-body text-center">
                <div className="group-icon">
                  <img
                    src={gi2}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">R & D</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>300</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>210</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>1.1k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </div>
            </div>
            <Card className=" mb-0">
              <div className="top-bg-image">
                <img src={img3} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className=" text-center">
                <div className="group-icon">
                  <img
                    src={gi3}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Graphics</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>320</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>100</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>1.0k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </Card.Body>
            </Card>
            <div className="card mb-0">
              <div className="top-bg-image">
                <img src={img4} className="img-fluid w-100" alt="group-bg" />
              </div>
              <div className="card-body text-center">
                <div className="group-icon">
                  <img
                    src={gi4}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Developer</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>800</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>480</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>2.2k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </div>
            </div>
            <Card className=" mb-0">
              <div className="top-bg-image">
                <img src={img5} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi5}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Tester</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>200</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>100</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>32</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </Card.Body>
            </Card>
            <Card className="mb-0">
              <div className="top-bg-image">
                <img src={img6} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi6}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Events</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>1000</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>500</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>3.2k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </Card.Body>
            </Card>
            <Card>
              <div className="top-bg-image">
                <img src={img7} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className=" text-center">
                <div className="group-icon">
                  <img
                    src={gi7}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Coder</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>300</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>220</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>25k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </Card.Body>
            </Card>
            <Card>
              <div className="top-bg-image">
                <img src={img9} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className=" text-center">
                <div className="group-icon">
                  <img
                    src={gi8}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Themes</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>1200</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>800</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>3.2k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </Card.Body>
            </Card>
            <Card>
              <div className="top-bg-image">
                <img src={img1} className="img-fluid w-100" alt="group-bg" />
              </div>
              <Card.Body className="text-center">
                <div className="group-icon">
                  <img
                    src={gi9}
                    alt="profile-img"
                    className="rounded-circle img-fluid avatar-120"
                  />
                </div>
                <div className="group-info pt-3 pb-3">
                  <h4>
                    <Link to="/dashboards/app/group-detail">Review</Link>
                  </h4>
                  <p>Lorem Ipsum data</p>
                </div>
                <div className="group-details d-inline-block pb-3">
                  <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="post" /></p>
                      <h6>300</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="member" /></p>
                      <h6>1000</h6>
                    </li>
                    <li className="pe-3 ps-3">
                      <p className="mb-0"><Trans i18nKey="visit" /></p>
                      <h6>4.5k</h6>
                    </li>
                  </ul>
                </div>
                <div className="group-member mb-3">
                  <div className="iq-media-group">
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user05}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user06}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user07}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user08}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user09}
                        alt=""
                      />
                    </Link>
                    <Link to="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src={user10}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  <Trans i18nKey="join" />
                </button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Groups;

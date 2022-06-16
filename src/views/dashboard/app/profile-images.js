import React from "react";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

//profile-header
import ProfileHeader from "../../../components/profile-header";

// image
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
import img63 from "../../../assets/images/page-img/63.jpg";
import img64 from "../../../assets/images/page-img/64.jpg";
import img65 from "../../../assets/images/page-img/65.jpg";
import img5 from "../../../assets/images/page-img/profile-bg5.jpg";

const ProfileImages = () => {
  return (
    <>
      <ProfileHeader title="Your Photos" img={img5} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
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
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
                <Link to="#">
                  <img
                    src={img64}
                    className="img-fluid rounded"
                    alt="Responsive"
                  />
                </Link>
                <div className="image-hover-data">
                  <div className="product-elements-icon">
                    <ul className="d-flex align-items-center m-0 p-0 list-inline">
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
                <Link to="#">
                  <img
                    src={img65}
                    className="img-fluid rounded"
                    alt="Responsive "
                  />
                </Link>
                <div className="image-hover-data">
                  <div className="product-elements-icon">
                    <ul className="d-flex align-items-center m-0 p-0 list-inline">
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          60 <i className="ri-thumb-up-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          30 <i className="ri-chat-3-line"></i>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="ps-3 text-white">
                          {" "}
                          10 <i className="ri-share-forward-line"></i>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit or Remove</Tooltip>}
                >
                  <Link to="#" className="image-edit-btn">
                    <i className="ri-edit-2-fill"></i>
                  </Link>
                </OverlayTrigger>
                <Link
                  to="#"
                  className="image-edit-btn"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Edit or Remove"
                >
                  <i className="ri-edit-2-fill"></i>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfileImages;

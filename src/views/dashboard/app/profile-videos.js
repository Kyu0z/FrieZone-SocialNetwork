import React from "react";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import img9 from "../../../assets/images/page-img/profile-bg9.jpg";

//profile-header
import ProfileHeader from "../../../components/profile-header";

const ProfileVideos = () => {
  return (
    <>
      <ProfileHeader title="Your Videos" img={img9} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <div className="col-lg-4 col-md-6">
              <div className="user-images position-relative overflow-hidden mb-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    rc="https://www.youtube.com/embed/K3M-czGNUCg"
                    title="v1"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/Ml4XCF-JS0k"
                    title="v2"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/pILFK2HfJtw"
                    title="v3"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/FZ-_76rKlVU"
                    title="v4"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/Ua5ilz9Vvrs"
                    title="v5"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/JAIvWg4iQHo"
                    title="v6"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/CMN--AT39-c"
                    title="v7"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/CSB1EfostkQ"
                    title="v8"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/eTZUoCVhlwk"
                    title="v9"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/aU84KeezYMc"
                    title="v9"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/s2bL_UpyYv0"
                    title="v11"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/SlDifKHIJ1w"
                    title="v12"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/_3o2s94wNXk"
                    title="v13"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/VEJEtoa2Ig0"
                    title="v14"
                  ></iframe>
                </div>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/1RB2XPW9k0U"
                    title="v15"
                  ></iframe>
                </div>
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfileVideos;

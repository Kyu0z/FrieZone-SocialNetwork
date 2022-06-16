import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

// img
import icon8 from "../assets/images/icon/08.png";
import icon9 from "../assets/images/icon/09.png";
import icon10 from "../assets/images/icon/10.png";
import icon11 from "../assets/images/icon/11.png";
import icon12 from "../assets/images/icon/12.png";
import icon13 from "../assets/images/icon/13.png";
import { Link } from "react-router-dom";

const ShareOffcanvas = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center feather-icon mt-2 mt-md-0">
        <Link to="#" onClick={handleShow}>
          <i className="ri-share-line"></i>
          <span className="ms-1">99 Share</span>
        </Link>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Share</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-wrap align-items-center">
            <div className="text-center me-3 mb-3">
              <img src={icon8} className="img-fluid rounded mb-2" alt="" />
              <h6>Facebook</h6>
            </div>
            <div className="text-center me-3 mb-3">
              <img src={icon9} className="img-fluid rounded mb-2" alt="" />
              <h6>Twitter</h6>
            </div>
            <div className="text-center me-3 mb-3">
              <img src={icon10} className="img-fluid rounded mb-2" alt="" />
              <h6>Instagram</h6>
            </div>
            <div className="text-center me-3 mb-3">
              <img src={icon11} className="img-fluid rounded mb-2" alt="" />
              <h6>Google Plus</h6>
            </div>
            <div className="text-center me-3 mb-3">
              <img src={icon13} className="img-fluid rounded mb-2" alt="" />
              <h6>In</h6>
            </div>
            <div className="text-center me-3 mb-3">
              <img src={icon12} className="img-fluid rounded mb-2" alt="" />
              <h6>YouTube</h6>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default ShareOffcanvas;

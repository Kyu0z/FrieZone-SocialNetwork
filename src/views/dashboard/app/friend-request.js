import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
// img

import user5 from "../../../assets/images/user/05.jpg";
import user6 from "../../../assets/images/user/06.jpg";
import user7 from "../../../assets/images/user/07.jpg";
import user8 from "../../../assets/images/user/08.jpg";
import user9 from "../../../assets/images/user/09.jpg";
import user10 from "../../../assets/images/user/10.jpg";
import user11 from "../../../assets/images/user/11.jpg";
import user12 from "../../../assets/images/user/12.jpg";
import user13 from "../../../assets/images/user/13.jpg";
import user14 from "../../../assets/images/user/14.jpg";
import user15 from "../../../assets/images/user/15.jpg";
import user16 from "../../../assets/images/user/16.jpg";
import user17 from "../../../assets/images/user/17.jpg";
//Sweet alert
import Swal from "sweetalert2";
import { Trans } from "react-i18next";

const FriendReqest = () => {
  const questionAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: "btn btn-outline-primary btn-lg ms-2",
        confirmButton: "btn btn-primary btn-lg",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "cancel",
        confirmButtonText: "Yes, delete it!",

        reverseButtons: false,
        showClass: {
          popup: "animate__animated animate__zoomIn",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut",
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your Request has been deleted.",
            icon: "success",
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__zoomOut",
            },
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Your Request is safe!",
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__zoomOut",
            },
          });
        }
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title"><Trans i18nKey="friend_request" /></h4>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="request-list list-inline m-0 p-0">
                  <li className="d-flex align-items-center  justify-content-between flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user5}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Jaques Amole</h6>
                      <p className="mb-0">40 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <div className="confirm-click-btn">
                        <Link
                          to="#"
                          className="me-3 btn btn-primary rounded confirm-btn"
                        >
                          <Trans i18nKey="confirm" />
                        </Link>
                        <Link
                          to="#"
                          className="me-3 btn btn-primary rounded request-btn"
                          style={{ display: "none" }}
                        >
                          View All
                        </Link>
                      </div>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center  justify-content-between flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user6}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Lucy Tania</h6>
                      <p className="mb-0">12 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <div className="confirm-click-btn">
                        <Link
                          to="#"
                          className="me-3 btn btn-primary rounded confirm-btn"
                        >
                          <Trans i18nKey="confirm" />
                        </Link>
                        <Link
                          to="#"
                          className="me-3 btn btn-primary rounded request-btn"
                          style={{ display: "none" }}
                        >
                          View All
                        </Link>
                      </div>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user7}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Val Adictorian</h6>
                      <p className="mb-0">0 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <div className="confirm-click-btn">
                        <Link
                          to="#"
                          className="me-3 btn btn-primary rounded confirm-btn"
                        >
                          <Trans i18nKey="confirm" />
                        </Link>
                        <Link
                          to="#"
                          className="me-3 btn btn-primary rounded request-btn"
                          style={{ display: "none" }}
                        >
                          View All
                        </Link>
                      </div>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user8}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Manny Petty</h6>
                      <p className="mb-0">3 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <Trans i18nKey="confirm" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user9}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Marsha Mello</h6>
                      <p className="mb-0">15 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <Trans i18nKey="confirm" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user10}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Caire Innet</h6>
                      <p className="mb-0">8 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <Trans i18nKey="confirm" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user11}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Gio Metric</h6>
                      <p className="mb-0">10 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <Trans i18nKey="confirm" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user12}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Chris P. Cream</h6>
                      <p className="mb-0">18 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <Trans i18nKey="confirm" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user13}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Paul Misunday</h6>
                      <p className="mb-0">6 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <Trans i18nKey="confirm" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user14}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Reanne Carnation</h6>
                      <p className="mb-0">12 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <Trans i18nKey="confirm" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="confirm_delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-block text-center mb-0 pb-0">
                    <Link to="#" className="me-3 btn">
                      <Trans i18nKey="see_all" />
                    </Link>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title"><Trans i18nKey="may_known" /></h4>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="request-list m-0 p-0">
                  <li className="d-flex align-items-center  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user15}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Jen Youfelct</h6>
                      <p className="mb-0">4 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user16}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Cooke Edoh</h6>
                      <p className="mb-0">20 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user17}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Earl E. Riser</h6>
                      <p className="mb-0">30 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user5}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Cliff Diver</h6>
                      <p className="mb-0">5 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user6}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Cliff Diver</h6>
                      <p className="mb-0">5 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user7}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Vinny Gret</h6>
                      <p className="mb-0">50 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user8}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Paul Samic</h6>
                      <p className="mb-0">6 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user9}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Gustav Wind</h6>
                      <p className="mb-0">14 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user10}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Minnie Strone</h6>
                      <p className="mb-0">16 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user11}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Ray Volver</h6>
                      <p className="mb-0">9 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user12}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Indy Nile</h6>
                      <p className="mb-0">6 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-0 pb-0  flex-wrap">
                    <div className="user-img img-fluid flex-shrink-0">
                      <img
                        src={user13}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>Jen Trification</h6>
                      <p className="mb-0">42 friends</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <Link to="#" className="me-3 btn btn-primary rounded">
                        <i className="ri-user-add-line me-1"></i><Trans i18nKey="add_friend" />
                      </Link>
                      <Link
                        to="#"
                        onClick={questionAlert}
                        className="btn btn-secondary rounded"
                        data-extra-toggle="delete"
                        data-closest-elem=".item"
                      >
                        <Trans i18nKey="delete" />
                      </Link>
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

export default FriendReqest;

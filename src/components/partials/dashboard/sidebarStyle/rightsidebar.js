import React from "react";
import { Card, Image } from "react-bootstrap";

//image
import user1 from "../../../../assets/images/user/01.jpg";
import user2 from "../../../../assets/images/user/02.jpg";
import user3 from "../../../../assets/images/user/03.jpg";
import user4 from "../../../../assets/images/user/04.jpg";
import user5 from "../../../../assets/images/user/11.jpg";
import user6 from "../../../../assets/images/user/12.jpg";

const RightSidebar = () => {
  const minirightsidebar = () => {
    document.getElementById("rightSidebar").classList.toggle("right-sidebar");
    document.body.classList.toggle("right-sidebar-close");
  };
  return (
    <>
      <div className="right-sidebar-mini" id="rightSidebar">
        <div className="right-sidebar-panel p-0">
          <Card className="shadow-none">
            <Card.Body className="p-0">
              <div className="media-height p-3" data-scrollbar="init">
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user1}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Anna Sthesia</h6>
                    <p className="mb-0">Just Now</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user2}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Paul Molive</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user3}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Anna Mull</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user4}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Paige Turner</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user5}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Bob Frapples</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user2}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Barb Ackue</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-online">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user3}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Greta Life</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user6}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Ira Membrit</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="iq-profile-avatar status-away">
                    <Image
                      className="rounded-circle avatar-50"
                      src={user1}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Pete Sariya</h6>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>
              </div>
              <div
                className="right-sidebar-toggle bg-primary text-white mt-3"
                onClick={minirightsidebar}
              >
                <i className="ri-arrow-left-line side-left-icon"></i>
                <i className="ri-arrow-right-line side-right-icon">
                  <span className="ms-3 d-inline-block">Close Menu</span>
                </i>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;

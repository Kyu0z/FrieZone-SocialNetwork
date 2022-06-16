import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/Card";

//img
import profilebg8 from "../../../assets/images/page-img/profile-bg8.jpg";
import imgn1 from "../../../assets/images/page-img/n1.jpg";
import imgn2 from "../../../assets/images/page-img/n2.jpg";
import imgn3 from "../../../assets/images/page-img/n3.jpg";
import imgn4 from "../../../assets/images/page-img/n4.jpg";
import imgn5 from "../../../assets/images/page-img/n5.jpg";
import imgn6 from "../../../assets/images/page-img/n6.jpg";
import imgn7 from "../../../assets/images/page-img/n7.jpg";
import imgn8 from "../../../assets/images/page-img/n8.jpg";
import imgr1 from "../../../assets/images/page-img/r1.jpg";
import imgr2 from "../../../assets/images/page-img/r2.jpg";
import imgr3 from "../../../assets/images/page-img/r3.jpg";
import imgr4 from "../../../assets/images/page-img/r4.jpg";
import imgr5 from "../../../assets/images/page-img/r5.jpg";
import imgr6 from "../../../assets/images/page-img/r6.jpg";
import imgr7 from "../../../assets/images/page-img/r7.jpg";
import imgr8 from "../../../assets/images/page-img/r8.jpg";
import imgl1 from "../../../assets/images/page-img/l1.jpg";
import imgl2 from "../../../assets/images/page-img/l2.jpg";
import imgl3 from "../../../assets/images/page-img/l3.jpg";
import imgl4 from "../../../assets/images/page-img/l4.jpg";
import imgl5 from "../../../assets/images/page-img/l5.jpg";
import imgl6 from "../../../assets/images/page-img/l6.jpg";
import img48 from "../../../assets/images/page-img/48.jpg";

//profile-header
import ProfileHeader from "../../../components/profile-header";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// install Swiper modules
SwiperCore.use([Autoplay]);

const Music = () => {
  return (
    <>
      <ProfileHeader title="Music" img={profilebg8} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col md="4">
              <Card className=" card-block card-stretch card-height">
                <Card.Header className=" d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Play Lists</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="music-lists m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                      <div className="user-img img-fluid">
                        <img
                          src={imgl1}
                          alt="story-img"
                          className="rounded-circle avatar-40"
                        />
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div className="ms-3">
                          <h6>Ember</h6>
                        </div>
                        <div className="music-time">3:00</div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="user-img img-fluid">
                        <img
                          src={imgl2}
                          alt="story-img"
                          className="rounded-circle avatar-40"
                        />
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div className="ms-3">
                          <h6>Light Out(Bonus Track)</h6>
                        </div>
                        <div className="music-time">5:00</div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="user-img img-fluid">
                        <img
                          src={imgl3}
                          alt="story-img"
                          className="rounded-circle avatar-40"
                        />
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div className="ms-3">
                          <h6>Darkness Overture</h6>
                        </div>
                        <div className="music-time">2:30</div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="user-img img-fluid">
                        <img
                          src={imgl4}
                          alt="story-img"
                          className="rounded-circle avatar-40"
                        />
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div className="ms-3">
                          <h6>Dritin</h6>
                        </div>
                        <div className="music-time">4:20</div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="user-img img-fluid">
                        <img
                          src={imgl5}
                          alt="story-img"
                          className="rounded-circle avatar-40"
                        />
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div className=" ms-3">
                          <h6>Bones</h6>
                        </div>
                        <div className="music-time">1:45</div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="user-img img-fluid">
                        <img
                          src={imgl6}
                          alt="story-img"
                          className="rounded-circle avatar-40"
                        />
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div className="ms-3">
                          <h6>Hozier</h6>
                        </div>
                        <div className="music-time">2:00</div>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md="8">
              <Card className=" card-block card-stretch card-height">
                <Card.Body className=" p-0  ">
                  <Link to="#">
                    <img
                      src={img48}
                      alt="story-img"
                      className="img-fluid rounded h-100 w-100"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12">
              <Card className="card-block card-stretch card-height">
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">New Music</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center">
                    <Link to="#">View All</Link>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Swiper
                    spaceBetween={15}
                    slidesPerView={5}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn1}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Sean Paul</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide
                      className="text-center"
                      style={{ width: "176.8px", marginRight: "15px" }}
                    >
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn2}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Fetty Wap</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn3}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Brittany Howard</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn4}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Elton John</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn5}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Tierra Whack</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn6}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Trippie Redd</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn7}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Quincy Jones</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className=" text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn8}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Ciara</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                  </Swiper>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12">
              <Card className="card-block card-stretch card-height">
                <Card.Header className=" d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Recent Added</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center">
                    <Link to="#">View All</Link>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Swiper
                    spaceBetween={15}
                    slidesPerView={5}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn8}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Lizzo</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr8}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Kathleen Hanna</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn7}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Sheryl Crow</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr1}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Karen O</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn1}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Cyndi Lauper</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr2}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Rick Ross</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr7}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Kamasi Washington</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgn2}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Christina Aguilera</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                  </Swiper>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12">
              <Card className="card-block card-stretch card-height">
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Top Music</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center">
                    <Link to="#">View All</Link>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Swiper
                    spaceBetween={15}
                    slidesPerView={5}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr1}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Mary J. Blige</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr2}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Ne-Yo</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr3}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Loric Sih</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr4}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Annie Flook</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr5}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Alex Gvojic</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr6}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Mindy Monk</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr7}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Coffey Rock</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                      <div className="music-thumbnail position-relative mb-3">
                        <Link to="#">
                          <img
                            src={imgr8}
                            alt="music-thumb"
                            className="img-fluid w-100"
                          />
                        </Link>
                        <div className="play-btn">
                          <Link to="#">
                            <i className="ri-play-fill text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <h6>Sam Smith</h6>
                      <p className="mb-0">Best Advice</p>
                    </SwiperSlide>
                  </Swiper>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Music;

import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import Card from "../../../components/Card";
import Leaflet from "../../../components/leaflet";
import ProfileHeader from "../../../components/profile-header";

// img
import profilebg2 from "../../../assets/images/page-img/profile-bg2.jpg";

const Weather = () => {
  return (
    <>
      <ProfileHeader title="Weather" img={profilebg2} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col lg="3">
              <Card className="card-block card-stretch card-height mt-3">
                <Card.Body>
                  <Form>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label"
                        htmlFor="country-and-timezone"
                      >
                        Country and Timezone
                      </Form.Label>
                      <select className="form-select" id="country-and-timezone">
                        <option defaultValue>Country and Timezone</option>
                        <option>United States (UTC-8)</option>
                        <option>Chicago (UTC-5)</option>
                        <option>New York (UTC-4)</option>
                        <option>Anchorage (UTC-8)</option>
                        <option>Honolulu (UTC-10)</option>
                      </select>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label"
                        htmlFor="extended-days"
                      >
                        Extended Days
                      </Form.Label>
                      <select className="form-select" id="extended-days">
                        <option defaultValue>Extended Days</option>
                        <option>Show Next Day</option>
                        <option>Show Next 7 Day</option>
                        <option>Show Next 10 Day</option>
                        <option>Show Next 20 Day</option>
                        <option>Show Next 30 Day</option>
                      </select>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label"
                        htmlFor="temperature-unit"
                      >
                        Temperature Unit
                      </Form.Label>
                      <select className="form-select" id="temperature-unit">
                        <option defaultValue>Temperature Unit</option>
                        <option>F° (Farenheit)</option>
                        <option>C° (Celsius)</option>
                      </select>
                    </Form.Group>
                    <Form.Group className="form-group mb-0">
                      <button
                        type="button"
                        className="btn  btn-primary d-block w-100"
                      >
                        Check wether
                      </button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-block card-stretch card-height mt-3">
                <Card.Body className="p-0">
                  <Leaflet id="chart-map-column-04" className="custom-chart" />
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-block card-stretch card-height bg-primary rounded text-white mt-3">
                <Card.Body className="p-4">
                  <div className="text-center">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="ri-cloud-line text-white h2"></i>
                      </div>
                      <div className="flex-grow-1 ms-3 text-start">
                        <h6 className="text-white">USA</h6>
                        <p className="mb-0">Lorem ipsum</p>
                      </div>
                    </div>
                    <div className="main-temp d-flex justify-content-center">
                      <h1 className="text-white display-1">53</h1>
                      <span>°</span>
                    </div>
                    <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0 weather-list">
                      <li>
                        <p className="mb-0">Yeasterday</p>
                        <i className="ri-cloud-windy-line text-white h5"></i>
                        <h6 className="text-white">
                          21 <span>&#8451;</span>
                        </h6>
                      </li>
                      <li>
                        <p className="mb-0">Today</p>
                        <i className="ri-showers-line font-size-18"></i>
                        <h6 className="text-white">
                          16 <span>&#8451;</span>
                        </h6>
                      </li>
                      <li>
                        <p className="mb-0">Tomorrow</p>
                        <i className="ri-sun-cloudy-line font-size-18"></i>
                        <h6 className="text-white">
                          19 <span>&#8451;</span>
                        </h6>
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12">
              <Card className="mt-3">
                <Card.Body className="bg-info rounded text-white">
                  <ul className="iq-week-data d-flex justify-content-between list-inline m-0 p-0 flex-wrap">
                    <li className="text-center p-4">
                      <p className="mb-0">Sunday</p>
                      <div className="weather-icon mt-3 mb-3 font-size-20">
                        <i className="ri-snowy-line"></i>
                      </div>
                      <p className="mb-0">13 ° 7 °</p>
                    </li>
                    <li className="text-center p-4">
                      <p className="mb-0">Monday</p>
                      <div className="weather-icon mt-3 mb-3 font-size-20">
                        <i className="ri-snowy-line"></i>
                      </div>
                      <p className="mb-0">11 ° 6 °</p>
                    </li>
                    <li className="text-center p-4">
                      <p className="mb-0">Tuesday</p>
                      <div className="weather-icon mt-3 mb-3 font-size-20">
                        <i className="ri-sun-cloudy-line"></i>
                      </div>
                      <p className="mb-0">12 ° 8 °</p>
                    </li>
                    <li className="text-center p-4">
                      <p className="mb-0">Wednesday</p>
                      <div className="weather-icon mt-3 mb-3 font-size-20">
                        <i className="ri-showers-line"></i>
                      </div>
                      <p className="mb-0">12 ° 7 °</p>
                    </li>
                    <li className="text-center p-4">
                      <p className="mb-0">Thursday</p>
                      <div className="weather-icon mt-3 mb-3 font-size-20">
                        <i className="ri-sun-cloudy-line"></i>
                      </div>
                      <p className="mb-0">11 ° 6 °</p>
                    </li>
                    <li className="text-center p-4">
                      <p className="mb-0">Fryday</p>
                      <div className="weather-icon mt-3 mb-3 font-size-20">
                        <i className="ri-heavy-showers-line"></i>
                      </div>
                      <p className="mb-0">11 ° 8 °</p>
                    </li>
                    <li className="text-center p-4">
                      <p className="mb-0">Satuarday</p>
                      <div className="weather-icon mt-3 mb-3 font-size-20">
                        <i className="ri-sun-line"></i>
                      </div>
                      <p className="mb-0">13 ° 5 °</p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Weather;

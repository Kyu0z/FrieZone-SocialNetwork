import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

//image
import logo from "../../../assets/images/logo.png";

const ComingSoon = () => {
  useEffect(() => {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }

    function initializeClock(elem, endtime) {
      const clock = document.querySelector(elem);
      const daysSpan = clock.querySelector("[data-days]");
      const hoursSpan = clock.querySelector("[data-hours]");
      const minutesSpan = clock.querySelector("[data-minutes]");
      const secondsSpan = clock.querySelector("[data-seconds]");

      function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    let time = document.querySelector(".countdown").getAttribute("data-date");
    if (time === undefined) {
      time = Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000;
    }

    const deadline = new Date(time);
    initializeClock(".countdown", deadline);
  });
  return (
    <>
      <div className="iq-comingsoon pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <div className="iq-comingsoon-info">
                <Link to="/">
                  <Image src={logo} className="img-fluid w-50" alt="" />
                </Link>
                <h2 className="mt-4 mb-1">
                  Stay tunned, we're launching very soon
                </h2>
                <p>
                  We are working very hard to give you the best experience
                  possible!
                </p>
                <ul
                  className="countdown row list-inline d-flex align-items-center"
                  data-date="Feb 02 2022 20:20:22"
                >
                  <Col as="li" md="6" xl="3">
                    <Card>
                      <Card.Body>
                        <span data-days>0</span>Days
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col as="li" md="6" xl="3">
                    <Card>
                      <Card.Body>
                        <span data-hours>0</span>Hours
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col as="li" md="6" xl="3">
                    <Card>
                      <Card.Body>
                        <span data-minutes>0</span>Minutes
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col as="li" md="6" xl="3">
                    <Card>
                      <Card.Body>
                        <span data-seconds>0</span>Seconds
                      </Card.Body>
                    </Card>
                  </Col>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <Form className="iq-comingsoon-form mt-5">
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    className="comming mb-0"
                    id="exampleInputEmail1"
                    placeholder="Enter email address"
                  />
                  <Button
                    type="submit"
                    className="btn-primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    Subscribe
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ComingSoon;

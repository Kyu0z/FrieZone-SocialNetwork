import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import ProfileHeader from "../../../components/profile-header";

// fullcalender
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

// Datepicker
import Datepicker from "../../../components/datepicker";

// img
import profilebg6 from "../../../assets/images/page-img/profile-bg6.jpg";

const Calendar = () => {
  return (
    <>
      <ProfileHeader title="Calender and Events" img={profilebg6} />
      <div id="content-page" className="content-page">
        <Container>
          <Row className="row-eq-height">
            <Col md="4" lg="3">
              <Card className="mt-3">
                <Card.Body>
                  <div className="input-group">
                    <Datepicker className="vanila-datepicker" />
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title ">Classification</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center">
                    <Link to="#">
                      <i className="fa fa-plus  mr-0" aria-hidden="true"></i>
                    </Link>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="m-0 p-0 job-classification list-inline">
                    <li>
                      <i className="ri-check-line bg-danger"></i>Meeting
                    </li>
                    <li>
                      <i className="ri-check-line bg-success"></i>Business
                      travel
                    </li>
                    <li>
                      <i className="ri-check-line bg-warning"></i>Personal Work
                    </li>
                    <li>
                      <i className="ri-check-line bg-info"></i>Team Project
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Today's Schedule</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="m-0 p-0 today-schedule">
                    <li className="d-flex">
                      <div className="schedule-icon">
                        <i className="ri-checkbox-blank-circle-fill text-primary"></i>
                      </div>
                      <div className="schedule-text">
                        <span>Web Design</span>
                        <span>09:00 to 12:00</span>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="schedule-icon">
                        <i className="ri-checkbox-blank-circle-fill text-success"></i>
                      </div>
                      <div className="schedule-text">
                        <span>Participate in Design</span>
                        <span>09:00 to 12:00</span>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md="8" lg="9">
              <Card className="mt-3">
                <Card.Header className="d-flex justify-content-between flex-wrap">
                  <div className="header-title">
                    <h4 className="card-title">Book Appointment</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center mt-1 mt-md-0">
                    <Link to="#" className="btn btn-primary">
                      <i className="ri-add-line mr-2"></i>Book Appointment
                    </Link>
                  </div>
                </Card.Header>
                <Card.Body>
                  <FullCalendar
                    plugins={[dayGridPlugin, listPlugin]}
                    //    themeSystem={bootstrap}
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                    }}
                    events={[
                      {
                        title: "5:30a Repeating Event",
                        date: "2021-08-29",
                        textColor: "white",
                        backgroundColor: "#d592ff",
                        borderColor: "#d592ff",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2021-08-31",
                        textColor: "white",
                        backgroundColor: "#ff9b8a",
                        borderColor: "#ff9b8a",
                      },
                      {
                        title: "5:30a Birthday Party",
                        date: "2021-09-02",
                        textColor: "white",
                        backgroundColor: "#49f0d3",
                        borderColor: "#49f0d3",
                      },
                      {
                        title: "5:30a Meeting",
                        date: "2021-09-04",
                        textColor: "white",
                        backgroundColor: "#a09e9e",
                        borderColor: "#a09e9e",
                      },
                      {
                        title: "5:30a Birthday Party",
                        date: "2021-09-05",
                        textColor: "white",
                        backgroundColor: "#49f0d3",
                        borderColor: "#49f0d3",
                      },
                      {
                        title: "5:30a Birthday Party",
                        date: "2021-09-08",
                        textColor: "white",
                        backgroundColor: "#ff9b8a",
                        borderColor: "#ff9b8a",
                      },
                      {
                        title: "5:30a Doctor Meeting",
                        date: "2021-09-10",
                        textColor: "white",
                        backgroundColor: "#f4a965",
                        borderColor: "#f4a965",
                      },
                      {
                        title: "5:30a All Day Event",
                        date: "2021-09-11",
                        textColor: "white",
                        backgroundColor: "#50b5ff",
                        borderColor: "#50b5ff",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2021-09-18",
                        textColor: "white",
                        backgroundColor: "#50b5ff",
                        borderColor: "#50b5ff",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2021-09-20",
                        textColor: "white",
                        backgroundColor: "#49f0d3",
                        borderColor: "#49f0d3",
                      },
                    ]}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Calendar;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/Card";

import imgm1 from "../../../assets/images/market/1.png";
import imgm2 from "../../../assets/images/market/2.png";
import imgm3 from "../../../assets/images/market/8.png";
import imgm4 from "../../../assets/images/market/3.png";
import imgm5 from "../../../assets/images/market/5.png";
import imgm6 from "../../../assets/images/market/9.png";
import imgm7 from "../../../assets/images/market/7.png";
const Market1 = () => {
  return (
    <>
      <Container>
        <Row>
          <div>
            <h4>Popular apps</h4>
            <p>Explore the most installed apps in the HubSpot Marketplace</p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm1}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Gmail</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Bring HubSpot to your inbox with the HubSpot integration for
                    Gmail.
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-0">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star text-gray"></i>
                  <small className="text-dark">400</small>
                </span>
                <small className="mt-2">
                  <span>
                    <span>10,000</span>+ installs
                  </span>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm2}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Google Calendar</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Bring HubSpot to your inbox with the HubSpot integration for
                    Gmail.
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-0">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star text-gray"></i>
                  <small className="text-dark">189</small>
                </span>
                <small className="mt-2">
                  <span>
                    <span>10,000</span>+ installs
                  </span>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm3}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>HubSpot for WordPress</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Integrate HubSpot's lead capture and contact management with
                    WordPress
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-0">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star text-gray"></i>
                  <small className="text-dark">61</small>
                </span>
                <small className="mt-2">
                  <span>
                    <span>10,000</span>+ installs
                  </span>
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>New apps</h4>
            <p>Recent additions worth checking out</p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Channelyze</h5>
                <small>Built by Channelyze Ltd</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Manage channel sales and partner renewals through HubSpot.
                  </p>
                </div>
                <div className="mt-4">
                  <small>New</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Showpad by Elixir Solutions</h5>
                <small>Built by Elixir Solutions</small>
                <div className="mt-2">
                  <p className="mb-0">Add Showpad email activity in HubSpot</p>
                </div>
                <div className="mt-4">
                  <small>New</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Ion by Rock Content</h5>
                <small>Built by Rock Content</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Content experiences your audience will love
                  </p>
                </div>
                <div className="mt-4">
                  <small>New</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Free apps</h4>
            <p>Explore free apps in the HubSpot Marketplace</p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Alexa Helper</h5>
                <small>Built by Voicify</small>
                <div className="mt-1">
                  <p className="mb-0">
                    Access your HubSpot data in real time through Amazon's Alexa
                  </p>
                </div>
                <div className="mt-4">
                  <small>
                    <span>
                      <span>50</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Magento 2 Sync by Unific</h5>
                <small>Built by Unific | HubSpot Ecommerce Integrations</small>
                <div className="mt-1">
                  <p className="mb-0">
                    Take Data Driven Actions With Enriched Ecommerce Data
                  </p>
                </div>
                <div className="mt-1">
                  <small>
                    <span>
                      <span>40</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Pendo for HubSpot</h5>
                <small>Built by Pendo</small>
                <div className="mt-1">
                  <p className="mb-0">Create product experiences people love</p>
                </div>
                <div className="mt-4">
                  <small>
                    <span>
                      <span>50</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Built by HubSpot</h4>
            <p>Explore apps built and supported by HubSpot</p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm5}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Facebook Messenger</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Manage all Messenger conversations and bots in HubSpot
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star text-gray"></i>
                  <small className="text-dark">21</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>10,000</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                <div>
                  {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                  <img
                    src={imgm4}
                    alt="mimg"
                    className="avatar avatar-25 job-icon mb-2 d-inline-block "
                  />
                  <h5>Airtable</h5>
                  <small>Built by HubSpot</small>
                  <div className="mt-2">
                    <p className="mb-0">
                      Data Sync - Sync Airtable rows (with emails) with HubSpot
                    </p>
                  </div>
                  <span className="text-warning d-block line-height mt-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star half text-gray"></i>
                    <i className="fa fa-star text-gray"></i>
                    <small className="text-dark">3</small>
                  </span>
                  <div className="mt-2">
                    <small>
                      <span>
                        <span>500</span>+ installs
                      </span>
                    </small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm6}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Mailchimp</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Data Sync - Sync contacts two-way with a Mailchimp Audience
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star text-gray"></i>
                  <i className="fa fa-star text-gray"></i>
                  <small className="text-dark">22</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>3,500</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Workflow integrations</h4>
            <p>Explore apps you can leverage within HubSpot workflows.</p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>360NRS</h5>
                <small>Built by Net Real Solutions</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Send individual SMS to your contacts or use workflows to
                    send bulk SMS
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">3</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>50</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Aloware</h5>
                <small>Built by Aloware</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Dialer, calling & texting automations with real-time logging
                    & syncing
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">4</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>100</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>SMS for HubSpot</h5>
                <small>Built by MessageMedia</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Send and receive SMS without leaving HubSpot. Get started in
                    minutes.
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">13</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>300</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Data sync built by HubSpot</h4>
            <p>
              Explore powerful and easy-to-use two-way data sync for 25+ apps,
              built by HubSpot
            </p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm7}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Google Contacts</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0"></p>Sync Google Contacts with HubSpot
                  contacts
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">50</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>9000</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm6}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Mailchimp</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Data Sync - Sync contacts two-way with a Mailchimp Audience
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">22</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>3,500</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Stripe</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Data Sync - Sync Stripe and HubSpot customers
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">10</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>1,000</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Marketing campaign apps</h4>
            <p>
              Explore apps that can help optimize your marketing campaign
              efforts in HubSpot.
            </p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Databox</h5>
                <small>Built by Databox, Inc</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Popular KPI/Analytics Dashboards Amongst HubSpot Customers
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">35</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>10,000</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Forminator</h5>
                <small>Built by WPMU DEV</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Easy-to-create forms, polls, and quizzes for WordPress.
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">3</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>1,000</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Lucky Orange</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p>Improve customer experience with recordings</p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">16</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>1,500</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div>
            <h4>Media bridge apps</h4>
            <p>
              Combine the power of HubSpot’s CRM platform with your favorite
              media apps
            </p>
          </div>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Wistia</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0"></p>Sync Google Contacts with HubSpot
                  contacts
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">50</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>9000</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm6}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Mailchimp</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Data Sync - Sync contacts two-way with a Mailchimp Audience
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">22</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>3,500</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4" md="4">
            <Card className="cardhover">
              <Card.Body>
                {/* <div className="job-icon bg-primary px-3 py-2 mb-2 d-inline-block rounded-circle">
                          <i className="ri-briefcase-line text-white"></i>
                      </div> */}
                <img
                  src={imgm4}
                  alt="mimg"
                  className="avatar avatar-25 job-icon mb-2 d-inline-block "
                />
                <h5>Stripe</h5>
                <small>Built by HubSpot</small>
                <div className="mt-2">
                  <p className="mb-0">
                    Data Sync - Sync Stripe and HubSpot customers
                  </p>
                </div>
                <span className="text-warning d-block line-height mt-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="text-dark">10</small>
                </span>
                <div className="mt-2">
                  <small>
                    <span>
                      <span>1,000</span>+ installs
                    </span>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Market1;

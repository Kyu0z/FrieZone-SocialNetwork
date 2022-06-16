import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import Scrollbar from "smooth-scrollbar";
import { Trans } from "react-i18next";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}
const Sidebar = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector("#sidebar-scrollbar"));
  });
  const [activeMenu, setActiveMenu] = useState(false);
  let location = useLocation();
  return (
    <>
      <div className="iq-sidebar">
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <Accordion as="ul" id="iq-sidebar-toggle" className="iq-menu">
              <li className={`${location.pathname === "/" ? "active" : ""} `}>
                <Link to="/">
                  <i className="las la-newspaper"></i>
                  <span><Trans i18nKey="newsfeed" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/profile" ? "active" : ""
                }`}
              >
                <Link to="/dashboard/app/profile">
                  <i className="las la-user"></i>
                  <span><Trans i18nKey="profile" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/friend-list"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/friend-list">
                  <i className="las la-user-friends"></i>
                  <span><Trans i18nKey="friend_list" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/friend-profile"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboard/app/friend-profile">
                  <i className="las la-user-friends"></i>
                  <span><Trans i18nKey="friend_profile" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/groups" ||
                  location.pathname === "/dashboards/app/group-detail"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/groups">
                  <i className="las la-users"></i>
                  <span><Trans i18nKey="group" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/profile-images"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/profile-images">
                  <i className="las la-image"></i>
                  <span><Trans i18nKey="img_profile" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/profile-videos"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/profile-videos">
                  <i className="las la-video"></i>
                  <span><Trans i18nKey="video_profile" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/profile-events"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/profile-events">
                  <i className="las la-film"></i>
                  <span><Trans i18nKey="event_profile" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/profile-badges"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboard/app/profile-badges">
                  <i className="las la-certificate"></i>
                  <span><Trans i18nKey="badges_profile" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/profile-forum"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboard/app/profile-forum">
                  <i className="lab la-wpforms"></i>
                  <span><Trans i18nKey="forum_profile" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/notification"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboard/app/notification">
                  <i className="las la-bell"></i>
                  <span><Trans i18nKey="notifycation" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/file" ? "active" : ""
                }`}
              >
                <Link to="/dashboard/app/file">
                  <i className="las la-file"></i>
                  <span><Trans i18nKey="file" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/friend-request"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboard/app/friend-request">
                  <i className="las la-anchor"></i>
                  <span><Trans i18nKey="friend_request" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/chat" ? "active" : ""
                }`}
              >
                <Link to="/dashboard/app/chat">
                  <i className="lab la-rocketchat"></i>
                  <span><Trans i18nKey="chat" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/app/todo" ? "active" : ""
                }`}
              >
                <Link to="/dashboard/app/todo">
                  <i className="las la-check-circle"></i>
                  <span><Trans i18nKey="todo" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/calendar"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/calendar">
                  <i className="las la-calendar"></i>
                  <span><Trans i18nKey="calendar" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/birthday"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/birthday">
                  <i className="las la-birthday-cake"></i>
                  <span><Trans i18nKey="birthday" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/weather"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/dashboards/app/weather">
                  <i className="ri-snowy-line"></i>
                  <span><Trans i18nKey="weather" /></span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboards/app/music" ? "active" : ""
                }`}
              >
                <Link to="/dashboards/app/music">
                  <i className="ri-play-circle-line"></i>
                  <span><Trans i18nKey="music" /></span>
                </Link>
              </li>
              <Accordion.Item
                as="li"
                className={`${
                  location.pathname === "/dashboards/market-place/market1" ||
                  location.pathname === "/dashboards/market-place/market2"
                    ? "active"
                    : ""
                }`}
                eventKey="sidebar-market-place"
              >
                <CustomToggle
                  eventKey="sidebar-market-place"
                  onClick={(activeKey) => setActiveMenu(activeKey)}
                >
                  <i className="ri-mail-line"></i>
                  <span><Trans i18nKey="market" /></span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-market-place">
                  <ul id="market" className="iq-submenu ">
                    <li
                      className={`${
                        location.pathname === "/dashboards/market-place/market1"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/market-place/market1">
                        <i className="ri-inbox-line"></i>Market1
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboards/market-place/market2"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/market-place/market2">
                        <i className="ri-edit-line"></i>Market2
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item
                as="li"
                className={`${
                  location.pathname === "/dashboards/profiles/profile1" ||
                  location.pathname === "/dashboards/profiles/profile2" ||
                  location.pathname === "/dashboards/profiles/profile3"
                    ? "active"
                    : ""
                }`}
                eventKey="sidebar-profiles"
              >
                <CustomToggle
                  eventKey="sidebar-profiles"
                  onClick={(activeKey) => setActiveMenu(activeKey)}
                >
                  <i className="lab la-blogger"></i>
                  <span><Trans i18nKey="profiles" /></span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-profiles">
                  <ul id="profiles" className="iq-submenu ">
                    <li
                      className={`${
                        location.pathname === "/dashboards/profiles/profile1"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/profiles/profile1">
                        <i className="ri-grid-line"></i>Profile1
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboards/profiles/profile2"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/profiles/profile2">
                        <i className="ri-list-check-2"></i>Profile2
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboards/profiles/profile3"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/profiles/profile3">
                        <i className="ri-information-line"></i>Profile3
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item
                as="li"
                className={`${
                  location.pathname === "/dashboard/blog/blog-grid" ||
                  location.pathname === "/dashboard/blog/blog-list" ||
                  location.pathname === "/dashboard/blog/blog-detail"
                    ? "active"
                    : ""
                }`}
                eventKey="sidebar-blog"
              >
                <CustomToggle
                  eventKey="sidebar-blog"
                  onClick={(activeKey) => setActiveMenu(activeKey)}
                >
                  <i className="lab la-blogger"></i>
                  <span><Trans i18nKey="blog" /></span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-blog">
                  <ul id="blog" className="iq-submenu ">
                    <li
                      className={`${
                        location.pathname === "/dashboard/blog/blog-grid"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboard/blog/blog-grid">
                        <i className="ri-grid-line"></i>Blog Grid
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboard/blog/blog-list"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboard/blog/blog-list">
                        <i className="ri-list-check-2"></i>Blog List
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboard/blog/blog-detail"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboard/blog/blog-detail">
                        <i className="ri-information-line"></i>Blog Detail
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item
                as="li"
                className={`${
                  location.pathname ===
                    "/dashboards/store/store-category-grid" ||
                  location.pathname ===
                    "/dashboards/store/store-category-list" ||
                  location.pathname === "/dashboards/store/store-checkout" ||
                  location.pathname === "/dashboards/store/store-detail"
                    ? "active"
                    : ""
                }`}
                eventKey="sidebar-store"
              >
                <CustomToggle
                  eventKey="sidebar-store"
                  onClick={(activeKey) => setActiveMenu(activeKey)}
                >
                  <i className="las la-store"></i>
                  <span><Trans i18nKey="store" /></span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-store">
                  <ul id="store" className="iq-submenu ">
                    <li
                      className={`${
                        location.pathname ===
                        "/dashboards/store/store-category-grid"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/store/store-category-grid">
                        <i className="ri-grid-line"></i>Category Grid
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname ===
                        "/dashboards/store/store-category-list"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/store/store-category-list">
                        <i className="ri-list-check-2"></i>Category list
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboards/store/store-detail"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/store/store-detail">
                        <i className="ri-information-line"></i>Store Detail
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboards/store/store-checkout"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboards/store/store-checkout">
                        <i className="ri-chat-check-line"></i>Checkout
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item
                as="li"
                className={`${
                  location.pathname === "/dashboard/Email/email" ||
                  location.pathname === "/dashboard/Email/email-compose"
                    ? "active"
                    : ""
                }`}
                eventKey="sidebar-email"
              >
                <CustomToggle
                  eventKey="sidebar-email"
                  onClick={(activeKey) => setActiveMenu(activeKey)}
                >
                  <i className="ri-mail-line"></i>
                  <span><Trans i18nKey="email" /></span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-email">
                  <ul id="mailbox" className="iq-submenu ">
                    <li
                      className={`${
                        location.pathname === "/dashboard/Email/email"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboard/Email/email">
                        <i className="ri-inbox-line"></i>Inbox
                      </Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/dashboard/Email/email-compose"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="/dashboard/Email/email-compose">
                        <i className="ri-edit-line"></i>Email Compose
                      </Link>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item
                as="li"
                className={`${
                  location.pathname === "/dashboard/ui-kit/ui-color" ||
                  location.pathname === "/dashboard/ui-kit/ui-typography" ||
                  location.pathname === "/dashboard/ui-kit/ui-alerts" ||
                  location.pathname === "/dashboard/ui-kit/ui-badges" ||
                  location.pathname === "/dashboard/ui-kit/ui-breadcrumb" ||
                  location.pathname === "/dashboard/ui-kit/ui-buttons" ||
                  location.pathname === "/dashboard/ui-kit/ui-cards" ||
                  location.pathname === "/dashboard/ui-kit/ui-carousel" ||
                  location.pathname === "/dashboard/ui-kit/ui-embed-video" ||
                  location.pathname === "/dashboard/ui-kit/ui-grid" ||
                  location.pathname === "/dashboard/ui-kit/ui-images" ||
                  location.pathname === "/dashboard/ui-kit/ui-list-groups" ||
                  location.pathname === "/dashboard/ui-kit/ui-notifications" ||
                  location.pathname === "/dashboard/ui-kit/ui-modal" ||
                  location.pathname === "/dashboard/ui-kit/ui-pagination" ||
                  location.pathname === "/dashboard/ui-kit/ui-popovers" ||
                  location.pathname === "/dashboard/ui-kit/ui-progressbars" ||
                  location.pathname === "/dashboard/ui-kit/ui-tabs" ||
                  location.pathname === "/dashboard/ui-kit/ui-tooltips" ||
                  location.pathname === "/dashboard/form/form-element" ||
                  location.pathname === "/dashboard/form/form-validation" ||
                  location.pathname === "/dashboard/form/form-switch" ||
                  location.pathname === "/dashboard/form/form-checkbox" ||
                  location.pathname === "/dashboard/form/form-radio" ||
                  location.pathname === "/dashboard/form/form-wizard" ||
                  location.pathname ===
                    "/dashboard/form/form-wizard-validate" ||
                  location.pathname ===
                    "/dashboard/form/form-wizard-vertical" ||
                  location.pathname === "/dashboard/table/tables-basic" ||
                  location.pathname === "/dashboard/table/data-table" ||
                  location.pathname === "/dashboard/table/table-editable" ||
                  location.pathname === "/dashboard/icon/fontawesome-5" ||
                  location.pathname === "/dashboard/icon/lineawesome" ||
                  location.pathname === "/dashboard/icon/remixicon"
                    ? "active"
                    : ""
                }`}
                eventKey="sidebar-ui"
              >
                <CustomToggle
                  eventKey="sidebar-ui"
                  onClick={(activeKey) => setActiveMenu(activeKey)}
                >
                  <i className="ri-focus-2-line"></i>
                  <span><Trans i18nKey="ui_element" /></span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-ui">
                  <Accordion as="ul" id="ui-elements" className="iq-submenu ">
                    <Accordion.Item
                      as="li"
                      className={`${
                        location.pathname === "/dashboard/ui-kit/ui-color" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-typography" ||
                        location.pathname === "/dashboard/ui-kit/ui-alerts" ||
                        location.pathname === "/dashboard/ui-kit/ui-badges" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-breadcrumb" ||
                        location.pathname === "/dashboard/ui-kit/ui-buttons" ||
                        location.pathname === "/dashboard/ui-kit/ui-cards" ||
                        location.pathname === "/dashboard/ui-kit/ui-carousel" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-embed-video" ||
                        location.pathname === "/dashboard/ui-kit/ui-grid" ||
                        location.pathname === "/dashboard/ui-kit/ui-images" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-list-groups" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-notifications" ||
                        location.pathname === "/dashboard/ui-kit/ui-modal" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-pagination" ||
                        location.pathname === "/dashboard/ui-kit/ui-popovers" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-progressbars" ||
                        location.pathname === "/dashboard/ui-kit/ui-tabs" ||
                        location.pathname === "/dashboard/ui-kit/ui-tooltips" ||
                        location.pathname === "/dashboard/form/form-element" ||
                        location.pathname ===
                          "/dashboard/form/form-validation" ||
                        location.pathname === "/dashboard/form/form-switch" ||
                        location.pathname === "/dashboard/form/form-checkbox" ||
                        location.pathname === "/dashboard/form/form-radio" ||
                        location.pathname === "/dashboard/form/form-wizard" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-validate" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-vertical" ||
                        location.pathname === "/dashboard/table/tables-basic" ||
                        location.pathname === "/dashboard/table/data-table" ||
                        location.pathname ===
                          "/dashboard/table/table-editable" ||
                        location.pathname === "/dashboard/icon/fontawesome-5" ||
                        location.pathname === "/dashboard/icon/lineawesome" ||
                        location.pathname === "/dashboard/icon/remixicon"
                          ? "active"
                          : ""
                      }`}
                      eventKey="sidebar-uikit"
                    >
                      <CustomToggle
                        eventKey="sidebar-uikit"
                        onClick={(activeKey) => setActiveMenu(activeKey)}
                      >
                        <i className="ri-pencil-ruler-line"></i>
                        <span>UI Kit</span>
                        <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </CustomToggle>
                      <Accordion.Collapse eventKey="sidebar-uikit">
                        <ul id="ui-kit" className="iq-submenu ">
                          <li
                            className={`${
                              location.pathname === "/dashboard/ui-kit/ui-color"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-color">
                              <i className="ri-font-color"></i>Colors
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-typography"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-typography">
                              <i className="ri-text"></i>Typography
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-alerts"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-alerts">
                              <i className="ri-alert-line"></i>Alerts
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-badges"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-badges">
                              <i className="ri-building-3-line"></i>Badges
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-breadcrumb"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-breadcrumb">
                              <i className="ri-menu-2-line"></i>Breadcrumb
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-buttons"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-buttons">
                              <i className="ri-checkbox-blank-line"></i>Buttons
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/dashboard/ui-kit/ui-cards"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-cards">
                              <i className="ri-bank-card-line"></i>Cards
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-carousel"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-carousel">
                              <i className="ri-slideshow-line"></i>Carousel
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-embed-video"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-embed-video">
                              <i className="ri-slideshow-2-line"></i>Video
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/dashboard/ui-kit/ui-grid"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-grid">
                              <i className="ri-grid-line"></i>Grid
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-images"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-images">
                              <i className="ri-image-line"></i>Images
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-list-groups"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-list-groups">
                              <i className="ri-file-list-3-line"></i>list Group
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/dashboard/ui-kit/ui-modal"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-modal">
                              <i className="ri-stop-mini-line"></i>Modal
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-notifications"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-notifications">
                              <i className="ri-notification-line"></i>
                              Notifications
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-pagination"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-pagination">
                              <i className="ri-pages-line"></i>Pagination
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-popovers"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-popovers">
                              <i className="ri-folder-shield-2-line"></i>
                              Popovers
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-progressbars"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-progressbars">
                              <i className="ri-battery-low-line"></i>
                              Progressbars
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/dashboard/ui-kit/ui-tabs"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-tabs">
                              <i className="ri-database-line"></i>Tabs
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/ui-kit/ui-tooltips"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/ui-kit/ui-tooltips">
                              <i className="ri-record-mail-line"></i>Tooltips
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion.Item>
                    <Accordion.Item
                      as="li"
                      className={`${
                        location.pathname === "/dashboard/ui-kit/ui-color" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-typography" ||
                        location.pathname === "/dashboard/ui-kit/ui-alerts" ||
                        location.pathname === "/dashboard/ui-kit/ui-badges" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-breadcrumb" ||
                        location.pathname === "/dashboard/ui-kit/ui-buttons" ||
                        location.pathname === "/dashboard/ui-kit/ui-cards" ||
                        location.pathname === "/dashboard/ui-kit/ui-carousel" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-embed-video" ||
                        location.pathname === "/dashboard/ui-kit/ui-grid" ||
                        location.pathname === "/dashboard/ui-kit/ui-images" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-list-groups" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-notifications" ||
                        location.pathname === "/dashboard/ui-kit/ui-modal" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-pagination" ||
                        location.pathname === "/dashboard/ui-kit/ui-popovers" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-progressbars" ||
                        location.pathname === "/dashboard/ui-kit/ui-tabs" ||
                        location.pathname === "/dashboard/ui-kit/ui-tooltips" ||
                        location.pathname === "/dashboard/form/form-element" ||
                        location.pathname ===
                          "/dashboard/form/form-validation" ||
                        location.pathname === "/dashboard/form/form-switch" ||
                        location.pathname === "/dashboard/form/form-checkbox" ||
                        location.pathname === "/dashboard/form/form-radio" ||
                        location.pathname === "/dashboard/form/form-wizard" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-validate" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-vertical" ||
                        location.pathname === "/dashboard/table/tables-basic" ||
                        location.pathname === "/dashboard/table/data-table" ||
                        location.pathname ===
                          "/dashboard/table/table-editable" ||
                        location.pathname === "/dashboard/icon/fontawesome-5" ||
                        location.pathname === "/dashboard/icon/lineawesome" ||
                        location.pathname === "/dashboard/icon/remixicon"
                          ? "active"
                          : ""
                      }`}
                      eventKey="sidebar-form"
                    >
                      <CustomToggle
                        eventKey="sidebar-uiform"
                        onClick={(activeKey) => setActiveMenu(activeKey)}
                      >
                        <i className="ri-profile-line"></i>
                        <span>Forms</span>
                        <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </CustomToggle>
                      <Accordion.Collapse eventKey="sidebar-uiform">
                        <ul id="forms" className="iq-submenu ">
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/form/form-element"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-element">
                              <i className="ri-tablet-line"></i>Form Elements
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/form/form-validation"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-validation">
                              <i className="ri-device-line"></i>Form Validation
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/form/form-switch"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-switch">
                              <i className="ri-toggle-line"></i>Form Switch
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/form/form-checkbox"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-checkbox">
                              <i className="ri-checkbox-line"></i>Form Checkbox
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/dashboard/form/form-radio"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-radio">
                              <i className="ri-radio-button-line"></i>Form Radio
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion.Item>
                    <Accordion.Item
                      as="li"
                      className={`${
                        location.pathname === "/dashboard/ui-kit/ui-color" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-typography" ||
                        location.pathname === "/dashboard/ui-kit/ui-alerts" ||
                        location.pathname === "/dashboard/ui-kit/ui-badges" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-breadcrumb" ||
                        location.pathname === "/dashboard/ui-kit/ui-buttons" ||
                        location.pathname === "/dashboard/ui-kit/ui-cards" ||
                        location.pathname === "/dashboard/ui-kit/ui-carousel" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-embed-video" ||
                        location.pathname === "/dashboard/ui-kit/ui-grid" ||
                        location.pathname === "/dashboard/ui-kit/ui-images" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-list-groups" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-notifications" ||
                        location.pathname === "/dashboard/ui-kit/ui-modal" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-pagination" ||
                        location.pathname === "/dashboard/ui-kit/ui-popovers" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-progressbars" ||
                        location.pathname === "/dashboard/ui-kit/ui-tabs" ||
                        location.pathname === "/dashboard/ui-kit/ui-tooltips" ||
                        location.pathname === "/dashboard/form/form-element" ||
                        location.pathname ===
                          "/dashboard/form/form-validation" ||
                        location.pathname === "/dashboard/form/form-switch" ||
                        location.pathname === "/dashboard/form/form-checkbox" ||
                        location.pathname === "/dashboard/form/form-radio" ||
                        location.pathname === "/dashboard/form/form-wizard" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-validate" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-vertical" ||
                        location.pathname === "/dashboard/table/tables-basic" ||
                        location.pathname === "/dashboard/table/data-table" ||
                        location.pathname ===
                          "/dashboard/table/table-editable" ||
                        location.pathname === "/dashboard/icon/fontawesome-5" ||
                        location.pathname === "/dashboard/icon/lineawesome" ||
                        location.pathname === "/dashboard/icon/remixicon"
                          ? "active"
                          : ""
                      }`}
                      eventKey="sidebar-formw"
                    >
                      <CustomToggle
                        eventKey="sidebar-uiformw"
                        onClick={(activeKey) => setActiveMenu(activeKey)}
                      >
                        <i className="ri-archive-drawer-line"></i>
                        <span>Forms Wizard</span>
                        <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </CustomToggle>
                      <Accordion.Collapse eventKey="sidebar-uiformw">
                        <ul id="wizard-form" className="iq-submenu ">
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/form/form-wizard"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-wizard">
                              <i className="ri-clockwise-line"></i>Simple Wizard
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/form/form-wizard-validate"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-wizard-validate">
                              <i className="ri-clockwise-2-line"></i>Validate
                              Wizard
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/form/form-wizard-vertical"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/form/form-wizard-vertical">
                              <i className="ri-anticlockwise-line"></i>Vertical
                              Wizard
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion.Item>
                    <Accordion.Item
                      as="li"
                      className={`${
                        location.pathname === "/dashboard/ui-kit/ui-color" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-typography" ||
                        location.pathname === "/dashboard/ui-kit/ui-alerts" ||
                        location.pathname === "/dashboard/ui-kit/ui-badges" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-breadcrumb" ||
                        location.pathname === "/dashboard/ui-kit/ui-buttons" ||
                        location.pathname === "/dashboard/ui-kit/ui-cards" ||
                        location.pathname === "/dashboard/ui-kit/ui-carousel" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-embed-video" ||
                        location.pathname === "/dashboard/ui-kit/ui-grid" ||
                        location.pathname === "/dashboard/ui-kit/ui-images" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-list-groups" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-notifications" ||
                        location.pathname === "/dashboard/ui-kit/ui-modal" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-pagination" ||
                        location.pathname === "/dashboard/ui-kit/ui-popovers" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-progressbars" ||
                        location.pathname === "/dashboard/ui-kit/ui-tabs" ||
                        location.pathname === "/dashboard/ui-kit/ui-tooltips" ||
                        location.pathname === "/dashboard/form/form-element" ||
                        location.pathname ===
                          "/dashboard/form/form-validation" ||
                        location.pathname === "/dashboard/form/form-switch" ||
                        location.pathname === "/dashboard/form/form-checkbox" ||
                        location.pathname === "/dashboard/form/form-radio" ||
                        location.pathname === "/dashboard/form/form-wizard" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-validate" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-vertical" ||
                        location.pathname === "/dashboard/table/tables-basic" ||
                        location.pathname === "/dashboard/table/data-table" ||
                        location.pathname ===
                          "/dashboard/table/table-editable" ||
                        location.pathname === "/dashboard/icon/fontawesome-5" ||
                        location.pathname === "/dashboard/icon/lineawesome" ||
                        location.pathname === "/dashboard/icon/remixicon"
                          ? "active"
                          : ""
                      }`}
                      eventKey="sidebar-table"
                    >
                      <CustomToggle
                        eventKey="sidebar-table"
                        onClick={(activeKey) => setActiveMenu(activeKey)}
                      >
                        <i className="ri-table-line"></i>
                        <span>Table</span>
                        <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </CustomToggle>
                      <Accordion.Collapse eventKey="sidebar-table">
                        <ul id="tables" className="iq-submenu">
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/table/tables-basic"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/table/tables-basic">
                              <i className="ri-table-line"></i>Basic Tables
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/table/data-table"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/table/data-table">
                              <i className="ri-database-line"></i>Data Table
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/table/table-editable"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/table/table-editable">
                              <i className="ri-refund-line"></i>Editable Table
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion.Item>
                    <Accordion.Item
                      as="li"
                      className={`${
                        location.pathname === "/dashboard/ui-kit/ui-color" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-typography" ||
                        location.pathname === "/dashboard/ui-kit/ui-alerts" ||
                        location.pathname === "/dashboard/ui-kit/ui-badges" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-breadcrumb" ||
                        location.pathname === "/dashboard/ui-kit/ui-buttons" ||
                        location.pathname === "/dashboard/ui-kit/ui-cards" ||
                        location.pathname === "/dashboard/ui-kit/ui-carousel" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-embed-video" ||
                        location.pathname === "/dashboard/ui-kit/ui-grid" ||
                        location.pathname === "/dashboard/ui-kit/ui-images" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-list-groups" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-notifications" ||
                        location.pathname === "/dashboard/ui-kit/ui-modal" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-pagination" ||
                        location.pathname === "/dashboard/ui-kit/ui-popovers" ||
                        location.pathname ===
                          "/dashboard/ui-kit/ui-progressbars" ||
                        location.pathname === "/dashboard/ui-kit/ui-tabs" ||
                        location.pathname === "/dashboard/ui-kit/ui-tooltips" ||
                        location.pathname === "/dashboard/form/form-element" ||
                        location.pathname ===
                          "/dashboard/form/form-validation" ||
                        location.pathname === "/dashboard/form/form-switch" ||
                        location.pathname === "/dashboard/form/form-checkbox" ||
                        location.pathname === "/dashboard/form/form-radio" ||
                        location.pathname === "/dashboard/form/form-wizard" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-validate" ||
                        location.pathname ===
                          "/dashboard/form/form-wizard-vertical" ||
                        location.pathname === "/dashboard/table/tables-basic" ||
                        location.pathname === "/dashboard/table/data-table" ||
                        location.pathname ===
                          "/dashboard/table/table-editable" ||
                        location.pathname === "/dashboard/icon/fontawesome-5" ||
                        location.pathname === "/dashboard/icon/lineawesome" ||
                        location.pathname === "/dashboard/icon/remixicon"
                          ? "active"
                          : ""
                      }`}
                      eventKey="sidebar-icon"
                    >
                      <CustomToggle
                        eventKey="sidebar-icon"
                        onClick={(activeKey) => setActiveMenu(activeKey)}
                      >
                        <i className="ri-list-check"></i>
                        <span>Icons</span>
                        <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </CustomToggle>
                      <Accordion.Collapse eventKey="sidebar-icon">
                        <ul id="icons" className="iq-submenu">
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/icon/fontawesome-5"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/icon/fontawesome-5">
                              <i className="ri-facebook-fill"></i>Font Awesome 5
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/icon/lineawesome"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/icon/lineawesome">
                              <i className="ri-keynote-line"></i>line Awesome
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/dashboard/icon/remixicon"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/icon/remixicon">
                              <i className="ri-remixicon-line"></i>Remixicon
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item
                as="li"
                className={`${
                  location.pathname === "/auth/sign-in" ||
                  location.pathname === "/auth/sign-up" ||
                  location.pathname === "/auth/recoverpw" ||
                  location.pathname === "/auth/confirm-mail" ||
                  location.pathname === "/auth/lock-screen" ||
                  location.pathname ===
                    "/dashboard/extrapages/pages-timeline" ||
                  location.pathname === "/dashboard/extrapages/pages-invoice" ||
                  location.pathname === "/dashboard/extrapages/blankpage" ||
                  location.pathname === "/errors/error404" ||
                  location.pathname === "/errors/error500" ||
                  location.pathname === "/dashboard/extrapages/pages-pricing" ||
                  location.pathname ===
                    "/dashboard/extrapages/pages-pricing-one" ||
                  location.pathname === "/extra-pages/pages-maintenance" ||
                  location.pathname === "/extra-pages/pages-comingsoon" ||
                  location.pathname === "/dashboard/extrapages/pages-faq"
                    ? "active"
                    : ""
                }`}
                eventKey="sidebar-pages"
              >
                <CustomToggle
                  eventKey="sidebar-pages"
                  onClick={(activeKey) => setActiveMenu(activeKey)}
                >
                  <i className="ri-pages-line"></i>
                  <span><Trans i18nKey="pages" /></span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </CustomToggle>
                <Accordion.Collapse eventKey="sidebar-pages">
                  <Accordion as="ul" id="pages" className="iq-submenu">
                    <Accordion.Item
                      as="li"
                      className={`${
                        location.pathname === "/auth/sign-in" ||
                        location.pathname === "/auth/sign-up" ||
                        location.pathname === "/auth/recoverpw" ||
                        location.pathname === "/auth/confirm-mail" ||
                        location.pathname === "/auth/lock-screen" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-timeline" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-invoice" ||
                        location.pathname ===
                          "/dashboard/extrapages/blankpage" ||
                        location.pathname === "/errors/error404" ||
                        location.pathname === "/errors/error500" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-pricing" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-pricing-one" ||
                        location.pathname ===
                          "/extra-pages/pages-maintenance" ||
                        location.pathname === "/extra-pages/pages-comingsoon" ||
                        location.pathname === "/dashboard/extrapages/pages-faq"
                          ? "active"
                          : ""
                      }`}
                      eventKey="sidebar-auth"
                    >
                      <CustomToggle
                        eventKey="sidebar-auth"
                        onClick={(activeKey) => setActiveMenu(activeKey)}
                      >
                        <i className="ri-pages-line"></i>
                        <span>Authentication</span>
                        <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </CustomToggle>
                      <Accordion.Collapse eventKey="sidebar-auth">
                        <ul id="authentication" className="iq-submenu ">
                          <li
                            className={`${
                              location.pathname === "/auth/sign-in"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/auth/sign-in">
                              <i className="ri-login-box-line"></i>Login
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/auth/sign-up"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/auth/sign-up">
                              <i className="ri-login-circle-line"></i>Register
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/auth/recoverpw"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/auth/recoverpw">
                              <i className="ri-record-mail-line"></i>Recover
                              Password
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/auth/confirm-mail"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/auth/confirm-mail">
                              <i className="ri-file-code-line"></i>Confirm Mail
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/auth/lock-screen"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/auth/lock-screen">
                              <i className="ri-lock-line"></i>Lock Screen
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion.Item>
                    <Accordion.Item
                      as="li"
                      className={`${
                        location.pathname === "/auth/sign-in" ||
                        location.pathname === "/auth/sign-up" ||
                        location.pathname === "/auth/recoverpw" ||
                        location.pathname === "/auth/confirm-mail" ||
                        location.pathname === "/auth/lock-screen" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-timeline" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-invoice" ||
                        location.pathname ===
                          "/dashboard/extrapages/blankpage" ||
                        location.pathname === "/errors/error404" ||
                        location.pathname === "/errors/error500" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-pricing" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-pricing-one" ||
                        location.pathname ===
                          "/extra-pages/pages-maintenance" ||
                        location.pathname === "/extra-pages/pages-comingsoon" ||
                        location.pathname ===
                          "/dashboard/extrapages/pages-faq" ||
                        activeMenu === "0"
                          ? "active"
                          : ""
                      }`}
                      eventKey="sidebar-extra"
                    >
                      <CustomToggle
                        eventKey="sidebar-extra"
                        onClick={(activeKey) => setActiveMenu(activeKey)}
                      >
                        <i className="ri-pantone-line"></i>
                        <span>Extra Pages</span>
                        <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                      </CustomToggle>
                      <Accordion.Collapse eventKey="sidebar-extra">
                        <ul id="extra-pages" className="iq-submenu ">
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/extrapages/pages-timeline"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/extrapages/pages-timeline">
                              <i className="ri-map-pin-time-line"></i>Timeline
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/extrapages/pages-invoice"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/extrapages/pages-invoice">
                              <i className="ri-question-answer-line"></i>Invoice
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/extrapages/blankpage"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/extrapages/blankpage">
                              <i className="ri-invision-line"></i>Blank Page
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/errors/error404"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/errors/error404">
                              <i className="ri-error-warning-line"></i>Error 404
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname === "/errors/error500"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/errors/error500">
                              <i className="ri-error-warning-line"></i>Error 500
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/extrapages/pages-pricing"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/extrapages/pages-pricing">
                              <i className="ri-price-tag-line"></i>Pricing
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/extrapages/pages-pricing-one"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/extrapages/pages-pricing-one">
                              <i className="ri-price-tag-2-line"></i>Pricing 1
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/extra-pages/pages-maintenance"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/extra-pages/pages-maintenance">
                              <i className="ri-archive-line"></i>Maintenance
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/extra-pages/pages-comingsoon"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/extra-pages/pages-comingsoon">
                              <i className="ri-mastercard-line"></i>Coming Soon
                            </Link>
                          </li>
                          <li
                            className={`${
                              location.pathname ===
                              "/dashboard/extrapages/pages-faq"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link to="/dashboard/extrapages/pages-faq">
                              <i className="ri-compasses-line"></i>Faq
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </nav>
          <div className="p-5"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

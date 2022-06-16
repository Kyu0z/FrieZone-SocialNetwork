import React from "react";
import { appName, year } from "../../../../config";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import {
  getDarkMode,
  ModeAction,
  getRtlMode,
  DirAction,
} from "../../../../store/mode/mode";
import { connect } from "react-redux";
import { Trans } from "react-i18next";

const mapStateToProps = (state) => {
  return {
    darkMode: getDarkMode(state),
    rtlMode: getRtlMode(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ModeAction,
      DirAction,
    },
    dispatch
  ),
});

const Footer = (props) => {
  var dark = props.darkMode;
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get("dark");
  if (mode !== null) {
    document.body.classList = "";
    dark = false;
    switch (mode) {
      case "true":
        document.body.classList = "dark";
        dark = true;
        break;
      case "false":
        document.body.classList = "";
        dark = false;
        break;
      default:
        document.body.classList = "";
        dark = false;
        break;
    }
  }
  return (
    <>
      <footer className="iq-footer bg-white">
        <Container fluid>
          <Row>
            <Col lg="6">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="/dashboard/extrapages/privacy-policy">
                    <Trans i18nKey="policy" />
                  </Link>
                </li>{" "}
                <li className="list-inline-item">
                  <Link to="/dashboard/extrapages/terms-of-service">
                  <Trans i18nKey="terms" />
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg="6" className="d-flex justify-content-end">
              <span>
                Copyright {year}
                <Link to="#"> {appName} </Link> All Rights Reserved.
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="iq-float-menu">
        <input
          type="checkbox"
          className="iq-float-menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="iq-float-menu-open-button" htmlFor="menu-open">
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </label>
        <Button
          bsPrefix="iq-float-menu-item bg-info"
          onClick={() => {
            props.DirAction(!props.rtlMode);
          }}
        >
          <i
            className={`${
              props.rtlMode ? "ri-text-direction-r" : "ri-text-direction-l"
            }`}
          ></i>
        </Button>
        <Button
          bsPrefix="iq-float-menu-item bg-danger"
          onClick={() => {
            props.ModeAction(!props.darkMode);
          }}
        >
          <i
            className={`${
              props.darkMode ? "ri-moon-clear-line" : "ri-sun-line"
            }`}
            checked={props.darkMode || dark}
            data-active={
              props.darkMode ? "true" : "false" || dark ? "true" : "false"
            }
          ></i>
        </Button>
        <Button bsPrefix="iq-float-menu-item bg-warning" title="Comming Soon">
          <i className="ri-palette-line"></i>
        </Button>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

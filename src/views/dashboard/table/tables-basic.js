import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const table1 = [
  {
    row: "1",
    firstname: "Mark",
    lastname: "Otto",
    handle: "@mdo",
  },
  {
    row: "2",
    firstname: "Jacob",
    lastname: "Thornton",
    handle: "@fat",
  },
  {
    row: "3",
    firstname: "Larry",
    lastname: "the Bird",
    handle: "@twitter",
  },
];

const table2 = [
  {
    class: "Active",
    classname: "table-active",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    class: "Default",
    classname: "",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    class: "Primary",
    classname: "table-primary",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    class: "Secondary",
    classname: "table-secondary",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    class: "Success",
    classname: "table-success",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    class: "Danger",
    classname: "table-danger",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    class: "Warning",
    classname: "table-warning",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    class: "Info",
    classname: "table-info",
    heading1: "Cell",
    heading2: "Cell",
  },
];

const table3 = [
  {
    classname: "bg-primary",
    row: "1",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "",
    row: "2",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "bg-success",
    row: "3",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "",
    row: "4",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "bg-info",
    row: "5",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "",
    row: "6",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "bg-warning",
    row: "7",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "",
    row: "8",
    heading1: "Cell",
    heading2: "Cell",
  },
  {
    classname: "bg-danger",
    row: "9",
    heading1: "Cell",
    heading2: "Cell",
  },
];

const table4 = [
  {
    row: "1",
    heading1: "Cell",
    heading2: "Cell",
    heading3: "Cell",
    heading4: "Cell",
    heading5: "Cell",
    heading6: "Cell",
    heading7: "Cell",
    heading8: "Cell",
    heading9: "Cell",
  },
  {
    row: "2",
    heading1: "Cell",
    heading2: "Cell",
    heading3: "Cell",
    heading4: "Cell",
    heading5: "Cell",
    heading6: "Cell",
    heading7: "Cell",
    heading8: "Cell",
    heading9: "Cell",
  },
  {
    row: "3",
    heading1: "Cell",
    heading2: "Cell",
    heading3: "Cell",
    heading4: "Cell",
    heading5: "Cell",
    heading6: "Cell",
    heading7: "Cell",
    heading8: "Cell",
    heading9: "Cell",
  },
];

const TableBasic = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Card
              className="position-relative inner-page-bg bg-primary"
              style={{ height: "150px" }}
            >
              <div className="inner-page-title">
                <h3 className="text-white">Basic Table Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Tables</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  The <code>.table </code> class adds basic styling to a table.
                </p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Table Head Options</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Similar to tables and dark tables, use the modifier classes{" "}
                  <code className="highlighter-rouge">.thead-light</code> or{" "}
                  <code className="highlighter-rouge">.thead-dark</code> to make{" "}
                  <code className="highlighter-rouge">&lt;thead&gt;</code>s
                  appear light or dark gray.
                </p>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Borderless table</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Add{" "}
                  <code className="highlighter-rouge">.table-borderless</code>{" "}
                  for a table without borders.
                </p>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>
                  <code className="highlighter-rouge">.table-borderless</code>{" "}
                  can also be used on dark tables.
                </p>
                <table className="table table-borderless table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Small table</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Add <code className="highlighter-rouge">.table-sm</code> to
                  make tables more compact by cutting cell padding in half.
                </p>
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="table table-sm table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Captions</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  A <code className="highlighter-rouge">&lt;caption&gt;</code>{" "}
                  functions like a heading for a table. It helps users with
                  screen readers to find a table and understand what it’s about
                  and decide if they want to read it.
                </p>
                <table className="table">
                  <caption>List of users</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Table Dark</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  You can also invert the colors—with light text on dark
                  backgrounds—with{" "}
                  <code className="highlighter-rouge">.table-dark</code>.
                </p>
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Striped Rows</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Use <code className="highlighter-rouge">.table-striped</code>{" "}
                  to add zebra-striping to any table row within the{" "}
                  <code className="highlighter-rouge">&lt;tbody&gt;</code>.
                </p>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Hoverable rows</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Add <code className="highlighter-rouge">.table-hover</code> to
                  enable a hover state on table rows within a{" "}
                  <code className="highlighter-rouge">&lt;tbody&gt;</code>.
                </p>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table1.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item.row}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Contextual classes</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Use contextual classes to color table rows or individual
                  cells.
                </p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Class</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table2.map((item, idx) => (
                      <tr key={idx} className={`${item.classname}`}>
                        <th scope="row">{item.class}</th>
                        <td>{item.heading1}</td>
                        <td>{item.heading2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>
                  Regular table background variants are not available with the
                  dark table, however, you may use{" "}
                  <Link to="https://getbootstrap.com/" target="_blank">
                    text or background utilities
                  </Link>{" "}
                  to achieve similar styles.
                </p>
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table3.map((item, idx) => (
                      <tr key={idx} className={`${item.classname}`}>
                        <th scope="row">{item.row}</th>
                        <td>{item.heading1}</td>
                        <td>{item.heading2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Responsive tables</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Responsive tables allow tables to be scrolled horizontally
                  with ease. Make any table responsive across all viewports by
                  wrapping a <code className="highlighter-rouge">.table</code>{" "}
                  with{" "}
                  <code className="highlighter-rouge">.table-responsive</code>.
                  Or, pick a maximum breakpoint with which to have a responsive
                  table up to by using{" "}
                  <code className="highlighter-rouge">
                    .table-responsive {`-sm|-md|-lg|-xl`}
                  </code>
                  .
                </p>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table4.map((item, idx) => (
                        <tr key={idx}>
                          <th scope="row">{item.row}</th>
                          <td>{item.heading1}</td>
                          <td>{item.heading2}</td>
                          <td>{item.heading3}</td>
                          <td>{item.heading4}</td>
                          <td>{item.heading5}</td>
                          <td>{item.heading6}</td>
                          <td>{item.heading7}</td>
                          <td>{item.heading8}</td>
                          <td>{item.heading9}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableBasic;

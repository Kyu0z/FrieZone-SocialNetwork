import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const UiListGroups = () => {
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
                <h3 className="text-white">List Group Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="6" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">List group</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  The most basic list group is an unordered list with list items
                  and the proper classes. Build upon it with the options that
                  follow, or with your own CSS as needed.
                </p>
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Disabled items</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Set the <code>disabled</code> prop to prevent actions on a{" "}
                  <code>&lt;ListGroup.Item&gt;</code>. For elements that aren't
                  naturally disable-able (like anchors)<code> onClick </code>{" "}
                  handlers are added that call <code>preventDefault</code> to
                  mimick disabled behavior.
                </p>
                <ListGroup>
                  <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Flush</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Add the <code>flush</code> variant to remove outer borders and
                  rounded corners to render list group items edge-to-edge in a
                  parent container <code>such as a Card</code>.
                </p>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
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
                  Use contextual variants on <code>&lt;ListGroup.Item&gt;</code>
                  s to style them with a stateful background and color.
                </p>
                <ListGroup>
                  <ListGroup.Item variant="">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item variant="primary">
                    A simple primary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="secondary">
                    A simple secondary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="success">
                    A simple success list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="danger">
                    A simple danger list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="warning">
                    A simple warning list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="info">
                    A simple info list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="light">
                    A simple light list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    A simple dark list group item
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">With badges</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Add badges to any list group item to show unread counts,
                  activity, and more with the help of some{" "}
                  <a href="/docs/5.0/utilities/flex/">utilities</a>.
                </p>
                <ListGroup>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge bg-primary rounded-pill">14</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge bg-primary rounded-pill">2</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge bg-primary rounded-pill">1</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">With badges</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Add badges to any list group item to show unread counts,
                  activity, and more with the help of some{" "}
                  <a href="/docs/5.0/utilities/flex/">utilities</a>.
                </p>
                <ListGroup>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge bg-primary rounded-pill">14</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge bg-primary rounded-pill">2</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge bg-primary rounded-pill">1</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" lg="6">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">List Active</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Set the <code> active </code> prop to indicate the list groups
                  current active selection.
                </p>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item as="li">
                    Porta ac consectetur ac
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Links and buttons</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Toggle the <code>action</code> prop to create actionable list
                  group items, with disabled, hover and active styles. List item
                  actions will render a <code> &lt;button&gt; </code> or{" "}
                  <code> &lt;a&gt; </code> (depending on the presence of an{" "}
                  <code> href </code>) by default but can be overridden by
                  setting the as prop <code>as</code> usual.
                </p>
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item action active href="#link1">
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    Porta ac consectetur ac
                  </ListGroup.Item>
                  <ListGroup.Item action disabled>
                    Vestibulum at eros
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Horizontal</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Use the <code>horizontal</code> prop to make the ListGroup
                  render horizontally. Currently{" "}
                  <strong>
                    horizontal list groups cannot be combined with flush list
                    groups.
                  </strong>
                </p>
                <div>
                  {["sm"].map((breakpoint, idx) => (
                    <ListGroup
                      horizontal={breakpoint}
                      className="my-2"
                      key={idx}
                    >
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Morbi leo risus </ListGroup.Item>
                    </ListGroup>
                  ))}
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Contextual classes Action</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Use contextual variants on <code>&lt;ListGroup.Item&gt;</code>
                  s to style them with a stateful background and color.
                </p>
                <ListGroup>
                  <ListGroup.Item variant="">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item variant="primary">
                    A simple primary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="secondary">
                    A simple secondary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="success">
                    A simple success list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="danger">
                    A simple danger list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="warning">
                    A simple warning list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="info">
                    A simple info list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="light">
                    A simple light list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    A simple dark list group item
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Custom content</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action active"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1 text-white">
                        List group item heading
                      </h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>Donec id elit non mi porta.</small>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>Donec id elit non mi porta.</small>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>Donec id elit non mi porta.</small>
                    <small className="text-muted">
                      And some muted small print.
                    </small>
                  </Link>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiListGroups;

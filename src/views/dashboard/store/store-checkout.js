import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";

//IMG
import store1 from "../../../assets/images/store/01.jpg";
import store2 from "../../../assets/images/store/02.jpg";
import store3 from "../../../assets/images/store/03.jpg";
import store4 from "../../../assets/images/store/04.jpg";
import cart from "../../../assets/images/icon/cart.png";
import pageimg from "../../../assets/images/page-img/profile-bg7.jpg";

//profile-header
import ProfileHeader from "../../../components/profile-header";

const StoreCheckout = () => {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [show, setShow] = useState("");
  return (
    <>
      <ProfileHeader title="Store Checkout" img={pageimg} />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <div
              id="cart"
              className={`cart-card-block p-0 col-12 ${
                show === "address" || show === "payment" ? "" : "show"
              }`}
            >
              <Row className="align-item-center">
                <Col lg="8">
                  <Card>
                    <Card.Header className=" d-flex justify-content-between iq-border-bottom mb-0">
                      <div className="header-title">
                        <h4 className="card-title">Shopping Cart</h4>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="checkout-product">
                        <Row className=" align-items-center">
                          <Col sm="2">
                            <span className="checkout-product-img">
                              <Link to="#">
                                <img
                                  className="img-fluid rounded"
                                  src={store1}
                                  alt=""
                                />
                              </Link>
                            </span>
                          </Col>
                          <Col sm="4">
                            <div className="checkout-product-details">
                              <h5>The Raze night book</h5>
                              <p className="text-success">In stock</p>
                            </div>
                          </Col>
                          <Col sm="6">
                            <Row>
                              <Col sm="10" className="col-10">
                                <Row className=" align-items-center ">
                                  <Col sm="7" md="6" className=" col-8">
                                    <div className="quantity buttons_added">
                                      <input
                                        type="button"
                                        defaultValue="-"
                                        className="minus h5"
                                        onClick={() => setCount(count - 1)}
                                      />
                                      <input
                                        type="button"
                                        defaultValue={count}
                                        title="Qty"
                                        className="input-text qty text"
                                      />
                                      <input
                                        type="button"
                                        defaultValue="+"
                                        className="plus h5"
                                        onClick={() => setCount(count + 1)}
                                      />
                                    </div>
                                  </Col>
                                  <Col sm="5" md="6" className=" col-4">
                                    <span className="product-price">$15</span>
                                  </Col>
                                </Row>
                              </Col>
                              <Col sm="2" className=" col-2">
                                <Link to="#" className="text-dark">
                                  <i className="ri-delete-bin-7-fill h5"></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <div className="checkout-product">
                        <Row className=" align-items-center">
                          <Col sm="2">
                            <span className="checkout-product-img">
                              <Link to="#">
                                <img
                                  className="img-fluid rounded"
                                  src={store2}
                                  alt=""
                                />
                              </Link>
                            </span>
                          </Col>
                          <Col sm="4">
                            <div className="checkout-product-details">
                              <h5>Harsh Reality book</h5>
                              <p className="text-success">In stock</p>
                            </div>
                          </Col>
                          <Col sm="6">
                            <Row>
                              <Col sm="10" className="col-10">
                                <Row className=" align-items-center ">
                                  <Col sm="7" md="6" className=" col-8">
                                    <div className="quantity buttons_added">
                                      <input
                                        type="button"
                                        defaultValue="-"
                                        className="minus h5"
                                        onClick={() => setCount1(count1 - 1)}
                                      />
                                      <input
                                        type="button"
                                        defaultValue={count1}
                                        title="Qty"
                                        className="input-text qty text"
                                      />
                                      <input
                                        type="button"
                                        defaultValue="+"
                                        className="plus h5"
                                        onClick={() => setCount1(count1 + 1)}
                                      />
                                    </div>
                                  </Col>
                                  <Col sm="5" md="6" className=" col-4">
                                    <span className="product-price">$25</span>
                                  </Col>
                                </Row>
                              </Col>
                              <Col sm="2" className=" col-2">
                                <Link to="#" className="text-dark">
                                  <i className="ri-delete-bin-7-fill h5"></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <div className="checkout-product">
                        <Row className=" align-items-center">
                          <Col sm="2">
                            <span className="checkout-product-img">
                              <Link to="#">
                                <img
                                  className="img-fluid rounded"
                                  src={store3}
                                  alt=""
                                />
                              </Link>
                            </span>
                          </Col>
                          <Col sm="4">
                            <div className="checkout-product-details">
                              <h5>The House in the Fog</h5>
                              <p className="text-success">In stock</p>
                            </div>
                          </Col>
                          <Col sm="6">
                            <Row>
                              <Col sm="10" className="col-10">
                                <Row className=" align-items-center ">
                                  <Col sm="7" md="6" className=" col-8">
                                    <div className="quantity buttons_added">
                                      <input
                                        type="button"
                                        defaultValue="-"
                                        className="minus h5"
                                        onClick={() => setCount2(count2 - 1)}
                                      />
                                      <input
                                        type="button"
                                        defaultValue={count2}
                                        title="Qty"
                                        className="input-text qty text"
                                      />
                                      <input
                                        type="button"
                                        defaultValue="+"
                                        className="plus h5"
                                        onClick={() => setCount2(count2 + 1)}
                                      />
                                    </div>
                                  </Col>
                                  <Col sm="5" md="6" className=" col-4">
                                    <span className="product-price">$18</span>
                                  </Col>
                                </Row>
                              </Col>
                              <Col sm="2" className=" col-2">
                                <Link to="#" className="text-dark">
                                  <i className="ri-delete-bin-7-fill h5"></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <div className="checkout-product">
                        <Row className=" align-items-center">
                          <Col sm="2">
                            <span className="checkout-product-img">
                              <Link to="#">
                                <img
                                  className="img-fluid rounded"
                                  src={store4}
                                  alt=""
                                />
                              </Link>
                            </span>
                          </Col>
                          <Col sm="4">
                            <div className="checkout-product-details">
                              <h5>The badges</h5>
                              <p className="text-success">In stock</p>
                            </div>
                          </Col>
                          <Col sm="6">
                            <Row>
                              <Col sm="10" className="col-10">
                                <Row className="align-items-center">
                                  <Col sm="7" md="6" className="col-8">
                                    <div className="quantity buttons_added">
                                      <input
                                        type="button"
                                        defaultValue="-"
                                        className="minus h5"
                                        onClick={() => setCount3(count3 - 1)}
                                      />
                                      <input
                                        type="button"
                                        defaultValue={count3}
                                        title="Qty"
                                        className="input-text qty text"
                                      />
                                      <input
                                        type="button"
                                        defaultValue="+"
                                        className="plus h5"
                                        onClick={() => setCount3(count3 + 1)}
                                      />
                                    </div>
                                  </Col>
                                  <Col sm="5" md="6" className="col-4">
                                    <span className="product-price">$28</span>
                                  </Col>
                                </Row>
                              </Col>
                              <Col sm="2" className="col-2">
                                <Link to="#" className="text-dark">
                                  <i className="ri-delete-bin-7-fill h5"></i>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card>
                    <Card.Body>
                      <p>
                        <b>Order Details</b>
                      </p>
                      <div className="d-flex justify-content-between mb-2">
                        <span>cart(4)</span>
                        <span>$86</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Bag Discount</span>
                        <span className="text-success">-10$</span>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <span>Delivery Charges</span>
                        <span className="text-success">Free</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-dark">
                          <strong>Total</strong>
                        </span>
                        <span className="text-dark">
                          <strong>$76</strong>
                        </span>
                      </div>
                      <Link
                        id="place-order"
                        to="#"
                        className="btn btn-primary d-block mt-3 next"
                        onClick={() => setShow("address")}
                      >
                        Place order
                      </Link>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className="card-body p-0 iq-checkout-policy">
                      <ul className="p-0 m-0">
                        <li className="d-flex align-items-center">
                          <div className="iq-checkout-icon">
                            <i className="ri-checkbox-line"></i>
                          </div>
                          <h6>Security policy (Safe and Secure Payment.)</h6>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="iq-checkout-icon">
                            <i className="ri-truck-line"></i>
                          </div>
                          <h6>Delivery policy (Home Delivery.)</h6>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="iq-checkout-icon">
                            <i className="ri-arrow-go-back-line"></i>
                          </div>
                          <h6>Return policy (Easy Retyrn.)</h6>
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
            <div
              id="address"
              className={`cart-card-block p-0 col-12 ${
                show === "address" ? "show" : ""
              }`}
            >
              <Row className="align-item-center">
                <Col lg="8">
                  <Card>
                    <Card.Header className=" d-flex justify-content-between">
                      <div className="header-title">
                        <h4 className="card-title">Add New Address</h4>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Row className=" mt-3">
                          <Col md="6">
                            <Form.Group className="form-group">
                              <Form.Label>Full Name: *</Form.Label>
                              <Form.Control type="text" name="fname" required />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group>
                              <Form.Label>Mobile Number: *</Form.Label>
                              <Form.Control type="text" name="mno" required />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group>
                              <Form.Label>Flat, House No: *</Form.Label>
                              <Form.Control
                                type="text"
                                name="houseno"
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group>
                              <Form.Label>
                                Landmark e.g. near apollo hospital:: *
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="landmark"
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group>
                              <Form.Label>Town/City: *</Form.Label>
                              <Form.Control type="text" name="city" required />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group>
                              <Form.Label>Pincode: *</Form.Label>
                              <Form.Control
                                type="text"
                                name="pincode"
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group>
                              <Form.Label>State: *</Form.Label>
                              <Form.Control type="text" name="state" required />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group>
                              <Form.Label htmlFor="addtype">
                                Address Type
                              </Form.Label>
                              <select className="form-control" id="addtype">
                                <option>Home</option>
                                <option>Office</option>
                              </select>
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Button
                              id="savenddeliver"
                              type="submit"
                              variant="primary"
                            >
                              Save And Deliver Here
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card>
                    <Card.Body>
                      <h4 className="mb-2">Nik John</h4>
                      <div className="shipping-address">
                        <p className="mb-0">9447 Glen Eagles Drive</p>
                        <p>Lewis Center, OH 43035</p>
                        <p>UTC-5: Eastern Standard Time (EST)</p>
                        <p>202-555-0140</p>
                      </div>
                      <hr />
                      <Link
                        id="deliver-address"
                        to="#"
                        className="btn btn-primary d-block mt-1 next"
                        onClick={() => setShow("payment")}
                      >
                        Deliver To this Address
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
            <div
              id="payment"
              className={`cart-card-block p-0 col-12 ${
                show === "payment" ? "show" : ""
              }`}
            >
              <Row className="align-item-center">
                <Col lg="8">
                  <Card>
                    <Card.Header className="d-flex justify-content-between">
                      <div className="header-title">
                        <h4 className="card-title">Payment Options</h4>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                          <img src={cart} alt="" height="40" width="50" />
                          <span>
                            US Unlocked Debit Card 12XX XXXX XXXX 0000
                          </span>
                        </div>
                        <span>Nik John</span>
                        <span>28/2020</span>
                      </div>
                      <Form className="mt-3">
                        <div className="d-flex align-items-center">
                          <span>Enter CVV: </span>
                          <div className="cvv-input ms-3 me-3">
                            <Form.Control type="text" required />
                          </div>
                          <Button type="submit" className="primary">
                            Continue
                          </Button>
                        </div>
                      </Form>
                      <hr />
                      <div className="card-lists">
                        <Form.Group className="form-group">
                          <Form.Check className="form-check">
                            <Form.Check.Input
                              type="radio"
                              id="credit"
                              name="customRadio"
                            />
                            <Form.Check.Label htmlFor="credit">
                              {" "}
                              Credit / Debit / ATM Card
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="form-check">
                            <Form.Check.Input
                              type="radio"
                              id="netbaking"
                              name="customRadio"
                            />
                            <Form.Check.Label htmlFor="netbaking">
                              {" "}
                              Net Banking
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="form-check">
                            <Form.Check.Input
                              type="radio"
                              id="emi"
                              name="emi"
                            />
                            <Form.Check.Label htmlFor="emi">
                              {" "}
                              EMI (Easy Installment)
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="form-check">
                            <Form.Check.Input
                              type="radio"
                              id="cod"
                              name="cod"
                            />
                            <Form.Check.Label htmlFor="cod">
                              {" "}
                              Cash On Delivery
                            </Form.Check.Label>
                          </Form.Check>
                        </Form.Group>
                      </div>
                      <hr />
                      <div className="add-card">
                        <Link to="#">
                          <span>
                            <i className="ri-add-box-line me-2 h5"></i>Add Gift
                            Card
                          </span>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card>
                    <Card.Body>
                      <h4 className="mb-2">Price Details</h4>
                      <div className="d-flex justify-content-between">
                        <span>Price 3 Items</span>
                        <span>
                          <strong>$1000.00</strong>
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Delivery Charges</span>
                        <span className="text-success">Free</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span>Amount Payable</span>
                        <span>
                          <strong>$1000.00</strong>
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default StoreCheckout;

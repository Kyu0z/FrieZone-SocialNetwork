import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableEditable = () => {
  const data = [
    {
      id: 1,
      Name: "Anna Mull",
      Age: "35",
      Company: "Portica",
      Country: "USA",
      City: "Oregon",
    },
    {
      id: 2,
      Name: "Jon Mull",
      Age: "55",
      Company: "dow jones",
      Country: "US",
      City: "London",
    },
  ];

  const [Add, setAdd] = useState(data);
  const [addFormData] = useState({
    id: "",
    Name: "",
    Age: "",
    Company: "",
    Country: "",
    City: "",
  });

  const handleAddFormChanges = (event) => {
    event.preventDefault();
    const id = event.target.closest("tr").getAttribute("dataid");
    const tdElem = event.target.closest("tr").querySelectorAll("td");
    const obj = {
      id: Number(id),
    };
    Array.from(tdElem, (elem) => {
      if (elem.getAttribute("name") !== null) {
        obj[elem.getAttribute("name")] = elem.innerText;
      }
      return null;
    });
    const newArrIndex = Add.findIndex((item) => {
      if (item.id === Number(id)) {
        return item;
      } else {
        return null;
      }
    });
    Add[newArrIndex] = obj;
    setAdd(Add);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    let newContact = {
      id: Add.length + 1,
      Name: addFormData.Name,
      Age: addFormData.Age,
      Company: addFormData.Company,
      Country: addFormData.Country,
      City: addFormData.City,
    };
    const newContacts = [...Add, newContact];
    setAdd(newContacts);
  };
  const handleDeleteClick = (addId) => {
    const newContacts = [...Add];
    const index = Add.findIndex((adds) => adds.id === addId);
    newContacts.splice(index, 1);
    setAdd(newContacts);
  };

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
                <h3 className="text-white">Editable Table Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <div>
                <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                  Editable table
                </h3>
              </div>
              <Card.Body>
                <div id="table" className="table-editable">
                  <span className="table-add float-end mb-3 me-2">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={handleAddFormSubmit}
                    >
                      <i className="ri-add-fill"></i>
                      <span className="ps-1">Add New</span>
                    </button>
                  </span>
                  <table className="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Company Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Sort</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Add.map((adds, props) => (
                        <tr key={props} dataid={adds.id}>
                          <td
                            name="Name"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onBlur={handleAddFormChanges}
                          >
                            {adds.Name}
                          </td>
                          <td
                            name="Age"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onBlur={handleAddFormChanges}
                          >
                            {adds.Age}
                          </td>
                          <td
                            name="Company"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onBlur={handleAddFormChanges}
                          >
                            {adds.Company}
                          </td>
                          <td
                            name="Country"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onBlur={handleAddFormChanges}
                          >
                            {adds.Country}
                          </td>
                          <td
                            name="City"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onBlur={handleAddFormChanges}
                          >
                            {adds.City}
                          </td>
                          <td>
                            <span className="table-up">
                              <Link to="#" className="indigo-text">
                                <i
                                  className="fas fa-long-arrow-alt-up"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </span>
                            <span className="table-down">
                              <Link to="#" className="indigo-text">
                                <i
                                  className="fas fa-long-arrow-alt-down"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </span>
                          </td>
                          <td>
                            <span className="table-remove">
                              <Button
                                onClick={() => handleDeleteClick(adds.id)}
                                className="btn btn-danger btn-rounded btn-sm my-0"
                              >
                                Remove
                              </Button>
                            </span>
                          </td>
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

export default TableEditable;

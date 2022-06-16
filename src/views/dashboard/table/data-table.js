import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

const Data_table = [
  {
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    age: "61",
    startdate: "2011/04/25",
    salary: "$320,800",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: "63",
    startdate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: "66",
    startdate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "22",
    startdate: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "33",
    startdate: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: "61",
    startdate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Fanscisco",
    age: "59",
    startdate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    age: "55",
    startdate: "2010/10/14",
    salary: "$327,900",
  },
  {
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    age: "39",
    startdate: "2009/09/15",
    salary: "$205,500",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: "23",
    startdate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    age: "30",
    startdate: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    age: "22",
    startdate: "2013/03/03",
    salary: "$342,000",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    age: "36",
    startdate: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    age: "43",
    startdate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Tatyana Fitzpatrick",
    position: "Regional Director",
    office: "London",
    age: "19",
    startdate: "2010/03/17",
    salary: "$385,750",
  },
  {
    name: "Michael Silva",
    position: "Marketing Designer",
    office: "London",
    age: "66",
    startdate: "2012/11/27",
    salary: "$198,500",
  },
  {
    name: "Paul Byrd",
    position: "Chief Financial Officer (CFO)",
    office: "New York",
    age: "64",
    startdate: "2010/06/09",
    salary: "$725,000",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    age: "59",
    startdate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: "41",
    startdate: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    age: "35",
    startdate: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Jenette Caldwell",
    position: "Development Lead",
    office: "New York",
    age: "30",
    startdate: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: "Yuri Berry",
    position: "Chief Marketing Officer (CMO)",
    office: "New York",
    age: "40",
    startdate: "2009/06/25",
    salary: "$675,000",
  },
  {
    name: "Caesar Vance",
    position: "Pre-sales Support",
    office: "New York",
    age: "40",
    startdate: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sydney",
    age: "23",
    startdate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: "47",
    startdate: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    age: "42",
    startdate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: "Jennifer Chang",
    position: "Regional Director",
    office: "Singapore",
    age: "42",
    startdate: "2010/11/14",
    salary: "$357,650",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: "28",
    startdate: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Fiona Green",
    position: "Cheif Operating Officer (COO)",
    office: "San Francisco",
    age: "48",
    startdate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Shou Itou",
    position: "Regional Marketing",
    office: "Tokyo",
    age: "20",
    startdate: "2011/08/14",
    salary: "$163,000",
  },
  {
    name: "Michelle House",
    position: "Integration Specialist",
    office: "Sydney",
    age: "37",
    startdate: "2011/06/02",
    salary: "$95,400",
  },
  {
    name: "Suki Burks",
    position: "Developer",
    office: "London",
    age: "53",
    startdate: "2009/10/22",
    salary: "$114,500",
  },
  {
    name: "Prescott Bartlett",
    position: "Technical Author",
    office: "London",
    age: "27",
    startdate: "2011/05/07",
    salary: "$145,000",
  },
  {
    name: "Gavin Cortez",
    position: "Team Leader",
    office: "San Francisco",
    age: "22",
    startdate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: "Martena Mccray",
    position: "Post-Sales Support",
    office: "Edinburgh",
    age: "46",
    startdate: "2011/03/09",
    salary: "$324,050",
  },
  {
    name: "Unity Butler",
    position: "Marketing Designer",
    office: "San Francisco",
    age: "47",
    startdate: "2009/12/09",
    salary: "$85,675",
  },
  {
    name: "Howard Hatfield",
    position: "Office Manager",
    office: "San Francisco",
    age: "51",
    startdate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: "Hope Fuentes",
    position: "Secretary",
    office: "San Francisco",
    age: "41",
    startdate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: "Vivian Harrell",
    position: "Financial Controller",
    office: "San Francisco",
    age: "62",
    startdate: "2009/02/14",
    salary: "$452,500",
  },
  {
    name: "Timothy Mooney",
    position: "Office Manager",
    office: "London",
    age: "37",
    startdate: "2008/12/11",
    salary: "$136,200",
  },
  {
    name: "Jackson Bradshaw",
    position: "Director",
    office: "New York",
    age: "65",
    startdate: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: "Olivia Liang",
    position: "Support Engineer",
    office: "Singapore",
    age: "64",
    startdate: "2011/02/03",
    salary: "$234,500",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    age: "38",
    startdate: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Sakura Yamamoto",
    position: "Support Engineer",
    office: "Tokyo",
    age: "37",
    startdate: "2009/08/19",
    salary: "$139,575",
  },
  {
    name: "Thor Walton",
    position: "Developer",
    office: "New York",
    age: "61",
    startdate: "2013/08/11",
    salary: "$87,500",
  },
  {
    name: "Finn Camacho",
    position: "Support Engineer",
    office: "San Francisco",
    age: "47",
    startdate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: "Serge Baldwin",
    position: "Data Coordinator",
    office: "Singapore",
    age: "64",
    startdate: "2012/04/09",
    salary: "$138,575",
  },
  {
    name: "Zenaida Frank",
    position: "Software Engineer",
    office: "New York",
    age: "63",
    startdate: "2010/01/04",
    salary: "$125,250",
  },
  {
    name: "Zorito Serrano",
    position: "Software Engineer",
    office: "San Francisco",
    age: "56",
    startdate: "2012/06/01",
    salary: "$115,000",
  },
  {
    name: "Jennifer Acosta",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    age: "43",
    startdate: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    age: "46",
    startdate: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    age: "47",
    startdate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Lael Greer",
    position: "Systems Administrator",
    office: "London",
    age: "21",
    startdate: "2009/02/27",
    salary: "$103,500",
  },
  {
    name: "Jonas Alexander",
    position: "Developer",
    office: "San Francisco",
    age: "30",
    startdate: "2010/07/14",
    salary: "$86,500",
  },
  {
    name: "Shad Decker",
    position: "Regional Director",
    office: "Edinburgh",
    age: "51",
    startdate: "2008/11/13",
    salary: "$183,000",
  },
  {
    name: "Michael Bruce",
    position: "Javascript Developer",
    office: "Singapore",
    age: "29",
    startdate: "2011/06/27",
    salary: "$183,000",
  },
  {
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    age: "27",
    startdate: "2011/01/25",
    salary: "$112,000",
  },
];

const DataTable = () => {
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
                <h3 className="text-white">Data Table Page</h3>
                <p className="text-white">lorem ipsum</p>
              </div>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Bootstrap Datatables</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <p>
                  Images in Bootstrap are made responsive with{" "}
                  <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                  <code>height: auto;</code> are applied to the image so that it
                  scales with the parent element.
                </p>
                <div className="table-responsive">
                  <table
                    id="datatable"
                    className="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Data_table.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.name}</td>
                          <td>{item.position}</td>
                          <td>{item.office}</td>
                          <td>{item.age}</td>
                          <td>{item.startdate}</td>
                          <td>{item.salary}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                      </tr>
                    </tfoot>
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

export default DataTable;

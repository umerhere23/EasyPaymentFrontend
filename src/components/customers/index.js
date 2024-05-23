import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Row, Table } from "reactstrap";
import CustomerTable from "./CustomerTable";
const Customers = () => {
  const [details, setDetails] = useState("");
  return (
    <Row>
      <Col md={details === "" ? 12 : 8}>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Customers
          </CardTitle>
          <CardBody>
            <CustomerTable setDetails={setDetails} />
          </CardBody>
        </Card>
      </Col>
      {details && (
        <Col md={4}>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Order Details
            </CardTitle>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Order ID: {details.orderId}
            </CardTitle>
            <CardBody>
              <Table className="no-wrap align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {details.items.map((item, index) => (
                    <tr key={index} className="border-top">
                      <td>{item.item}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <p className="text-right text-end inline-block">
                Total:{" "}
                <strong>
                  {details.items.reduce((total, item) => total + item.price, 0)}
                </strong>
              </p>
              <div className="text-center">
                <Button
                  className="btn"
                  color="primary"
                  size="sm"
                  onClick={() => setDetails("")}
                >
                  Close
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default Customers;

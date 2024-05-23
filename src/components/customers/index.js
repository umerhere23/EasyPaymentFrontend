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
              Customer Details
            </CardTitle>
            <CardBody>
              <Table className="no-wrap align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>OrderID</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <td>Meals</td>
                  </tr>
                </thead>
                <tbody>
                  {details.map((item, index) => (
                    <tr key={index} className="border-top">
                      <td>{item.order_id}</td>
                      <td>{item.order_date}</td>
                      <td>{item.total_amount}</td>
                      <td>
                        {item.order_details.map(
                          (meal, index) => meal.item + ","
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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

import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import OrdersTable from "../../../components/dashboard/OrderTable";

const Orders = () => {
  return (
    <div>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Orders
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            <OrdersTable />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Orders;

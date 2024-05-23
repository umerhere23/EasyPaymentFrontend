import { Button, Table } from "reactstrap";
import { orderData } from "../../utils/orderData";
const OrdersTable = ({ setDetails }) => {
  const handleDetails = (order) => {
    setDetails({ orderId: order.id, items: order.details });
  };
  return (
    <Table className="no-wrap align-middle" responsive borderless>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Table ID</th>
          <th>Customer Contact</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {orderData.map((order, index) => (
          <tr key={index} className="border-top">
            <td>{order.id}</td>
            <td>{order.tableId}</td>
            <td>{order.customer}</td>
            <td>
              {order.status === "Preparing" ? (
                <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
              ) : (
                <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
              )}
            </td>
            <div className="button-group" style={{ background: "transparent" }}>
              <Button
                className="btn"
                color="primary"
                size="sm"
                onClick={() => handleDetails(order)}
              >
                Details
              </Button>
            </div>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrdersTable;

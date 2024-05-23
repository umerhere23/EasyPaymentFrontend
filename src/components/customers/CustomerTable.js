import { Button, Table } from "reactstrap";
import { customerData } from "../../utils/customerData";
const OrdersTable = ({ setDetails }) => {
  const handleDetails = (order) => {
    setDetails({ orderId: order.id, items: order.details });
  };
  return (
    <Table className="no-wrap align-middle" responsive borderless>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Phone#</th>
          <th>Total Spend</th>
          <th>Last Visit</th>
          <th>Order Details</th>
        </tr>
      </thead>
      <tbody>
        {customerData.map((customer, index) => (
          <tr key={index} className="border-top">
            <td>{customer.id}</td>
            <td>{customer.phone}</td>
            <td>{customer.totalSpend}</td>
            <td>{customer.lastVisit}</td>
            <div className="button-group" style={{ background: "transparent" }}>
              <Button
                className="btn"
                color="primary"
                size="sm"
                // onClick={() => handleDetails(order)}
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

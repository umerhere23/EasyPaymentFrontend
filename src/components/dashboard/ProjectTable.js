import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user4 from "../../assets/images/users/user4.jpg";
const tableData = [
  {
    avatar: user1,
    waiter: "Hanna Gover",
    seats: 4,
    status: "Active",
    currentStatus: "Occupied",
    tableId: "#table1",
  },
  {
    avatar: user1,
    waiter: "Hanna Gover",
    seats: 6,
    status: "Inactive",
    currentStatus: "Free",
    tableId: "#table2",
  },
  {
    avatar: user1,
    waiter: "Hanna Gover",
    seats: 3,
    status: "Active",
    currentStatus: "Occupied",
    tableId: "#table3",
  },
  {
    avatar: user4,
    waiter: "Peter",
    seats: 3,
    status: "Active",
    currentStatus: "Occupied",
    tableId: "#table4",
  },
  {
    avatar: user4,
    waiter: "Peter",
    seats: 4,
    status: "Active",
    currentStatus: "Occupied",
    tableId: "#table5",
  },
  {
    avatar: user4,
    waiter: "Peter",
    seats: 4,
    status: "Inactive",
    currentStatus: "Occupied",
    tableId: "#table5",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Table Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the tables
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Waiter</th>
                <th>Seats</th>
                <th>Status</th>
                <th>Current Status</th>
                <th>TableId</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.waiter}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.seats}</td>
                  <td>
                    {tdata.status === "Inactive" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.currentStatus}</td>
                  <td>{tdata.tableId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;

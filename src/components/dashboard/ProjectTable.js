import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Col,
  Button,
  Row,
} from "reactstrap";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { tableData } from "../../utils/tableData";
const ProjectTables = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col lg={6}>
              <CardTitle tag="h5">Table Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the tables
              </CardSubtitle>
            </Col>
            <Col lg={6} className="text-end">
              <Button color="primary" onClick={() => navigate("/add-table")}>
                Add Table
              </Button>
            </Col>
          </Row>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Waiter</th>
                <th>Seats</th>
                <th>Status</th>
                <th>Current Status</th>
                <th>TableId</th>
                <th>QR</th>
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
                  {/* qr code */}
                  <td>
                    <div
                      style={{
                        height: "auto",
                        margin: "0 auto",
                        maxWidth: 64,
                        width: "100%",
                      }}
                    >
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={"https://chat.openai.com/"}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                  </td>
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

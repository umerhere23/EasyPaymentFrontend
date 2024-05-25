import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Col,
  Button,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import QRCode from "react-qr-code";
import { tableData } from "../../utils/tableData";
const AddTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="text-center">Add a new table</CardTitle>
          <section className="w-100" style={{ padding: "0 1rem" }}>
            <Col lg={6} className="mx-auto">
              <Form>
                <FormGroup>
                  <Label for="exampleSelect">Select Waiter</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Alice</option>
                    <option>Peter</option>
                    <option>Susan</option>
                    <option>Martin</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">No. of seats</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter no. of seats"
                    type="number"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Table ID</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter table id"
                    type="string"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Table status</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </Input>
                </FormGroup>
                <div className="text-center">
                  <Button
                    color="primary"
                    onClick={() => {
                      alert("Table will be added");
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </section>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddTables;

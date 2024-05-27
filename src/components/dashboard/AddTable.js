import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useState } from "react";
const AddTables = () => {
  const [formData, setFormData] = useState({ name: "", status: "Active" });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="text-center">Add a new table</CardTitle>
          <section className="w-100" style={{ padding: "0 1rem" }}>
            <Col lg={6} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                {/* <FormGroup>
                  <Label for="exampleSelect">Select Waiter</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Alice</option>
                    <option>Peter</option>
                    <option>Susan</option>
                    <option>Martin</option>
                  </Input>
                </FormGroup> */}
                <FormGroup>
                  <Label for="name">Table Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter table name"
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                {/* <FormGroup>
                  <Label for="examplePassword">Table ID</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter table id"
                    type="string"
                  />
                </FormGroup> */}
                <FormGroup>
                  <Label for="status">Table status</Label>
                  <Input
                    id="status"
                    name="status"
                    type="select"
                    onChange={(e) => handleChange(e)}
                  >
                    <option value={"active"}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                  </Input>
                </FormGroup>
                <div className="text-center">
                  <Button type="submit" color="primary">
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

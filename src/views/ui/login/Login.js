import React from "react";
import { Button, Input, Label, Form, FormGroup, Card } from "reactstrap";

const Login = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center w-100"
      style={{ height: "100vh", padding: "0 1rem" }}
    >
      <Card style={{ padding: "1rem" }}>
        <h1 className="text-center">Welcome to the Easy Payment</h1>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter email here"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter password here"
              type="password"
            />
          </FormGroup>
          <div className="text-center">
            <Button
              color="primary"
              onClick={() => {
                localStorage.setItem("token", JSON.stringify(334455224455));
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </section>
  );
};

export default Login;

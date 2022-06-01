import React from "react";
import { Form, Button } from "react-bootstrap";

function ManageAccount() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
        <Button variant="primary" type="submit">
          Delete
        </Button>
      </Form>
    </>
  );
}

export default ManageAccount;

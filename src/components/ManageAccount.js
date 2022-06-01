import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ManageAccount() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    setForm({
      name: "",
      password: "",
    });
  }

  function handleClick() {
    fetch(``, {
      method: "DELETE",
    }).then((r) => r.json());
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={form.name}
            type="text"
            placeholder="Enter name"
          />
          {/* <Form.Text className="text-muted"></Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="password"
            value={form.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
        <Button onClick={handleClick} variant="primary">
          Delete Account
        </Button>
      </Form>
    </>
  );
}

export default ManageAccount;

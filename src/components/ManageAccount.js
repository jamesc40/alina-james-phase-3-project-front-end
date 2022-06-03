import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { editUser, deleteUser } from "./crud";

const emptyObj = { username: "", password: "" };

function ManageAccount({ id, dispatch }) {
  const [form, setForm] = useState({ ...emptyObj });

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    editUser(id, form);

    setForm({ ...emptyObj });

    history.push(`/user/${id}`);
  }

  function handleClick() {
    deleteUser(id);

    dispatch({ type: "delete" });
    history.push("/");
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Form className="manage-acc-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="username"
            value={form.username}
            type="text"
            placeholder="Enter username"
          />
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

        <Button className="all-btn" variant="primary" type="submit">
          Save
        </Button>
        <Button
          className="delete-button all-btn"
          onClick={handleClick}
          variant="primary"
        >
          Delete Account
        </Button>
      </Form>
    </>
  );
}

export default ManageAccount;

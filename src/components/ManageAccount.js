import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { editUser, deleteUser } from "./crud";

const emptyObj = { username: "", password: "", confirm_password: "" };

function ManageAccount({ id, dispatch }) {
  const [form, setForm] = useState({ ...emptyObj });

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      form.password !== form.confirm_password ||
      form.username === "" ||
      form.password === "" ||
      form.confirm_password === ""
    ) {
      alert("Please enter correct information");
    } else {
      editUser(id, form);

      history.push(`/user/${id}`);
    }
    setForm({ ...emptyObj });
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
    <div className="manage-account">
      <Form className="manage-acc-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Username</Form.Label>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="confirm_password"
            value={form.confirm_password}
            type="password"
            placeholder="Password"
            id={form.password !== form.confirm_password ? "no-match" : "match"}
          />
        </Form.Group>

        <Form.Group>
          <Button
            className="all-btn"
            variant="primary"
            type="submit"
            id="man-account"
          >
            Save
          </Button>
        </Form.Group>
        <Form.Group>
          <Button
            className="all-btn"
            onClick={handleClick}
            variant="primary"
            id="man-account"
          >
            Delete Account
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ManageAccount;

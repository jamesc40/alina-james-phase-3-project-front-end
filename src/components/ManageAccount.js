import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import { URL } from './App'

function ManageAccount({ id, dispatch }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  let history = useHistory()

  let userURL = `${URL}/user/${id}`

  function handleSubmit(e) {
    e.preventDefault();

    fetch(userURL, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(form)
    })

    setForm({
      username: "",
      password: "",
    });

    history.push('/')
  }

  function handleClick() {
    fetch(userURL, {
      method: "DELETE",
    })
    dispatch({ type: 'delete' })
    history.push(`/user/${id}`)
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

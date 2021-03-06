import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Login({ error, handleLogin }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const userLogged = {
      username: form.username,
      password: form.password,
    };

    if (form.password === "" || form.username === "") {
      alert("Please enter correct Username and Password");
    } else {
      handleLogin(userLogged);
    }
  }

  return (
    <div className="log-sign-page">
      {error.length > 0 ? <p className="mx-3"> {error} </p> : null}
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Label className="login-greet">Welcome back!</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-text">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </Form.Group>

        <Button className="login-btn" variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default Login;

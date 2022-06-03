import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Signup({ handleSignUp }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: form.name,
      image: form.image,
      username: form.username,
      password: form.password,
    };

    if (
      form.name === "" ||
      form.password === "" ||
      form.image === "" ||
      form.username === "" ||
      form.password !== form.confirm_password
    ) {
      alert("Please enter all the information");
    } else {
      handleSignUp(newUser);
    }
  }

  return (
    <div className="log-sign-page">
      <Form className="login-form  login-text" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Image URL"
            name="image"
            onChange={handleChange}
            value={form.image}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="confirm_password"
            onChange={handleChange}
            value={form.confirm_password}
            id={form.password !== form.confirm_password ? "no-match" : "match"}
          />
        </Form.Group>
        <Button className="login-btn" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;

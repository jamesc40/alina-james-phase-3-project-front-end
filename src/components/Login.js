import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Login({ loggedIn, handleLogin, handleSub }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // const history = useHistory();

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
      handleSub(e, userLogged);
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:9292/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       if (data) {
  //         history.push(`/user/${data}`);
  //       }
  //     });
  //   handleLogin()
  // }

  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default Login;

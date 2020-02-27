import React, { useState } from "react";
import { Form } from "reactstrap";
import axios from "axios";
import setAuthToken from "./setauthtoken";
import jwt from "jsonwebtoken";

export default function App() {
  const [form, setValues] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios
        .post("http://localhost:8080/login", {
          username: form.username,
          password: form.password
        })
        .then(res => {
          const token = res.data.accessToken;
          const role = res.data.role;
          const id_user = res.data.id_user;
          localStorage.setItem("jwtRole", role);
          localStorage.setItem("jwtToken", token);
          localStorage.setItem("jwtId", id_user);

          setAuthToken(token);
          console.log(jwt.decode(token));
          window.location.replace("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="card-container">
      <Form onSubmit={handleSubmit} className="px-3 pb-4">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={updateField}
          />
        </div>

        <input type="submit" />
      </Form>
    </div>
  );
}

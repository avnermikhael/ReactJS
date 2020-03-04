import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form, Label } from "reactstrap";
import axios from "axios";

export default function App() {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async data => {
    console.log(data);
    axios
      .post(`http://localhost:8080/register`, {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password
      })
      .then(alert("Register successful!"));
    window.location.replace("/signin");
  };

  return (
    <div class="card-container">
      <Form onSubmit={e => e.preventDefault()} className="px-3 pb-4">
        <div className="form-group">
          <Label for="exampleEmail">Name</Label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({
              required: "Name required!",
              minLength: {
                value: 4,
                message: "Minimal 4 karakter!"
              }
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <Label for="exampleEmail">Username</Label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register({
              required: "Username required!",
              minLength: {
                value: 4,
                message: "Minimal 4 karakter!"
              }
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label for="labelEmail">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Email required!",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="form=group">
          <label>Repeat password</label>
          <input
            name="password_repeat"
            type="password"
            ref={register({
              validate: value =>
                value === password.current || "The passwords do not match"
            })}
          />
          {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        </div>
        <input type="submit" onClick={handleSubmit(onSubmit)} />
      </Form>
    </div>
  );
}

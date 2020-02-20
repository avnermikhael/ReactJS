import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form, Label } from "reactstrap";
import "../../src/formcss.css";

//classname="px-2"

export default function App() {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <Form onSubmit={e => e.preventDefault()}>
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
            //"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
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
              // pattern: {
              //   value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$! %*?&])[A-Za-z\d@$!%*?&]{8,}$",
              //   message:"At least 8 character, one uppercase, one lowercase, a number and special character"
              // }
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

        {/* <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true, min: 8, maxLength: 12 })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            ref={register({
              validate: value =>
                value === password.current || "The passwords do not match"
            })}
          />
          {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
        </FormGroup> */}
        {/* <Input type="submit" /> */}
      </Form>
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../Context/userContext";

const LoginForm = () => {
   const {  handleSubmit} = useForm();
   const { logIn } = useUserContext();
   const onSubmit = (data) => {
     logIn(data.username);
     console.log("Form data", data);
  };
  // console.log(errors);

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
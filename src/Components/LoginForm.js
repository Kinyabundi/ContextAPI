import React , {useState} from "react";
//import { useForm } from "react-hook-form";

import { useUserContext } from "../Context/userContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
   const { logIn } = useUserContext();
   const onSubmit = () => {
     logIn(username);
    
  };
 

  return (
    <div className="login">
      <form >
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={e =>setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e =>setPassword(e.target.value)}
            />
          </div>
          <button className="fluid ui button blue" onClick={onSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
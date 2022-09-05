import "./login.css";
import React from "react";

const Login = ({ getUserData }) => {
  const [inputField, setInputField] = React.useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInputField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData(inputField);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="password"
          value={inputField}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

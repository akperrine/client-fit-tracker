import "./login.css";
import React from "react";
import logo from "../../assets/logo.png";

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
    <div className="app-container">
      <div className="login-container">
        <img src={logo} alt="logo" className="login-img" />
        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">password</label>
          <br />
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            value={inputField}
            onChange={handleChange}
          />
          <br />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

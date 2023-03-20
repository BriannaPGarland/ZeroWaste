import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Please enter email and password.");
      return;
    }
    navigate("/home");
  };

  return (
    <div className="loginpage">
      <div className="Logincover">
        <h1 className="title">Login</h1>
        <h3 className ="text">SIGN IN TO CONTINUE</h3>
        <form className="loginbox" onSubmit={handleLogin}>
        {errorMessage.length > 0 &&
        <h2>
           {errorMessage}
        </h2>
      }
          <input
            className="lgInput"
            type="text"
            placeholder="email"
            // value={"siddhantkumar052@gmail.com"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="lgInput"
            type="password"
            placeholder="password"
            // value="test1passwed88#"
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <p className="text">Or Login using</p>
        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>
        <Link to="/Signup">
          <div className="signup">Create a new account</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;

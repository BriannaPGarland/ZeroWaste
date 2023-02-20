import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  return (
    <div className= "loginpage"> 
      <div className="cover">
        <h1 className="title">Login</h1>
        <h3>SIGN IN TO CONTINUE</h3>
        <input className="lgInput" type="text" placeholder="username" />
        <input className="lgInput" type="password" placeholder="password" />
        
        <Link className="login-btn" to="/Home">
          Login
        </Link>

        <p className="text">Or Login using</p>

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>

        <Link to="/Signup">
          <div className="signup">
            Create a new account
          </div>
          </Link>
      </div>
    </div>
  )
}

export default Login

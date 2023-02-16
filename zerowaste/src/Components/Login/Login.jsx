import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  return (
    <div className="cover">
      <h1>Login</h1>
      <h3>SIGN IN TO CONTINUE</h3>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      
      <Link className="login-btn" to="/Home">
        <div >Login</div>
      </Link>

      <p className="text">Or Login using</p>

      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>

    </div>
  )
}

export default Login

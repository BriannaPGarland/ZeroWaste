import React from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className= "loginpage"> 
      <div className="cover">
        <h1 className="title">Create Account</h1>
        <h3>SIGN IN TO CONTINUE</h3>
        <input className="lgInput" type="text" placeholder="First & Last Name" />
        <input className="lgInput" type="text" placeholder="username" />
        <input className="lgInput" type="password" placeholder="password" />

        <div class="dropdown">
          <button class="dropdown">Select Account Type</button>
          <div class="dropdown-content">
          <a >Restaurant</a>
          <a >Community Of Need</a>
          </div>
        </div>

        <input className="lgInput" type="text" placeholder="Restaurant Name" />

        <Link className="login-btn" to="/Home">
          Create account
        </Link>

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

export default Signup

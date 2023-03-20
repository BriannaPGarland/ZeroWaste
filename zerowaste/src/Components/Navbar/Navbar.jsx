import React from 'react'
import { Link  } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import './Navbar.css';
import profIcon from "./Icon.png";

const Navbar = () => {
  const SignOutButton = () => {
  
      window.localStorage.removeItem('user');
      window.location.href = '/';
     
  }
  

  return (
    <div>
      <nav class="navbar background">
        <div class="logo">
          <Link to="/"><img src= "zWlogo.png" alt="" /></Link>
        </div >
       
				<ul class="nav-list">
					<li><Link to="/Home">Home</Link></li>
					<li><Link to="/Donations">Donations</Link></li>
					<li><Link to="/Recipies">Recipies</Link></li>
					<li><Link to="/Analytics">Analytics</Link></li>
				</ul>
        <div class="dropdown">
          <button class="dropbtnNav">
            <image className="profIcon" src={profIcon}></image>
          </button>
            <div class="dropdown-content">
              <a> <Link to="/Account">Account</Link></a>
              <a> <Link to="/Settings">Settings</Link></a>
              <a onClick={SignOutButton}> Sign Out</a>
            </div>
        </div>
       
        
			</nav>
    </div>
  )
}

export default Navbar


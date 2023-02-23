import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
          <li><img src='./profile.png' alt=''></img></li>
				</ul>
			</nav>
    </div>
  )
}

export default Navbar
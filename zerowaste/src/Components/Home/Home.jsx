import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div>
			<nav class="navbar background">
        		<div class="logo">
            		<img src= "zWlogo.png" />
        		</div >
				<ul class="nav-list">
					<li><a>Home</a></li>
					<li><a>Inventory</a></li>
					<li><a>Recipies</a></li>
					<li><a>Analytics</a></li>
				</ul>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Restaurant Name 
						</h1>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-small" id="program">
							This is where the cards go 
						</h1>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-small" id="program">
							Search bar for inventory 
						</h1>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-small" id="program">
							Inventory cards 
						</h1>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Contact information and other footer stuff
				</p>
			</footer>
		
    </div>
  )
}

export default Home

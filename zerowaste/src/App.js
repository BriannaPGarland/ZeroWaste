import React from 'react';
import './App.css';
import { Navbar, Analytics, Donations, Home, Login, Recipies, Signup, AddInv} from './Components';
import { Routes, Route } from 'react-router-dom';


const App = () => {
	return (
		<div className='app'>
			<div className="navbar">
            	<Navbar />
        	</div>
			<div className='main'>
				<div className="routes">
					<Routes>
						<Route exact path="/Home" element={<Home />}>
						</Route>
						<Route exact path="/AddInv" element={<AddInv />}>
						</Route>
						<Route exact path="/Analytics" element={<Analytics />}>
						</Route>
						<Route exact path="/Donations" element={<Donations />}>
						</Route>
						<Route exact path="/" element={<Login />}>
						</Route>
						<Route exact path="/Recipies" element={<Recipies />}>
						</Route>
						<Route exact path="/Signup" element={<Signup />}>
						</Route>
						
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App

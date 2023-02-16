import React from 'react';
import './App.css';
import { Navbar, Analytics, Donations, Home, Login, Recipies  } from './Components';
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
						<Route exact path="/" element={<Home />}>
						</Route>
						<Route exact path="/cryptocurrencies" element={<Analytics />}>
						</Route>
						<Route exact path="/exchanges" element={<Donations />}>
						</Route>
						<Route exact path="/crypto/:coinId" element={<Login />}>
						</Route>
						<Route exact path="/news" element={<Recipies />}>
						</Route>
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App

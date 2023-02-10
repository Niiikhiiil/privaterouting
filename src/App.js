import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About.jsx';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './PrivateRoute';
const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>

				<Route
					path="/"
					element={<PrivateRoute />}
				>
					<Route
						path="/home"
						element={<Home />}
					/>
				</Route>
				<Route
					path="/"
					element={<PrivateRoute />}
				>
					<Route
						path="/dashboard"
						element={<Dashboard />}
					/>
				</Route>
				<Route
					path="/"
					element={<PrivateRoute />}
				>
					<Route
						path="/about"
						element={<About />}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;

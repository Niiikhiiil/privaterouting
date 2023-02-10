import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<Link to="/home">Home</Link>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/about">About</Link>
		</>
	);
};

export default Navbar;

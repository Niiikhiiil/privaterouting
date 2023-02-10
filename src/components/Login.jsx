import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
    const navigate=useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem('name', name);
		localStorage.setItem('email', email);
        navigate("/home")
	};
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;

import React, { user.State } from 'react';
import axios from 'axios';

const Register = () => {
	const [username, setUsername] = userState('');
	const[password, setPassword] = userState('');

	const handleRegister = async () => {
		try {
			await axios.post('/register', ( username, password });
				alert('User registered');
	} catch (error) {
		console.error('Error registering user', error);
	}
};

return (
	<div>
	    <h2>Register</h2>
	    <input
		type="text"
		placeholder="Username"
		value={username}
		onChange={(e) => setUsername(e.target.value)}
	   />
	   <input
		type="password"
		placeholder="Password"
		value={password}
		onChange={(e) => setPassword(e.target.value)}
	   />
	    <button onClick={handleRegister}>Register</button>
	</div>
);
};

export default Register;
		

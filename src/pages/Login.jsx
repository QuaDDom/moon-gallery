import { useState } from "react";
import Input from "../components/Input";
import particlesConfig from '../config/particles.config'
import ParticlesBackground from "../components/ParticlesBackground";
import "./Login.scss";
export default function Login() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const logIn = async (payload) => {
		const headers = new Headers();
		headers.append("Content-Type", "application/json");
		const body = JSON.stringify(payload);
		const requestOptions = {
			method: "POST",
			headers,
			body,
		};

		const response = await fetch("/api/login", requestOptions);
		if (response.ok) {
			const json = await response.json();
			console.log(json);
		}
	}
	const handleSubmit = (e)=> {
		e.preventDefault();
		logIn({
			username: user,
			email,
			password,
		}); 
	}

    const handleChange = (e) => {
		if (e.target.name === "user") {
			setUser(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		} else {
			setEmail(e.target.value);
		}
		console.log(user, password, email);
	};
	return (
		<>
			<ParticlesBackground params={particlesConfig}/>
			<div className="containerForm">
				<div className="formBox">
					<h2 className="title">Register</h2>
					<form onSubmit={handleSubmit}>
						<Input 
						type="text" 
						name="user" 
						label="Username" 
						handle={handleChange} 
						defaultValue={user}/>
						<Input 
						type="email" 
						name="email" 
						label="Email" 
						handle={handleChange} 
						defaultValue={email}/>
						<Input 
						type="password" 
						name="password" 
						label="Password" 
						handle={handleChange} 
						defaultValue={password}/>
						<button className="btnSubmit">Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [input, setInput] = new useState({
		email: "",
		password: "",
	});
	const inputHandler = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};
	const readvalues = () => {
		console.log(input);
		axios.post("http://localhost:3001/api/blog/login", input).then((response) => {
			console.log(response.data);
			if (response.data.status == "success") {
				alert("Login Successfull!");
				setInput({
					email: "",
					password: "",
				});
			} else {
				alert("Login Unsuccessfull!");
			}
		});
	};

	return (
		<div>
			<div className="container p-5">
				<div className="row g-3 d-flex justify-content-center">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
						<h4>Log In</h4>
					</div>

					<div className="card col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
						<form className="row g-4 card-body">
							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<label htmlFor="inputEmail4" className="form-label">
									Email
								</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail4"
									placeholder="example@email.com"
									name="email"
									value={input.email}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<label htmlFor="inputPassword4" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword4"
									placeholder="********"
									name="password"
									value={input.password}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<button
									type="submit"
									onClick={readvalues}
									className="btn btn-outline-dark col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									Sign in
								</button>
							</div>

							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<p className="text-center">
									Don't Have An Account? <Link to="/signup">Sign Up</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

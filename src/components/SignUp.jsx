import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [input, setInput] = new useState({
		name: "",
		age: "",
		phone: "",
		address: "",
		pincode: "",
		email: "",
		password: "",
	});
	const inputHandler = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};
	const readvalues = () => {
		console.log(input);
		axios.post("http://localhost:3001/api/blog/register", input).then((response) => {
			console.log(response.data);
			if (response.data.status == "success") {
				alert("User Registration Successfull!");
				setInput({
					name: "",
					age: "",
					phone: "",
					address: "",
					pincode: "",
					email: "",
					password: "",
				});
			} else {
				alert("User Registration Unsuccessfull!");
			}
		});
	};

	return (
		<div>
			<div className="container p-5">
				<div className="row g-3 d-flex justify-content-center">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
						<h4>Sign Up</h4>
					</div>

					<div className="card col col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6">
						<form className="row g-4 card-body">
							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<label htmlFor="validationDefault01" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									name="name"
									value={input.name}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="validationDefault01" className="form-label">
									Age
								</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault01"
									name="age"
									value={input.age}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="validationDefault01" className="form-label">
									Phone
								</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault01"
									name="phone"
									value={input.phone}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="inputAddress" className="form-label">
									Address
								</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									name="address"
									value={input.address}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="validationDefault05" className="form-label">
									Pincode
								</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault05"
									name="pincode"
									value={input.pincode}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="validationDefaultUsername" className="form-label">
									Email
								</label>
								<div className="input-group">
									<span className="input-group-text" id="inputGroupPrepend2">
										@
									</span>
									<input
										type="email"
										className="form-control"
										id="validationDefaultUsername"
										aria-describedby="inputGroupPrepend2"
										name="email"
										value={input.email}
										onChange={inputHandler}
										required
									/>
								</div>
							</div>

							<div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label htmlFor="inputPassword4" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword4"
									name="password"
									value={input.password}
									onChange={inputHandler}
									required
								/>
							</div>

							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
								<button
									className="btn btn-outline-dark col-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 col-xxl-5"
									type="submit"
									onClick={readvalues}>
									Sign Up
								</button>
							</div>
							<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<p className="text-center">
									Already Have An Account? <Link to="/">Log In</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

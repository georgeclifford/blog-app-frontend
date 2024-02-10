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
				alert("Failed To Add User!");
			}
		});
	};

	return (
		<div>
			<div className="container p-5">
				<div class="row g-3 d-flex justify-content-center">
					<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
						<h4>Sign Up</h4>
					</div>

					<div class="card col col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6">
						<form class="row g-4 card-body">
							<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<label for="validationDefault01" class="form-label">
									Name
								</label>
								<input
									type="text"
									class="form-control"
									id="validationDefault01"
									name="name"
									value={input.name}
									onChange={inputHandler}
									required
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label for="validationDefault01" class="form-label">
									Age
								</label>
								<input
									type="number"
									class="form-control"
									id="validationDefault01"
									name="age"
									value={input.age}
									onChange={inputHandler}
									required
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label for="validationDefault01" class="form-label">
									Phone
								</label>
								<input
									type="number"
									class="form-control"
									id="validationDefault01"
									name="phone"
									value={input.phone}
									onChange={inputHandler}
									required
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label for="inputAddress" class="form-label">
									Address
								</label>
								<input
									type="text"
									class="form-control"
									id="inputAddress"
									name="address"
									value={input.address}
									onChange={inputHandler}
									required
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label for="validationDefault05" class="form-label">
									Pincode
								</label>
								<input
									type="text"
									class="form-control"
									id="validationDefault05"
									name="pincode"
									value={input.pincode}
									onChange={inputHandler}
									required
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label for="validationDefaultUsername" class="form-label">
									Email
								</label>
								<div class="input-group">
									<span class="input-group-text" id="inputGroupPrepend2">
										@
									</span>
									<input
										type="email"
										class="form-control"
										id="validationDefaultUsername"
										aria-describedby="inputGroupPrepend2"
										name="email"
										value={input.email}
										onChange={inputHandler}
										required
									/>
								</div>
							</div>

							<div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
								<label for="inputPassword4" class="form-label">
									Password
								</label>
								<input
									type="password"
									class="form-control"
									id="inputPassword4"
									name="password"
									value={input.password}
									onChange={inputHandler}
									required
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
								<button
									class="btn btn-outline-dark col-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 col-xxl-5"
									type="submit"
									onClick={readvalues}>
									Sign Up
								</button>
							</div>
							<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<div className="container p-5">
				<div class="row g-3 d-flex justify-content-center">
					<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
						<h4>Log In</h4>
					</div>

					<div className="card col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
						<form class="row g-4 card-body">
							<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<label for="inputEmail4" class="form-label">
									Email
								</label>
								<input
									type="email"
									class="form-control"
									id="inputEmail4"
									placeholder="example@email.com"
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<label for="inputPassword4" class="form-label">
									Password
								</label>
								<input
									type="password"
									class="form-control"
									id="inputPassword4"
									placeholder="********"
								/>
							</div>

							<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
								<button
									type="submit"
									class="btn btn-outline-dark col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									Sign in
								</button>
							</div>

							<div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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

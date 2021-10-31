import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import contact from '../../images/contact.jpg';
import './Login.css';
const Login = () => {
	const { signInUsingGoogle } = useAuth();

	const history = useHistory();
	const location = useLocation();
	const redirectUrl = location?.state?.from || "/";

	const googleSignIn = () => {
		signInUsingGoogle()
		.then((res) => {
		  history.push(redirectUrl);
		})
		.catch((error) => {});
	};

	return (
		<div className="login-container">
			<h1>Please Log in</h1>

			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12">
						<img src={contact} alt="" className="img-fluid h-100" />
					</div>
					<div className="col-lg-6 col-12">
						<form className="form-contain">
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input type="password" className="form-control" id="exampleInputPassword1" />
							</div>

							<button type="button" className="btn btn-warning" onClick={googleSignIn}>
								Google Sign In
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

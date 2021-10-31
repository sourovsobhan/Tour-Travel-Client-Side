import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { users, isloading } = useAuth();
	if (isloading) {
		return (
			<div className="spinner-border text-danger" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}
	return (
		<div>
			<Route
				{...rest}
				render={({ location }) =>
					users.email ? (
						children
					) : (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: location }
							}}
						/>
					)}
			/>
		</div>
	);
};

export default PrivateRoute;

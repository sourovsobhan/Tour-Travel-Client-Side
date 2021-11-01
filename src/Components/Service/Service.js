import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
	const { name, email, image, _id } = props.user;

	return (
		<div>
			<div className="col">
				<div className="card">
					<img src={image} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5>Title:{name}</h5>
						<p className="card-text">Prize:{email}</p>

						<Link to={`/booknow/${_id}`} className="btn btn-primary">
							Book Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;

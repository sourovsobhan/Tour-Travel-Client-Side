import React from 'react';
import './Booknow.css';
import book from '../../images/g-7.jpg';
const Booknow = () => {
	return (
		<div>
			<h1> Book Now</h1>
			<div className="container m-5 ">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<img src={book} alt="" className="img-fluid" />
					</div>

					<div className="col-lg-6 col-md-12 col-sm-12">
						<form className="form-con">
							<input type="text" /> <br />
							<input type="text" /> <br />
							<input type="text" /> <br />
							<input type="text" /> <br />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booknow;

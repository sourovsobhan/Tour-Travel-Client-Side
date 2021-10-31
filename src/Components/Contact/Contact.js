import React from 'react';
import './Contact.css';
const Contact = () => {
	return (
		<div>
			<h1> contact us</h1>
			<form>
				<div className="input">
					<div className="input-conatiner col-sm-12 col-lg-6 col-md-12 m-auto">
						<input type="text" placeholder="first name" />

						<input type="text" placeholder="last name" />
					</div>
					<div className="input-conatiner">
						<input type="text" placeholder="email" />

						<input type="text" placeholder="password" />
					</div>
					<textarea name="" id="" cols="58" rows="8" /> <br />
					<button className="btn btn-warning mb-3">Send Message</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Booknow.css';
import book from '../../images/g-7.jpg';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
const Booknow = () => {
	const { id } = useParams();
	const [ singleuser, setSingleuser ] = useState({});
	useEffect(() => {
		fetch(`https://sleepy-taiga-52688.herokuapp.com/users/${id}`).then((res) => res.json()).then((data) => setSingleuser(data[0]));
	}, []);
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const handleAddUser = (e) => {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const phone = phoneRef.current.value;
		const newUser = { name, email, phone };

		fetch('https://sleepy-taiga-52688.herokuapp.com/booknow', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newUser)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('booking succesfully');
					e.target.reset();
				}
			});

		e.preventDefault();
	};
	const { users } = useFirebase();

	return (
		<div>
			<h1> Book Now</h1>

			<div className="container m-5 ">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<img src={singleuser.image} alt="" className="img-fluid" />
						<h1>{singleuser.name}</h1>
					</div>

					<div className="col-lg-6 col-md-12 col-sm-12">
						<form className="form-con" onSubmit={handleAddUser}>
							<input type="text" placeholder="name" value={users.displayName} ref={nameRef} /> <br />
							<input type="text" placeholder="email" value={users.email} ref={emailRef} /> <br />
							<input type="text" placeholder="phone" ref={phoneRef} /> <br />
							<input type="submit" value="Booking" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booknow;

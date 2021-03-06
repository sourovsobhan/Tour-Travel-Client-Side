import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Service from '../Service/Service';

const Services = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const imgRef = useRef();
	const handleAddUser = (e) => {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const image = imgRef.current.value;
		const newUser = { name, email, image };

		fetch('https://sleepy-taiga-52688.herokuapp.com/users', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newUser)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('user added successfully');
					e.target.reset();
				}
			});

		e.preventDefault();
	};
	//set users
	const [ users, setUsers ] = useState([]);
	useEffect(() => {
		fetch('https://sleepy-taiga-52688.herokuapp.com/users').then((res) => res.json()).then((data) => setUsers(data));
	}, []);

	

	return (
		<div>
			<h2>Services</h2>
			<form onSubmit={handleAddUser}>
				<input type="text" ref={nameRef} placeholder="Title" />
				<input type="text" ref={emailRef} placeholder="Address" />
				<input type="text" ref={emailRef} placeholder="prize" />
				<input type="text" ref={imgRef} placeholder="image-link" />
				<input type="submit" value="add" />
			</form>

			<div>
				<h1>User Available:{users.length}</h1>

				{/* 	<ul>
					{users.map((user) => (
						<li key={user._id} user={user}>
							{user.name}:: {user.email}
							<button onClick={() => handleDeleteUser(user._id)}>X</button>
							<button>Update</button>
						</li>
					))}
				</ul> */}
				<div className="container">
					<div className="row row-cols-3 gy-5">
						{users.map((user) => <Service key={user._id} user={user} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;

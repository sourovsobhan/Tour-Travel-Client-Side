import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
const AddUsers = () => {
	const nameRef = useRef();
	const emailRef = useRef();

	const handleAddUser = (e) => {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const newUser = { name, email };

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

	// delete user
	const handleDeleteUser = (id) => {
		const proceed = window.confirm('are u want to delete?');
		if (proceed) {
			const url = `https://sleepy-taiga-52688.herokuapp.com/users/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert('deleted successfully');
						const remainingUser = users.filter((user) => user._id !== id);
						setUsers(remainingUser);
					}
				});
		}
	};

	return (
		<div>
			<h2>Please Add an User</h2>
			<form onSubmit={handleAddUser}>
				<input type="text" ref={nameRef} placeholder="name" />
				<input type="email" ref={emailRef} placeholder="email" />

				<input type="submit" value="add" />
			</form>

			<div>
				<h1>User Available:{users.length}</h1>

				<ul>
					{users.map((user) => (
						<li key={user._id}>
							{user.name}:: {user.email}
							<button onClick={() => handleDeleteUser(user._id)}>X</button>
							<button>Update</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AddUsers;

import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const MyOrder = () => {
	const { users } = useAuth();
	const [ myorder, setMyorder ] = useState([]);

	useEffect(() => {
		fetch(`https://sleepy-taiga-52688.herokuapp.com/book/${users?.email}`).then((res) => res.json()).then((data) => setMyorder(data))
	}, []);
      console.log(`https://sleepy-taiga-52688.herokuapp.com/book/${users?.email}`)


	return (
		<div>
			<h1>This is my order</h1>

			{myorder.map((order) => <li>{order.name}</li>)}
		</div>
	);
};

export default MyOrder;

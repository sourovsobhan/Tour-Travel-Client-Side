import React, { useEffect, useState } from 'react';

const Manageorder = () => {

    const [ users, setUsers ] = useState([]);
    useEffect(() => {
		fetch('http://https://sleepy-taiga-52688.herokuapp.com/book').then((res) => res.json()).then((data) => setUsers(data));
	}, []);

// delete user
const handleDeleteUser = (id) => {
    const proceed = window.confirm('are u want to delete?');
    if (proceed) {
        const url = `http://https://sleepy-taiga-52688.herokuapp.com/book/${id}`;
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
        <>
        {
            users.map(user=>
            <div>   <li>{user.email}</li>
            <button className="btn btn-warning" onClick={() => handleDeleteUser(user._id)}>Delete</button>
             </div>
          )
        }
        
        </>
    );
};

export default Manageorder;

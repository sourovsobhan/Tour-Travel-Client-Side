import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css';
const Header = () => {
	const { users, logOut } = useAuth();

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light nav-color">
				<div className="container-fluid">
					<a className="logo">Travel</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/home">Home</Link>
							</li>

							<li className="nav-item">
								<Link to="/about">About</Link>
							</li>
							<li className="nav-item">
								<Link to="/gallery">Gallery</Link>
							</li>

							<li className="nav-item">
								<Link to="/contact">Contact</Link>
							</li>
     
							
							<li className="nav-item">
								<Link to="/services">services</Link>
							</li>
                            <li className="nav-item">
								<Link to="/myorder">My Order</Link>
							</li>
							<li className="nav-item">
								<Link to="/manageorder">Manage order</Link>
							</li>


							{users?.email ? (
                <div>	
                  
                  <button type="button" className="btn btn-light" onClick={logOut}>
                LogOut
              </button>
              <p>{users.displayName}</p>
              
              </div>
							

							) : (
								<li className="nav-item">
									<Link to="/login">Login</Link>
								</li>
							)}
						</ul>
						<form className="d-flex">
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
             
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;

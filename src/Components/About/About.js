import React from 'react';
import travel from '../../images/travel.jpg';
import './About.css';
const About = () => {
	return (
		<div className="about-container">
			<h1>
				About
				<span className="text-primary my-5"> Us</span>
			</h1>

			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12 ">
						<img src={travel} alt="" className="img-fluid" />
					</div>
					<div className="col-lg-6 col-12">
						<h1>Who Choose us</h1>
						<p>
							“Your true traveler finds boredom rather agreeable than painful. It is the symbol of his
							liberty-his excessive freedom. He accepts his boredom, when it comes, not merely
							philosophically, but almost with pleasure.” – Aldous Huxley
						</p>
						<p>
							“Travel makes one modest. You see what a tiny place you occupy in the world.” – Gustave
							Flaubert
						</p>
						<p>“A journey is best measured in friends, rather than miles.” – Tim Cahill</p>
						<div className="row">
							<div className="col-6">
								<button type="button" class="btn btn-warning">
									Read More
								</button>
							</div>
							<div className="col-6 ">
								<button type="button" class="btn btn-danger">
									Get In touch
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

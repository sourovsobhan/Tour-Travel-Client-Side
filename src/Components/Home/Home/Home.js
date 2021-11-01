import React from 'react';
import About from '../../About/About';
import AddTravel from '../../AddTravel/AddTravel';
import Gallery from '../../Gallery/Gallery';
import Services from '../../Services/Services';

import Banner from '../Banner/Banner';

const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Gallery />
			<Services />
		</div>
	);
};

export default Home;

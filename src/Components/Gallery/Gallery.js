import React from 'react';

import galleryl from '../../images/travel.jpg';
import gallery2 from '../../images/g-1.jpg';
import gallery3 from '../../images/g-2.jpg';
import gallery4 from '../../images/g-3.jpg';
import gallery5 from '../../images/g-4.jpg';
import gallery6 from '../../images/g-5.jpg';

const Gallery = () => {
	return (
		<div>
			<h1>Gallery</h1>

			<div className="container">
				<div className="row g-5 mb-5">
					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="card">
							<img src={gallery4} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="card">
							<img src={gallery5} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12  col-md-6 col-lg-4">
						<div className="card">
							<img src={gallery6} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="card">
							<img src={galleryl} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="card">
							<img src={gallery2} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12  col-md-6 col-lg-4">
						<div className="card">
							<img src={gallery3} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;

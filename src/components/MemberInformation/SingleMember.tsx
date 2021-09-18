import React from 'react';
import { ISingleMember } from '../../types';

const SingleMember: React.FC<ISingleMember> = ({
	id,
	name,
	birthdate,
	place_of_birth,
	role,
	height,
	weight,
	eye_color,
	hair_color,
	distinguishing_features,
	usual_spot_on_stage,
	former_band,
	img,
	position,
}) => {
	return (
		<section className={`members-info-container ${position}`}>
			<div className="members-image-container">
				<img className="members-image" src={img} alt="" />
			</div>
			<div className="members-text">
				<div className="members-left">
					<div className="members-left-text">
						<p>Name:</p>
						<br></br>
						<p>Birthdate:</p>
						<br></br>
						<p>Place of birth:</p>
						<br></br>
						<p>Role:</p>
						<br></br>
						<p>Height:</p>
						<br></br>
						<p>Weight:</p>
						<br></br>
					</div>
				</div>
				<div className="members-right">
					<div className="members-right-text">
						<p>{name} </p>
						<br></br>
						<p>{birthdate} </p>
						<br></br>
						<p>{place_of_birth}</p>
						<br></br>
						<p>{role}</p>
						<br></br>
						<p>{height}</p>
						<br></br>
						<p>{weight}</p>
						<br></br>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleMember;

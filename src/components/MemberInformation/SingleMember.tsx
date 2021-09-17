import React from 'react';
import { ISingleMember } from '../../types';

const SingleMember: React.FC<ISingleMember> = ({
	id,
	name,
	birthdate,
	nickname,
	birthplace,
	height,
	bloodtype,
	position,
	img,
}) => {
	return (
		<section className={`members-info-container ${position}`}>
			<div className="members-image-container">
				<img className="members-image" src={img} alt="" />
			</div>
			<div className="members-text">
				<div className="members-left">
					<div className="members-left-text">
						<p>Birth name:</p>
						<br></br>
						<p>Birth date:</p>
						<br></br>
						<p>Nickname:</p>
						<br></br>
						<p>Birth place:</p>
						<br></br>
						<p>Height:</p>
						<br></br>
						<p>Blood type:</p>
						<br></br>
					</div>
				</div>
				<div className="members-right">
					<div className="members-right-text">
						<p>{name} </p>
						<br></br>
						<p>{birthdate} </p>
						<br></br>
						<p>{nickname}</p>
						<br></br>
						<p>{birthplace}</p>
						<br></br>
						<p>{height}</p>
						<br></br>
						<p>{bloodtype}</p>
						<br></br>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleMember;

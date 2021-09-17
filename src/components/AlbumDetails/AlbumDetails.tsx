import React from 'react';
import { UseGlobalContext } from '../../context';
import { IAlbumData } from '../../types';
import { useParams } from 'react-router';
import uniqid from 'uniqid';

const AlbumDetails = () => {
	const { albumData } = UseGlobalContext();
	const { id } = useParams<{ id: any }>();

	return (
		<section className="detail-main">
			{albumData
				.filter((item: IAlbumData) => item.id === parseInt(id))
				.map((item: IAlbumData) => {
					return (
						<section className="detail-container" key={uniqid()}>
							<div className="detail-image-container">
								<img src={item.img} alt="" className="detail-img" />
							</div>

							<section className="detail-text">
								<div className="basic-info">
									<h2>Album name: {item.albumName}</h2>
									<h2>Rl. Date: {item.releaseDate}</h2>
								</div>

								<p className="album-text">{item.details}</p>
							</section>
						</section>
					);
				})}
		</section>
	);
};

export default AlbumDetails;

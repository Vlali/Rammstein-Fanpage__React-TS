import React from 'react';
import { ISingleSong } from '../../types';

const SingleSong: React.FC<ISingleSong> = ({
	artworkUrl100,
	trackName,
	artistName,
	previewUrl,
}) => {
	return (
		<section className="songs-inside-container">
			<div className="song-container">
				<div
					className="songs-image-container
                "
				>
					<img src={artworkUrl100} alt="" />
				</div>

				<div className="song-text-audio-container">
					<p>{trackName}</p>
					<p>{artistName}</p>
					<audio controls src={previewUrl}>
						Your browser does not support the
						<code>audio</code> element.
					</audio>
				</div>
			</div>
		</section>
	);
};

export default SingleSong;

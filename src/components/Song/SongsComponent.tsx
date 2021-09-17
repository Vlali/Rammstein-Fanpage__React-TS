import React from 'react';
import { UseGlobalContext } from '../../context';
import SingleSong from './SingleSong';
import Loading from '../Loading/Loading';

const SongsComponent: React.FC = () => {
	const { songs, loading } = UseGlobalContext();

	if (loading) {
		return <Loading />;
	}
	return (
		<section className="songs-container">
			{songs.map((item) => {
				return <SingleSong {...item} />;
			})}
		</section>
	);
};

export default SongsComponent;

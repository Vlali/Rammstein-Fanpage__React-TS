import { UseGlobalContext } from '../../context';
import SingleAlbum from './SingleAlbum';
import Loading from '../Loading/Loading';
import { IAlbumData } from '../../types';

const Albums: React.FC = () => {
	const { albumData, loading } = UseGlobalContext();

	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<section className="albums-container">
				<h1>Studio Albums</h1>
				<section className="albums">
					{albumData.map((item: IAlbumData) => {
						return <SingleAlbum key={item.id} {...item} />;
					})}
				</section>
			</section>
		</>
	);
};

export default Albums;
